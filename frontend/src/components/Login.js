import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


import axios from 'axios';
import "../Styles/AuthStyles.css"
import { useAuth } from '../context/auth';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth,setAuth] = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/login", {

        email,
        password

      });
      if (res && res.data.success) {
        
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token
        })
        localStorage.setItem("auth",JSON.stringify(res.data));
        // console.log("forwarding to homepage")
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };


  return (
    <>
      <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
            <input
              type="email"

              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"

              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className='mb-3'>
            <button type="button" className="btn btn-primary"  >
              FORGOT PASSWORD
            </button>
          </div>

          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </form>
      </div>
    </>

  )
}

export default Login;