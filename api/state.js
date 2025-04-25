export default function handler(req, res) {
  res.status(200).json({ balance: 100, startBalance: 100, drawdownMax: 0, log: [] });
}