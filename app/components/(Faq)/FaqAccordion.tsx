"use client"
interface AccordionProps {
  question:string;
  answer:string;
}
import { FaPlus , Faminus } from "react-icons/fa";
const FaqAccordion = ({ question, answer }: AccordionProps) => {
  return (
    <div className="flex flex-col verified_card">
      <div>
        <h4>{question}</h4>
        <div>
            <FaPlus />
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: answer }}>
        {answer}
      </div>
    </div>
  );
};

export default FaqAccordion;
