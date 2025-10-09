"use client";
import Image from "next/image";
import BlogCardDate from "../(global)/BlogCardDate";
import BlogCard from "../(global)/BlogCard";
import sampleImg from "@/public/images/sampleImg.png";
import Button from "../(global)/Button";
import TextHeading from "../(global)/TextHeading";
import { fetchArticles } from "../../utils/api";
import { useState, useEffect } from "react";
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
interface Article {
  id: string;
  title: string;
  description: string;
  titleImage: string;
  createdAt: string;
  featuredFlag: boolean;
}

const BlogShowcase = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setIsLoading] = useState(true);
  const limit = 3;

  const getArticles = async () => {
    try {
      const response = await fetchArticles({ page: 1, limit });
      if (response?.data?.data) {
        setArticles(response.data.data);
      } else {
        setArticles([]);
      }
    } catch (error) {
      console.error("Error while getting blogs", error);
    } finally {
      setIsLoading(false);
    }
  };
  const featuredPost = articles.find((post) => post.featuredFlag);
  const otherPosts = articles.filter((post) => !post.featuredFlag);
  useEffect(() => {
    getArticles();
  }, []);
  if (loading) {
    return (
      <p className="px-[20px] lg:px-[80px] py-[100px]">Loading blogs...</p>
    );
  }
  return (
    <div className="px-[20px] lg:px-[80px] py-[100px]">
      <div className="flex flex-col gap-[80px]">
        <TextHeading
          title="Complete Guidance for Every Real Estate Journey"
          subText=" Verrify makes real estate verification simple and reliable tailored
            for individuals, businesses, and private buyers alike."
        />

        <div className="flex flex-col lg:flex-row gap-[40px]">
          {/* Featured  Section */}
          <div className="flex-1 flex flex-col gap-[20px]">
            {featuredPost && (
              <article className="flex-1 flex flex-col gap-[20px]">
                <div className="w-full h-[350px] overflow-hidden rounded-lg">
                  <Image
                    className="w-full h-full object-cover"
                    src={featuredPost.titleImage}
                    alt={featuredPost.title}
                  />
                </div>
                <div className="flex flex-col gap-[20px]">
                  <h2 className="text-[25px] font-bold text-header-txt">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-txt text-[14px]">
                    {featuredPost.description}
                  </p>
                  <BlogCardDate date={featuredPost.createdAt} />
                  <Button text="Read More" />
                </div>
              </article>
            )}
          </div>
          {/* Sub story section */}
          <div className="flex-[2] flex flex-col gap-[20px]">
            {otherPosts.length === 0 ? (
              <p className="text-gray-txt">No other blog posts available.</p>
            ) : (
              otherPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  image={post.titleImage}
                  heading={post.title}
                  subText={post.description}
                  link={`/blog/${post.id}`}
                  date={post.createdAt}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogShowcase;
