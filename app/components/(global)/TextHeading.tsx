type headingProps = {
  title: string;
  subText: string;
};

export default function TextHeading({ title, subText }: headingProps) {
  return (
    <div>
      <h1 className="text-header-txt text-[30px] md:text-[40px] font-bold">
        {title}
      </h1>
      <p className="text-gray-txt">
        {subText}
      </p>
    </div>
  );
}
