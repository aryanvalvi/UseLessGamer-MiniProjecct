import React from "react";
import bignews from "./bign";
import "./bign.scss";
import ScrollToBottom from "react-scroll-to-bottom";
import Navbar from "../navbar/Navbar";

const BigNews = () => {
  return (
    <>
      <div className="navbar-news">
        <Navbar></Navbar>
      </div>
      <div className="news-container">
        {bignews.map((data) => {
          return (
            <>
              <div className="news-article">
                <ScrollToBottom>
                  <h1>{data.header}</h1>
                  <img src={data.mainImgae} alt="" srcset="" />
                  <p>{data.p}</p>
                  <img src={data.subimage2} alt="" srcset="" />
                </ScrollToBottom>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default BigNews;
