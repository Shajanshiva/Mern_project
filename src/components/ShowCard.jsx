import React from "react";
import { Link } from "react-router-dom";
import "../styles/ShowCard.css";

const ShowCard = ({ show }) => {
  const genres = show.genre ? show.genre.split("/") : ["Action"];
  const primaryGenre = genres[0].trim().toUpperCase();
  const secondaryGenre = genres[1]
    ? genres[1].trim().toUpperCase()
    : "DRAMA";

  return (
    <div className="show-card">
      <div className="show-rating-badge">
        <span>★</span> {show.rating || "8.5"}
      </div>

      <div className="show-image-wrapper">
        <div className="show-image-gradient"></div>
        <img src={show.image} alt={show.title} className="show-image" />
      </div>

      <div className="show-card-body">
        <div className="show-genres">
          <span className="genre-primary">{primaryGenre}</span>
          <span className="genre-secondary">{secondaryGenre}</span>
        </div>

        <h3 className="show-title">{show.title}</h3>

        <div className="book-btn-wrapper">
          <Link
            to={`/theaters/${show._id}`}
            style={{ textDecoration: "none" }}
          >
            <button className="book-btn">
              <span>🎟</span> Book Tickets
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
