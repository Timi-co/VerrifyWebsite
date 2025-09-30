import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const CustomPrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} radial-glow !rounded-full !flex !items-center !justify-center !w-10 !h-10 !shadow-md `}
      onClick={onClick}
    >
      <FaChevronLeft className="text-white text-lg !z-[1000]" />
    </button>
  );
};

export  const CustomNextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} radial-glow !rounded-full !flex !items-center !justify-center !w-10 !h-10 !shadow-md `}
      onClick={onClick}
    >
      <FaChevronRight className="text-white !text-md" />
    </button>
  );
};
