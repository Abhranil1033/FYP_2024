import React from "react";


const About = () => {
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
        <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <p className="text-justify mt-2 ">
         
Welcome to our platform dedicated to fostering social change through volunteerism. Here, individuals like you have the opportunity to lend their time, skills, and passion to various causes that make a meaningful difference in our communities and beyond. Whether it's supporting environmental initiatives, advocating for social justice, or assisting marginalized groups, our website provides a hub for connection and action. Through volunteering, you can be part of a collective effort to address pressing issues and create positive impact. Join us in making the world a better place, one act of service at a time.

          </p>
        </div>
      </div>
      </>
  );
};

export default About;