"use client";

import React from "react";

const Button = ({ children, className, animate, onClick, type, hoverType }) => {
  return (
    <div>
      {animate ? (
        <button
          onClick={onClick}
          type={type}
          className={`focus:ring-red border border-red hover:scale-110   transition-transform  text-red py-2 px-8 font-semibold rounded-[4px]  ${className}`}
        >
          {children}
        </button>
      ) : (
        <button
          className={`relative inline-flex items-center border-[3px]   w-[fit-content] justify-center px-10 py-3 overflow-hidden  font-medium tracking-tighter   rounded-md group ${
            type === "white"
              ? "text-white border-white hover:text-red"
              : "text-red border-red hover:text-white "
          } ${className}`}
        >
          {hoverType !== "empty" ? (
            <>
              <span className={`absolute w-0 h-0 transition-all duration-500 ease-out rounded-full group-hover:w-56 group-hover:h-56 ${type === "white"?"bg-white":"bg-red"}`}></span>
              <span
                className={`absolute inset-0 w-full h-full  rounded-lg opacity-10 bg-transparent  `}
              ></span>
              <span className="relative text-center ">{children}</span>
            </>
          ) : (
            <>
              <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-200 transition-all group-hover:opacity-100 bg-red border-black rounded-full"></span>
              <span className="relative w-full  text-white transition-colors duration-200 ease-in-out text-center">
                {children}
              </span>
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default Button;
