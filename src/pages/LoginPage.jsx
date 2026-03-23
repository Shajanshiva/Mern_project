import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import "./LoginPage.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Proceed to seatstage platform
    navigate("/index");
  };

  return (
    <div className="login-page">
      {/* Top Navbar */}
      <div className="navbar">
        <div className="logo">STAGESEAT</div>
        <Link to="/index" className="back-link">
          ← Back to Home
        </Link>
      </div>

      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <span className="badge">EXISTING MEMBER</span>
            <h2>LOGIN TO STAGESEAT</h2>
            <p className="subtitle">
              Please enter your credentials to access your stage.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <div className="input-wrapper">
                <Mail size={18} className="input-icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="label-wrapper">
                <label htmlFor="password">PASSWORD</label>
                <a href="#" className="forgot-password">
                  Forgot?
                </a>
              </div>
              <div className="input-wrapper">
                <Lock size={18} className="input-icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="login-button">
              LOGIN TO SEATSTAGE <ArrowRight size={18} />
            </button>
          </form>

          <p className="signup-text">
            Don't have an account?{" "}
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
