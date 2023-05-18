"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const EducationSector = (props) => {
  const {
    style,
    educationBgColor,
    educationTextColor,
    educationBorderColor,
    title,
    subtitle,
    subTitlesub,
    leftTitle,
    faq,
    eduError,
    sector,
    educationLinkColor,
    educationRightSideBgColor,
    educationRightSideImage,
  } = props;

  return (
    <>
      <section className={`mx-auto md:my-[140px] my-10 ${style}`}>
        <div className="grid xl:grid-cols-2">
          <div
            className={`${educationBgColor} my-auto py-6 md:py-20 xl:py-[106.5px] 2xl:py-[175px] px-4 md:px-12 xl:px-24 ${educationTextColor}`}
          >
            <div
              className={`border-2 md:border-4 lg:border-8 ${educationBorderColor} p-4 md:px-7 lg:px-10 md:py-5 lg:py-10`}
            >
              <div className="grid grid-cols-2">
                <div></div>
                <div>
                  <h3 className="text-xs md:text-sm 2xl:text-lg font-normal pb-1 md:pb-2">
                    {title}
                  </h3>
                  <h2 className="text-base md:text-xl 2xl:text-4xl font-bold pb-1 md:pb-2">
                    {subtitle}
                  </h2>
                  <h3 className="text-xs md:text-sm 2xl:text-lg font-normal text-end">
                    {subTitlesub}
                  </h3>
                </div>
              </div>
              <div>
                <p className="text-2xl 2xl:text-4xl font-bold pb-1 md:pb-2">
                  {leftTitle}
                </p>
                <h2 className="text-xs md:text-sm 2xl:text-lg font-normal pb-1 md:pb-2">
                  {faq}
                  <span className="lg:block">{eduError}</span>
                  {sector}
                </h2>
                <a
                  href="#"
                  className={`text-base font-medium ${educationLinkColor} decoration-none flex items-center`}
                >
                  Read more <BsArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          </div>
          <div className={`${educationRightSideBgColor} w-auto`}>
            <Image
              src={educationRightSideImage}
              alt="photos"
              className="w-auto lg:w-fit 2xl:auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationSector;
