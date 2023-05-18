/* eslint-disable @next/next/no-img-element */
import React from "react";
import Markdown from "../common/Markdown";

export const Technologies = ({ content, path }) => {
  return (
    <>
      <div className="container grid gap-4 mx-auto mt-20 md:grid-cols-2 xl:grid-cols-3 place-content-center place-items-center md:gap-8 relative">
        <div className="bg-shade-center"></div>
        {content?.map((item) => (
          <div className="text-center" key={item?.id}>
            <div className="grid h-24 place-items-center">
              <img
                src={`${`/assets/${path}/${item?.image}`}.png`}
                alt={item?.alt}
              />
            </div>
            <p className="text-center font-normal mt-5 text-lg text-[#333333]">
              <Markdown text={item?.description} />
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
