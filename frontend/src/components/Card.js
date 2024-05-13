import React from "react";
import "./Card.css";
// import Dummy from "../images/dirt.jpeg";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="cardContainer">
      <div className="homeImg">
        <img className="dirtImage" src={props.image[0].url} alt="" />

        <Link to="/details" className="viewDetails">
          View Details
        </Link>
      </div>
      <p className="place">
        {props.district},{props.state}
      </p>
    </div>
  );
};

export default Card;
