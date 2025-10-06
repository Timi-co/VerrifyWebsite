"use client";
import { useState } from "react";
import React from "react";
import SocialRing from "../(global)/SocialRing";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";
import Wave from "@/public/images/wave.png";
import {successToast ,  errorToast} from '@/app/utils/alerts'
const ContactContent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ prevent page reload
    setIsLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/contact-us/request`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json(); // ✅ await the response

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

    //   setSuccessMsg("✅ Message sent successfully!");
      successToast('Message sent successfully!')
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
    //   setErrorMsg("❌ Failed to send message. Please try again.");
      errorToast('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-[100px] px-[80px] ">
      <div className="flex justify-between items-center testimonial_card">
        <div className="flex flex-col gap-[10px] items-center justify-center">
          <h2 className="text-[20px] font-bold text-header-txt">
            Phone Number
          </h2>
          <p className="text-gray-txt">+123 456 7890</p>
        </div>
        <div className="flex flex-col gap-[10px] items-center justify-center">
          <h2 className="text-[20px] font-bold text-header-txt">Socials</h2>
          <div className="flex gap-4">
            <SocialRing icon={<FaFacebookF />} link="facebook.com" />
            <SocialRing icon={<FaInstagram />} link="instagram.com" />
            <SocialRing icon={<FaLinkedinIn />} link="linkedin.com" />
            <SocialRing icon={<BsTwitterX />} link="twitter.com" />
          </div>
        </div>
        <div className="flex flex-col gap-[10px] items-center justify-center">
          <h2 className="text-[20px] font-bold text-header-txt">
            Email Address
          </h2>
          <a
            className="text-gray-txt underline"
            href="mailto:luxnetltd@gmail.com"
          >
            luxnetltd@gmail.com
          </a>
        </div>
      </div>

      <div className="flex mt-[50px]">
        <div className="flex flex-col items-center w-full gap-[30px]">
          <h1 className="text-[40px] text-center text-header-txt font-bold w-full flex items-center justify-center">
            Love to hear from you, Get in touch{" "}
            <Image className="w-fit h-[40px]" src={Wave} alt="hands waving" />
          </h1>

          <form className="w-[700px]" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[10px]">
                <label className="text-gray-txt">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-input-bg p-2 rounded-lg text-gray-txt"
                  required
                />
              </div>

              <div className="flex flex-col gap-[10px]">
                <label className="text-gray-txt">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-input-bg p-2 rounded-lg text-gray-txt"
                  required
                />
              </div>

              <div className="flex flex-col gap-[10px]">
                <label className="text-gray-txt">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-input-bg p-2 rounded-lg text-gray-txt"
                />
              </div>

              <div className="flex flex-col gap-[10px]">
                <label className="text-gray-txt">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-input-bg p-2 rounded-lg h-[30vh] text-gray-txt"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="py-[10px] px-[20px] radial-glow text-[16px] font-[500] rounded-[10px] cursor-pointer text-white"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>

                {successMsg && (
                  <p className="text-green-600 mt-2">{successMsg}</p>
                )}
                {errorMsg && <p className="text-red-600 mt-2">{errorMsg}</p>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
