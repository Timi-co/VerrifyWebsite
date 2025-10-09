"use client";
interface AccordionProps {
  question: string;
  answer: string;
}
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
const FaqAccordion = ({ question, answer }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col verified_card">
      <div className="flex justify-between items-center">
        <h4 className="text-[18px] text-header-txt">{question}</h4>
        <div onClick={() => setIsOpen(!isOpen)} className="text-header-txt cursor-pointer">{!isOpen ? <FaPlus /> : <FaMinus />}</div>
      </div>
      {isOpen && (
        <div
          dangerouslySetInnerHTML={{ __html: answer }}
          className="text-gray-txt"
        />
   
   
      )}
    </div>
  );
};

export default FaqAccordion;
