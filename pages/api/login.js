import pool from "../../db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      // Retrieve user from the database
      const query = "SELECT * FROM users WHERE email = $1 AND password = $2";
      const result = await pool.query(query, [email, password]);

      if (result.rows.length === 0) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      // User found, proceed with authentication
      // Generate session token or JWT and return it to the client
      // Implement session management and set appropriate cookies

      return res.status(200).json({ message: "Login successful" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error logging in" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
