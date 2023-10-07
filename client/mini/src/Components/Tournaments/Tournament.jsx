import React from "react";
import tourny from "./tourny";
const Tournament = () => {
  return (
    <>
      <div className="container">
        <h1>TOURNAMENTS</h1>

        {tourny.map((data) => {
          return (
            <>
              <p>{data.name}</p>
              <p>{data.Time}</p>
              <p>{data.Label}</p>
              <img src={data.img} alt="" srcset="" />
              <button>MORE DETAIL</button>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Tournament;
