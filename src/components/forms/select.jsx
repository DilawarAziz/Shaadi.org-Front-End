import React from "react";
import { useForm } from "react-hook-form";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const SelectInput = ({ label, options,register,required,error,name, ...rest }) => {
  const demooptions = [
    { label: "United States", value: "US" },
    { label: "Canada", value: "CA" },
    { label: "United Kingdom", value: "UK" },
    { label: "Australia", value: "AU" },
    { label: "Germany", value: "DE" },
    { label: "France", value: "FR" },
    { label: "Japan", value: "JP" },
    { label: "China", value: "CN" },
    { label: "India", value: "IN" },
    { label: "Brazil", value: "BR" }
  ];
  let err = error[name]?.message?.replace(/\*/g, '')
  return (
    <div className="relative w-full">
      <label className="block text-sm  font-semibold">{label}</label>
      <select
        {...rest}
        {...register(name, {
            ...(required ? { required: ` ${label} is required` } : {}),
          })}
        className={`  px-4 py-3 mt-1 bg-white   border rounded-full w-full focus:outline-none focus:ring-primary focus:border-red focus:border-2 ${error[name]?.message?"border-[#fc3939]":""}`}
      >
        {demooptions.map((option) => (
          <option key={option.value} value={option.value} className="w-full">
            {option.label}
          </option>
        ))}
      </select>
    
       <span className="text-[#fc3939] text-sm ">{err}</span>
    </div>
  );
};

export default SelectInput;
