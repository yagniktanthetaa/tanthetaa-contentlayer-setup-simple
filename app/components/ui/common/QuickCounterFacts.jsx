import React from "react";
import { cx } from "class-variance-authority";
import Markdown from "./Markdown";

export const dynamic = "force-dynamic";

const QuickCounterFacts = ({ content }) => {
  return (
    <>
      <div className="container px-4 mx-auto mt-10 text-center md:px-24 lg:px-24 xl:px-0 ">
        <div className="grid gap-10 py-6 lg:grid-cols-4 md:grid-cols-2 md:gap-0 place-content-center ">
          {content?.map((item) => (
            <div key={item?.id} className="max-w-xs py-4 mx-auto">
              <h2
                // className="font-bold font-mono text-[#043E86] text-5xl"
                className={cx(
                  "font-bold font-mono  text-5xl",
                  item?.titleColor
                )}
              >
                {item?.title}
              </h2>
              <h3 className="px-8 mt-5 text-base font-semibold leading-5 font-inter">
                <Markdown text={item?.description} />
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default QuickCounterFacts;
