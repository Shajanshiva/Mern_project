import React from "react";
import curtains from "../assets/AIEnhancer_big-red-theatre-curtain-photog.png";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${curtains})` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="now-showing-badge">Now Showing</div>
        
        <h1 className="hero-title">
          <span className="title-white">The Phantom of</span>
          <span className="title-red">The Grand Opera</span>
        </h1>
        
        <p className="hero-subtitle">
          Experience the timeless masterpiece in its most spectacular
          production yet. Winner of 7 Tony Awards including Best Musical.
        </p>
        
        <div className="hero-buttons">
          <button className="btn-book">Book Ticket Now</button>
          <button className="btn-trailer">Watch Trailer</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
