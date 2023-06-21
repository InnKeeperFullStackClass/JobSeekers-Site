// api/joblistings.js

const jobListings = [
  { id: 1, title: "Software Engineer" },
  { id: 2, title: "Product Manager" },
  { id: 3, title: "Data Analyst" },
  // Add more job listings
];

export default function handler(req, res) {
  res.status(200).json(jobListings);
}
