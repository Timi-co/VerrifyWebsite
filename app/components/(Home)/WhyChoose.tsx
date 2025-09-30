import Image from "next/image";
import Innovation from "@/public/svg/innovation.svg";
import lockIcon from '@/public/svg/lockIcon.svg';
import settingsIcon from '@/public/svg/settingsIcon.svg';
import WhyChooseImg from "@/public/images/whyChoose.png";
const whyChooseData = [
  {
    id: 1,
    icon: Innovation,
    title: "Innovation",
    desc: "We're constantly developing new technologies to simplify and enhance your real estate.",
  },
  {
    id:2,
    icon:lockIcon,
    title:"Verified Land",
    desc:"Every plot we list is checked and confirmed before you see it."
  },
  {
    id:3,
    icon:settingsIcon,
    title:"Secure Your Plot",
    desc:"Trusted checks that protect you from land scams and hidden issues."
  }
];
const WhyChoose = () => {
  return (
    <div className="py-[100px] px-[80px] ">
      <div className="max-w-[1440px] mx-auto flex gap-[50px] items-center">
        <div className="flex-1">
          <div>
            <h1 className="text-[40px] font-bold text-header-txt">
              Why Choose LuxNet?
            </h1>
            <p className="text-gray-txt">
              At LuxNet we prioritize innovation,We help you easily verify and
              secure genuine land with trusted checks and clear reports.
            </p>
          </div>
          <div>
            {
                whyChooseData.map((item) => (
                    <div key={item.id} className="flex items-center">
                        <Image height={100} src={item.icon} alt="Innovation" />
                        <div className="">
                            <h3 className="text-header-txt text-[20px] font-bold">
                                {item.title}
                            </h3>
                            <p className="text-gray-txt text-[14px]">
                            {item.desc}
                            </p>
                        </div>
                    </div>
                ))
            }
    
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <Image height={380} src={WhyChooseImg} alt="WhyChooseImg" />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
