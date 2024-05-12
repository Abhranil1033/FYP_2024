import React from "react";
import Card from "./Card.js";
import "./Home.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Home = () => {
  const [Events, setEvents] = useState([]);

  
  const getEvents = async () => {
    try {
      const response = await axios.get("/api/v1/events");
      console.log("Response from API:", response.data); // Log the entire response
      if (response.data && response.data.events) {
        console.log("Events from API:", response.data.events); // Log the events array
        setEvents(response.data.events); // Set the events state
      } else {
        console.log("No available Events");
        toast.error("No available activities");
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      toast.error("Error fetching activities");
    }
  };
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="homeContainer">
      <div className="homeHeading">
        <div className="sideLines"></div>
        <p>Activities near You</p>
        <div className="sideLines"></div>
      </div>
      <div className="row">
      {Events?.map((e) => (
        <div className="homeCards col-md-6">
          <Card image={e.images} district={e.district} state={e.state}/>
        </div>
      ))}
      </div>


      <Button variant="contained">See All</Button>
    </div>
  );
};

export default Home;
