import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import TrendingShows from "../components/TrendingShows";
import "../styles/Index.css";

const Index = () => {
  return (
    <div className="index-page">
      <Header />
      <div className="index-content">
        <HeroSection />
        <TrendingShows />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
