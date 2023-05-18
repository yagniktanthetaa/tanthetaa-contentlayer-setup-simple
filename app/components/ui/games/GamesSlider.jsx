/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export const dynamic = "force-dynamic";

export const GamesSlider = ({ content, path }) => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1200,
  };

  return (
    <>
      <div className="container mx-auto relative">
        <Slider {...settings} className="z-0">
          {content?.map((element) => {
            return (
              <div className=" mt-4 mb-10 client-details" key={element.id}>
                <div className=" px-4 md:px-14 xl:px-28 my-auto">
                  <div className="flex justify-center">
                    <Image
                      src={`/assets/${path}/${element?.image}.png`}
                      alt={element?.alt}
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="bg-shade-left"></div>
      </div>
    </>
  );
};
