/* eslint-disable @next/next/no-img-element */
import React from "react";
import Markdown from "./Markdown";

export const dynamic = "force-dynamic";

const ServicesBaseItem = ({ path, content }) => {
  return (
    <>
      <div className="container grid gap-4 mx-auto transition-all duration-300 ease-in-out md:grid-cols-2 xl:grid-cols-3 mt-14 place-content-center place-items-center">
        {content?.map((item) => (
          <div
            key={item?.id}
            // className="cursor-pointer !h-full rounded-[20px] p-10 max-w-2xl  hover:shadow-lg shadow-cardShadow"
            className="cursor-pointer !h-full rounded-[20px] p-10 max-w-2xl  "
          >
            <img
              src={`${`/assets/${path}/${item?.image}`}.png`}
              alt={item?.alt}
            />

            <h3 className="my-4 font-mono text-xl font-bold">
              {item?.title && <Markdown text={item?.title} />}
            </h3>
            <p className="text-[#59587B] font-inter text-base">
              {item?.description && <Markdown text={item?.description} />}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesBaseItem;
