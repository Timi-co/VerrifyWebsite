"use client";
import React from "react";
import TextHeading from "./TextHeading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
import { CustomPrevArrow, CustomNextArrow } from "./CarouselComponent";
import sample from "@/public/images/testimonialSample.jpg";
const testimonials = [
  {
    id: 1,
    testimony: `Verrify made the process of verifying my property documents so easy and hassle-free.
         Their team was professional and efficient, and I felt confident knowing that my documents were in good hands.`,
    image: sample,
    name: "John Doe",
    occupation: "Real Estate Agent",
  },
  {
    id: 2,
    testimony: `Verrify made the process of verifying my property documents so easy and hassle-free.
         Their team was professional and efficient, and I felt confident knowing that my documents were in good hands.`,
    image: sample,
    name: "John Doe",
    occupation: "Real Estate Agent",
  },
  {
    id: 3,
    testimony: `Verrify made the process of verifying my property documents so easy and hassle-free.
         Their team was professional and efficient, and I felt confident knowing that my documents were in good hands.`,
    image: sample,
    name: "John Doe",
    occupation: "Real Estate Agent",
  },
  {
    id: 4,
    testimony: `Verrify made the process of verifying my property documents so easy and hassle-free.
         Their team was professional and efficient, and I felt confident knowing that my documents were in good hands.`,
    image: sample,
    name: "John Doe",
    occupation: "Real Estate Agent",
  },
  {
    id: 5,
    testimony: `Verrify made the process of verifying my property documents so easy and hassle-free.
         Their team was professional and efficient, and I felt confident knowing that my documents were in good hands.`,
    image: sample,
    name: "John Doe",
    occupation: "Real Estate Agent",
  },
];
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1440px] mx-auto px-[80px] py-[100px] flex flex-col gap-[80px] items-center ">
      <div className="text-center">
        <TextHeading
          title="What Our Customers Say"
          subText="See how LuxNet is changing money management through real stories from happy users."
        />
      </div>
      <div className="slider-container w-full text-white">
        <Slider {...settings}>
          {testimonials.map((item) => (
            <div key={item.id}>
              <TestimonialCard
                testimony={item.testimony}
                name={item.name}
                img={item.image}
                occupation={item.occupation}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
