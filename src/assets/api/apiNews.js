import axios from "axios";

export const getNews = async () => {
  try {
    const res = await axios.get('/api/news');
    return res.data.articles ?? [];
  } catch (e) {
    console.error(e);
    return [];
  }
};
