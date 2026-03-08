import { useState } from "react";
import Button from "../components/Button";
import "./SignupPage.css";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Account created successfully for: " + fullName);
  };

  return (
    <div>
      <div className="signup-container">
        <div className="signup-card">
          <div className="signup-header">
            <h1>StageSeat</h1>
            <p className="tagline">Join Us</p>
            <p className="subtitle">
              Create your account and reserve your seat.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <label htmlFor="fullName">FULL NAME</label>
              <input
                type="text"
                id="fullName"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

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

            <div className="form-group">
              <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <Link to="/">
              <Button type="submit" />
            </Link>
          </form>

          <p className="login-text">
            Already have an account?{" "}
            <Link to="/" className="login-link">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
