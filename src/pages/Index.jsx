import React from "react";
import curtains from "../assets/AIEnhancer_big-red-theatre-curtain-photog.png";

const Index = () => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          height: "800px",
          backgroundImage: `url(${curtains})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
                  color: "white",
                // width: "1500px"
          
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
            width: "700px",
            padding: "140px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            paddingLeft: "240px",
          }}
        >
          <span
            style={{
              border: "solid 1px orange",
              borderRadius: "20px",
              padding: "10px",
              color: "orange",
              width: "95px",
            }}
          >
            Now Showing
          </span>

          <h1 style={{ fontSize: "90px", margin: "0px" }}>The Phantom of</h1>
          <h1 style={{ fontSize: "90px", margin: "0px", color: "red" }}>
            The Grand Opera
          </h1>
          <p style={{ fontSize: "20px", width: "500px" }}>
            Experience the timeless masterpiece in its most spectacular
            production yet. Winner of 7 Tony Awards including Best Musical.
          </p>
          <div style={{ display: "flex", gap: "25px" }}>
            <button
              style={{
                padding: "15px",
                borderRadius: "10px",
                width: "180px",
                backgroundColor: "red",
                color: "white",
                border: "none",
              }}
            >
              Book Ticket Now
            </button>
            <button
              style={{
                borderRadius: "10px",
                width: "130px",
                backgroundColor: "black",
                border: "white solid 1px",
                color: "white",
              }}
            >
              Watch Trailer
            </button>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "black", height: "700px", width: "1312px" , padding:"80px", paddingLeft:"60"}}
      >
        <div style={{ color: "orange" }}>Top Picks </div>
        <h1 style={{ color: "white" }}>Trending Shows</h1>
      </div>
    </div>
  );
};

export default Index;
