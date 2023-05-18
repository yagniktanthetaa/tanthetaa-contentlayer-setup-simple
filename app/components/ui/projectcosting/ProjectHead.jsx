/* eslint-disable @next/next/no-img-element */
import React from "react";
import Markdown from "../common/Markdown";
import Button from "../common/Button/page";

export const dynamic = "force-dynamic";

export const ProjectHead = ({ content, path }) => {
  return (
    <>
      <div className="container px-4 mx-auto p-36 md:px-24 xl:px-0 ">
        <div className="grid xl:grid-cols-2 gap-8 md:gap-8 !place-content-center place-items-center ">
          <div className="w-full ">
            <img
              src={`/assets/${path}/${content?.image}.png`}
              alt={content?.alt}
              className="object-cover mx-auto"
            />
          </div>
          <div className="w-full max-w-4xl mx-auto text-center xl:text-start">
            <h1 className="md:whitespace-nowrap font-mono text-2xl font-bold leading-tight text-black md:text-[2.75rem]">
              {content?.title && <Markdown text={content?.title} />}&nbsp;
              <br />
              <span className="font-mono text-[#410EAD]">
                {content?.subtitle && <Markdown text={content?.subtitle} />}
              </span>
            </h1>

            <p className="text-[#494949] font-inter  font-normal text-xs md:text-lg mt-5">
              {content?.description && <Markdown text={content?.description} />}
            </p>

            <div className="mt-6 ">
              <Button className="btn-primary-purple">
                {content?.buttonName && content?.buttonName}
              </Button>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="bg-shade-right"></div>
        </div>
      </div>
    </>
  );
};
