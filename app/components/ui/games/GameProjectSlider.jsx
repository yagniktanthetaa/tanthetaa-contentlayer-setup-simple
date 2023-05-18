/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const dynamic = "force-dynamic";

export const GameProjectSlider = ({ content, path }) => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1800,
  };
  return (
    <>
      <div className="mt-10">
        <Slider
          {...settings}
          className="z-0 overflow-x-hidden overflow-y-hidden w-full "
        >
          {content?.map((element) => {
            return (
              <div className="overflow-hidden  w-full h-full" key={element?.id}>
                <img
                  src={`/assets/${path}/${element?.image}.png`}
                  alt={element?.alt}
                  className="overflow-hidden w-full h-[45rem]"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
