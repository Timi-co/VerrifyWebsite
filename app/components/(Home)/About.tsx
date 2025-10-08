import React from "react";
import Image from "next/image";
import aboutImg from "@/public/images/aboutImg.png";
import Button from "../(global)/Button";
import Link from "next/link";
const About = () => {
  return (
    <div className="px-[20px] lg:px-[80px] py-[100px] ">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-[40px] ">
        <div className="flex-1">
          <div className="h-[300px] md:h-[500px] glass p-[20px] rounded-xl">
            <Image
              className="h-full object-cover"
              src={aboutImg}
              alt="aboutImg"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <h4 className="text-light-purple">About Verrify</h4>
            <h1 className="text-header-txt text-[40px] lg:text-[40px] font-bold">
              Leading the Real Estate Technology Revolution
            </h1>
          </div>

          <p className="text-gray-txt">
            We are a cutting-edge digital platform designed to visually display
            verified land ownership data, making it instantly accessible and
            easy to understand at your fingertips. By combining technology,
            transparency, and user-friendly design, Verify empowers individuals,
            families, businesses, and investors to make informed real estate
            decisions.
          </p>
          <Link href="/about">
            <Button text="Learn More" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
