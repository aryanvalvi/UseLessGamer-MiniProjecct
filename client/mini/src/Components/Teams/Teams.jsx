import React from "react";
import team from "./teamsBhai";
const Teams = () => {
  return (
    <>
      <div className="container">
        <h1>THE TEAMS</h1>
        <p>Meet our main power !</p>
        <div className="button">
          <button>FORTNITE</button>
          <button>FIFA28</button>
          <button>BGMI</button>
        </div>
        <team className="container">
          {team.map((data) => {
            return (
              <>
                <img src={data.img} alt="" srcset="" />
                <h1>{data.heading}</h1>
                <p>{data.game}</p>
                <img src={data.player1} alt="" srcset="" />
                <img src={data.player2} alt="" srcset="" />
                <img src={data.player3} alt="" srcset="" />
                <img src={data.player4} alt="" srcset="" />
                <button>TEAM Page</button>
              </>
            );
          })}
        </team>
      </div>
    </>
  );
};

export default Teams;
