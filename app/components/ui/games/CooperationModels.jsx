/* eslint-disable @next/next/no-img-element */
import React from "react";
import Markdown from "../common/Markdown";

export const CooperationModels = ({ content, path }) => {
  return (
    <>
      <div className="container items-center justify-center gap-16 mx-auto my-6 lg:flex">
        <div className="grid place-items-center">
          <img
            src={`/assets/${path}/${content?.image}.png`}
            alt={content?.alt}
            className="max-w-2xl w-52 xl:w-auto "
          />
        </div>
        <div className="grid gap-10 mx-5 lg:grid-cols-2 lg:mx-0">
          {content?.services?.map((item) => (
            <div key={item?.id}>
              <h3 className="font-mono text-lg font-bold">
                <span className="text-[#410EAD]"># </span>
                <Markdown text={item?.title} />
              </h3>
              <p className="mt-4 font-normal text-[#333333] ">
                <Markdown text={item?.description} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
