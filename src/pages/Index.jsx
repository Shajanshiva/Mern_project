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
            <h1 style={{ fontSize: "90px", margin: "0px", color: "#d90000", fontFamily: "Georgia, 'Times New Roman', Times, serif" }}>
              The Grand Opera
            </h1>
            <p style={{ fontSize: "20px", width: "550px", color: "#e0e0e0", lineHeight: "1.6" }}>
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
        <div>
          <div
            style={{
              backgroundColor: "black",
              width: "100%",
              padding: "80px 150px 40px 150px",
              boxSizing: "border-box",
            }}
          >
            <div style={{ color: "#d49a00", fontSize: "15px", fontWeight: "bold", marginBottom: "15px", fontFamily: "Georgia, 'Times New Roman', Times, serif" }}>Top Picks</div>
            <h1 style={{ color: "white", fontSize: "40px", margin: 0, fontFamily: "Georgia, 'Times New Roman', Times, serif" }}>Trending Shows</h1>
          </div>
          <div
            style={{
              backgroundColor: "black",
              padding: "0 150px 80px 150px",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "30px",
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
