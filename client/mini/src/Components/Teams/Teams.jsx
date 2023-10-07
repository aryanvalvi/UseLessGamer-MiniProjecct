import React from "react";
import team from "./teamsBhai";
import "./Team.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Teams = () => {
  return (
    <div className="team-container">
      <div className="header">
        <h1 className="the-team">THE TEAMS</h1>
        <p className="main-power">Meet our main power!</p>
      </div>
      <div className="button">
        <button className="game-btn">FORTNITE</button>
        <button className="game-btn">FIFA28</button>
        <button className="game-btn">BGMI</button>
      </div>

      <Splide
        options={{
          autoplay: true,
          interval: 3000,
          rewind: true,
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "400px",
        }}
      >
        {team.map((data) => (
          <SplideSlide key={data.id}>
            <div className="team-card">
              <div className="team-image-container">
                <img className="teamImage" src={data.img} alt={data.heading} />
              </div>
              <h1 className="data-h1">{data.heading}</h1>
              <p className="data-p1">{data.game}</p>
              <div className="players">
                <img
                  className="playerImage"
                  src={data.player1}
                  alt={data.player1}
                />
                <img
                  className="playerImage"
                  src={data.player2}
                  alt={data.player2}
                />
                <img
                  className="playerImage"
                  src={data.player3}
                  alt={data.player3}
                />
                <img
                  className="playerImage"
                  src={data.player4}
                  alt={data.player4}
                />
              </div>
              <button className="team-btn">TEAM Page</button>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Teams;
