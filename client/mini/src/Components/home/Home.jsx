import React from "react";
import News from "../News/News";
import Tournament from "../Tournaments/Tournament";
import Teams from "../Teams/Teams";
import Match from "../MatchResult/Match";
import Navbar from "../navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <p>E-sport community</p>
        <p>
          We Organize esport tournaments for professional and amatuer gamers
        </p>
        <button>Tournament</button>
        <News></News>
        <Teams></Teams>
        <Tournament></Tournament>
        <Match></Match>
      </div>
    </>
  );
};

export default Home;
