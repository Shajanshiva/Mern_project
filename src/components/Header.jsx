import React, { useState, useEffect } from "react";
import { Search, LogOut, User } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/index");
  };

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
        <div className="header-search-container">
          <Search color="#888" size={18} className="header-search-icon" />
          <input
            type="text"
            placeholder="Search Shows"
            className="header-search-input"
          />
        </div>

        {user ? (
          <div className="user-profile">
            <div className="user-info">
              <User size={18} color="white" />
              <span>{user.fullName || "User"}</span>
            </div>
            <button className="header-logout-btn" onClick={handleLogout}>
              <LogOut size={18} />
            </button>
          </div>
        ) : (
          <Link to="/">
            <button className="header-signin-btn">Sign in</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
