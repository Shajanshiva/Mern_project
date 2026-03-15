import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import showsData from "../data/shows";
import { Link } from "react-router-dom";
const Shows = () => {
  return (
    <div
      style={{ backgroundColor: "#1a1a1a", minHeight: "100vh", color: "white" }}
    >
      <Header />

      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1 style={{ color: "red", marginBottom: "30px" }}>
          Current Movie Shows
        </h1>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {showsData.map((show) => (
            <div
              key={show.id}
              style={{
                backgroundColor: "#2d2d2d",
                borderRadius: "15px",
                padding: "15px",
                width: "280px",
                textAlign: "left",
                boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src={show.image}
                alt={show.title}
                style={{
                  width: "100%",
                  height: "350px",
                  objectFit: "contain",
                  borderRadius: "10px",
                }}
              />
              <h3 style={{ margin: "10px 0", color: "red" }}>{show.title}</h3>
              <p style={{ margin: "5px 0" }}>
                <strong>Genre:</strong> {show.genre}
              </p>
              <p style={{ margin: "5px 0" }}>
                <strong>Rating:</strong> {show.rating}/10
              </p>
              <Link to={`/theaters/${show.id}`}>
                <button
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginTop: "10px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Book Tickets
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shows;
