import React from 'react'
import "./Card.css";
import Dummy from "../images/dirt.jpeg";

const Card = () => {
  return (
    <div className='cardContainer'>
      <div className='homeImg'>
        <img className='dirtImage' src={Dummy} alt="image" />
        <p className='viewDetails'>View Details</p>
      </div>
      <p className='place'>Silchar, Assam</p>
    </div>
  )
}

export default Card