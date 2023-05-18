/* eslint-disable @next/next/no-img-element */
import React from "react";
import Markdown from "../common/Markdown";
import Button from "../common/Button/page";
import Link from "next/link";

export const NFTHead = ({ content, path }) => {
  const textStyle = {
    color: "transparent !important",
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: "white",
  };
  return (
    <>
      {/* 1st Blog  mt-16 md:mt-[140px]*/}
      <div
        className={`max-h-min w-full `}
        style={{
          background: `url(${`/assets/${path}/${content?.bgImage}.png`} ) no-repeat center center `,
          backgroundSize: "cover",
        }}
      >
        <div className="container p-40 px-4 mx-auto md:px-24 lg:px-24 xl:px-0 xl:p-60">
          <div className="grid xl:grid-cols-2 gap-4 md:gap-0 !place-content-center place-items-center ">
            <div className="w-full max-w-xl mx-auto">
              <h1 className="font-mono text-2xl font-bold !leading-tight text-white md:text-5xl">
                {content?.title && <Markdown text={content?.title} />}&nbsp;
                <br className="max-md:hidden" />
                <span className="text-[#7B3FE4] ">
                  {content?.subtitle && <Markdown text={content?.subtitle} />}
                </span>
                <br />
                <span style={textStyle}>
                  {content?.subtitle1 && <Markdown text={content?.subtitle1} />}
                </span>
              </h1>

              <p className="text-[#F0F0F0]  font-inter  font-normal text-base mt-5 !leading-6">
                {content?.description && (
                  <Markdown text={content?.description} />
                )}
              </p>

              <p className="text-[#F0F0F0]  font-inter  font-normal text-base mt-5 !leading-6">
                {content?.description1 && (
                  <Markdown text={content?.description1} />
                )}
              </p>

              <div className="mt-6 ">
                <Link href="/contact-us-to-develop-software-for-your-business">
                  <Button className="btn-primary-purple">
                    {content?.buttonName && content?.buttonName}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
