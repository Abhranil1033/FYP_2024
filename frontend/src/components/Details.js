import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Details.css';
import { Link } from "react-router-dom";

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
          <p className='detailsText'>eurxxqnitcoiywbvukwycthiwxhnglqerkgchrgjqexhrlkjb ljlgbecnhrlxqmihfincgrlnkejrhxfq rfguecgnwxlezhf lrugecxrukhze;lxjhckruhkjerfnklrehcguwhnxj;lrjj</p>
          <p>Date : 12/05/2024</p>
          <p>Time : 12 : 00 PM</p>
        </div>
        <div className='detailsButton'>
          <Link className='registerLink'>VIEW ON MAP</Link>
          <Link to='/event/chat' className='registerLink'>REGISTER FOR THE EVENT</Link>
        </div>
      </div>
    </div>
  )
}

export default Details