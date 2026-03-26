import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import TrendingShows from "../components/TrendingShows";

const Index = () => {
  return (
    <div>
      <Header />
      <div style={{ width: "100%", margin: "0", padding: "0" }}>
        <HeroSection />
        <TrendingShows />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
