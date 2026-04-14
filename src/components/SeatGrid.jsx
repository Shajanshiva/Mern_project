import React from "react";
import "../styles/SeatGrid.css";

const SeatGrid = ({ rows, cols, occupiedSeats, selectedSeats, toggleSeat }) => {
  return (
    <div className="seat-grid-container">
      {rows.map((row) => (
        <div key={row} className="seat-row">
          <div className="row-label">{row}</div>
          {cols.map((col) => {
            const seatId = `${row}${col}`;
            const isOccupied = occupiedSeats.includes(seatId);
            const isSelected = selectedSeats.includes(seatId);

            return (
              <div
                key={seatId}
                onClick={() => toggleSeat(seatId)}
                className={`seat ${isOccupied ? "occupied" : ""} ${
                  isSelected ? "selected" : ""
                }`}
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
