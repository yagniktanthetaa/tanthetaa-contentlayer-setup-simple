/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cx } from "class-variance-authority";
export const dynamic = "force-dynamic";

const DevelopmentItem = ({ content }) => {
  return (
    <>
      <div className="container grid gap-4 mx-auto mt-5 md:grid-cols-2 xl:grid-cols-3">
        {content?.map((item) => (
          <div
            key={item?.id}
            className="relative grid gap-3 p-8 place-items-start"
          >
            <div className="absolute top-0 left-0 font-bold text-[48px] text-start leading-snug  !opacity-10">
              {item?.id && item?.id}
            </div>
            <h3
              className={cx(
                "font-mono font-bold text-[17px]  text-start",
                item?.titleColor
              )}
            >
              {item?.title && item?.title}
            </h3>
            <p className="text-sm text-[#59587B]  px-30 text-start">
              {item?.description && item?.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DevelopmentItem;
