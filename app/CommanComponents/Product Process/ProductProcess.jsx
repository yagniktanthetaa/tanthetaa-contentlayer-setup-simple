import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const ProductProcess = (props) => {
  const {
    Title,
    inslideTitle,
    subTitle,
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
    icon9,
    icon10,
    icon11,
    icon12,
    data_4,
    data_5,
    data_6,
    data_7,
    data_8,
    data_9,
    data_10,
    data_11,
    data_12,
    data_13,
    data_14,
    data_15,
    data_16,
    data_17,
    data_18,
    data_19,
    data_20,
    data_21,
    data_22,
    data_23,
    data_24,
    data_25,
    data_26,
    data_27,
    extraTitle1,
    extraTitle2,
    extraTitle3,
    extraTitle4,
    extraTitle5,
    extraTitle6,
    extraTitle7,
    extraTitle8,
    extraTitle9,
    extraTitle10,
    extraTitle11,
    extraTitle12,
    extraTitle13,
    extraTitle14,
    extraTitle15,
    style,
  } = props;

  const ProcData = [
    {
      Icon: icon1,
      Title: data_4,
      SubTitle: data_5,
      Para: extraTitle1,
    },
    {
      Icon: icon2,
      Title: data_6,
      SubTitle: data_7,
      Para: extraTitle2,
    },
    {
      Icon: icon3,
      Title: data_8,
      SubTitle: data_9,
      Para: extraTitle3,
    },
    {
      Icon: icon4,
      Title: data_10,
      SubTitle: data_11,
      Para: extraTitle4,
    },
    {
      Icon: icon5,
      Title: data_12,
      SubTitle: data_13,
      Para: extraTitle5,
    },
    {
      Icon: icon6,
      Title: data_14,
      SubTitle: data_15,
      Para: extraTitle6,
    },
    {
      Icon: icon7,
      Title: data_16,
      SubTitle: data_17,
      Para: extraTitle7,
    },
    {
      Icon: icon8,
      Title: data_18,
      SubTitle: data_19,
      Para: extraTitle8,
    },
    {
      Icon: icon9,
      Title: data_20,
      SubTitle: data_21,
      Para: extraTitle9,
    },
    {
      Icon: icon10,
      Title: data_22,
      SubTitle: data_23,
      Para: extraTitle10,
    },
    {
      Icon: icon11,
      Title: data_24,
      SubTitle: data_25,
      Para: extraTitle11,
    },
    {
      Icon: icon12,
      Title: data_26,
      SubTitle: data_27,
      Para: extraTitle12,
    },
  ];
  return (
    <>
      <div className={`container mx-auto md:my-[140px] my-10 px-5 ${style}`}>
        {Title && (
          <h2 className="font-mono text-2xl lg:text-3xl xl:text-4xl leading-10 lg:leading-tight font-bold text-center 2xl-px-0 md:px-24 px-2 lg:px-10">
            {Title}
            <span className="text-[#410EAD] font-mono"> {inslideTitle}</span>
          </h2>
        )}
        {subTitle && (
          <h5 className=" font-normal text-sm text-center lg:text-base xl:text-lg  mb-5 text-[#59587B] 2xl:px-72 md:px-24 px-2 pt-10">
            {subTitle}
          </h5>
        )}
        {ProcData.map(
          (element, index) =>
            element.Icon && (
              <div className="xl:px-52 md:px-24 px-5 py-5 " key={index}>
                <div className="flex md:justify-start justify-center">
                  <Image src={element.Icon} alt="Tan Theta Icon" className="" />
                </div>
                {element.Title && (
                  <h2 className="py-2 font-bold text-[24px] text-center  md:text-start leading-[36px] font-mono text-[#000000]">
                    {element.Title}
                  </h2>
                )}
                {element.SubTitle && (
                  <h4 className="font-normal text-sm text-center md:text-start lg:text-base mb-5 text-[#343434]">
                    {element.SubTitle}
                  </h4>
                )}

                {element.Para && (
                  <h4 className=" font-normal text-sm lg:text-base mb-5 text-[#343434]">
                    {element.Para}
                  </h4>
                )}
              </div>
            )
        )}
        {props.link && (
          <Link
            href="/"
            className="text-sm lg:text-base text-[#7B3FE4] flex justify-center items-center text-center pb-[30px]"
          >
            {props.link}
            <HiArrowLongRight className="ml-2 lg:text-xl md:text-base text-sm" />
          </Link>
        )}
      </div>
    </>
  );
};

export default ProductProcess;
