import React from "react";
import teamrank from "./teamrank";
import "./Match.scss";
import { Link } from "react-router-dom";

const Match = () => {
  return (
    <>
      <div className="rank-container">
        <h1>Top Teams In Current Meta</h1>
        <p>
          This is the updates of matches our teams have played and the results
        </p>
        <div className="buttons">
          <button>Upcoming</button>
          <button>Results</button>
        </div>

        {teamrank.map((data) => {
          return (
            <>
              <Link className="jaddu" to={`/team/${data.name}`}>
                <div className="teams" key={data.id}>
                  <p className="rank">{data.rank}</p>
                  <img className="team-img" src={data.Teamimage} alt="" />
                  <p>{data.name}</p>
                </div>
                {<hr className="separator" />}
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Match;
