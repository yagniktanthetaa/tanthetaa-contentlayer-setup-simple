import React from "react";
import "./NFTOffers.css";
import Markdown from "../common/Markdown";

export const NFTOffers = ({ content }) => {
  return (
    <>
      <div className={`${content?.backgroundColor} p-6 md:p-10 xl:p-20 mt-36`}>
        <div className="text-center">
          <h3 className="font-mono text-3xl font-bold leading-tight text-white lg:text-4xl">
            {content?.title && <Markdown text={content?.title} />} <br />
            {content?.subtitle && <Markdown text={content?.subtitle} />}
          </h3>
          <p className="text-base text-[#F0F0F0] mt-5 font-normal leading-6 font-inter ">
            {content?.description && <Markdown text={content?.description} />}
          </p>
        </div>

        <div className="mt-14">
          <div className="grid gap-4 mt-8 meta-case-container md:grid-cols-2 xl:grid-cols-4 md:mt-10 xl:mt-14 meta-cases-15">
            {content?.services?.map((item) => (
              <div key={item?.id} className="meta-case">
                <h3
                  className={`${item?.titleColor} font-mono text-lg font-bold`}
                >
                  {item?.title && <Markdown text={item?.title} />}
                </h3>
                <p className="text-base text-[#F0F0F0] mt-5 font-normal leading-6 font-inter ">
                  {item?.description && <Markdown text={item?.description} />}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
