import React from "react";
import SocialRing from "./SocialRing";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
const companyLinks = [
  { name: "About", href: "#" },
  { name: "Our Blog", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Open Source", href: "#" },
];
const Footer = () => {
  return (
    <footer className=" text-white px-[80px] flex justify-between py-[80px]">
      <div className="w-[350px] flex flex-col gap-[40px]">
        <p className="text-[16px] text-gray-txt">
          Subscribe to our newsletter and never miss an update. Stay informer
          about the latest news, trends, and exclusive offers.
        </p>
        <div className="flex flex-col gap-[30px]">
          <div className=" bg-input-bg flex rounded-[10px]">
            <input
              className=" py-[10px] w-full px-[5px] outline-none"
              type="email"
              placeholder="Enter your email"
            />
            <button className="py-[10px] px-[20px] radial-glow text-[16px] font-[500] rounded-[10px] cursor-pointer">
              Subscribe
            </button>
          </div>
          <div className="flex gap-4">
            <SocialRing icon={<FaFacebookF />} link="facebook.com" />
            <SocialRing icon={<FaInstagram />} link="instagram.com" />
            <SocialRing icon={<FaLinkedinIn />} link="instagram.com" />
            <SocialRing icon={<BsTwitterX />} link="instagram.com" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[12px]">
        <h3 className="text-lg font-[500] text-header-txt">Contact us</h3>
        <div className="text-[16px] flex flex-col gap-[10px] text-gray-txt">
          <a href="#" className="flex gap-2 items-center ">
            <span>
              <FaPhoneAlt />
            </span>{" "}
            +123 456 7890
          </a>
          <a href="#" className="flex gap-2 items-center">
            <span>
              <CiMail />
            </span>{" "}
            luxnetltd@gmail.com
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <h3 className="text-lg font-[500] text-header-txt">Company</h3>

        <div className="text-[16px] flex flex-col gap-[10px] text-gray-txt">
          {companyLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <h3 className="text-lg font-[500] text-header-txt">Legal</h3>

        <div className="text-[16px] flex flex-col gap-[10px] text-gray-txt">
          <a href="#" className="flex gap-2 items-center ">
            Privacy Policy
          </a>
          <a href="#" className="flex gap-2 items-center">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
