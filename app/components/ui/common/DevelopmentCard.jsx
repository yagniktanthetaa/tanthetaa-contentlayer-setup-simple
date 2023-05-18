/* eslint-disable @next/next/no-img-element */
import React from "react";
import Markdown from "./Markdown";

export const dynamic = "force-dynamic";

const DevelopmentCard = ({ content, path }) => {
  return (
    <>
      <div className="container grid gap-4 mx-auto mt-20 md:grid-cols-3 xl:grid-cols-4 place-content-center md:gap-8">
        {content?.map((item) => (
          <div className="text-center" key={item?.id}>
            <div className="grid h-24 place-items-center">
              <img
                src={`${`/assets/${path}/${item?.image}`}.png`}
                alt={item?.alt}
              />
            </div>
            <h3 className="my-3 text-lg font-bold text-center">
              {item?.title && <Markdown text={item?.title} />}
            </h3>
            <p className="text-center font-normal  text-base text-[#59587B]">
              {item?.description && <Markdown text={item?.description} />}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DevelopmentCard;
