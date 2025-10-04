import React from "react";
import Navbar from "../(global)/Navbar";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
const AboutShowcase = () => {
  return (
    <>
      <header className="bg-primary h-[25vh]">
        <Navbar />
      </header>
      {/* Code for Showcase Area */}
      <div className="h-[100vh] about_bg">
            <div className="flex flex-col gap-4 justify-center items-center h-full ">
                <h1 className="text-[40px] font-bold">About us</h1>
                <div className="flex gap-2 items-center">
                    <Link className="cursor-pointer hover:border-b" href='/'>Verrify</Link>
                    <span><FaAngleRight /></span>
                    <p>About us</p>
                </div>
            </div>

      </div>
    </>
  );
};

export default AboutShowcase;
