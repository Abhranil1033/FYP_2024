import React from "react";
import Card from "./Card.js";
import "./Home.css";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeHeading">
        <div className="sideLines"></div>
        <p>Activities near You</p>
        <div className="sideLines"></div>
      </div>
      <div className="homeCards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Button variant="contained">See All</Button>
    </div>
  );
};

export default Home;
