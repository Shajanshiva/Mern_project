import React from "react";
import "../styles/ShowsHeader.css";

const ShowsHeader = ({ today }) => {
  return (
    <div className="shows-header-container">
      <div>
        <div className="now-premiering-wrapper">
          <div className="premiering-line"></div>
          <span className="premiering-label">NOW PREMIERING</span>
        </div>
        <h1 className="shows-header-title">
          Current Movie <br />
          <span>Shows</span>
        </h1>
        <p className="shows-header-subtitle">
          Experience the magic of cinema on the grandest stage.
          <br />
          Immerse yourself in stories that define generations.
        </p>
      </div>

      <div className="shows-header-right">
        <div className="date-label">TODAY'S DATE</div>
        <div className="date-value">
          <span>{today.split(" ")[0]}</span>{" "}
          {today.split(" ").slice(1).join(" ")}
        </div>
      </div>
    </div>
  );
};

export default ShowsHeader;
