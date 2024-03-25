"use client";
import React, { useState } from "react";
const Dropdown = ({
  title,
  className,
  drophover,
  options,
  onChange,
  error,
  buttonStyle,
  styleTitle,
  name,
  iconStyle,
  dropdownStyle
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  // const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionClick = (option) => {
    // console.log(option);
    if (option?.name) {
      setSelectedOption(option.name);
    } else {
      setSelectedOption(option);
    }
    setDropdownOpen(false);
    if (onChange) {
      onChange(option);
    }
    // Do any additional handling based on the selected option if needed
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
        <h1>{name}</h1>
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className={`rounded-full bg-white text-gray-500 outline-none font-semibold justify-between w-full text-sm px-2 py-2 text-center inline-flex items-center font-noto ${buttonStyle}`}
          type="button"
        >
          {selectedOption ? selectedOption : title}
          <svg
            className={`w-2.5 h-2.5 ms-3 ${
              isDropdownOpen ? "transform rotate-180" : ""
            } ${iconStyle}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {/* Dropdown menu */}

        {isDropdownOpen && !options && (
          <div
            id="dropdown"
            className="z-10 absolute mt-0.5 w-full bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 bg-white rounded-lg font-noto"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Settings
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Earnings
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        )}
        {isDropdownOpen && options && (
          <div
            id="dropdown"
            className={`z-10 absolute mt-0.5 w-full bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 ${dropdownStyle}`}
          >
            <ul
              className="py-2 max-h-[400px] overflow-auto  text-sm text-gray-700 bg-white rounded-lg"
              aria-labelledby="dropdownDefaultButton"
            >
              {options?.map((items, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(items)}
                  className={`block px-4 py-2 hover:bg-red hover:text-white transition-all duration-100 cursor-pointer text-nowrap  w-full font-semibold ${styleTitle}`}
                >
                  {items?.name ? items?.name : items}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {error&&<span className="text-red-400 block text-[12px] mt-1  font-poppin font-normal">
        {error}
      </span>}
    </>
  );
};

export default Dropdown;