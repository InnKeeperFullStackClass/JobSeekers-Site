// const pool = require("../../path/to/db.js");

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       const { resumeData } = req.body;

//       // Execute an SQL query to insert resume data into the database
//       await pool.query("INSERT INTO resumes (data) VALUES ($1)", [resumeData]);

//       res.status(200).json({ message: "Resume uploaded successfully" });
//     } catch (error) {
//       res.status(500).json({ message: "Error uploading resume" });
//     }
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }
