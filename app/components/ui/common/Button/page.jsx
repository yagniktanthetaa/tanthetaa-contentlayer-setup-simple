import React from "react";
import { cx } from "class-variance-authority";
export const dynamic = "force-dynamic";

const Button = ({ children, className, onClick }) => {
  return (
    <>
      <button
        className={cx(
          "transition-colors antialiased delay-150 duration-500 ease-in-out",
          className
        )}
        onClick={onClick}
      >
        {children && children}
      </button>
    </>
  );
};

export default Button;
