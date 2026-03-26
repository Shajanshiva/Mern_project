import React from 'react';

const ShowsHeader = ({ today }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: "40px",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "15px",
          }}
        >
          <div
            style={{
              width: "30px",
              height: "2px",
              backgroundColor: "#e50914",
            }}
          ></div>
          <span
            style={{
              fontSize: "0.75rem",
              letterSpacing: "3px",
              color: "#ccc",
              fontWeight: "bold",
            }}
          >
            NOW PREMIERING
          </span>
        </div>
        <h1
          style={{
            fontSize: "3.5rem",
            margin: "0 0 10px 0",
            fontWeight: "800",
            letterSpacing: "-1px",
          }}
        >
          Current Movie <br />
          <span style={{ color: "#e50914", fontStyle: "italic" }}>
            Shows
          </span>
        </h1>
        <p
          style={{
            color: "#888",
            fontSize: "1rem",
            lineHeight: "1.6",
            maxWidth: "450px",
            marginTop: "20px",
          }}
        >
          Experience the magic of cinema on the grandest stage.
          <br />
          Immerse yourself in stories that define generations.
        </p>
      </div>

      <div style={{ textAlign: "right" }}>
        <div
          style={{
            fontSize: "0.75rem",
            letterSpacing: "2px",
            color: "#888",
            marginBottom: "5px",
            fontWeight: "bold",
          }}
        >
          TODAY'S DATE
        </div>
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#e50914",
          }}
        >
          <span style={{ color: "white" }}>{today.split(" ")[0]}</span>{" "}
          {today.split(" ").slice(1).join(" ")}
        </div>
      </div>
    </div>
  );
};

export default ShowsHeader;
