import React from "react";
import "./Profile.css";
// import User from "../images/user.jpg";
import { useAuth } from "../context/auth";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";
import { useEffect } from "react";

const Profile = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [auth, setAuth] = useAuth();

  const setProfileInfo = () => {
    const phone = auth.user.phone;
    const email = auth.user.email;
    const name = auth.user.name;
    setName(name);
    setEmail(email);
    setPhone(phone);
  }
  useEffect(() => {
    setProfileInfo();
  },);
  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col  col-lg-6 mb-4 mb-lg-0">
              <div className="row g-0 carstl">
                <div
                  className="col-md-4 gradient-custom text-center text-black"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                  }}
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    alt="Avatar"
                    className="img-fluid my-5"
                    style={{ width: 80 }}
                  />
                  <h5>{Name}</h5>

                  <i className="far fa-edit mb-5" />
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <h4>Information</h4>
                    <hr className="mt-0 mb-4" />
                    <div className="col pt-1">
                      <div className="col-6 mb-3">
                        <h6>Email</h6>
                        <p className="text-muted">{Email}</p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Phone</h6>
                        <p className="text-muted">{Phone}</p>
                      </div>

                      <div className="row pt-1 editDiv">
                        <div>
                          <button className="editProfileButton">
                            Edit Profile
                          </button>
                        </div>
                        <div className="col pt-1">
                          <Link>
                            <TwitterIcon />
                          </Link>
                          <Link>
                            <FacebookIcon />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
