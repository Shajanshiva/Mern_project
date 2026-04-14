import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api.js";
import SeatGrid from "../components/SeatGrid";
import BookingSummary from "../components/BookingSummary";
import "../styles/Seats.css";

const Seats = () => {
  const navigate = useNavigate();
  const { showId } = useParams();

  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [show, setShow] = useState(null);

  useEffect(() => {
    getSeats();
    getShowDetails();
  }, []);

  const getSeats = async () => {
    try {
      const res = await API.get(`/seats/${showId}`);
      setSeats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getShowDetails = async () => {
    try {
      const res = await API.get(`/shows/getshow/${showId}`);
      setShow(res.data);
    } catch (error) {
      console.log("Error fetching show details", error);
    }
  };

  const toggleSeat = (seatNumber) => {
    const seat = seats.find((s) => s.seatNumber === seatNumber);

    if (seat.isBooked) return;

    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const calculateTotal = () => {
    const ticketPrice = show ? show.price : 150;
    return selectedSeats.length * ticketPrice;
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }
    navigate("/confirm-booking", {
      state: {
        showId,
        seats: selectedSeats,
        totalPrice: calculateTotal(),
      },
    });
  };

  const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const occupiedSeats = seats
    .filter((seat) => seat.isBooked)
    .map((seat) => seat.seatNumber);

  return (
    <div className="seats-page">
      <Header />

      <div className="seats-container">
        <h1 className="seats-title">Select Your Seats</h1>

        <div className="show-info">
          <p>
            Movie:{" "}
            <span className="label-value">
              {show ? show.movieId.title : "Loading..."}
            </span>
          </p>
          <p>
            Theater:{" "}
            <span className="label-value">
              {show ? show.theaterId.name : "Loading..."}
            </span>
          </p>
          <p className="time-value">{show ? show.time : "Loading..."}</p>
        </div>

        <div className="screen-indicator">SCREEN</div>

        <SeatGrid
          rows={rows}
          cols={cols}
          occupiedSeats={occupiedSeats}
          selectedSeats={selectedSeats}
          toggleSeat={toggleSeat}
        />

        <div className="legend-container">
          <div className="legend-item">
            <div className="legend-box available"></div>
            <span>Available</span>
          </div>
          <div className="legend-item selected">
            <div className="legend-box"></div>
            <span>Selected</span>
          </div>
          <div className="legend-item occupied">
            <div className="legend-box"></div>
            <span>Occupied</span>
          </div>
        </div>

        <BookingSummary
          selectedSeats={selectedSeats}
          calculateTotal={calculateTotal}
          handleBooking={handleBooking}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Seats;
