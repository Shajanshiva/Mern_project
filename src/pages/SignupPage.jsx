import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api.js";
import "../styles/SignupPage.css";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await API.post("/users/register", {
        fullName,
        email,
        password,
      });

      if (response.data) {
        alert("Account created successfully!");
        navigate("/"); // Navigate to login page
      }
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      {/* Top Navbar */}
      <div className="navbar">
        <div className="logo">STAGESEAT</div>
        <Link to="/index" className="back-link">
          ← Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="signup-content">
        <div className="signup-card">
          <div className="signup-header">
            <span className="badge">NEW MEMBER</span>
            <h2>JOIN STAGESEAT</h2>
            <p className="subtitle">
              Create your account to book your favorite shows.
            </p>
            {error && <p style={{ color: "#ff4d4d", fontSize: "0.9rem", marginTop: "10px", fontWeight: "bold" }}>{error}</p>}
          </div>

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <label htmlFor="fullName">FULL NAME</label>
              <div className="input-box">
                <span className="icon">👤</span>
                <input
                  type="text"
                  id="fullName"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <div className="input-box">
                <span className="icon">@</span>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">PASSWORD</label>
              <div className="input-box">
                <span className="icon">🔒</span>
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

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
              </button>
          </form>

          <div className="login-prompt">
            <span>Already have an account? </span>
            <Link to="/" className="login-link">
              Log In
            </Link>
          </div>
        </div>
      </div>

      {/* Page Footer */}
      <div className="footer">
        <div className="footer-left">
          <p className="footer-title">STAGESEAT</p>
          <p className="copyright">© 2024 STAGESEAT. ALL RIGHTS RESERVED.</p>
        </div>
        <div className="footer-right">
          <span>PRIVACY POLICY</span>
          <span>TERMS OF SERVICE</span>
          <span>HELP</span>
        </div>
      </div>
    </div>
  );
}
