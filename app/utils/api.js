export const fetchArticles = async ({
  search = "",
  page = 1,
  limit = 10,
  sortBy = "createdAt",
  order = "ASC",
}) => {
  try {
    const url = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/article`);

    // append query params
    url.searchParams.append("search", search);
    url.searchParams.append("page", page);
    url.searchParams.append("limit", limit);
    url.searchParams.append("sortBy", sortBy);
    url.searchParams.append("order", order);

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // optional: ensures fresh data
    });

    if (!res.ok) {
      throw new Error("Failed to fetch articles");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return { success: false, message: error.message };
  }
};
