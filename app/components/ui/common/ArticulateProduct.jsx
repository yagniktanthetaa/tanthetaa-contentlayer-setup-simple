/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cx } from "class-variance-authority";
import Markdown from "./Markdown";

export const dynamic = "force-dynamic";

const ArticulateProduct = ({ content, path }) => {
  return (
    <>
      <div className={cx("mt-32 px-4 py-32", content?.backGroundColor)}>
        <div className="grid xl:grid-cols-2 gap-8 xl:gap-4 place-items-center place-content-center">
          <div>
            <img
              src={`/assets/${path}/${content?.image}.png`}
              alt={content?.alt}
            />
          </div>
          <div className="max-w-3xl mx-auto text-center xl:text-start">
            <h3 className="font-mono !leading-snug text-xl lg:text-3xl font-bold">
              {content?.title && <Markdown text={content?.title} />}
              <br />
              <span className="text-[#410EAD]">
                {content?.subtitle && <Markdown text={content?.subtitle} />}
              </span>
            </h3>
            <p className="text-[#343434] mt-5 text-sm lg:text-lg font-inter">
              {content?.description && <Markdown text={content?.description} />}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticulateProduct;
