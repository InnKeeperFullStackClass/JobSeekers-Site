export default function handler(req, res) {
  const shareCountData = {
    facebook: 123,
    twitter: 456,
    linkedin: 789,
  };

  res.status(200).json(shareCountData);
}
