import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import API from "../api.js";
import TheaterMovieBanner from "../components/TheaterMovieBanner";
import TheaterCard from "../components/TheaterCard";
import "../styles/Theaters.css";

const Theaters = () => {
  const { movieId } = useParams();

  const [groupedShows, setGroupedShows] = useState({});
  const [movie, setMovie] = useState(null);


    useEffect(() => {
      getMovie();
      getShows();
    }, []);

  const getMovie = async () => {
    try {
      const res = await API.get(`/movies/${movieId}`);
      setMovie(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getShows = async () => {
    try {
      const res = await API.get(`/shows/${movieId}`);

      if (res.data.length > 0) {
        // Group shows by theaterId
        const grouped = res.data.reduce((acc, show) => {
          const tId = show.theaterId._id;
          if (!acc[tId]) {
            acc[tId] = {
              theater: show.theaterId,
              shows: [],
            };
          }
          acc[tId].shows.push(show);
          return acc;
        }, {});

        setGroupedShows(grouped);
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="theaters-page">
      <Header />

      <div className="theaters-container">
        <h1 className="theaters-title">
          Theaters Showing{" "}
          <span>{movie ? movie.title : "Loading..."}</span>
        </h1>

        <TheaterMovieBanner currentMovie={movie} />

        {Object.keys(groupedShows).length > 0 ? (
          <div className="theaters-grid">
            {Object.values(groupedShows).map((group) => (
              <TheaterCard
                key={group.theater._id}
                theater={group.theater}
                shows={group.shows}
              />
            ))}
          </div>
        ) : (
          <p className="no-theaters-msg">
            No theaters currently showing this movie.
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Theaters;
