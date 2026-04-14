import React from "react";
import API from "../api.js"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import movies from "../data/indexdata";

const TrendingShows = () => {
  const [movies, setMovies] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchMovies()
  }, [])
  
  const fetchMovies = async () => {
    const res = await API.get("/movies");
    setMovies(res.data.slice(0, 5))
    
  }
  return (
    <div>
      <div
        style={{
          backgroundColor: "black",
          width: "100%",
          padding: "80px 150px 40px 150px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            color: "#d49a00",
            fontSize: "15px",
            fontWeight: "bold",
            marginBottom: "15px",
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
          }}
        >
          Top Picks
        </div>
        <h1
          style={{
            color: "white",
            fontSize: "40px",
            margin: 0,
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
          }}
        >
          Trending Shows
        </h1>
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
              onClick={() => navigate(`/theaters/${movie.id}`)}
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
  );
};

export default TrendingShows;
