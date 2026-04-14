import React from "react";
import "../styles/BookingSummary.css";

const BookingSummary = ({ selectedSeats, calculateTotal, handleBooking }) => {
  if (selectedSeats.length === 0) return null;

  return (
    <div className="booking-summary-container">
      <h3 className="booking-summary-title">Booking Summary</h3>
      <p className="booking-summary-text">
        Selected Seats:{" "}
        <span className="selected-seats-list">{selectedSeats.join(", ")}</span>
      </p>
      <p className="total-price-text">
        Total Price:{" "}
        <span className="total-price-value">₹{calculateTotal()}</span>
      </p>

      <button onClick={handleBooking} className="confirm-booking-btn">
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingSummary;
