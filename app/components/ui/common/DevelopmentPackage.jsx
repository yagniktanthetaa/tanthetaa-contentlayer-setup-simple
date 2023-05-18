import React from "react";
import Markdown from "./Markdown";

export const dynamic = "force-dynamic";

const DevelopmentPackage = ({ content }) => {
  return (
    <>
      <div className="container grid max-w-5xl gap-4 mx-auto transition-all duration-300 ease-in-out lg:grid-cols-2 mt-28 place-content-center place-items-center">
        {content?.map((item) => (
          <div
            key={item?.id}
            className="cursor-pointer !h-full rounded-[20px] p-10   hover:shadow-lg shadow-cardShadow text-center"
          >
            <h3 className="font-mono text-xl font-bold">
              {item?.title && <Markdown text={item?.title} />}
            </h3>
            <p
              className="my-5 font-normal font-inter
           text-base text-[#59587B]"
            >
              {item?.description && <Markdown text={item?.description} />}
            </p>
            <button class="bg-[#410EAD] font-mono text-base rounded whitespace-nowrap hover:bg-[#29e248] transition-colors hover:text-black  font-semibold duration-500 ease-in-out py-2 px-4 text-white">
              {item?.buttonName && item?.buttonName}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default DevelopmentPackage;
