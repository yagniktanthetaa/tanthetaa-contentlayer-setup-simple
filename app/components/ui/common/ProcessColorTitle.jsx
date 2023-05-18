import React from "react";
import Markdown from "./Markdown";

const ProcessColorTitle = ({ content }) => {
  return (
    <>
      <div className="container px-4 mx-auto mt-10 md:px-24 lg:px-24 xl:px-0 ">
        <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3 lg:gap-4">
          {content?.map((item) => (
            <div
              key={item?.id}
              className="h-full p-8 rounded-2xl shadow-cardShadow hover:shadow-lg"
            >
              <h3 className={`font-mono text-lg font-bold ${item?.titleColor}`}>
                <span>{item?.id}. </span>
                <Markdown text={item?.title} />
              </h3>
              <p className="mt-5 text-base text-[#59587B]">
                <Markdown text={item?.description} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProcessColorTitle;
