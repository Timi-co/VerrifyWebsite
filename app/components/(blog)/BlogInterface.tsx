import VerticalCard from "../(global)/VerticalCard";
import sampleImg from "@/public/images/sampleImg.png";

const blogPosts = [
  {
    id: 1,
    image: sampleImg,
    heading: "How to Verify Property Ownership Before You Buy",
    subText:
      "Practical steps to ensure your land or home purchase is legitimate and hassle-free.",
    date: "12 Sept 2025",
    link: "#",
  },
  {
    id: 2,
    image: sampleImg,
    heading: "Why Verified Land Is Safer for Long-Term Investment",
    subText:
      "Discover why verification reduces risks and increases property value.",
    date: "15 Sept 2025",
    link: "#",
  },
  {
    id: 3,
    image: sampleImg,
    heading: "Secure Your Plot: 5 Red Flags to Watch Out For",
    subText:
      "Avoid scams by spotting these warning signs before closing a deal.",
    date: "20 Sept 2025",
    link: "#",
  },
  {
    id: 4,
    image: sampleImg,
    heading: "Secure Your Plot: 5 Red Flags to Watch Out For",
    subText:
      "Avoid scams by spotting these warning signs before closing a deal.",
    date: "20 Sept 2025",
    link: "#",
  },
  {
    id: 5,
    image: sampleImg,
    heading: "Secure Your Plot: 5 Red Flags to Watch Out For",
    subText:
      "Avoid scams by spotting these warning signs before closing a deal.",
    date: "20 Sept 2025",
    link: "#",
  },
];
const BlogInterface = () => {
  return (
    /**py-[100px]**/
    <div className="px-[80px]  ">  
      <div className="flex flex-col gap-[30px]">
        <h1 className="text-header-txt text-[30px] font-bold">Blogs for Today</h1>
        <div className="grid grid-cols-3 gap-[30px]">
          {blogPosts.map((post) => (
            <VerticalCard
              key={post.id}
              image={post.image}
              heading={post.heading}
              subText={post.subText}
              link={post.link}
              date={post.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogInterface;
