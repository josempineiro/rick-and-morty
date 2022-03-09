import quotes from "data/quotes.json";

export default function handler(req, res) {
  res.status(200).json(quotes[Math.round(Math.random() * quotes.length - 1)]);
}
