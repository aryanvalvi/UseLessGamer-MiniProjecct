import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="logo">LOGO</div>
        <div className="navbar">
          <nav>
            <div className="nav-link">
              <Link className="navlink">Tournament</Link>
              <Link className="navlink">News</Link>
              <Link className="navlink">Guide</Link>
              <Link className="navlink">About us</Link>
              <Link to="./createAcc">
                <button className="nav-btn">Create Account</button>
              </Link>
              <Link to="./login">
                <button className="nav-btn">Login</button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
