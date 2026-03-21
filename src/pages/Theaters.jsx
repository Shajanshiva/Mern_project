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
        backgroundColor: "#1a1a1a",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />

      <div style={{ padding: "40px", textAlign: "center", flex: 1 }}>
        <h1 style={{ color: "red", marginBottom: "20px" }}>
          Theaters Showing {currentMovie ? currentMovie.title : "This Movie"}
        </h1>

        {currentMovie && (
          <img
            src={currentMovie.image}
            alt={currentMovie.title}
            style={{
              width: "100%",
              maxWidth: "350px",
              height: "350px",
              objectFit: "contain",
              borderRadius: "15px",
              marginBottom: "40px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.4)"
            }}
          />
        )}

        {filteredTheaters.length > 0 ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            {filteredTheaters.map((theater, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#2d2d2d",
                  borderRadius: "15px",
                  padding: "20px",
                  width: "300px",
                  textAlign: "center",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
                }}
              >
                <h3 style={{ margin: "10px 0", color: "red", fontSize: "1.5rem" }}>
                  {theater.name}
                </h3>
                <p style={{ margin: "10px 0", fontSize: "1.2rem", color: "#ccc" }}>
                  {theater.location}
                </p>
                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    onClick={() => navigate(`/seats/${movieId}/${theater.id}/10:00AM`)}
                    style={{
                      padding: "10px 15px",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    10:00 AM
                  </button>
                  <button
                    onClick={() => navigate(`/seats/${movieId}/${theater.id}/1:30PM`)}
                    style={{
                      padding: "10px 15px",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    1:30 PM
                  </button>
                  <button
                    onClick={() => navigate(`/seats/${movieId}/${theater.id}/7:00PM`)}
                    style={{
                      padding: "10px 15px",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    7:00 PM
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ fontSize: "1.2rem", color: "#ccc", marginTop: "50px" }}>
            No theaters currently showing this movie.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Theaters;