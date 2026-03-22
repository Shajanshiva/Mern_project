import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import showsData from "../data/shows";
import theaters from "../data/movies";

const ConfirmBooking = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { movieId, theaterId, time, selectedSeats, totalPrice } = location.state || {};

    if (!movieId || !selectedSeats) {
        return (
            <div style={{ backgroundColor: "#1a1a1a", minHeight: "100vh", color: "white", textAlign: "center", padding: "50px" }}>
                <h2>Invalid Booking Session</h2>
                <button onClick={() => navigate("/")} style={{ padding: "10px 20px", marginTop: "20px", cursor: "pointer" }}>Go Home</button>
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
                backgroundColor: "#1a1a1a",
                minHeight: "100vh",
                color: "white",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Header />

            <div style={{ padding: "40px", flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h1 style={{ color: "red", marginBottom: "30px", textAlign: "center", fontSize: "2.5rem" }}>
                    Confirm Your Booking
                </h1>

                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "40px",
                    backgroundColor: "#2d2d2d",
                    padding: "40px",
                    borderRadius: "15px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                    maxWidth: "800px",
                    width: "100%"
                }}>

                    {poster && (
                        <div style={{ flex: "1 1 300px", display: "flex", justifyContent: "center" }}>
                            <img
                                src={poster}
                                alt={movieTitle}
                                style={{
                                    width: "100%",
                                    maxWidth: "300px",
                                    borderRadius: "10px",
                                    boxShadow: "0 5px 15px rgba(0,0,0,0.4)",
                                    objectFit: "cover"
                                }}
                            />
                        </div>
                    )}

                    <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <h2 style={{ fontSize: "2rem", marginBottom: "10px", color: "white" }}>{movieTitle}</h2>
                        <p style={{ fontSize: "1.2rem", color: "#ccc", marginBottom: "20px" }}>
                            <span style={{ color: "red", fontWeight: "bold" }}>Theater:</span> {theaterName}
                        </p>
                        <p style={{ fontSize: "1.2rem", color: "#ccc", marginBottom: "20px" }}>
                            <span style={{ color: "red", fontWeight: "bold" }}>Time:</span> {time}
                        </p>

                        <div style={{ backgroundColor: "#1a1a1a", padding: "20px", borderRadius: "10px", marginBottom: "25px" }}>
                            <p style={{ fontSize: "1.1rem", margin: "0 0 10px 0" }}>
                                Tickets: <span style={{ fontWeight: "bold", color: "white" }}>{selectedSeats.length}</span>
                            </p>
                            <p style={{ fontSize: "1.1rem", margin: "0" }}>
                                Seats: <span style={{ fontWeight: "bold", color: "red" }}>{selectedSeats.join(", ")}</span>
                            </p>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px", borderTop: "1px solid #444", paddingTop: "20px" }}>
                            <span style={{ fontSize: "1.3rem" }}>Total Amount</span>
                            <span style={{ fontSize: "1.8rem", fontWeight: "bold", color: "white" }}>₹{totalPrice}</span>
                        </div>

                        <button
                            onClick={() => {
                                alert("Payment Successful! Your tickets are booked.");
                                navigate("/index");
                            }}
                            style={{
                                padding: "15px",
                                backgroundColor: "red",
                                color: "white",
                                border: "none",
                                borderRadius: "8px",
                                fontSize: "1.2rem",
                                fontWeight: "bold",
                                cursor: "pointer",
                                transition: "background-color 0.2s"
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = "#cc0000"}
                            onMouseOut={(e) => e.target.style.backgroundColor = "red"}
                        >
                            Proceed to Pay
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ConfirmBooking;
