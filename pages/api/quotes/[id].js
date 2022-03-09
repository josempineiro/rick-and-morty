import quotes from "data/quotes.json";

export default function handler({ query: { id } }, res) {
  res.status(200).json(quotes[Number(id)]);
}
