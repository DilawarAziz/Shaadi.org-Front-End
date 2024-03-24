"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Dropdown = ({ title, className, drophover, options, iconStyle }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  return (
    <>
      <div
        className={`relative inline-block text-left ${className}`}
        onMouseEnter={drophover && openDropdown}
        onMouseLeave={drophover && closeDropdown}
        onClick={toggleDropdown}
      >
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className={`rounded-full bg-transparent text-white outline-none font-semibold justify-between w-full   text-center inline-flex items-center font-noto `}
          type="button"
        >
          {title}

          <div
            className={` ml-3 ${isDropdownOpen ? "transform rotate-180" : ""} `}
          >
            <MdOutlineKeyboardArrowDown className="text-white " size={20} />
          </div>
        </button>
        {/* Dropdown menu */}
        {isDropdownOpen && options && (
          <div
            id="dropdown"
            className={`z-10 absolute  w-[fit-content] whitespace-nowrap bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 `}
          >
            <ul
              className="py-2  overflow-auto  text-sm text-gray-700 bg-white rounded-lg"
              aria-labelledby="dropdownDefaultButton"
            >
              {options?.map((items, index) => (
                <li
                  key={index}
                  className={`block px-4 py-2 hover:bg-red hover:text-white transition-all duration-100 cursor-pointer text-nowrap  w-full font-semibold `}
                >
                  <Link href={"/about-us"}>{items}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
