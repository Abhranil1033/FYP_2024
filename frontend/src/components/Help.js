import React from "react";
import "./Help.css"

import { BiPhoneCall,BiMailSend } from "react-icons/bi";
const Help = () => {
  return (
    <>
      <div className="row contactus  ">
        <div className="col-md-6 ">
          <img
            src="./img/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6 text">
        <h5 className="bg-dark p-2 text-white text-center">For Help on queries</h5>
        <BiMailSend /> : www.help@cleansweep.com
         
         <h5 className="fonts">or</h5>
         
         <BiPhoneCall /> : 012-3456789

        </div>
      </div>
      </>
  );
};

export default Help;