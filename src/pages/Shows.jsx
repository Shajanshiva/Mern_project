import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import showsData from "../data/shows";
// import {useState, useEffect} from "react";
import ShowsHeader from "../components/ShowsHeader";
import ShowCard from "../components/ShowCard";

const Shows = () => {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // const [showsData, setShowsData] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/api/movies")
  //     .then((response) => response.json())
  //     .then((data) => setShowsData(data))
  //     .catch((error) => console.error("Error fetching shows data:", error));
  // }, []);

  return (
    <div
      style={{
        background:
          "radial-gradient(circle at top left, rgba(229, 9, 20, 0.1) 0%, #111 60%)",
        backgroundColor: "#111",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <Header />

      <div
        style={{ padding: "60px 40px", maxWidth: "1400px", margin: "0 auto" }}
      >
        <ShowsHeader today={today} />

        {/* Movie Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "30px",
            justifyContent: "center",
          }}
        >
          {showsData.map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shows;
