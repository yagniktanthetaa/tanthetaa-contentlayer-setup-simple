/* eslint-disable @next/next/no-img-element */
import React from "react";
import "./PowerBiServices.css";
import Markdown from "./Markdown";

export const dynamic = "force-dynamic";

const PowerBiServices = ({ content, path }) => {
  return (
    <>
      <div className="container mx-auto mt-10 relative">
        <div className="grid lg:grid-cols-2 gap-4 place-items-center lg:gap-8 power-bi-services">
          {content?.map((item) => (
            <div
              key={item?.id}
              className="max-w-xl text-justify lg:text-start my-2 mx-auto "
            >
              <div className="flex gap-4 items-center">
                <img
                  src={`/assets/${path}/${item?.image}.png`}
                  alt={item?.alt}
                />
                <h3 className="text-lg max-w-[14rem] text-black font-bold font-mono leading-7">
                  {item?.title && <Markdown text={item?.title} />}
                </h3>
              </div>
              <p className="text-[#59587B] text-base font-inter mt-5 leading-5">
                {item?.description && <Markdown text={item?.description} />}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PowerBiServices;
