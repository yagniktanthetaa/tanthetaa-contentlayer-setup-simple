import React from "react";

export const dynamic = "force-dynamic";

const IFrameComponent = ({ content }) => {
  const { title, subtitle, description, videoLink } = content;

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center container mx-auto max-w-7xl my-5">
        <h3 className="font-mono text-lg text-[#9F9F9F] font-bold ">
          {title} <span className="text-[#410EAD]">{subtitle}</span>
        </h3>
        <p className="text-[#333333] font-inter text-base  max-w-xl">
          {description}
        </p>
      </div>

      <main className="flex justify-center items-center px-4 ">
        <iframe
          className="max-w-7xl w-full h-[80vh]"
          // width={560}
          // height={315}
          src={videoLink}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </main>
    </>
  );
};

export default IFrameComponent;
