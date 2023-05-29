// models/Post.js
import { connectToDatabase } from "../../db/index";

export async function createPost(postData) {
  const client = await connectToDatabase();
  const db = client.db();
  const postsCollection = db.collection("posts");
  const result = await postsCollection.insertOne(postData);
  return result.insertedId;
}

export async function getPosts() {
  const client = await connectToDatabase();
  const db = client.db();
  const postsCollection = db.collection("posts");
  const posts = await postsCollection.find().toArray();
  return posts;
}
