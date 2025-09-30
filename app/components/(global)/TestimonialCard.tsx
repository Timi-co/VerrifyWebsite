import Image from "next/image";
type testimonialProps = {
  testimony: string,
  name: string,
  img:StaticImageData,
  occupation: string,
};

export default function TestimonialCard({
  testimony,
  name,
  occupation,
  img
}: testimonialProps) {
  return <div className="testimonial_card w-[350px] flex flex-col gap-[40px]">
    <p className="text-[14px] text-gray-txt">&ldquo;{testimony}&rdquo;</p>
    <div className="flex items-center gap-[15px] ">

        <Image className="rounded-full" height={50} width={50} src={img} alt="Testimonial Image" />
        <div>
            <h4 className="text-[18px] font-bold text-header-txt">{name}</h4>
            <p className="text-gray-txt text-[14px]">{occupation}</p>
        </div>
    </div>
  </div>;
}
