import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate, useParams } from "react-router-dom";

const Seats = () => {
  const navigate = useNavigate();
  const { movieId, theaterId, time } = useParams();
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
    alert(
      `Successfully booked ${selectedSeats.length} seats for ₹${calculateTotal()}. Enjoy the movie!`,
    );
     setSelectedSeats([]);
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
            Movie ID:{" "}
            <span style={{ color: "white", fontWeight: "bold" }}>
              {movieId}
            </span>
          </p>
          <p style={{ margin: "5px 0" }}>
            Theater ID:{" "}
            <span style={{ color: "white", fontWeight: "bold" }}>
              {theaterId}
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

         <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: "30px",
          }}
        >
          {rows.map((row) => (
            <div
              key={row}
              style={{ display: "flex", gap: "10px", alignItems: "center" }}
            >
              <div style={{ width: "20px", fontWeight: "bold", color: "#ccc" }}>
                {row}
              </div>
              {cols.map((col) => {
                const seatId = `${row}${col}`;
                const isOccupied = occupiedSeats.includes(seatId);
                const isSelected = selectedSeats.includes(seatId);

                let seatColor = "#2d2d2d"; 
                if (isOccupied)
                  seatColor = "#555";  
                else if (isSelected) seatColor = "red";  

                return (
                  <div
                    key={seatId}
                    onClick={() => toggleSeat(seatId)}
                    style={{
                      width: "35px",
                      height: "35px",
                      backgroundColor: seatColor,
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: isOccupied ? "not-allowed" : "pointer",
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                      color: isSelected
                        ? "white"
                        : isOccupied
                          ? "#888"
                          : "#ccc",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {col}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

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

         {selectedSeats.length > 0 && (
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
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Seats;
