/* eslint-disable @next/next/no-img-element */
import React from "react";
import Markdown from "../common/Markdown";
import Button from "../common/Button/page";

export const GameHead = ({ content, path }) => {
  return (
    <>
      {/* 1st Blog  mt-16 md:mt-[140px]*/}
      <div
        className={` max-h-min w-full  `}
        style={{
          background: `url(${`/assets/${path}/${content.bgImage}.png`} ) no-repeat center center `,
          backgroundSize: "cover",
        }}
      >
        <div className="container p-40 px-4 mx-auto md:px-24 lg:px-24 xl:px-0 xl:p-80">
          <div className="grid xl:grid-cols-2 gap-4 md:gap-0 !place-content-center place-items-center ">
            <div className="w-full">
              <h1 className="max-w-xl mx-auto font-mono text-2xl font-bold leading-tight text-white md:text-5xl">
                {content.title && content.title}
                <br />
                <span className="text-[#FFCF10]">
                  {content.subtitle && content.subtitle}
                </span>
              </h1>

              {content.description && (
                <h5 className="text-[#D9D9D9] font-inter mx-auto max-w-xl font-normal text-lg mt-5">
                  <Markdown text={content.description} />
                </h5>
              )}
              <div className="mt-6 max-w-xl mx-auto">
                <Button className="btn-primary-yellow">
                  {content?.buttonName && content?.buttonName}
                </Button>
              </div>
            </div>

            <div className="w-full h-full">
              <img
                src={`/assets/${path}/${content.heroImage}.png`}
                alt="MarioBattle"
                className="object-cover mx-auto"
              />
            </div>

            {/* <div className="w-full h-full">
              <Image
                src={`/assets/${path}/${content.heroImage}.png`}
                alt="MarioBattle"
                width={666}
                height={400}
                className="object-cover mx-auto"
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
