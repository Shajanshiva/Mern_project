import React from 'react';

const SeatGrid = ({ rows, cols, occupiedSeats, selectedSeats, toggleSeat }) => {
  return (
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
            if (isOccupied) seatColor = "#555";
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
  );
};

export default SeatGrid;
