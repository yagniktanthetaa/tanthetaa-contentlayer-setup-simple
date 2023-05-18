/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { cx } from "class-variance-authority";

export const NFTFractures = ({ content, path }) => {
  const stylesServices = {
    background: "#FFFFFF",
    boxShadow: "0px -4px 24px rgba(65, 14, 173, 0.09)",
    borderRadius: "40px 40px 0px 0px",
  };

  const [active, setActive] = useState(1);

  const handleClick = (id) => {
    setActive(id);
  };

  return (
    <>
      <div className="container mx-auto mt-10 ">
        <div className="">
          <div className="text-center pt-10 pb-3 px-8 xl:px-14">
            <h3 className="text-[#FF03B8] text-3xl font-bold font-mono mb-4">
              {content?.title1 && content?.title1}
            </h3>
            <div className="NFTFractures-border my-5"/>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row">
          <div className="xl:basis-1/4">
            <div className="relative">
              <div className="overflow-hidden " dir="rtl">
                <div
                  id="style-7"
                  className="flex-none min-w-full   overflow-auto max-h-96 md:px-0 lg:max-h-96"
                >
                  {content?.services?.map((item) => (
                    <ul dir="ltr" className="" key={item?.id}>
                      <li
                        onClick={() => handleClick(item?.id)}
                        className={cx(
                          "pl-6 h-16 w-full flex items-center font-normal text-base hover:bg-[#FFEBF9]/40 cursor-pointer whitespace-nowrap",
                          active === item?.id
                            ? "text-[#FF03B8] bg-[#FFEBF9]"
                            : "NFTFractures-border"
                        )}
                      >
                        {` > ${item?.title && item?.title}`}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="xl:basis-3/4 ">
            {content?.services?.map((item) => (
              <div key={item?.id}>
                {active === item?.id && (
                  <div
                    id="style-7"
                    className="bg-cover lg:max-h-96  p-4 lg:p-12  bg-center overflow-hidden overflow-y-scroll "
                    style={{
                      background: `url(${`/assets/${path}/${item?.bgImage}.png`} ) no-repeat `,
                      backgroundSize: "cover",
                      // width: "100%",
                    }}
                  >
                    <div className="fadeInDown">
                      <h3 className="  text-xl font-inter font-semibold text-[#FF03B8]">
                        {item?.id && item?.id}.
                      </h3>
                      <h3 className=" my-4 text-white text-xl font-semibold font-inter">
                        {item?.title && item?.title}
                      </h3>
                      <p className=" text-[#D6D6D6] font-normal text-lg max-w-sm">
                        {item?.description && item?.description}
                      </p>
                      <button className=" bg-[#FF03B8] text-white font-mono text-base rounded-md px-6 py-2.5 mt-4">
                        {item?.buttonName && item?.buttonName}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
