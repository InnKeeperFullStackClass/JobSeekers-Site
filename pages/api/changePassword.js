import pool from "../../db";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { userId, currentPassword, newPassword } = req.body;

    try {
      // Check if the current password is correct
      const checkQuery = "SELECT * FROM users WHERE id = $1 AND password = $2";
      const checkResult = await pool.query(checkQuery, [
        userId,
        currentPassword,
      ]);

      if (checkResult.rows.length === 0) {
        return res.status(401).json({ error: "Invalid current password" });
      }

      // Update the password in the database
      const updateQuery = "UPDATE users SET password = $1 WHERE id = $2";
      await pool.query(updateQuery, [newPassword, userId]);

      return res.status(200).json({ message: "Password changed successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error changing password" });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
