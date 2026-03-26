import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import showsData from "../data/shows";
import theaters from "../data/movies";
import BookingStepper from "../components/BookingStepper";
import BookingDetails from "../components/BookingDetails";

const ConfirmBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { movieId, theaterId, time, selectedSeats, totalPrice } =
    location.state || {};

  if (!movieId || !selectedSeats) {
    return (
      <div
        style={{
          backgroundColor: "#1a1a1a",
          minHeight: "100vh",
          color: "white",
          textAlign: "center",
          padding: "50px",
        }}
      >
        <h2>Invalid Booking Session</h2>
        <button
          onClick={() => navigate("/")}
          style={{ padding: "10px 20px", marginTop: "20px", cursor: "pointer" }}
        >
          Go Home
        </button>
      </div>
    );
  }

  const movie = showsData.find((m) => m.id === Number(movieId));
  const theater = theaters.find((t) => t.id === Number(theaterId));

  const movieTitle = movie ? movie.title : "Unknown Movie";
  const theaterName = theater ? theater.name : "Unknown Theater";
  const poster = movie ? movie.image : null;

  return (
    <div
      style={{
        backgroundColor: "#111",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
      }}
    >
      <Header />

      <div
        style={{
          padding: "40px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <BookingStepper />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            backgroundColor: "#1c1c1c",
            borderRadius: "15px",
            boxShadow: "0 15px 35px rgba(0,0,0,0.6)",

            maxWidth: "950px",
            width: "100%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Add a subtle red gradient purely for aesthetics on the right side */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "300px",
              height: "100%",
              background:
                "radial-gradient(circle at top right, rgba(229, 9, 20, 0.05), transparent 70%)",
              pointerEvents: "none",
            }}
          ></div>

          {/* Movie Poster */}
          {poster && (
            <div style={{ flex: "1 1 350px" }}>
              <img
                src={poster}
                alt={movieTitle}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          )}

          <BookingDetails
            movieTitle={movieTitle}
            theaterName={theaterName}
            time={time}
            selectedSeats={selectedSeats}
            totalPrice={totalPrice}
          />
        </div>

        {/* Footer Security Badges */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            marginTop: "40px",
            fontSize: "0.75rem",
            letterSpacing: "1px",
            color: "#666",
            fontWeight: "bold",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "1rem" }}>🛡️</span> SECURE CHECKOUT
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "1rem" }}>🔄</span> EASY REFUNDS
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ConfirmBooking;
