import React from "react";
import Image from "next/image";
import missionImage from "@/public/images/missionImage.png";
const visionMission = [
  {
    id: 1,
    title: "Mission",
    subText: `To make real estate verification simple, reliable, and accessible for everyone by combining technology, expertise, and transparency ensuring every
     property transaction is secure and stress-free.`,
  },
  {
    id: 2,
    title: "Vision",
    subText: `To be the leading trusted platform for property verification in Africa, setting the standard for transparency 
    and confidence in real estate transactions.`,
  },
];
const Mission = () => {
  return (
    <div className="py-[50px] lg:py-[100px] px-[20px] lg:px-[80px] ">
      <div className="max-w-[1440px] mx-auto flex gap-[30px] lg:gap-0 flex-col-reverse lg:flex-row">
        <div className="flex-1 flex flex-col gap-[30px]">
          <div>
           
            <h1 className="text-header-txt text-[40px] font-bold">
              Our Mission & Vision
            </h1>
            <p className="text-gray-txt">
              What drives Verrify and where we’re headed.
            </p>
          </div>

          <div className="flex flex-col gap-[20px]">
            {visionMission.map((item) => (
              <div key={item.id}>
                <h3 className="text-header-txt text-[30px] font-bold">
                  {item.title}
                </h3>
                <p className="text-gray-txt text-[16px]">{item.subText}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <Image width={450} src={missionImage} alt="Mission Image" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
