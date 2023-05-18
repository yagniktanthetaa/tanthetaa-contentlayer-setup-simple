/* eslint-disable @next/next/no-img-element */
import React from "react";

export const dynamic = "force-dynamic";

export const TechnologiesImages = ({ content, path }) => {
  return (
    <>
      <div className="container mx-auto mt-10 px-4">
        <div className="grid place-content-center place-items-center grid-cols-3 md:grid-cols-4 xl:grid-cols-9 gap-8 xl:gap-10 ">
          {content?.map((item) => (
            <>
              <div key={item?.id}>
                <img
                  src={`/assets/${path}/${item?.image}.png`}
                  alt={item?.alt}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
