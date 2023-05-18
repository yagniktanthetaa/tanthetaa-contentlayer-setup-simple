"use client";
import React from "react";

const DropDownMainItem = ({ item, ShowTab, TabOpen }) => {
  return (
    <>
      <div className="py-4 pl-12">
        <div
          className={`rounded-l-md text-lg px-1 md:px-5 py-2.5 ${ShowTab === item?.id ? "btnConnect" : "tabHover  "}`} //
          onClick={() => {
            TabOpen(item?.id);
          }}
          id="defaultOpen"
        >
          {item?.title}
        </div>
      </div>
    </>
  );
};

export default DropDownMainItem;
