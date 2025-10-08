import React from "react";
import Image from "next/image";
import verifiedOne from "@/public/svg/verifiedOne.svg";
import verifiedTwo from "@/public/svg/verifiedTwo.svg";
import verifiedThree from "@/public/svg/verifiedThree.svg";
import TextHeading from "../(global)/TextHeading";
const cardOptions = [
  {
    id: 1,
    image: verifiedOne,
    title: "Upload Documents",
    desc: "Securely upload your property documents for quick verification.",
  },
  {
    id: 2,
    image: verifiedTwo,
    title: "Verrify verifies data",
    desc: "We carefully check every document to ensure it’s accurate and authentic.",
  },
  {
    id: 3,
    image: verifiedThree,
    title: "Make it visible",
    desc: "We present your verified information in a way that’s easy to see and understand.",
  },
];
const VerifiedEasy = () => {
  return (
    <div className="px-[20px] lg:px-[80px] flex flex-col gap-[80px] py-[50px] md:py-[100px]">
      <div className="flex flex-col gap-[15px] items-center">
        <TextHeading
          title="Getting Verified Is Easy"
          subText="Here’s how we help you check and secure property details fast."
        />
      </div>
      <div className="grid grid-cols-1 md:flex  md:flex-row gap-[30px] justify-center">
        {cardOptions.map((card) => (
          <div
            key={card.id}
            className="verified_card md:w-[300px] h-[350px] flex flex-col justify-center gap-[15px]"
          >
            <Image height={90} width={90} src={card.image} alt="verifiedOne" />
            <h3 className="text-header-txt text-[20px] font-[500]">
              {card.title}
            </h3>
            <p className="text-gray-txt text-[14px]">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerifiedEasy;
