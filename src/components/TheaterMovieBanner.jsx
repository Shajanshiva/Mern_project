import React from 'react';

const TheaterMovieBanner = ({ currentMovie }) => {
  if (!currentMovie) return null;
  return (
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
  );
};

export default TheaterMovieBanner;
