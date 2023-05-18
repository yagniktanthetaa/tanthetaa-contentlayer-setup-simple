/* eslint-disable @next/next/no-img-element */
import React from "react";
import Markdown from "../common/Markdown";

export const ChooseGame = ({ content, path }) => {
  return (
    <>
      <div className="container px-4 mx-auto mt-10 md:px-24 lg:px-24 xl:px-0 relative">
        <div className="bg-shade-left"></div>
        <div className="grid gap-2 lg:grid-cols-2 lg:gap-4">
          {content?.map((item) => (
            <div key={item?.id} className="items-center mb-5 md:p-10 p-7 ">
              <div className="flex flex-wrap justify-center xl:flex-nowrap xl:justify-start">
                <div className>
                  <img
                    src={`/assets/${path}/${item?.image}.png`}
                    alt={item?.alt}
                    className="w-12 xl:w-32 "
                  />
                </div>
                <div className="mx-5">
                  <h3 className="md:text-[20px] font-mono font-bold flex items-center xl:justify-start justify-center xl:text-start text-center xl:mt-0 mt-3">
                    <Markdown text={item?.title} />
                  </h3>
                  <h5 className="text-center xl:text-start text-[15px] text-[#333333] font-normal pt-2">
                    <Markdown text={item.description} />
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
