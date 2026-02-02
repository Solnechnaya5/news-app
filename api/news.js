export default async function handler(req, res) {
  const API_KEY = process.env.VITE_GNEWS_API_KEY;

  const params = new URLSearchParams({
    apikey: API_KEY,
    country: "ua",
    lang: "uk",
    max: 10,
  });

  const response = await fetch(
    `https://gnews.io/api/v4/top-headlines?${params}`
  );

  const data = await response.json();
  res.status(200).json(data);
}
