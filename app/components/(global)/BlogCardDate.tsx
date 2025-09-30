import Image from "next/image";
import logo from "@/public/svg/logo.svg";
type dateProps = {
  date: string;
};

export default function BlogCardDate({ date }: dateProps) {
  return (
    <div className="flex justify-between">
      <Image height={20} src={logo} alt="Logo" />
      <p className="text-gray-txt text-[12px]">{date}</p>
    </div>
  );
}
