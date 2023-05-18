import React from "react";
import Markdown from "../common/Markdown";

export const dynamic = "force-dynamic";

export const POCServices = ({ content }) => {
  return (
    <>
      <div className="container mx-auto mt-10 max-w-6xl lg:mt-20 relative">
        <div className="mt-16 -ml-5 absolute">
          <div className="ribbon">
            {content?.title && content?.title} <i></i>
          </div>
        </div>
        <div className="shadow-pocShadow rounded-[2.5rem] lg:py-20 lg:px-28 py-20 px-4">
          <div className="my-20">
            {content?.services?.map((item) => (
              <>
                <div key={item?.id} className="mt-5 font-inter">
                  <h2 className="font-medium text-black md:text-xl">
                    {item?.title && <Markdown text={item?.title} />}
                  </h2>

                  {item?.description && (
                    <p className="mt-5 md:text-lg text-[#494949] ">
                      <Markdown text={item?.description} />
                    </p>
                  )}

                  {item?.description1 && (
                    <p className="mt-5 md:text-lg text-[#494949] ">
                      <Markdown text={item?.description1} />
                    </p>
                  )}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
