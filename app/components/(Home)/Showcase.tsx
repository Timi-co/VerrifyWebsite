import React from "react";
import Image from "next/image";
import RockyImage from "@/public/svg/rockyImage.svg";
import Navbar from '../(global)/Navbar';
import Link from 'next/link'
const Showcase = () => {
  return (
    <>
      <Navbar />
      <div className="text-white h-[100vh] lg:h-[120vh] relative flex  justify-center items-center lg:items-start">
        <div className="flex flex-col lg:mt-[150px] text-center md:w-[800px] gap-[20px]">
          <h3 className="capitalize text-[30px] md:text-[50px] font-[600]">
            <span className="text-light-purple">Verrify</span> Real Estate
            Property from your comfort zone
          </h3>
          <p className="text-[14px]">
            Easily search, verify, and purchase genuine real estate properties
            without leaving your home. Access trusted land data and make
            confident decisions from anywhere.
          </p>
          <Link href="/contact">
            <button className="radial-glow py-[10px] px-[15px] rounded-[10px] ">
              Contact us
            </button>
          </Link>
        </div>
        <div className="absolute bottom-0">
          <Image src={RockyImage} alt="rockyImage" />
        </div>
      </div>
    </>
  );
};

export default Showcase;
