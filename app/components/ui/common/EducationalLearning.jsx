/* eslint-disable @next/next/no-img-element */
import React from "react";
import Markdown from "./Markdown";

const EducationalLearning = ({ content, path }) => {
  return (
    <>
      <div className="py-14">
        <div className="mx-auto container px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <dl className="grid grid-cols-1 gap-y-10 lg:max-w-none">
              {content?.map((item) => (
                <div
                  key={item?.id}
                  className="relative md:pl-16 NFTFractures-border"
                >
                  <dt className="text-lg font-mono font-extrabold leading-7 text-black">
                    <div className="md:absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                      <img
                        src={`${`/assets/${path}/${item?.image}`}.png`}
                        alt={item?.alt}
                        className="mb-5 md:mb-0"
                      />
                    </div>
                    {item?.title && <Markdown text={item?.title} />}
                  </dt>
                  <dd className="mt-5 mb-10 font-inter text-base leading-5 text-[#59587B]">
                    {item?.description && <Markdown text={item?.description} />}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationalLearning;
