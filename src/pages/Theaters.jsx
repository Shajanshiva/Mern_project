import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams, useNavigate } from "react-router-dom";
import theaters from "../data/movies";
import showsData from "../data/shows";

const Theaters = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  const filteredTheaters = theaters.filter(
    (theater) => theater.movieId === Number(movieId),
  );

  const currentMovie = showsData.find(
    (show) => show.id === Number(movieId)
  );

  return (
    <div
      style={{
        backgroundColor: "#151515",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Inter, sans-serif"
      }}
    >
      <Header />

      <div style={{ padding: "50px 20px", width: "100%", maxWidth: "1100px", margin: "0 auto", flex: 1 }}>
        <h1 style={{ textAlign: "center", fontSize: "2.8rem", marginBottom: "40px", fontWeight: "bold" }}>
          Theaters Showing <span style={{ color: "#e50914" }}>{currentMovie ? currentMovie.title : "This Movie"}</span>
        </h1>

        {currentMovie && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "60px" }}>
            <div style={{ position: "relative", marginBottom: "30px" }}>
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
                boxShadow: "0 0 80px rgba(229, 9, 20, 0.5)",
                borderRadius: "15px", zIndex: 0
              }}></div>
              <img
                src={currentMovie.image}
                alt={currentMovie.title}
                style={{
                  width: "100%",
                  maxWidth: "320px",
                  height: "320px",
                  objectFit: "cover",
                  borderRadius: "15px",
                  position: "relative",
                  zIndex: 1,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.8)",
                  border: "1px solid #333"
                }}
              />
            </div>

            {/* Pills Section */}
            <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: "center" }}>
              <div style={{ padding: "8px 20px", backgroundColor: "#262626", borderRadius: "20px", fontSize: "0.85rem", color: "#ccc", border: "1px solid #333" }}>
                {currentMovie.genre || "Action / Drama"}
              </div>
              <div style={{ padding: "8px 20px", backgroundColor: "#262626", borderRadius: "20px", fontSize: "0.85rem", color: "#ccc", border: "1px solid #333" }}>
                2h 45m
              </div>
            </div>
          </div>
        )}

        {filteredTheaters.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
              gap: "25px",
              width: "100%"
            }}
          >
            {filteredTheaters.map((theater, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#1c1c1c",
                  borderRadius: "15px",
                  padding: "30px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
                  border: "1px solid #2a2a2a",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "5px" }}>
                  <h3 style={{ margin: "0", color: "#fff", fontSize: "1.5rem", fontWeight: "600" }}>
                    {theater.name}
                  </h3>
                </div>

                <p style={{ margin: "0 0 25px 0", fontSize: "0.9rem", color: "#888", display: "flex", alignItems: "center", gap: "5px" }}>
                  <span style={{ fontSize: "1rem" }}>📍</span> {theater.location}
                </p>

                <div style={{ fontSize: "0.7rem", letterSpacing: "1px", color: "#777", marginBottom: "15px", fontWeight: "bold" }}>
                  TODAY - NOV 15
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
                    gap: "15px",
                  }}
                >
                  <button
                    onClick={() => navigate(`/seats/${movieId}/${theater.id}/10:30AM`)}
                    style={{
                      padding: "12px 10px",
                      backgroundColor: "#e50914",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      fontSize: "0.85rem",
                      boxShadow: "0 4px 15px rgba(229, 9, 20, 0.3)",
                      transition: "all 0.2s ease"
                    }}
                    onMouseOver={(e) => { e.target.style.backgroundColor = "#ff0000"; e.target.style.transform = "translateY(-2px)"; }}
                    onMouseOut={(e) => { e.target.style.backgroundColor = "#e50914"; e.target.style.transform = "translateY(0)"; }}
                  >
                    10:30 AM
                  </button>
                  <button
                    onClick={() => navigate(`/seats/${movieId}/${theater.id}/02:15PM`)}
                    style={{
                      padding: "12px 10px",
                      backgroundColor: "#e50914",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      fontSize: "0.85rem",
                      boxShadow: "0 4px 15px rgba(229, 9, 20, 0.3)",
                      transition: "all 0.2s ease"
                    }}
                    onMouseOver={(e) => { e.target.style.backgroundColor = "#ff0000"; e.target.style.transform = "translateY(-2px)"; }}
                    onMouseOut={(e) => { e.target.style.backgroundColor = "#e50914"; e.target.style.transform = "translateY(0)"; }}
                  >
                    02:15 PM
                  </button>
                  <button
                    onClick={() => navigate(`/seats/${movieId}/${theater.id}/06:45PM`)}
                    style={{
                      padding: "12px 10px",
                      backgroundColor: "#e50914",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      fontSize: "0.85rem",
                      boxShadow: "0 4px 15px rgba(229, 9, 20, 0.3)",
                      transition: "all 0.2s ease"
                    }}
                    onMouseOver={(e) => { e.target.style.backgroundColor = "#ff0000"; e.target.style.transform = "translateY(-2px)"; }}
                    onMouseOut={(e) => { e.target.style.backgroundColor = "#e50914"; e.target.style.transform = "translateY(0)"; }}
                  >
                    06:45 PM
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ fontSize: "1.2rem", color: "#ccc", marginTop: "50px", textAlign: "center" }}>
            No theaters currently showing this movie.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Theaters;