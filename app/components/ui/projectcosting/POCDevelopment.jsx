/* eslint-disable @next/next/no-img-element */
import React from "react";
import Markdown from "../common/Markdown";
import { cx } from "class-variance-authority";

export const dynamic = "force-dynamic";

export const POCDevelopment = ({ content, path }) => {
  return (
    <>
      <div
        className={cx("py-20 px-4 lg:px-28 mt-10", content?.backgroundColor)}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="font-bold font-mono  text-3xl">
            {content?.title && <Markdown text={content?.title} />}
          </h3>
          <p className="mt-5 text-[#323232] text-lg font-inter">
            {content?.description && <Markdown text={content?.description} />}
          </p>
        </div>
        <div className="mt-24">
          <div className="grid xl:grid-cols-3 gap-4 lg:gap-8 place-content-center place-items-center">
            <div className="text-center xl:text-start">
              {content?.services?.leftSideData?.map((item) => (
                <>
                  <div key={item?.id}>
                    <h3
                      className={cx(
                        "font-bold font-mono text-xl ",
                        item?.titleColor
                      )}
                    >
                      {item?.title && <Markdown text={item?.title} />}
                    </h3>
                    <p className="mt-5 mb-8 text-[#323232] text-lg font-inter">
                      {item?.description && (
                        <Markdown text={item?.description} />
                      )}
                    </p>
                  </div>
                </>
              ))}
            </div>
            <div>
              <img
                src={`/assets/${path}/${content?.services?.image}.png`}
                alt={content?.services?.alt}
                className="object-cover mx-auto"
              />
            </div>
            <div className="text-center xl:text-right">
              {content?.services?.rightSideData?.map((item) => (
                <>
                  <div key={item?.id}>
                    <h3
                      className={cx(
                        "font-bold font-mono text-xl ",
                        item?.titleColor
                      )}
                    >
                      {item?.title && <Markdown text={item?.title} />}
                    </h3>
                    <p className="mt-5 mb-8 text-[#323232] text-lg font-inter">
                      {item?.description && (
                        <Markdown text={item?.description} />
                      )}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
