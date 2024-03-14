import React from 'react'
import "./Card.css";
import Dummy from "../images/dirt.jpeg";

const Card = () => {
  return (
    <div className='cardContainer'>
        <img className='dirtImage' src={Dummy} alt="image"/>
        <div className='cardDetails'>
            
        </div>
    </div>
  )
}

export default Card