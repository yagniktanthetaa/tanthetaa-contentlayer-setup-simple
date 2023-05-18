/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "./Button/page";
import Markdown from "./Markdown";

export const dynamic = "force-dynamic";

const RevolutionizeBusiness = ({ content, path }) => {
  return (
    <>
      <section className="container mx-auto mt-10 relative">
        <div className="grid lg:grid-cols-2 gap-4 place-items-center lg:gap-8">
          {content?.map((item) => (
            <div key={item?.id} className="max-w-lg mx-auto text-center">
              <div className="grid place-content-center">
                <img
                  src={`/assets/${path}/${item?.image}.png`}
                  alt={item?.alt}
                  className="w-32 h-32 object-contain "
                />
              </div>
              <h3 className="my-4 font-bold text-xl font-mono leading-7 text-black">
                {item?.title && <Markdown text={item?.title} />}
              </h3>
              <p className="my-4 text-[#59587B] font-inter text-base leading-4">
                {item?.description && <Markdown text={item?.description} />}
              </p>
              <Button className="btn-primary-purple">
                {item?.buttonName && <Markdown text={item?.buttonName} />}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RevolutionizeBusiness;
