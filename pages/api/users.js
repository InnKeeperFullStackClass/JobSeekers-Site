import { connectToDatabase } from "../../db/index";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const client = await connectToDatabase();
  const usersCollection = client.db().collection("users");

  try {
    const users = await usersCollection.find().toArray();
    res.status(200).json(users);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
