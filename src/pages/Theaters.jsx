import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import theaters from "../data/movies";
import showsData from "../data/shows";
import TheaterMovieBanner from "../components/TheaterMovieBanner";
import TheaterCard from "../components/TheaterCard";

const Theaters = () => {
  const { movieId } = useParams();

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

        <TheaterMovieBanner currentMovie={currentMovie} />

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
              <TheaterCard key={index} theater={theater} movieId={movieId} />
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