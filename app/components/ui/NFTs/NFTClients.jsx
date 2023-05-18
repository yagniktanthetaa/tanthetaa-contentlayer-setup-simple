/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cx } from "class-variance-authority";
import Markdown from "../common/Markdown";

export const NFTClients = ({ content, path }) => {
  return (
    <>
      <div className={cx(" p-8 lg:p-24 my-10", content?.backGroundColor)}>
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="font-mono text-3xl font-bold text-white">
            {content?.title && content?.title}
          </h3>
          <p className="mt-5 text-[#EAEAEA] text-lg ">
            {content?.description && content?.description}
          </p>
        </div>

        <div className="container grid gap-4 mx-auto mt-20 md:grid-cols-2 xl:grid-cols-4 ">
          {content?.services?.map((item) => (
            <div key={item?.id} className="p-5 text-center bg-white rounded-xl">
              <div className="grid place-items-center">
                <img
                  src={`${`/assets/${path}/${item?.image}`}.png`}
                  alt={item?.alt}
                  //  className="h-20 w-60"
                />
                <p className="text-[#59587B] text-lg mt-5">
                  <Markdown text={item?.description} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
