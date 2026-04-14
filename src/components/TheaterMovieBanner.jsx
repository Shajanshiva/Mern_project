import React from "react";
import "../styles/TheaterMovieBanner.css";

const TheaterMovieBanner = ({ currentMovie }) => {
  if (!currentMovie) return null;
  return (
    <div className="banner-container">
      <div className="banner-poster-wrapper">
        <div className="banner-glow"></div>
        <img
          src={currentMovie.image || currentMovie.poster}
          alt={currentMovie.title}
          className="banner-poster"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/320x450?text=No+Image";
          }}
        />
      </div>

      <h2 className="banner-title">{currentMovie.title}</h2>

      <div className="banner-pills">
        <div className="banner-pill">
          {currentMovie.genre || "Action / Drama"}
        </div>
        <div className="banner-pill">⭐ {currentMovie.rating || "8.5"}</div>
      </div>
    </div>
  );
};

export default TheaterMovieBanner;
