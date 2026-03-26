import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import showsData from "../data/shows";
import theaters from "../data/movies";
import SeatGrid from "../components/SeatGrid";
import BookingSummary from "../components/BookingSummary";

const Seats = () => {
    const navigate = useNavigate();
    const { movieId, theaterId, time } = useParams();

    const movie = showsData.find((m) => m.id === Number(movieId));
    const theater = theaters.find((t) => t.id === Number(theaterId));
    const movieTitle = movie ? movie.title : "Unknown Movie";
    const theaterName = theater ? theater.name : "Unknown Theater";

    const [selectedSeats, setSelectedSeats] = useState([]);

    const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    const occupiedSeats = ["A3", "C5", "C6", "E1", "E2"];

    const toggleSeat = (seatId) => {
        if (occupiedSeats.includes(seatId)) return;

        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
        } else {
            setSelectedSeats([...selectedSeats, seatId]);
        }
    };

    const calculateTotal = () => {
        const ticketPrice = 150;
        return selectedSeats.length * ticketPrice;
    };

    const handleBooking = () => {
        if (selectedSeats.length === 0) {
            alert("Please select at least one seat.");
            return;
        }
        navigate("/confirm-booking", {
            state: {
                movieId: Number(movieId),
                theaterId: Number(theaterId),
                time,
                selectedSeats,
                totalPrice: calculateTotal(),
            },
        });
    };

    return (
        <div
            style={{
                backgroundColor: "#1a1a1a",
                minHeight: "100vh",
                color: "white",
                display: "flex",
                flexDirection: "column",
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
                <h1 style={{ color: "red", marginBottom: "20px", textAlign: "center" }}>
                    Select Your Seats
                </h1>

                <div
                    style={{
                        marginBottom: "20px",
                        textAlign: "center",
                        color: "#ccc",
                        fontSize: "1.1rem",
                    }}
                >
                    <p style={{ margin: "5px 0" }}>
                        Movie:{" "}
                        <span style={{ color: "white", fontWeight: "bold" }}>
                            {movieTitle}
                        </span>
                    </p>
                    <p style={{ margin: "5px 0" }}>
                        Theater:{" "}
                        <span style={{ color: "white", fontWeight: "bold" }}>
                            {theaterName}
                        </span>
                    </p>
                    <p style={{ margin: "5px 0", color: "red", fontWeight: "bold" }}>
                        {time}
                    </p>
                </div>

                <div
                    style={{
                        width: "80%",
                        maxWidth: "400px",
                        height: "40px",
                        backgroundColor: "#ccc",
                        margin: "20px 0 40px 0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#333",
                        fontWeight: "bold",
                        borderRadius: "5px",
                        transform: "perspective(200px) rotateX(-5deg)",
                        boxShadow: "0 10px 15px rgba(255,255,255,0.1)",
                    }}
                >
                    SCREEN
                </div>

                <SeatGrid
                  rows={rows}
                  cols={cols}
                  occupiedSeats={occupiedSeats}
                  selectedSeats={selectedSeats}
                  toggleSeat={toggleSeat}
                />

                <div
                    style={{
                        display: "flex",
                        gap: "20px",
                        marginBottom: "40px",
                        padding: "15px",
                        backgroundColor: "#2d2d2d",
                        borderRadius: "10px",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <div
                            style={{
                                width: "20px",
                                height: "20px",
                                backgroundColor: "#2d2d2d",
                                borderRadius: "5px",
                            }}
                        ></div>
                        <span>Available</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <div
                            style={{
                                width: "20px",
                                height: "20px",
                                backgroundColor: "red",
                                borderRadius: "5px",
                            }}
                        ></div>
                        <span>Selected</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <div
                            style={{
                                width: "20px",
                                height: "20px",
                                backgroundColor: "#555",
                                borderRadius: "5px",
                            }}
                        ></div>
                        <span style={{ color: "#888" }}>Occupied</span>
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
