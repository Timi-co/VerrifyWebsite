import React from "react";
import ceoImage from "@/public/images/CEO.jpg";
import Image from "next/image";
import TextHeading from "../(global)/TextHeading";
import layerBlur from "@/public/images/layerBlur.png";
const Founder = () => {
  return (
    <div className="px-[80px] py-[100px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[80px]">
        <div className="text-center">
          <TextHeading
            title="Meet the founder of Verrify"
            subText="The vision and passion behind our mission."
          />
        </div>
        <div className="flex items-center">
          <div className="flex-1 flex justify-center relative">
            <div className="h-[400px] w-fit flex flex-col gap-[20px] relative">
              <Image
                className="absolute left-[-10%] top-[-5%] height={80}"
                src={layerBlur}
                alt="layerBlur"
              />
              <Image
                className="rounded-[15px]"
                height={400}
                src={ceoImage}
                alt="CEO Image"
              />
              <div className="flex flex-col gap-[5px]">
                <h4 className="text-header-txt text-[18px] font-[500]">Timi Joseph</h4>
                <p className="text-gray-txt text-[14px]">Founder</p>
              </div>
            </div>

            <Image
              className="absolute right-[12%] bottom-[-5%] height={80}"
              src={layerBlur}
              alt="layerBlur"
            />
          </div>
          <div className="flex-1">
            <p className="text-gray-txt text-justify">
              Our founder started this company with a simple but powerful
              belief: everyone deserves easy, safe access to land and property.
              Growing up seeing how complicated, expensive, and risky real
              estate could be, they envisioned a different path one where
              ordinary people, families, and investors could own land without
              fear or hidden costs. With years of hands-on experience, they
              built a platform of trust, transparency, and support. Every plot
              we offer is carefully verified, every process simplified, and
              every client treated as a partner in building a secure future.
              Today, our founder continues to lead with integrity, innovation,
              and a deep commitment to helping others achieve their dreams of
              ownership. Their story is our story turning land and property from
              a distant dream into a reality for thousands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
