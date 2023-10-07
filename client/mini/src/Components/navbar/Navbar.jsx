import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="logo">LOGO</div>
        <div className="navbar">
          <nav>
            <Link>Tournament</Link>
            <Link>News</Link>
            <Link>Guide</Link>
            <Link>About us</Link>
            <Link to="./createAcc">
              <button>Create Account</button>
            </Link>

            <Link to="./login">
              <button>Login</button>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
