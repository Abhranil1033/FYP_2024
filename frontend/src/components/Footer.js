import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer footerCont'>
      <h1 className='text-center'>All right reserved &copy; Gaurav</h1>
      <div>
        <p className='text-center mt-3'>
          <Link to="/about">About </Link>
          |<Link to="/contact"> Contact </Link>
          
        </p>
      </div>
    </div>
  );
};

export default Footer