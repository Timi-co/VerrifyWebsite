"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Logo from "@/public/svg/logo.svg";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import Button from "./Button";
import NavLinks from "./NavLinks";
import { RiMenu5Line } from "react-icons/ri";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed  left-0 z-50 transition-all duration-300 w-full    ${
        scrolled ? "top-0 glass shadow-md" : "bg-transparent md:top-3"
      }`}
    >
      <div
        className={`flex items-center justify-between py-[10px]  md:rounded-full mx-auto px-[20px] ${
          scrolled ? "text-white w-full" : "glass w-full md:w-[700px] "
        }`}
      >
        <div className="text-[20px]">
          <Image width={80} height={80} src={Logo} alt="Logo" />
        </div>
        <div className="hidden md:flex  text-white gap-[20px] text-[16px] w-fit">
          <NavLinks />
        </div>
        <a className="hidden md:flex" href="#">
          <button className="circle-btn py-[10px] px-[30px] text-white text-[14px] ">
            Sign In
          </button>
        </a>
        <div className="text-header-txt text-[30px] md:hidden">
          {!isOpen ? <span onClick={() => setIsOpen(true)}><RiMenu5Line /></span> : <span onClick={() => setIsOpen(false)}><IoClose /></span>}
        </div>
      </div>
      {isOpen && (
        <div className="glass text-header-txt flex flex-col text-[18px] items-center justify-center gap-[20px] py-[30px]">
          <NavLinks />
          <Button text="Sign in" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
