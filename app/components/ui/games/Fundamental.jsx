/* eslint-disable @next/next/no-img-element */
import React from "react";
import Markdown from "../common/Markdown";
import { cx } from "class-variance-authority";

export const dynamic = "force-dynamic";

export const Fundamental = ({ content, path }) => {
  return (
    <>
      <div className="container flex flex-wrap justify-center gap-5 mx-auto mt-10">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content?.map((item) => (
            <div
              key={item?.id}
              className={cx(
                " !h-full p-10 NFTFractures-border1"
                // item?.id === 1 && "NFTFractures-border1",
                // item?.id === 2 && "NFTFractures-border1",
                // item?.id === 3 && "NFTFractures-border1"
              )}
            >
              <img src={`/assets/${path}/${item?.image}.png`} alt={item?.alt} />
              <div className="">
                <h3 className="my-3 font-mono font-semibold md:text-lg ">
                  <Markdown text={item?.title} />
                </h3>
              </div>
              <div className>
                <p className="text-base text-[#59587B] font-normal pt-2 font-inter ">
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
