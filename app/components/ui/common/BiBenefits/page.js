import React from "react";
import "./BiBenefits.css";
import { cx } from "class-variance-authority";
import Markdown from "../Markdown";

export const dynamic = "force-dynamic";

const BiBenefits = ({ content }) => {
  return (
    <>
      <div className="container mx-auto mt-10 relative p-5">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-x-[5rem] gap-4 place-items-center lg:gap-8 bi-benefits">
          {content?.map((item) => (
            <>
              <div
                key={item?.id}
                className="max-w-xl text-justify lg:text-start my-2 mx-auto child"
              >
                <div className="font-bold text-[48px] text-start leading-snug  !opacity-10">
                  {item?.id}
                </div>
                <h3
                  className={cx(
                    "xsm:text-sm max-w-[25rem]  font-bold font-mono leading-7",
                    item?.titleColor
                  )}
                >
                  {item?.title && <Markdown text={item?.title} />}
                </h3>
                <p className="xsm:text-xs text-[#59587B] text-base font-inter mt-5 leading-5">
                  {item?.description && <Markdown text={item?.description} />}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default BiBenefits;
