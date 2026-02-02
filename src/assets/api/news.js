export default async function handler(req, res) {
  const API_URL = "https://gnews.io/api/v4/top-headlines";
  const API_KEY = process.env.VITE_GNEWS_API_KEY;

  const params = new URLSearchParams({
    apikey: API_KEY,
    country: "ua",
    lang: "uk",
    max: 10,
  });

  const response = await fetch(`${API_URL}?${params}`);
  const data = await response.json();

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
