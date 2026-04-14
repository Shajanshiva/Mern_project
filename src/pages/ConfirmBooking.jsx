import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import API from "../api.js";
import BookingStepper from "../components/BookingStepper";
import BookingDetails from "../components/BookingDetails";
import "../styles/ConfirmBooking.css";

const ConfirmBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get data from Seats page
  const { showId, seats, totalPrice } = location.state || {};

  const [show, setShow] = useState(null);

  useEffect(() => {
    if (showId) {
      getShowDetails();
    }
  }, [showId]);

  const getShowDetails = async () => {
    try {
      const res = await API.get(`/shows/getshow/${showId}`);
      setShow(res.data);
    } catch (error) {
      console.log("Error fetching show details", error);
    }
  };

  if (!showId || !seats) {
    return (
      <div className="invalid-session-container">
        <h2>Invalid Booking Session</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  return (
    <div className="confirm-booking-page">
      <Header />

      <div className="confirm-booking-content">
        <BookingStepper />

        <div className="booking-card">
          <div className="card-gradient-overlay"></div>

          {/* Movie Poster */}
          <div className="movie-poster-container">
            <img
              src={
                show?.movieId?.image ||
                "https://via.placeholder.com/350x500?text=Movie+Poster"
              }
              alt={show?.movieId?.title}
            />
          </div>

          <BookingDetails
            showId={showId}
            movieTitle={show?.movieId?.title || "Loading..."}
            theaterName={show?.theaterId?.name || "Loading..."}
            time={show?.time || "..."}
            selectedSeats={seats}
            totalPrice={totalPrice}
          />
        </div>

        {/* Footer Security Badges */}
        <div className="security-badges-container">
          <div className="security-badge">
            <span>🛡️</span> SECURE CHECKOUT
          </div>
          <div className="security-badge">
            <span>🔄</span> EASY REFUNDS
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ConfirmBooking;
