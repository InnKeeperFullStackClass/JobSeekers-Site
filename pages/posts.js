"use client";
import React from "react";
import { useState, useEffect } from "react";

import Header2 from "@/app/Components/Header2";

const ForumPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/posts");
      const data = await response.json();
      if (response.ok) {
        setPosts(data.posts);
      } else {
        setError(data.message); // Set the error message in case of a failed request
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching the posts."); // Set a generic error message
      setIsLoading(false);
    }
  };
  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const { title, content } = e.target.elements;

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title.value, content: content.value }),
      });
      const data = await response.json();
      if (response.ok) {
        // Clear the form fields and update the posts
        title.value = "";
        content.value = "";
        fetchPosts();
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    // Handle logout functionality
    // Redirect the user to the login page or perform any necessary cleanup
  };

  return (
    <div className="md:flex h-screen">
      <div className="main w-full flex flex-col">
        <Header2 />

        <main className="dashboard__content grow overflow-y-scroll px-8 md:px-2">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold my-4">Forum Posts</h1>
            {/* Post creation form */}
            <form onSubmit={handlePostSubmit}>
              <div className="flex flex-col mb-4">
                <input
                  type="text"
                  name="title"
                  placeholder="Post Title"
                  className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex flex-col mb-4">
                <textarea
                  name="content"
                  placeholder="Post Content"
                  className="border rounded-md py-2 px-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn rounded bg-[#4C9CA6] text-white py-2 px-4 mt-4"
              >
                Post
              </button>
            </form>
            {isLoading ? (
              <p>Loading posts...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : posts.length === 0 ? (
              <p>No posts available yet.</p>
            ) : (
              posts.map((post) => (
                <div
                  key={post._id}
                  className="my-2 p-4 border bg-white rounded-md"
                >
                  <h2 className="text-lg font-semibold">{post.title}</h2>
                  <p>{post.content}</p>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ForumPage;
