/* eslint-disable @next/next/no-img-element */
import React from "react";
import Markdown from "./Markdown";
import { cx } from "class-variance-authority";
import Link from "next/link";

export const dynamic = "force-dynamic";

const PreviousOrNext = ({ content, path }) => {
  return (
    <>
      <div className="container px-4 mx-auto mt-10 md:px-24 lg:px-24 xl:px-0 ">
        <div className="flex flex-wrap justify-center gap-2 xl:flex-nowrap xl:justify-between lg:gap-4">
          {content?.map((item) => (
            <div key={item?.id} className="items-center mb-5 md:p-10 p-7 ">
              <Link href={item?.link}>
                <div
                  className={cx(
                    "flex flex-wrap justify-center xl:flex-nowrap xl:justify-start",
                    item.id === 2 ? "xl:flex-row-reverse" : ""
                  )}
                >
                  <div>
                    <img
                      src={`/assets/${path}/${item?.image}.png`}
                      alt={item?.alt}
                    />
                  </div>
                  <div className="mx-5 ">
                    <h3
                      className={cx(
                        "md:text-[20px] font-mono font-bold flex items-center xl:justify-start  justify-center text-[#410EAD] xl:text-start text-center xl:mt-0 mt-3 hover:text-[#29e248] transition-colors delay-150 duration-300 ease-in-out",
                        item.id === 2 ? "xl:flex-row-reverse" : ""
                      )}
                    >
                      <Markdown text={item?.title} />
                    </h3>
                    <p
                      className={cx(
                        "font-inter text-center  text-[15px] text-[#59587B] font-normal pt-2 hover:text-[#410EAD] transition-colors max-w-md delay-150 duration-300 ease-in-out",
                        item.id === 2 ? "xl:text-end" : "xl:text-start"
                      )}
                    >
                      <Markdown text={item?.description} />
                    </p>

                    <div
                      className={cx(
                        "text-center",
                        item.id === 2 ? "xl:text-end" : "xl:text-start"
                      )}
                    >
                      <button className="mt-5 font-inter hover:text-[#29e248] transition-colors delay-150 duration-300 ease-in-out text-[#410EAD] text-base font-semibold">
                        {item?.buttonName}
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PreviousOrNext;
