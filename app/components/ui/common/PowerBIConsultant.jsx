/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cx } from "class-variance-authority";
import Markdown from "./Markdown";

export const dynamic = "force-dynamic";

const PowerBIConsultant = ({ content, path }) => {
  return (
    <>
      <div className="bg-[#FAC9F8] py-32 px-4 mt-32">
        <div className="grid xl:grid-cols-2 place-items-center">
          <div className="max-w-xl mx-auto text-center xl:text-start">
            <h3 className=" text-xl lg:text-3xl font-bold font-mono leading-tight">
              {content?.title && <Markdown text={content?.title} />}
            </h3>
            {content?.description && (
              <p className="mt-5 text-base lg:text-lg text-[#1D1D1D] font-inter font-normal">
                <Markdown text={content?.description} />
              </p>
            )}
            {content?.description1 && (
              <p className="mt-5 text-base lg:text-lg text-[#1D1D1D] font-inter font-normal">
                <Markdown text={content?.description1} />
              </p>
            )}
          </div>
          <div>
            <img
              src={`/assets/${path}/${content?.image}.png`}
              alt={content?.alt}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PowerBIConsultant;
