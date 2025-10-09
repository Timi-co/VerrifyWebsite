import React from "react";
import TextHeading from "./TextHeading";
import Image from 'next/image'
import TonyElumelu from "@/public/images/TonyElumeluFoundation.png"
import Triconna from "@/public/images/Triconna-Logo.png"
import MasterCardFoundation from "@/public/images/masterCardFoundation.png"
const Endorsement = () => {
  return (
    <div className="px-[80px] py-[50px]">
      <div className="max-w-[1440px] mx-auto flex flex-col  gap-[50px]">
        <div className="text-center">
          <TextHeading
            title="Trusted by the Best"
            subText="See the brands, partners, and professionals who stand behind our vision."
          />
        </div>
        <div className="flex justify-between items-center">
            <Image src={TonyElumelu} className="h-[50px] w-[200px]" alt="Tony Elumelu Foundation" />
            <Image src={Triconna} className="h-[80px] w-[200px]"   alt="Triconna" />
            <Image src={MasterCardFoundation} className="h-[150px] w-[150px]"  alt="Master Card Foundation" />
        </div>
      </div>
    </div>
  );
};

export default Endorsement;
