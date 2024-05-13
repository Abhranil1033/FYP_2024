import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Details.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { toast } from 'react-hot-toast';


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

    console.log("User added to chat group:", addUserRes.data);

    // Handle success...
  } catch (error) {
    console.log(error);
    toast.error("Failed to add user to chat group");
  }
}

const Details = () => {
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
      <p className='place'>Silchar, Assam</p>
      <div className='belowSlides'>
        <div className='description'>
          <h3>DETAILS</h3>
          <p>Date : 12/05/2024</p>
          <p>Time : 12 : 00 PM</p>
        </div>
        <div className='eventDetailsButton'>
          {/* <Link className='registerLink'>VIEW ON MAP</Link>
          <Link to='/event/chat' className='registerLink'>REGISTER FOR THE EVENT</Link> */}
          <Link className='eventDetSubButton'>VIEW ON MAP</Link>
          <Link to='/event/chat' className='eventDetSubButton' onClick={addToGroup}>REGISTER</Link>
        </div>
      </div>
    </div>
  )
}

export default Details