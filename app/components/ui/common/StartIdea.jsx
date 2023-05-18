/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cx } from "class-variance-authority";
import Markdown from "./Markdown";

export const dynamic = "force-dynamic";

const StartIdea = ({ content, path }) => {
  return (
    <>
      <div
        className={cx(
          " px-10 lg:px-20 2xl:px-40 py-20 mt-32",
          content?.backgroundColor
        )}
      >
        <div className="grid h-full xl:grid-cols-2 gap-8 xl:gap-4 place-items-center place-content-center">
          <div className="text-center xl:text-start max-w-xl mx-auto">
            <h3 className="font-bold text-3xl font-mono">
              {content?.title && <Markdown text={content?.title} />}
            </h3>
            <p className="mt-5 font-inter font-normal text-base ">
              {content?.description && <Markdown text={content?.description} />}
            </p>
            <button className="mt-10 text-xs font-semibold font-inter">
              {content?.buttonName && <Markdown text={content?.buttonName} />}
            </button>
          </div>
          <div>
            {content?.services?.map((item) => (
              <>
                <div
                  key={item?.id}
                  className="mb-5 h-full p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"
                >
                  <div className="shrink-0">
                    <img
                      className="h-12 w-12"
                      src={`/assets/${path}/${item?.image}.png`}
                      alt={item?.alt}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-inter font-semibold text-black">
                      {item?.title && <Markdown text={item?.title} />}
                    </h3>
                    <p className="text-[#323232] mt-1.5 font-inter text-sm font-normal">
                      {item?.description && (
                        <Markdown text={item?.description} />
                      )}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StartIdea;
