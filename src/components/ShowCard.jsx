import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({ show }) => {
  const genres = show.genre ? show.genre.split("/") : ["Action"];
  const primaryGenre = genres[0].trim().toUpperCase();
  const secondaryGenre = genres[1]
    ? genres[1].trim().toUpperCase()
    : "DRAMA";

  return (
    <div
      style={{
        backgroundColor: "#181818",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
        border: "1px solid #262626",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease",
        cursor: "pointer",
        position: "relative",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.borderColor = "#444";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "#262626";
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "15px",
          right: "15px",
          backgroundColor: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(5px)",
          padding: "5px 12px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          fontSize: "0.85rem",
          fontWeight: "bold",
          zIndex: 2,
          color: "white",
        }}
      >
        <span style={{ color: "white", fontSize: "0.9rem" }}>★</span>{" "}
        {show.rating || "8.5"}
      </div>

      <div
        style={{
          width: "100%",
          height: "380px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "100px",
            background: "linear-gradient(to top, #181818, transparent)",
            zIndex: 1,
          }}
        ></div>
        <img
          src={show.image}
          alt={show.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s ease",
          }}
        />
      </div>

      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "15px",
          }}
        >
          <span
            style={{
              padding: "3px 8px",
              border: "1px solid rgba(229, 9, 20, 0.5)",
              color: "#e50914",
              fontSize: "0.65rem",
              fontWeight: "bold",
              letterSpacing: "1px",
              borderRadius: "4px",
            }}
          >
            {primaryGenre}
          </span>
          <span
            style={{
              color: "#777",
              fontSize: "0.65rem",
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            {secondaryGenre}
          </span>
        </div>

        <h3
          style={{
            margin: "0 0 25px 0",
            color: "white",
            fontSize: "1.4rem",
            fontWeight: "bold",
            letterSpacing: "0.5px",
          }}
        >
          {show.title}
        </h3>

        <div style={{ marginTop: "auto" }}>
          <Link
            to={`/theaters/${show.id}`}
            style={{ textDecoration: "none" }}
          >
            <button
              style={{
                width: "100%",
                padding: "15px",
                backgroundColor: "#e50914",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "0.95rem",
                letterSpacing: "0.5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 15px rgba(229, 9, 20, 0.4)",
                transition: "all 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#ff0000";
                e.target.style.transform = "scale(1.02)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#e50914";
                e.target.style.transform = "scale(1)";
              }}
            >
              <span style={{ fontSize: "1.1rem" }}>🎟</span> Book
              Tickets
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
