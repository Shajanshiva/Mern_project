import React from "react";
import curtains from "../assets/AIEnhancer_big-red-theatre-curtain-photog.png";
import movies from "../data/indexdata";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div>
      <Header/>
      <div style={{ width: "100%", margin: "0", padding: "0" }}>
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

            <h1 style={{ fontSize: "75px", margin: "0px" }}>The Phantom of </h1>
            <h1 style={{ fontSize: "80px", margin: "0px", color: "red" }}>
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
        <div>
          <div
            style={{
              backgroundColor: "black",
              width: "100%",
              padding: "80px 60px 40px 60px",
              boxSizing: "border-box",
            }}
          >
            <div style={{ color: "orange" }}>Top Picks </div>
            <h1 style={{ color: "white" }}>Trending Shows</h1>
          </div>
          <div
            style={{
              backgroundColor: "black",
              padding: "0 60px 40px 60px",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            {movies.map((movie) => {
              return (
                <div
                  key={movie.id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "15px",
                    cursor: "pointer",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <img
                    src={movie.image}
                    alt={movie.title}
                    style={{
                      height: "350px",
                      objectFit: "contain",
                      borderRadius: "10px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                    }}
                  />
                  <div
                    style={{
                      color: "white",
                      fontSize: "19px",
                      fontWeight: "600",
                      textAlign: "center",
                    }}
                  >
                    {movie.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Index;
