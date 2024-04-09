import React from 'react'
import "./Card.css";
import Dummy from "../images/dirt.jpeg";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className='cardContainer'>
      <div className='homeImg'>
        <img className='dirtImage' src={Dummy} alt="image" />
        <Link to='/details' className='viewDetails'>View Details</Link>
      </div>
      <p className='place'>Silchar, Assam</p>
    </div>
  )
}

export default Card