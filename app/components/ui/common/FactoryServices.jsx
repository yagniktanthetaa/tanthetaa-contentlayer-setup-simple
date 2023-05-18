/* eslint-disable @next/next/no-img-element */
import React from "react";
import Markdown from "./Markdown";

export const dynamic = "force-dynamic";

const FactoryServices = ({ content, path }) => {
  return (
    <>
      <div className={`mt-40 ${content?.backgroundColor}`}>
        <div className="container mx-auto rounded-[2.25rem] p-14">
          <h2
            className={`text-2xl lg:text-3xl leading-snug font-bold font-mono text-[#410EAD] text-center`}
          >
            {content?.title && <Markdown text={content?.title} />}
            <br />
            <span className={`text-black font-mono`}>
              {content?.subtitle && content?.subtitle}
            </span>
          </h2>
          <div className="grid gap-4 mt-10 xl:gap-8 md:grid-cols-2 xl:grid-cols-3 place-items-center">
            {content?.services?.map((item) => (
              <div key={item?.id} className="text-center">
                <div className="grid place-content-center place-items-center">
                  <img
                    src={`${`/assets/${path}/${item?.image}`}.png`}
                    alt={item?.alt}
                  />
                </div>
                <h3 className="my-4 font-mono text-xl font-bold">
                  {item?.title && <Markdown text={item?.title} />}
                </h3>
                <h4 className="font-mono text-3xl font-bold">
                  {item?.description && <Markdown text={item?.description} />}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FactoryServices;
