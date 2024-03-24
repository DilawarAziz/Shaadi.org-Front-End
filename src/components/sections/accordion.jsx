"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import Quiksearch from "./categories/qucik-search";
import Careerinfo from "./categories/Career-info";
import Religioninfo from "./categories/religion-Info";
import Personalinfo from "./categories/personal-info";
import Username from "./categories/username";
const AccordionItem = ({ title, content, index,component }) => {
  const [isExpanded, setExpanded] = useState(false);
  const handleToggle = () => {
    setExpanded(!isExpanded);
  };
  return (
    <div
      className=""
      data-accordion="collapse"
      data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      data-inactive-classes="text-gray-500 dark:text-gray-400"
    >
      <div id={`accordion-flush-heading-${index}`}>
        <button
          type="button"
          onClick={handleToggle}
          className={`flex items-center justify-between w-full p-4 font-medium bg-red text-white text-left  ${
            !isExpanded ? "border-b   border-gray-400" : ""
          }`}
          data-accordion-target={`#accordion-flush-body-${index}`}
          aria-expanded={isExpanded}
          aria-controls={`accordion-flush-body-${index}`}
        >
          <span className="font-bold text text-white">{title}</span>
          <div
            className={` transition-all rotate-180 shrink-0 ${
              !isExpanded ? "rotate-0" : "rotate-45"
            }`}
          >
            <FaPlus />
          </div>
        </button>
      </div>
      <div
        id={`accordion-flush-body-${index}`}
        className={`${isExpanded ? "" : "hidden"}`}
        aria-labelledby={`accordion-flush-heading-${index}`}
      >
        <div className="py-1 border-b   ">
          {component}
        </div>
      </div>
    </div>
  );
};
const Accordion = () => {
  const accordionData = [
    { component: <Quiksearch />, title: "Quick Search" },
    { component: <Careerinfo />, title: "Career Info" },
    { component: <Religioninfo />, title: "Religion Info" },
    { component: <Personalinfo />, title: "Personal Info" },
    { component: <Username />, title: "Username" },
  ];
  return (
    <div className="shadow-xl">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          component={item.component}
        />
      ))}
    </div>
  );
};
export default Accordion;
