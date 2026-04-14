import React from "react";
import "../styles/BookingStepper.css";

const BookingStepper = () => {
  return (
    <div className="stepper-container">
      <div className="step-item completed">
        <div className="step-dot"></div>
        SELECT SEATS
      </div>
      <div className="step-line"></div>
      <div className="step-item active">
        <div className="step-dot"></div>
        CONFIRMATION
      </div>
      <div className="step-line"></div>
      <div className="step-item">
        <div className="step-dot"></div>
        PAYMENT
      </div>
    </div>
  );
};

export default BookingStepper;
