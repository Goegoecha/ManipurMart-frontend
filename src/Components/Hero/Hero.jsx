import React from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero-1.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Welcome to</h2>
        <p>ManipurMart</p>
        <div>
          <p>Elevate Your</p>
          <p>Shopping Experience</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero