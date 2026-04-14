import React, { useState, useEffect } from "react";
import API from "../api.js";
import { useNavigate } from "react-router-dom";
import "../styles/TrendingShows.css";

const TrendingShows = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const res = await API.get("/movies");
    setMovies(res.data.slice(0, 5));
  };
  return (
    <div>
      <div className="trending-header">
        <div className="trending-label">Top Picks</div>
        <h1 className="trending-title">Trending Shows</h1>
      </div>
      <div className="trending-grid">
        {movies.map((movie) => {
          return (
            <div
              key={movie._id}
              onClick={() => navigate(`/theaters/${movie._id}`)}
              className="trending-card"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="trending-movie-img"
              />
              <div className="trending-movie-title">{movie.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingShows;
