"use client";

import React from "react";
import Image from "next/image";
function SearchVerticalCard() {
  const data = [
    { label: "Age", value: "22 Years old", label2: "Height", value2: '5.11"' },
    {
      label: "Religion",
      value: "Islam",
      label2: "Caste / Sect",
      value2: "Jaat / Sunni - Barelvi",
    },
    {
      label: "Mother Tongue",
      value: "Punjabi",
      label2: "Marital Status",
      value2: "Single",
    },
    {
      label: "Location",
      value: "Coventry, United Kingdom",
      label2: "Verification Status",
      value2: "Pending",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center p-6 gap-3 bg-white rounded-xl shadow-xl shadow-gray-400">
      <div className="flex max-h-[200px] ">
        <Image
          src={"/landing/searchuser.jpg"}
          width={0}
          height={0}
          className="w-full "
          sizes="100vw"
          alt="cerficateimg"
        />
      </div>

      <div className="w-full ">
        <div className="flex items-center justify-between">

        <h1 className="text-red font-semibold">Faisal Rafique</h1>
        <Image
            src={"/landing/pk.svg"}
            width={40}
            height={40}
            sizes="100vw"
            alt="cerficateimg"
          />
        </div>

        <div className="bg-white  ">
          {data.map((item, index) => (
            <ul
              key={index}
              className={`grid grid-cols-4 items-center !text-start ${
                index % 2 ? "bg-gray-200" : ""
              }`}
            >
              <li className="px-6 py-1   text-[12px] font-medium text-gray-900">
                {item.label}
              </li>
              <li className="px-6 py-1   text-[12px] text-gray-500">
                {item.value}
              </li>
              <li className="px-6 py-1   text-[12px] font-medium text-gray-900">
                {item.label2}
              </li>
              <li className={`"px-6 py-1   text-[12px] text-gray-500 ${index===3?"bg-gray-400 !px-4 !py-3 rounded-2xl text-white text-center":" "}`}>
                {item.value2}
              </li>
            </ul>
          ))}
        </div>
        <div className="flex gap-2 items-center ">
          <button className="text-white rounded-[4px] bg-green-500 cursor-pointer text-center w-full py-1 my-2">
           phone
          </button>
          <button className="text-white rounded-[4px] bg-[#3caee6] cursor-pointer text-center w-full py-1 my-2">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchVerticalCard;
