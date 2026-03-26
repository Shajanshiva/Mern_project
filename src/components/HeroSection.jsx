import React from "react";
import curtains from "../assets/AIEnhancer_big-red-theatre-curtain-photog.png";

const HeroSection = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "800px",
        width: "100%",
        backgroundImage: `url(${curtains})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0.4))",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          padding: "180px 150px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontSize: "90px",
            margin: "0px",
            color: "#d90000",
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
          }}
        >
          The Grand Opera
        </h1>
        <p
          style={{
            fontSize: "20px",
            width: "550px",
            color: "#e0e0e0",
            lineHeight: "1.6",
          }}
        >
          Experience the timeless masterpiece in its most spectacular
          production yet. Winner of 7 Tony Awards including Best Musical.
        </p>
        <div style={{ display: "flex", gap: "20px" }}>
          <button
            style={{
              padding: "15px",
              borderRadius: "8px",
              width: "180px",
              backgroundColor: "#c30000",
              color: "white",
              border: "none",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Book Ticket Now
          </button>
          <button
            style={{
              borderRadius: "8px",
              width: "150px",
              backgroundColor: "rgba(0,0,0,0.6)",
              border: "1px solid #888",
              color: "white",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
