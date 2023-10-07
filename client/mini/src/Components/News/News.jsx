import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import product from "./product";
import "./News.scss";
import news from "../../../public/image/Group 2.jpg";

const News = () => {
  return (
    <>
      <div className="container1">
        <div className="newsfeed">
          <img className="newsBig" src={news} />
          <h1>News Feed</h1>
        </div>
        <div className="child">
          <Splide
            options={{
              autoplay: true,
              interval: 3000,
              rewind: true,
              perPage: 4,
              arrows: false,
              pagination: false,
              drag: "free",
              gap: "5rem",
            }}
          >
            {product.map((data) => {
              return (
                <>
                  <SplideSlide key={data.id}>
                    <div className="card">
                      <img className="img1" src={data.img} alt="" />
                    </div>
                    <p className="p">{data.title}</p>
                  </SplideSlide>
                </>
              );
            })}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default News;
