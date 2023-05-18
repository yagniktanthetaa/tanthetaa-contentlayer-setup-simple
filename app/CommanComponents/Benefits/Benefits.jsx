import React from "react";

const Benefits = (props) => {
  const {
    Title,
    inslideTitle,
    subTitle,
    subTitle_2,
    data_1,
    data_2,
    data_3,
    data_4,
    data_5,
    data_6,
    data_7,
    data_8,
  } = props;

  return (
    <>
      <div className="container mx-auto md:my-[140px] my-16 px-5">
        <h1 className="font-mono text-2xl lg:text-3xl xl:text-4xl  font-bold 2xl:px-72 xl:px-0  md:px-24  px-2 text-center">
          {/*Defining the why, when and{" "}*/}
          {Title}
          <span className="text-[#410EAD] font-mono leading-10 lg:leading-[52px] mt-2">
            {" "}
            {inslideTitle}
          </span>
          {/*<span className="text-[#410EAD] "> what of the product</span> text-[#59587B] text-sm lg:text-base font-normal mb-5*/}
        </h1>
        <h4 className="font-medium text-sm lg:text-base text-center text-[#343434] 2xl:px-72 md:px-24 mt-5 px-0 xl:px-28">
          {subTitle}
        </h4>
        <h4 className="font-medium text-sm lg:text-base text-center text-[#343434] 2xl:px-72 px-0 xl:px-28">
          {subTitle_2}
        </h4>
        <div className="xl:px-96 lg:px-48 md:px-24 px-10 pt-10 ">
          {" "}
          <ul>
            {data_1 && (
              <li className="list-disc  font-normal text-sm lg:text-base  mb-5 text-[#343434] ">
                {data_1}
              </li>
            )}
            {data_2 && (
              <li className="list-disc  font-normal text-sm lg:text-base  mb-5 text-[#343434]">
                {data_2}
              </li>
            )}
            {data_3 && (
              <li className="list-disc  font-normal text-sm lg:text-base  mb-5 text-[#343434]">
                {data_3}
              </li>
            )}
            {data_4 && (
              <li className="list-disc  font-normal text-sm lg:text-base  mb-5 text-[#343434]">
                {data_4}
              </li>
            )}
            {data_5 && (
              <li className="list-disc  font-normal text-sm lg:text-base  mb-5 text-[#343434]">
                {data_5}
              </li>
            )}
            {data_6 && (
              <li className="list-disc  font-normal text-sm lg:text-base  mb-5 text-[#343434]">
                {data_6}
              </li>
            )}
            {data_7 && (
              <li className="list-disc  font-normal text-sm lg:text-base  mb-5 text-[#343434]">
                {data_7}
              </li>
            )}
            {data_8 && (
              <li className="list-disc  font-normal text-sm lg:text-base  mb-5 text-[#343434]">
                {data_8}
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Benefits;
