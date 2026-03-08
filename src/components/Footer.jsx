import React from "react";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#121212", color: "white", padding: "40px 0px" }}>
      <hr style={{ border: "0.5px solid rgba(255, 255, 255, 0.1)", marginBottom: "30px", margin: "0 40px" }} />

      <div style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        flexWrap: "wrap",
        padding: "0 20px"
      }}>
        {/* Branding Column */}
        <div style={{ width: "300px", marginBottom: "30px" }}>
          <h2 style={{ color: "red", marginBottom: "15px" }}>StageSeat</h2>
          <p style={{ color: "lightgray", lineHeight: "1.6" }}>
            The premium theatre experience. Book tickets for the best shows in
            town with ease and eloquence.
          </p>
        </div>

        {/* Explore Column */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ color: "white", marginBottom: "15px" }}>Explore</h3>
          <p style={{ color: "lightgray", margin: "8px 0", cursor: 'pointer' }}>Featured Shows</p>
          <p style={{ color: "lightgray", margin: "8px 0", cursor: 'pointer' }}>Popular Theaters</p>
          <p style={{ color: "lightgray", margin: "8px 0", cursor: 'pointer' }}>Gift Cards</p>
          <p style={{ color: "lightgray", margin: "8px 0", cursor: 'pointer' }}>Offers</p>
        </div>

        {/* Support Column */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ color: "white", marginBottom: "15px" }}>Support</h3>
          <p style={{ color: "lightgray", margin: "8px 0", cursor: 'pointer' }}>Help Center</p>
          <p style={{ color: "lightgray", margin: "8px 0", cursor: 'pointer' }}>Terms of Service</p>
          <p style={{ color: "lightgray", margin: "8px 0", cursor: 'pointer' }}>Privacy Policy</p>
          <p style={{ color: "lightgray", margin: "8px 0", cursor: 'pointer' }}>Contact Us</p>
        </div>
      </div>

      <div style={{
        textAlign: "center",
        marginTop: "40px",
        paddingTop: "20px",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        color: "gray"
      }}>
        <p>© 2026 StageSeat. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
