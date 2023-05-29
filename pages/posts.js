"use client";
import { useState, useEffect } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the API
    fetch("/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.posts))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Forum Posts</h1>
      {posts.map((post) => (
        <div key={post._id} className="my-2 p-4 border">
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
