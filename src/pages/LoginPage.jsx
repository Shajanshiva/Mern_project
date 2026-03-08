import { useState } from "react";
import Button from "../components/Button";
import "./LoginPage.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Login attempt with email: " + email);
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1>StageSeat</h1>
            <p className="tagline">Welcome Back</p>
            <p className="subtitle">
              Step into the spotlight. Your stage awaits.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">PASSWORD</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <a href="#" className="forgot-password">
              Forgot password?
            </a>
            <Link to="/index">
              <Button type="submit" />
            </Link>
          </form>

          <p className="signup-text">
            Don't have an account? <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
