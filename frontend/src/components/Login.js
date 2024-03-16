import React,{useState} from 'react'
import { json, useNavigate, useLocation  } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import "../Styles/AuthStyles.css"


const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        
        email,
        password
       
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate( "/");
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
              onChange={(e)=>{setEmail(e.target.value)}}
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
              onChange={(e)=>{setPassword(e.target.password)}}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className='mb-3'>
          <button type="submit" className="btn btn-primary"  >
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