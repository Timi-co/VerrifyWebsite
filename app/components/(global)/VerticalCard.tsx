import Image from "next/image";
import BlogCardDate from "./BlogCardDate";
import Button from "./Button";
type BlogProps = {
  image: StaticImageData,
  heading: string,
  subText: string,
  link: string,
  date: string
};

export default function VerticalCard({
  image,
  heading,        
  subText,
  link,
  date,
}: BlogProps) {
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="">
        <Image className="rounded-lg" src={image} alt="Blog Image" />
      </div>
      <div className=" py-[10px] flex flex-col gap-[20px]">
        <h3 className="text-header-txt text-[20px] font-bold ">{heading}</h3>
        <p className="text-gray-txt text-[14px]">{subText}</p>
        <BlogCardDate date={date} />
        <a href={link}>
          <Button text="Read More" />
        </a>
      </div>
    </div>
  );
}
