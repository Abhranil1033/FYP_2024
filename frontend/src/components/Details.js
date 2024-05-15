import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Details.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { toast } from 'react-hot-toast';
import Loader from '../components/Loader/Loader.js';

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}

const slideImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Slide 3'
  },
];

const addToGroup = async (e) => {
  e.preventDefault();

  try {
    // Retrieve the stored chat ID and user ID
    const storedAuth = JSON.parse(localStorage.getItem("auth"));
    const token = storedAuth.token;
    const decodedToken = jwtDecode(token);
    const userId = decodedToken._id;

    const storedChatId = localStorage.getItem("chatId");

    if (!storedChatId) {
      throw new Error("Chat ID not found");
    }

    // Make a POST request to the backend endpoint to add the user to the chat group
    const addUserRes = await axios.put("/api/v1/chat/add", {
      chatId: storedChatId,
      userId: userId
    });
    toast.success("User registered for the event");
    console.log("User added to chat group:", addUserRes.data);

  } catch (error) {
    console.log(error);
    toast.error("Failed to add user to chat group");
  }
}

const Details = () => {
  const params = useParams();
  const [eventDetails, seteventDetails] = useState(null);
  const eventID = params.id;

  const getEventDetails = async (eventID) => {
    try {
      const details = await axios.get(`/api/v1/events/${eventID}`);
      if (details && details.data.event) {
        seteventDetails(details.data.event);
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
    getEventDetails(eventID);
  }, [eventID]);

  if(!eventDetails) {
    // Render a loading indicator or some placeholder content while data is being fetched
    return <Loader />;
  }

  //converting date string to a readable format
  const dateString = eventDetails.date;
  const dateObject = new Date(dateString); // Parse the date string
  const year = dateObject.getFullYear(); // Get the year (e.g., 2024)
  const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Get the month (0-indexed, so add 1), padStart ensures 2 digits
  const date = String(dateObject.getDate()).padStart(2, '0'); // Get the date, padStart ensures 2 digits
  const formattedDate = `${date}-${month}-${year}`; // Concatenate year, month, and date with dashes

  //converting time string to a readable format
  const timeString = "2024-05-03T06:42:41.383Z"; // Sample time string
  const timeObject = new Date(timeString); // Parse the time string
  // Get hours and minutes
  const hours = timeObject.getHours();
  const minutes = String(timeObject.getMinutes()).padStart(2, '0'); // Ensure 2 digits
  // Convert 24-hour format to 12-hour format with AM/PM notation
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12; // Convert 0 to 12
  const formattedTime = `${formattedHours}:${minutes} ${ampm}`; // Concatenate hours, minutes, and AM/PM


  return (
    <div className='slide-container'>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
      <p className='place'>{eventDetails.district}, {eventDetails.state}</p>
      <div className='belowSlides'>
        <div className='description'>
          <h3>DETAILS</h3>
          <p>Date : {formattedDate}</p>
          <p>Time : {formattedTime}</p>
        </div>
        <div className='eventDetailsButton'>
          <Link to={`/event/${eventID}/map`} className='eventDetSubButton'>VIEW ON MAP</Link>
          <Link to='/event/chat' className='eventDetSubButton' onClick={addToGroup}>REGISTER</Link>
        </div>
      </div>
    </div>
  )
}

export default Details;
