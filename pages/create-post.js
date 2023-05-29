"use client";
import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      title,
      content,
    };

    fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("New post ID:", data.postId);
        // Optionally, redirect to the post detail page or update the UI
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="border rounded p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-lg font-semibold mb-2">
            Content
          </label>
          <textarea
            id="content"
            className="border rounded p-2"
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
