import Image from "next/Image";
import BlogCardDate from "../(global)/BlogCardDate";
import BlogCard from "../(global)/BlogCard";
import sampleImg from "@/public/images/sampleImg.png";
import Button from "../(global)/Button";
import TextHeading from "../(global)/TextHeading";
const blogPosts = [
  {
    id: 1,
    image: sampleImg,
    heading: "How to Verify Property Ownership Before You Buy",
    subText:
      "Practical steps to ensure your land or home purchase is legitimate and hassle-free.",
    date: "12 Sept 2025",
    link: "#",
    featured: true, // Big Story
  },
  {
    id: 2,
    image: sampleImg,
    heading: "Why Verified Land Is Safer for Long-Term Investment",
    subText:
      "Discover why verification reduces risks and increases property value.",
    date: "15 Sept 2025",
    link: "#",
    featured: false,
  },
  {
    id: 3,
    image: sampleImg,
    heading: "Secure Your Plot: 5 Red Flags to Watch Out For",
    subText:
      "Avoid scams by spotting these warning signs before closing a deal.",
    date: "20 Sept 2025",
    link: "#",
    featured: false,
  },
];

const BlogShowcase = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const otherPosts = blogPosts.filter((post) => !post.featured);
  return (
    <div className="px-[20px] lg:px-[80px] py-[100px]">
      <div className="flex flex-col gap-[80px]">
        <TextHeading
          title="Complete Guidance for Every Real Estate Journey"
          subText=" Verrify makes real estate verification simple and reliable tailored
            for individuals, businesses, and private buyers alike."
        />
   
        <div className="flex flex-col lg:flex-row gap-[40px]">
          {/* Big Story Section */}
          <div className="flex-1 flex flex-col gap-[20px]">
            {featuredPost && (
              <article className="flex-1 flex flex-col gap-[20px]">
                <div className="w-full h-[350px] overflow-hidden rounded-lg">
                  <Image
                    className="w-full h-full object-cover"
                    src={featuredPost.image}
                    alt={featuredPost.heading}
                  />
                </div>
                <div className="flex flex-col gap-[20px]">
                  <h2 className="text-[25px] font-bold text-header-txt">
                    {featuredPost.heading}
                  </h2>
                  <p className="text-gray-txt text-[14px]">
                    {featuredPost.subText}
                  </p>
                  <BlogCardDate date={featuredPost.date} />
                  <Button text="Read More" />
                </div>
              </article>
            )}
          </div>
          {/* Sub story section */}
          <div className="flex-[2] flex flex-col gap-[20px]">
            {otherPosts.map((post) => (
              <BlogCard
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
    </div>
  );
};

export default BlogShowcase;
