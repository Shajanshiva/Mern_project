import React from 'react';
import { useNavigate } from 'react-router-dom';

const TheaterCard = ({ theater, movieId }) => {
  const navigate = useNavigate();
  return (
    <div
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
  );
};

export default TheaterCard;
