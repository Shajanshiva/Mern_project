import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import API from "../api.js";
import ShowsHeader from "../components/ShowsHeader";
import ShowCard from "../components/ShowCard";
import "../styles/Shows.css";

const Shows = () => {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const [showsData, setShowsData] = useState([]);
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const res = await API.get("/movies");
    setShowsData(res.data);
  };

  return (
    <div className="shows-page">
      <Header />

      <div className="shows-container">
        <ShowsHeader today={today} />

        {/* Movie Grid */}
        <div className="shows-grid">
          {showsData.map((show) => (
            <ShowCard key={show._id} show={show} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shows;
