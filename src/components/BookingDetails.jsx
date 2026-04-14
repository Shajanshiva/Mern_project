import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api.js";
import "../styles/BookingDetails.css";

const BookingDetails = ({
  showId,
  movieTitle,
  theaterName,
  time,
  selectedSeats,
  totalPrice,
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleConfirmBooking = async () => {
    try {
      setLoading(true);
      const res = await API.get("/users/profile"); // Checking if logged in

      const bookingData = {
        showId,
        seats: selectedSeats,
        totalPrice,
      };

      const response = await API.post("/bookings/book", bookingData);

      if (response.data.message === "Booking successful") {
        alert("Success! Your tickets have been booked.");
        navigate("/shows"); // Go back to movies page
      } else {
        alert(response.data.message || "Booking failed. Please try again.");
      }
    } catch (error) {
      console.log("Booking error", error);
      alert("Please login to book tickets!");
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-details-container">
      <div className="booking-details-label">BOOKING CONFIRMATION</div>
      <h2 className="booking-details-title">{movieTitle}</h2>

      <div className="booking-info-grid">
        <div>
          <div className="info-item-label">CINEMA</div>
          <div className="info-item-value">{theaterName}</div>
        </div>
        <div>
          <div className="info-item-label">SHOWTIME</div>
          <div className="info-item-value">{time}</div>
        </div>
        <div>
          <div className="info-item-label">TICKETS</div>
          <div className="info-item-value with-icon">
            <span>🎟️</span> {selectedSeats?.length || 0} Persons
          </div>
        </div>
        <div>
          <div className="info-item-label">SEATS</div>
          <div className="info-item-value with-icon">
            <span>💺</span> {selectedSeats ? selectedSeats.join(", ") : "None"}
          </div>
        </div>
      </div>

      <div className="total-payable-container">
        <div>
          <div className="total-payable-label">TOTAL PAYABLE</div>
          <div className="total-payable-value">
            <span>₹</span> {totalPrice}
          </div>
        </div>
        <div className="payable-status">
          <div style={{ marginBottom: "3px" }}>All taxes included</div>
          <div className="highlight">Final stage</div>
        </div>
      </div>

      <div className="booking-actions">
        <button
          onClick={handleConfirmBooking}
          disabled={loading}
          className="btn-proceed"
        >
          {loading ? "PROCESSING..." : "PROCEED TO PAY"}{" "}
          <span style={{ fontSize: "1.2rem" }}>→</span>
        </button>
        <button
          onClick={() => navigate(-1)}
          disabled={loading}
          className="btn-cancel"
        >
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default BookingDetails; 
