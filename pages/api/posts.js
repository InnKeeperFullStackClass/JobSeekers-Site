// pages/api/posts.js
import { connectToDatabase } from "../../db/index";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, content } = req.body;
    const client = await connectToDatabase();
    const db = client.db();
    const postsCollection = db.collection("posts");
    const result = await postsCollection.insertOne({ title, content });
    res.status(201).json({ postId: result.insertedId });
  } else if (req.method === "GET") {
    const client = await connectToDatabase();
    const db = client.db();
    const postsCollection = db.collection("posts");
    const posts = await postsCollection.find().toArray();
    res.status(200).json({ posts });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
