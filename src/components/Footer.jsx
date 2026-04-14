import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr className="footer-divider" />

      <div className="footer-content">
        {/* Branding Column */}
        <div className="footer-column branding-column">
          <h2 className="branding-title">StageSeat</h2>
          <p className="branding-text">
            The premium theatre experience. Book tickets for the best shows in
            town with ease and eloquence.
          </p>
        </div>

        {/* Explore Column */}
        <div className="footer-column">
          <h3>Explore</h3>
          <p className="footer-link">Featured Shows</p>
          <p className="footer-link">Popular Theaters</p>
          <p className="footer-link">Gift Cards</p>
          <p className="footer-link">Offers</p>
        </div>

        {/* Support Column */}
        <div className="footer-column">
          <h3>Support</h3>
          <p className="footer-link">Help Center</p>
          <p className="footer-link">Terms of Service</p>
          <p className="footer-link">Privacy Policy</p>
          <p className="footer-link">Contact Us</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 StageSeat. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
