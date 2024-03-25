'use client'
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Quiksearch from "./categories/qucik-search";
import Careerinfo from "./categories/Career-info";
import Religioninfo from "./categories/religion-Info";
import Personalinfo from "./categories/personal-info";
import Username from "./categories/username";

const AccordionItem = ({ title, content, index, isOpen, onToggle }) => {
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
          onClick={onToggle}
          className={`flex items-center justify-between w-full p-4 font-medium bg-red text-white text-left  ${
            isOpen ? "" : "border-b border-gray-400"
          }`}
          data-accordion-target={`#accordion-flush-body-${index}`}
          aria-expanded={isOpen}
          aria-controls={`accordion-flush-body-${index}`}
        >
          <span className="font-bold text text-white">{title}</span>
          <div
            className={` transition-transform duration-500 rotate-180 shrink-0 ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
          >
            <FaPlus />
          </div>
        </button>
      </div>
      <div
        id={`accordion-flush-body-${index}`}
        className={`${isOpen ? "" : "hidden"}`}
        aria-labelledby={`accordion-flush-heading-${index}`}
      >
        <div className="py-1 border-b">{content}</div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionData = [
    { content: <Quiksearch />, title: "Quick Search" },
    { content: <Careerinfo />, title: "Career Info" },
    { content: <Religioninfo />, title: "Religion Info" },
    { content: <Personalinfo />, title: "Personal Info" },
    { content: <Username />, title: "Username" },
  ];

  return (
    <div className="shadow-xl">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
