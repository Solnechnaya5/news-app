import axios from "axios";

const API_URL = import.meta.env.VITE_GNEWS_API_URL
const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

export const getNews = async () => {
  try {
    const response = await axios.get(`${API_URL}/top-headlines`, {
      params: {
        apikey: API_KEY,
        country: "ua",
        lang: "uk",
        max: 10,
      },
      headers: {
        'Content-Type': 'application/json',

        'Access-Control-Allow-Headers':

          'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',

        'Access-Control-Allow-Methods': 'OPTIONS,POST',

        'Access-Control-Allow-Credentials': true,

        'Access-Control-Allow-Origin': '*',

        'X-Requested-With': '*',

      },

    });

    return response.data.articles ?? [];
  } catch (error) {
    console.error("GNews error:", error);
    return [];
  }
};
