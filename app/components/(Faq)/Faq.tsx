import React from "react";
import TextHeading from "../(global)/TextHeading";
import FaqAccordion from "./FaqAccordion";
export const faqs = [
  {
    id: 1,
    question: "What is Verrify?",
    answer: `
      Verrify is an <strong>AI-powered digital ecosystem</strong> that verifies land and property records in Nigeria. 
      It protects buyers, companies, and investors from fraud by checking documents against trusted sources 
      and spotting irregularities instantly.
    `,
  },
  {
    id: 2,
    question: "How does Verrify work?",
    answer: `
      Verrify uses AI and data integration to:
      <ul class="list-disc ml-5 mt-2 space-y-1">
        <li>Scan and authenticate land titles, survey plans, and government records.</li>
        <li>Detect duplicate sales or overlapping claims.</li>
        <li>Deliver a Verification Report you can trust before making a property decision.</li>
      </ul>
    `,
  },
  {
    id: 3,
    question: "Why do I need to verify property?",
    answer: `
      In Nigeria, property fraud is common. Fake documents, multiple sales of the same land, 
      and unapproved developments cost buyers billions yearly. 
      <br><br>
      Verrify gives you peace of mind by confirming ownership and authenticity before money changes hands.
    `,
  },
  {
    id: 4,
    question: "Who can use Verrify?",
    answer: `
      <ul class="list-disc ml-5 mt-2 space-y-1">
        <li><strong>Real Estate Companies:</strong> Protect your deals and reputation.</li>
        <li><strong>Law Firms & Banks:</strong> Verify client properties during transactions.</li>
        <li><strong>Everyday Buyers & Investors:</strong> Ensure you’re buying genuine land.</li>
      </ul>
    `,
  },
  {
    id: 5,
    question: "Can Verrify be used for industries beyond real estate?",
    answer: `
      Yes. Our system can adapt to <strong>construction, insurance, and mortgage lending</strong>, 
      where verification of land or property ownership is critical.
    `,
  },
  {
    id: 6,
    question: "What are the benefits of using Verrify?",
    answer: `
      <ul class="list-disc ml-5 mt-2 space-y-1">
        <li><strong>Fraud Protection:</strong> Avoid scams and false claims.</li>
        <li><strong>Faster Decisions:</strong> Verification takes hours, not weeks.</li>
        <li><strong>Confidence:</strong> Buy or invest knowing your property is genuine.</li>
        <li><strong>Trust Factor:</strong> Brings transparency to one of Nigeria’s riskiest sectors.</li>
      </ul>
    `,
  },
  {
    id: 7,
    question: "How much does it cost?",
    answer: `
      Verrify offers:
      <ul class="list-disc ml-5 mt-2 space-y-1">
        <li><strong>Basic checks:</strong> Free (ownership lookups).</li>
        <li><strong>Deep verification reports:</strong> Affordable rates for serious buyers, companies, and institutions.</li>
      </ul>
    `,
  },
  {
    id: 8,
    question: "Is my data safe with Verrify?",
    answer: `
      Absolutely. We use <strong>bank-grade encryption</strong> and store only what’s necessary 
      to complete your verification. Your documents remain private and secure.
    `,
  },
  {
    id: 9,
    question: "How fast is verification?",
    answer: `
      <ul class="list-disc ml-5 mt-2 space-y-1">
        <li><strong>Basic checks:</strong> Delivered within minutes.</li>
        <li><strong>Full verification reports:</strong> Typically available within 24–72 hours, depending on document complexity.</li>
      </ul>
    `,
  },
  {
    id: 10,
    question: "How do I get started?",
    answer: `
      Simply:
      <ol class="list-decimal ml-5 mt-2 space-y-1">
        <li>Create a Verrify account.</li>
        <li>Upload your property documents.</li>
        <li>Get your Verification Report.</li>
      </ol>
    `,
  },
];

const Faq = () => {
  return (
    <div className="px-[80px] py-[100px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[40px]">
        <div className="text-center">
          <TextHeading
            title="Your Questions, Our Answers"
            subText="Got questions about property checks? We’ve got simple, straight answers to help you verify with confidence."
          />
        </div>
        <div className="flex flex-col gap-[20px]">
          {faqs.map((data) => (
            <FaqAccordion
              key={data.id}
              question={data.question}
              answer={data.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
