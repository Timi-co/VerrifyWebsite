"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Logo from "@/public/svg/logo.svg";
import Link from "next/link";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
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
        scrolled ? "top-0 glass shadow-md" : "bg-transparent top-3"
      }`}
    >
      <div
        className={`flex items-center justify-between py-[10px]  rounded-full mx-auto px-[20px] ${
          scrolled ? "text-white w-full" : "glass w-[700px] "
        }`}
      >
        <div className="text-[20px]">
          <Image width={80} height={80} src={Logo} alt="Logo" />
        </div>
        <div className="flex text-white gap-[20px] text-[16px] w-fit">
          <Link href="/">Home</Link>
          <Link href="/about">About us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <a href="#">
          <button className="circle-btn py-[10px] px-[30px] text-white text-[14px] ">Sign In</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
