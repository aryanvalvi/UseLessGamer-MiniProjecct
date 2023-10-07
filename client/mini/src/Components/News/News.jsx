import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import product from "./product";
import "./News.scss";

const News = () => {
  return (
    <>
      <div className="News-container">
        <p className="NEWS">NEWS</p>
        <Splide
          options={{
            autoplay: true,
            interval: 3000,
            rewind: true,
            perPage: 3,
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

                    <p className="p">{data.title}</p>
                  </div>
                </SplideSlide>
              </>
            );
          })}
        </Splide>
      </div>
    </>
  );
};

export default News;
