import axios from "axios";

const API_URL = import.meta.env.VITE_GNEWS_API_URL;
const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

export const getNews = async () => {
  try {
    const response = await axios.get("/api/news");
    return response.data.articles ?? [];
  } catch (error) {
    console.error("News error:", error);
    return [];
  }
};
