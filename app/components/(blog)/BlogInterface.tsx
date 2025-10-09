"use client";
import VerticalCard from "../(global)/VerticalCard";
import { fetchArticles } from "../../utils/api";
import { useState, useEffect } from "react";
interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
interface Article {
  id: number;
  title: string;
  description: string;
  titleImage: string;
  createdAt: string;
}
interface ApiResponse{
    success: boolean;
  message: string;
  data: {
    data: Article[];
    meta: Meta;
  };
  status: number;
}
const BlogInterface = () => {
  const [articles, setArticles] = useState<Article []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [meta, setMeta] = useState<Meta | null >(null);

  const limit = 6; // you can adjust as needed

  const getData = async () => {
    try {
      setLoading(true);
      const data: ApiResponse | null = await fetchArticles({ page, limit });

      if (data?.data) {
        setArticles(data.data.data || []);
        setMeta(data.data.meta || {});
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  const handlePrev = () => {
    if (meta?.hasPreviousPage) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (meta?.hasNextPage) setPage((prev) => prev + 1);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <p className="text-gray-600 text-lg">Loading articles...</p>
      </div>
    );

  return (
    <div className="px-[20px] lg:px-[80px] py-[80px]">
      <div className="flex flex-col gap-[30px]">
        <h1 className="text-header-txt text-[30px] font-bold">
          Articles for Today
        </h1>

        {articles.length === 0 ? (
          <div className="text-center py-[50px]">
            <h1 className="text-[24px] text-gray-600 font-semibold">
              No articles found
            </h1>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {articles.map((article) => (
              <VerticalCard
                key={article.id}
                image={article.titleImage}
                heading={article.title}
                subText={article.description}
                date={new Date(article.createdAt).toLocaleDateString()}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        {meta && meta.totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              disabled={!meta.hasPreviousPage}
              className={`px-4 py-2 rounded-md text-white transition ${
                !meta.hasPreviousPage
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Previous
            </button>

            <span className="text-gray-700 font-medium">
              Page {meta.currentPage} of {meta.totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={!meta.hasNextPage}
              className={`px-4 py-2 rounded-md text-white transition ${
                !meta.hasNextPage
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogInterface;
