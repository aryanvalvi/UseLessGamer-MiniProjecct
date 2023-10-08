import React from "react";
import { useParams } from "react-router-dom";
import team from "./teamsBhai";
import Navbar from "../navbar/Navbar";
import "./Teamba.scss";
const Teambada = () => {
  const { heading } = useParams();
  const t = team.find((e) => e.heading === heading);
  if (!t) {
    return (
      <>
        <div>Team not found</div>
      </>
    );
  }
  return (
    <>
      <div className="rahul">
        <Navbar></Navbar>
      </div>

      <div className="teamba-container">
        <img src={t.img} alt="" />
        <div className="godlplayer">
          <img src={t.player1} alt="" />
          <img src={t.player2} alt="" />
          <img src={t.player3} alt="" />
          <img src={t.player4} alt="" />
        </div>
      </div>
      <div className="cont">
        <p>{t.heading}</p>
        <p>{t.p}</p>
      </div>
      <div className="social">
        <img src={t.instaImage} alt="" />
        <p>{t.i}</p>
      </div>
    </>
  );
};

export default Teambada;
