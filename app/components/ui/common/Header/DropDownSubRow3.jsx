/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";

const DropDownSubRow3 = ({ item, sethideShow, setShowNavColor }) => {
  return (
    <>
      <div key={item?.id} className="flex justify-start items-center my-8">
        {item?.image && <img
          src={item?.image}
          alt={item?.title}
          className="w-8 h-8 object-contain px-2"
        />}
        <Link
          href={item?.href}
          className={`px-3 subMenuTitle !font-mono ${item.textClr}`}
          onClick={() => {
            TabOpen(item?.id);
            sethideShow(false)
            setShowNavColor(false)
          }}
          id="defaultOpen"
        >
          {item?.title}
        </Link>
      </div>
    </>
  );
};

export default DropDownSubRow3;
