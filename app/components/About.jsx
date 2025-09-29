import Image from "next/image";
const About = () => {
  return (
    <div className="px-[80px] pt-[30px] flex flex-col gap-[70px]">
      <div className="flex justify-center">
        <h1 className="text-[35px] w-[800px] font-[600] text-center">
          We help people get land and houses easily, safely, and in a way that
          lasts.
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex-1 flex flex-col gap-[20px]">
          <h2 className="text-[25px] font-[600]">About Us</h2>
          <p className="w-[500px] text-[18px] text-justify">
            LuxNet began with vision to make land and property ownership simple
            and trustworthy. Today we connect people to verified property with
            confidence. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod harum fuga ut.
            Quod harum fuga utQuod harum fuga utQuod harum fuga ut
          </p>
          <button className="bg-dark-purple text-white h-[50px] w-[150px] rounded-xl ">Learn more</button>
        </div>
        <div className="flex-1 flex items-center justify-center">
            <Image src='/images/aboutImage.png' className="text-[60px] rounded-xl h-[300px] object-cover" height={600} width={400} alt='About Image' />
        </div>
      </div>
    </div>
  );
};

export default About;
