import axios from "axios";

const API_URL = import.meta.env.GNEWS_API_URL
const API_KEY = import.meta.env.GNEWS_API_KEY;

export const getNews = async () => {
  try {
    const response = await axios.get(`${API_URL}/top-headlines`, {
      params: {
        apikey: API_KEY,
        country: "ua",
        lang: "uk",
        max: 10,
      },
     

    });

    return response.data.articles ?? [];
  } catch (error) {
    console.error("GNews error:", error);
    return [];
  }
};
