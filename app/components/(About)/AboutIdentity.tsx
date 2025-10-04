import React from "react";
import aboutVerified from "@/public/images/aboutVerified.png";
import Image from "next/image";
import Button from "../(global)/Button";
const AboutIdentity = () => {
  return (
    <div className="py-[100px] px-[80px]">
      <div className="max-w-[1440px] mx-auto flex items-center gap-[40px]">
        <div className="testimonial_card flex-1">
          <Image
            src={aboutVerified}
            alt="aboutVerified"
            className="w-full h-[70vh] px-[10px] object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-[30px]">
          <h1 className="text-[40px] text-header-txt font-bold">Who We Are</h1>
          <p className="text-gray-txt">
            At Verrify, we’re on a mission to bring trust and transparency to
            every property transaction. We combine technology and expertise to
            make real estate verification simple, reliable and accessible for
            everyone from individual buyers to businesses. Our team is
            passionate about protecting your investment and giving you the
            confidence to make informed decisions.
          </p>
          <Button text="Learn more" />
        </div>
      </div>
    </div>
  );
};

export default AboutIdentity;
