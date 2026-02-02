import axios from "axios";

export const getNews = async () => {
  try {
    const response = await axios.get("/api/news");
    return response.data.articles ?? [];
  } catch (error) {
    console.error("News error:", error);
    return [];
  }
};

