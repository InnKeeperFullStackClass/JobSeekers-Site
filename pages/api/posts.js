import { connectToDatabase } from "../../db/index";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, content } = req.body;

    const client = await connectToDatabase();
    const db = client.db();
    const postsCollection = db.collection("posts");

    try {
      const result = await postsCollection.insertOne({
        title,
        content,
      });

      res.status(201).json({ postId: result.insertedId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating a new post" });
    }
  } else if (req.method === "GET") {
    const client = await connectToDatabase();
    const db = client.db();
    const postsCollection = db.collection("posts");

    try {
      const posts = await postsCollection.find().toArray();
      res.status(200).json({ posts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error fetching posts" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
