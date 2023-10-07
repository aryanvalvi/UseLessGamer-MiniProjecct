import React from "react";
import Navbar from "../navbar/Navbar";
import teams from "./teams";
const Register = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        {teams.map((data) => {
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

export default Register;
