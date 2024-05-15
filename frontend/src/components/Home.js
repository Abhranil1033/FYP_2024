import React from "react";
import Card from "./Card.js";
import "./Home.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Pagination from '@mui/material/Pagination';


const Home = () => {
  const [Events, setEvents] = useState([]);
  const [total,setTotal] = useState(0);
  
  const getEvents = async (currentPage) => {
    try {
      const response = await axios.get(`/api/v1/events?page=${currentPage}`);
      console.log("Response from API:", response.data); // Log the entire response
      if (response.data && response.data.events) {
        console.log("Events from API:", response.data.events); // Log the events array
        setEvents(response.data.events); // Set the events state
        setTotal(response.data.totalItems)
      } else {
        console.log("No available Events");
        toast.error("No available activities");
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      toast.error("Error fetching activities");
    }
  };

  const [currentPage, setCurrentPage] = useState(1);

  const setCurrentPageNumber = (e, value) => {
    setCurrentPage(value);
  }


  const paginationVisible = total > 0;

  useEffect(() => {
    getEvents(currentPage);
  }, [currentPage]);

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
          <Card image={e.images} district={e.district} state={e.state} id={e._id}/>
        </div>
      ))}
      </div>

      {paginationVisible && (
              <Pagination
                count={Math.ceil(total / 8)}
                size="large"
                page={currentPage}
                variant="outlined"
                shape="rounded"
                onChange={setCurrentPageNumber}
              />
            )}
    </div>
  );
};

export default Home;
