import React from 'react';

const BookingStepper = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
        marginBottom: "50px",
        fontSize: "0.75rem",
        letterSpacing: "1px",
        color: "#666",
        fontWeight: "bold",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "#aaa",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#5c7cfa",
          }}
        ></div>
        SELECT SEATS
      </div>
      <div
        style={{ height: "1px", width: "40px", backgroundColor: "#333" }}
      ></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "#fff",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#e50914",
          }}
        ></div>
        CONFIRMATION
      </div>
      <div
        style={{ height: "1px", width: "40px", backgroundColor: "#333" }}
      ></div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#444",
          }}
        ></div>
        PAYMENT
      </div>
    </div>
  );
};

export default BookingStepper;
