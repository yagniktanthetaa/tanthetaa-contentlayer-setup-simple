"use client";
import React, { useState } from "react";
import { cx } from "class-variance-authority";

export const GameFaqs = ({ content }) => {
  const [isOpen, setIsOpen] = useState(0);
  const faqShadow = {
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
  };
  return (
    <>
      <div className="container px-4 mx-auto my-20 mt-10 md:px-24 lg:px-24 xl:px-0 ">
        {content?.map((item) => (
          <div className="my-4" key={item?.id}>
            <div
              style={faqShadow}
              onClick={() => setIsOpen(item?.id === isOpen ? 0 : item?.id)}
              className="rounded-2xl w-full md:max-w-7xl md:mx-auto bg-white"
            >
              <div className="flex items-center justify-between p-4 text-base font-semibold cursor-pointer">
                <h3>{item?.question}</h3>
                {isOpen === item?.id ? " - " : " + "}
              </div>
            </div>
            <p
              className={cx(
                isOpen === item?.id ? "h-auto" : "hidden h-0",
                "w-full md:max-w-7xl md:mx-auto p-4 transition-[height] ease-in-out duration-500 "
              )}
            >
              {item?.answer}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
