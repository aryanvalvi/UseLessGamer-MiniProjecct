import React from "react";
import { useParams } from "react-router-dom";
import teamData from "./teamrank";
import "./teaam.scss";
import Navbar from "../navbar/Navbar";

const TeamDetail = () => {
  const { teamName } = useParams();
  const team = teamData.find((team) => team.name === teamName);

  if (!team) {
    return <div className="team-detail">Team not found</div>;
  }

  return (
    <>
      <div className="smith">
        <Navbar></Navbar>
      </div>
      <div className="team-detail">
        <h1 className="team-name">{team.name}</h1>
        <div className="team-info">
          <img className="team-image" src={team.Teamimage} alt={team.name} />
          <div className="player-info">
            <p>
              <strong>Rank:</strong> {team.rank}
            </p>
            <p>
              <strong>IGL:</strong> {team.igl}
            </p>
            <p>
              <strong>Player 1:</strong> {team.player1}
            </p>
            <p>
              <strong>Player 2:</strong> {team.player2}
            </p>
            <p>
              <strong>Player 3:</strong> {team.player3}
            </p>
            <p>
              <strong>Player 4:</strong> {team.player4}
            </p>
            <p>
              <strong>Email:</strong> {team.Email}
            </p>
            <p>
              <strong>Instagram:</strong> {team.Insta || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDetail;
