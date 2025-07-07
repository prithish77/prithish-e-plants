import React, { useEffect } from 'react';
import './AboutUs.css';
import { useDispatch } from 'react-redux';
import { addItem } from './CreateSlice';

function AboutUs() {
  
  return (
    <div className="about-us-container">
      {/* <h1 className="about-us-heading">About Us</h1> */}
      <p className="about-us-description">Welcome to Prithish Plant's, where green meets serenity!</p>
      <p className="about-us-content">
      At Prithish Plants we curate a wide range of healthy, vibrant greenery—from hardy succulents and graceful orchids to statement‑making trees and bold flowering varieties—each chosen to thrive in your unique environment
      </p>
      {/* <p className="plant_logo_left"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}
      <p className="about-us-content">
        Our easy‑to‑navigate website pairs every plant with clear care guides, practical gardening tips, and expert advice, so you can help your new additions flourish with confidence. Whether you’re a lifelong gardener or just beginning your green journey, Prithish Plants is here to support you at every step.
      </p>
      <p>Backed by a team of passionate plant specialists, we inspect every specimen to ensure it meets our strict standards for quality and vitality. Browse our collection, ask us anything, and let us match you with the perfect plant for your home or office.</p>
      {/* <p className="plant_logo_right"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}

      <p className="about-us-content">
        Join our community of plant lovers and grow a greener, healthier world—starting right at your doorstep with Prithish Plants.
      </p>
    </div>
  );
}

export default AboutUs;
