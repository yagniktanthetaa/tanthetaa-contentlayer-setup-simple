"use client";
import React, { useState } from "react";

const TitleWithOutPic = (props) => {
  const [open, setOpen] = useState(false);

  const openPopup = () => {
    setOpen(!open);
  };

  const btnShadow = {
    boxShadow: {
      boxShadow: "5px 15px 20px rgb(113 113 113 / 16%)",
    },
  };

  const {
    Data_1,
    Title,
    Title1,
    TitleSub,
    TitleInSub,
    subTitle,
    subTitleIn,
    subTitleIn_2,
    subTitleIn_3,
    btn,
    style,
  } = props;

  return (
    <>
      <div className={`container mx-auto px-5 md:px-24 lg:px-24 xl:px-0`}>
        <div
          className={`md:mt-[140px] mt-16 md:text-start text-center ${style}`}
        >
          <h3 className="font-semibold lg:text-[21px] md:text-[20px] text-[15px] leading-6">
            {Data_1}
          </h3>
          <h1 className="font-mono lg:leading-[65px] font-bold xl:text-[45px]  lg:text-[40px] md:text-[25px] text-[20px] py-5">
            {Title}
            <span className="lg:block  font-mono">
              {TitleSub}
              <span className="text-[#410EAD]  font-mono">{TitleInSub}</span>
            </span>
            {Title1 && (
              <h3 className="font-mono lg:leading-[65px] font-bold xl:text-[45px]  lg:text-[40px] md:text-[25px] text-[20px]">
                {Title1}
              </h3>
            )}
          </h1>
          <h3 className="pb-7 font-medium text-[#59587B] text-xl max-w-5xl">
            {subTitle}
            <span className="text-[#410EAD] font-normal text-lg">
              {subTitleIn}
            </span>
            {subTitleIn_2}
            <span className="lg:block font-normal text-lg">{subTitleIn_3}</span>
          </h3>
          {btn && (
            <button
              className="text-sm lg:text-lg  bg-[#29e248] hover:bg-white text-[#161c22] font-bold hover:text-[#410EAD] border border-[#29e248] hover:border-[#410EAD] rounded-3xl px-2 md:px-5 py-2.5 ease-in-out duration-700 font-mono"
              style={btnShadow.boxShadow}
              onClick={openPopup}
            >
              {btn}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default TitleWithOutPic;
