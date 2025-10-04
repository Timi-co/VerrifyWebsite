import React from "react";
import TextHeading from "../(global)/TextHeading";
import Image from "next/image";
import CEO from "@/public/images/CEO.jpg";
import COO from "@/public/images/COO.jpg";
import Gloria from "@/public/images/Gloria.jpg";
import IBK from "@/public/images/IBK.jpg";
import Reuben from "@/public/images/Reuben.jpg";
import testimonialSample from "@/public/images/testimonialSample.jpg";
import CMO from "@/public/images/CMO.jpg";
import bode from "@/public/images/bode.png";

const teamData = [
  {
    id: 1,
    name: "Eromosele Akhigbe",
    position: "COO",
    image: COO,
  },
  {
    id: 2,
    name: "Tobi Joseph",
    position: "CMO",
    image: CMO,
  },
  {
    id: 3,
    name: "Olabode Samuel",
    position: "Technical Lead",
    image: bode,
  },
  {
    id: 4,
    name: "Gloria Madubueze",
    position: "Software Engineer",
    image: Gloria,
  },
  {
    id: 5,
    name: "Reuben Alabi",
    position: "Software Engineer",
    image: Reuben,
  },
  {
    id: 6,
    name: "Ibukun Odemwa",
    position: "Designer",
    image: IBK,
  },
];
const Team = () => {
  return (
    <div className="px-[80px] py-[100px]">
      <div className="max-w-[1440px] flex flex-col  gap-[100px]">
        <div className="text-center">
          <TextHeading
            title="Meet our Team"
            subText="Discover the passionate and talented individuals who make our team extraordinary."
          />
        </div>
        <div className="flex gap-[20px]">
          <div className="flex-1 flex flex-col gap-[12px]">
            <Image
              className="h-[90%] rounded-[20px] object-cover"
              src={CEO}
              alt="CEO"
            />
            <div className="flex flex-col gap-[5px]">
              <h3 className="text-header-txt">Timi Joseph</h3>
              <p className="text-gray-txt text-[14px]">CEO</p>
            </div>
          </div>
          <div className="flex-[2] grid grid-cols-3 gap-[20px]">
            {teamData.map((item) => (
              <div key={item.id} className="flex flex-col gap-[10px]">
                <Image
                  className="h-[250px] rounded-[20px] object-cover gap-[10px]"
                  src={item.image}
                  alt={item.position}
                />
                <div className="flex flex-col gap-[5px]">
                  <h3 className="text-header-txt">{item.name}</h3>
                  <p className="text-gray-txt text-[14px]">{item.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
