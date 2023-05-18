"use client";
import Link from "next/link";
import React from "react";

const MenuItem = ({ id, title, Icon1, Icon2, address, hideShow, HideShow, ArrowShow, navTextColor }) => {

  return (
    <Link
      href={address}
      className={`menuTitle ${navTextColor} flex MenuList !font-mono`}
      onMouseEnter={(e) => {
        HideShow(e, id);
      }}
    >
      {title}
      <div className="grid place-items-center ml-0.5">
        {hideShow && ArrowShow === id ? <Icon1 /> : <Icon2 />}
      </div>
    </Link>
  );
};

export default MenuItem;