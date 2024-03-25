'use client'
import React from "react";

function TextFeild({
 
  name,
  register,
  placeholder,
  inputType,
  error,
  label,
  maxLength,
  minLength,
  className,
  styleInput,
  styleLabel,
  required,
  pattern
}) {
  return (
    <div className={`w-full ${className}`}>
      <label
        className={`block text-sm  font-semibold ${styleLabel} `}
      >
        {label}
      </label>
      <input
      
        name={name}
        type={inputType}
        placeholder={placeholder}
        className={`  w-full border-2 border-gray-200   mt-1 p-3 !pl-5 !py-2.5   focus:ring-red outline-none focus:border-red block   sm:text-sm  rounded-full   ${
          error ? " outline-2 !border-[#fc3939]" : ""
        } `}
        {...register(name, {
          ...(required ? { required: ` ${label} is required` } : {}),
          maxLength,
          minLength,
          ...(pattern? pattern={ 
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Invalid email address"
          }:{})
        })}
      />
      {error&&<span className={` block  text-sm  !text-[#fc3939]`}>
        {error?.replace(/\*/g, '')}
      </span>}
    </div>
  );
}

export default TextFeild;