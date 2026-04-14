import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TheaterCard.css";

const TheaterCard = ({ theater, shows }) => {
  const navigate = useNavigate();

  return (
    <div className="theater-card">
      <div className="theater-card-header">
        <h1 className="theater-name">{theater.name}</h1>
      </div>

      <p className="theater-location">
        <span>📍</span> {theater.location}
      </p>

      <div className="show-date-label">{shows[0]?.date || "TODAY"}</div>

      <div className="showtimes-grid">
        {shows.slice(0, 3).map((show) => (
          <button
            key={show._id}
            onClick={() => navigate(`/seats/${show._id}`)}
            className="showtime-btn"
          >
            {show.time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TheaterCard;
