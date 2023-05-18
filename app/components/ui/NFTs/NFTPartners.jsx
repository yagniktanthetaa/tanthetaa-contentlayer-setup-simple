/* eslint-disable @next/next/no-img-element */
import React from "react";

export const NFTPartners = ({ content, path }) => {
  return (
    <>
      <div className="grid container transition-all ease-in-out duration-300 mx-auto md:grid-cols-4  gap-4 mt-10 place-content-center  place-items-center">
        {content?.map((item) => (
          <div key={item?.id}>
            <img
              src={`${`/assets/${path}/${item?.image}`}.png`}
              alt={item?.alt}
              className="h-20 w-60 object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
};
