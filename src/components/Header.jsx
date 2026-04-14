import React from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <h2 className="header-logo">StageSeat</h2>
        <Link to="/index" className="header-nav-link">
          <p>Home</p>
        </Link>
        <Link to="/shows" className="header-nav-link">
          <p>Shows</p>
        </Link>
        <p className="header-nav-item">My Bookings</p>
      </div>
      <div className="header-right">
        <Search color="white" className="header-search-icon" />
        <input
          type="text"
          placeholder="Search Shows"
          className="header-search-input"
        />
        <Link to="/signup">
          <button className="header-signin-btn">Sign in</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
