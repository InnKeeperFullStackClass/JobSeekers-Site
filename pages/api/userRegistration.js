import pool from "../../db";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { userId, username, email } = req.body;

    try {
      // Update user information in the database
      const query = "UPDATE users SET username = $1, email = $2 WHERE id = $3";
      await pool.query(query, [username, email, userId]);

      return res
        .status(200)
        .json({ message: "User information updated successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error updating user information" });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
