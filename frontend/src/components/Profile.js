import React from 'react';
import './Profile.css';
import User from "../images/user.jpg"

const Profile = () => {
  return (
    <div className='profileContainer'>
        <div className='profileImg'>
            <img src={User}></img>
        </div>
        <div className='profileDetails'>
            <p>Name</p>
            <p>Age</p>
            <p>Residence</p>
            <p>Joined</p>
        </div>
    </div>
  )
}

export default Profile