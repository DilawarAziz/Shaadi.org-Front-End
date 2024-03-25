"use client";

import React from "react";
import Image from "next/image";
function SearchCard() {
  const data = [
    { label: 'Age', value: '22 Years old',label2: 'Height', value2: '5.11"' },
    { label: 'Religion', value: 'Islam',label2: 'Caste / Sect', value2: 'Jaat / Sunni - Barelvi' },
    { label: 'Mother Tongue', value: 'Punjabi', label2: 'Marital Status', value2: 'Single' },
    { label: 'Location', value: 'Coventry, United Kingdom',label2: 'Verification Status', value2: 'Pending' },
  ];
  return (
    <div className="flex p-2 gap-3 bg-white rounded-xl">
      <Image
        src={"/landing/searchuser.jpg"}
        width={0}
        height={0}
        className="w-[20%] max-h-[200px]"
        sizes="100vw"
        alt="cerficateimg"
      />
      <div className="w-[80%]">
        <h1 className="text-red font-semibold">Faisal Rafique</h1>
        <div className="flex gap-4 items-center">
          <h2>Profile Complete</h2>
          <div className="w-[70%] h-4 bg-gray-200 rounded-full">
            <div
              className="h-full text-center text-sm text-white bg-[#13b955] rounded-full"
              style={{ width: `${"65"}%` }}
            >
              {"65"}%
            </div>
          </div>
        </div>
      <div className="bg-white  ">
        {data.map((item, index) => (
          <ul key={index} className={`grid grid-cols-4 !text-start ${index%2?"bg-gray-200":""}`}>
            <li className="px-6 py-1  whitespace-nowrap text-sm font-medium text-gray-900">{item.label}</li>
            <li className="px-6 py-1  whitespace-nowrap text-sm text-gray-500">{item.value}</li>
            <li className="px-6 py-1  whitespace-nowrap text-sm font-medium text-gray-900">{item.label2}</li>
            <li className="px-6 py-1  whitespace-nowrap text-sm text-gray-500">{item.value2}</li>
            
          </ul>
        ))}
      </div>
      <div className="flex gap-2 items-center">
    <button className="text-white rounded-lg bg-[#e62e04] cursor-pointer text-center w-full py-1 my-2">56% Match</button>
    <button className="text-white rounded-lg bg-[#3caee6] cursor-pointer text-center w-full py-1 my-2">View Profile</button>
      </div>
      </div>
    </div>
  );
}

export default SearchCard;
