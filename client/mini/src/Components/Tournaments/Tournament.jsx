import React, { useState, useEffect } from "react";
import tourny from "./tourny";
import "./Tournament.scss";
import Navbar from "../navbar/Navbar";
import TournamentRegister from "./TournamentRegister";
import { useAuth } from "../../Auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Tournament = () => {
  const navigate = useNavigate();
  const { Teamname, setTeamname } = useAuth();
  const [selectedLabel, setSelectedLabel] = useState("");

  useEffect(() => {
    console.log("Selected Label:", selectedLabel);
  }, [selectedLabel]);

  const TeamRegister = (data) => {
    setSelectedLabel(data.Label);
    setTeamname(data.Label);
    navigate("/RegisterTeam");
  };

  return (
    <>
      <Navbar />
      <div className="faf">
        <h1>TOURNAMENTS</h1>
        <Link to="/RegisterLabel">
          <button>HOST TOURNAMENT</button>
        </Link>
      </div>
      <div className="tour-container">
        <div className="card-grid">
          {tourny.map((data) => {
            return (
              <div className="card" key={data.id}>
                <img src={data.img} alt="" />
                <div className="html">
                  <p className="name">{data.name}</p>
                  <p className="time">{data.Time}</p>
                  <p className="labelT">{data.Label}</p>
                  <button
                    onClick={() => TeamRegister(data)}
                    className="btn-tournament"
                  >
                    MORE DETAIL
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tournament;
