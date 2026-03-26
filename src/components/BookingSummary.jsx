import React from 'react';

const BookingSummary = ({ selectedSeats, calculateTotal, handleBooking }) => {
  if (selectedSeats.length === 0) return null;

  return (
    <div
      style={{
        backgroundColor: "#2d2d2d",
        padding: "20px",
        borderRadius: "15px",
        textAlign: "center",
        width: "100%",
        maxWidth: "400px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
      }}
    >
      <h3 style={{ margin: "0 0 10px 0", color: "#fff" }}>
        Booking Summary
      </h3>
      <p style={{ margin: "5px 0", color: "#ccc" }}>
        Selected Seats:{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>
          {selectedSeats.join(", ")}
        </span>
      </p>
      <p style={{ margin: "5px 0 20px 0", color: "#ccc" }}>
        Total Price:{" "}
        <span
          style={{ color: "red", fontWeight: "bold", fontSize: "1.2rem" }}
        >
          ₹{calculateTotal()}
        </span>
      </p>

      <button
        onClick={handleBooking}
        style={{
          padding: "12px 30px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "1.1rem",
          width: "100%",
          transition: "background-color 0.2s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#cc0000")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "red")}
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingSummary;
