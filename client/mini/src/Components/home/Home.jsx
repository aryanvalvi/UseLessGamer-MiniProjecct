import React from "react";
import News from "../News/News";
import Tournament from "../Tournaments/Tournament";
import Teams from "../Teams/Teams";
import Match from "../MatchResult/Match";
import Navbar from "../navbar/Navbar";
import "./Home.scss";
import HomeImage from "../../../public/image/gandu.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="background-container"></div>
        <div className="homeContent">
          <p className="E">E-sport community</p>
          <p className="E-M">
            We Organize esport tournaments for professional and amatuer gamers
          </p>
          <Link to="/tournaments">
            <button className="T-btn">Tournament</button>
          </Link>
        </div>
        <News></News>
        <Teams></Teams>
        {/* <Tournament></Tournament> */}
        <Match></Match>
      </div>
    </>
  );
};

export default Home;
