import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { useAuth } from "../../Auth/AuthContext";

const Navbar = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="nav-container">
      <div className="logo">LOGO</div>
      <div className="navbar">
        <nav>
          <div className="nav-link">
            <Link to="/" className="navlink">
              Home
            </Link>
            <Link to="/tournaments" className="navlink">
              Tournament
            </Link>
            <Link to="/bign" className="navlink">
              News
            </Link>
            <Link to="/chatRoom" className="navlink">
              Servers
            </Link>
            <Link to="/guide" className="navlink">
              Guide
            </Link>
            <Link to="/about" className="navlink">
              About us
            </Link>
            {isAuthenticated ? (
              <>
                <p>Welcome</p>
                <button className="nav-btn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/Register">
                  <button className="nav-btn">Create Account</button>
                </Link>
                <Link to="/login">
                  <button className="nav-btn">Login</button>
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
