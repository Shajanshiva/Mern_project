import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingDetails = ({ movieTitle, theaterName, time, selectedSeats, totalPrice }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        flex: "1 1 450px",
        display: "flex",
        flexDirection: "column",
        padding: "50px",
        justifyContent: "center",
        zIndex: 1,
      }}
    >
      <div
        style={{
          fontSize: "0.75rem",
          letterSpacing: "2px",
          color: "#888",
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        BOOKING CONFIRMATION
      </div>
      <h2
        style={{
          fontSize: "3rem",
          margin: "0",
          color: "white",
          fontWeight: "800",
          letterSpacing: "-1px",
        }}
      >
        {movieTitle}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "0.7rem",
              letterSpacing: "1px",
              color: "#888",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            CINEMA
          </div>
          <div
            style={{
              fontSize: "1.2rem",
              fontWeight: "500",
              color: "#ddd",
            }}
          >
            {theaterName}
          </div>
        </div>
        <div>
          <div
            style={{
              fontSize: "0.7rem",
              letterSpacing: "1px",
              color: "#888",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            SHOWTIME
          </div>
          <div
            style={{
              fontSize: "1.2rem",
              fontWeight: "500",
              color: "#ddd",
            }}
          >
            {time}
          </div>
        </div>
        <div>
          <div
            style={{
              fontSize: "0.7rem",
              letterSpacing: "1px",
              color: "#888",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            TICKETS
          </div>
          <div
            style={{
              fontSize: "1.2rem",
              fontWeight: "500",
              color: "#ddd",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ color: "#e50914", fontSize: "1rem" }}>🎟️</span>{" "}
            {selectedSeats.length} Persons
          </div>
        </div>
        <div>
          <div
            style={{
              fontSize: "0.7rem",
              letterSpacing: "1px",
              color: "#888",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            SEATS
          </div>
          <div
            style={{
              fontSize: "1.2rem",
              fontWeight: "500",
              color: "#ddd",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ color: "#e50914", fontSize: "1rem" }}>💺</span>{" "}
            {selectedSeats.join(", ")}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#262626",
          padding: "25px",
          borderRadius: "10px",
          marginBottom: "35px",
          boxShadow: "inset 0 2px 10px rgba(0,0,0,0.2)",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "0.7rem",
              letterSpacing: "1px",
              color: "#888",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            TOTAL PAYABLE
          </div>
          <div
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#fff",
              letterSpacing: "-1px",
            }}
          >
            <span style={{ fontSize: "1.5rem", color: "#aaa" }}>₹</span>{" "}
            {totalPrice}
          </div>
        </div>
        <div
          style={{
            textAlign: "right",
            fontSize: "0.8rem",
            color: "#888",
          }}
        >
          <div style={{ marginBottom: "3px" }}>All taxes included</div>
          <div style={{ color: "#5c7cfa" }}>Final stage</div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "20px" }}>
        <button
          onClick={() => {
            alert("Payment Successful! Your tickets are booked.");
            navigate("/index");
          }}
          style={{
            flex: 1,
            padding: "18px",
            backgroundColor: "#d10000",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "bold",
            letterSpacing: "1px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            transition: "all 0.2s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#ff0000";
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 5px 15px rgba(229, 9, 20, 0.4)";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#d10000";
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "none";
          }}
        >
          PROCEED TO PAY <span style={{ fontSize: "1.2rem" }}>→</span>
        </button>
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: "18px 40px",
            backgroundColor: "transparent",
            color: "#ccc",
            border: "1px solid #444",
            borderRadius: "8px",
            fontSize: "0.9rem",
            fontWeight: "bold",
            letterSpacing: "1px",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.color = "#fff";
            e.target.style.borderColor = "#888";
          }}
          onMouseOut={(e) => {
            e.target.style.color = "#ccc";
            e.target.style.borderColor = "#444";
          }}
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default BookingDetails;
