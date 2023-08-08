"use client";
import React, { useState, useEffect } from "react";
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
        const postsWithActions = data.posts.map((post) => ({
          ...post,
          likes: 0, // Initial value for likes
          comments: [], // Initial value for comments
        }));
        setPosts(postsWithActions);
      } else {
        setError(data.message);
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setError("An error occurred while fetching the posts.");
      setIsLoading(false);
    }
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const { title, content, file } = e.target.elements;

    const formData = new FormData();
    formData.append("title", title.value);
    formData.append("content", content.value);
    formData.append("file", file.files[0]);

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        title.value = "";
        content.value = "";
        file.value = null;
        fetchPosts();
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLike = async (postId) => {
    try {
      // Send a request to update the like count on the server
      const response = await fetch(`/api/posts/${postId}/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // You can pass any additional data related to the like action if needed
        body: JSON.stringify({}),
      });
      const data = await response.json();
      if (response.ok) {
        setPosts((prevPosts) => {
          return prevPosts.map((post) => {
            if (post._id === postId) {
              return { ...post, likes: post.likes + 1 };
            }
            return post;
          });
        });
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleComment = (postId) => {
    const post = posts.find((post) => post._id === postId);

    router.push(`/posts/${postId}/comments`);
  };

  const handleDelete = async (postId) => {
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (response.ok) {
        fetchPosts();
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="md:flex h-screen">
      <div className="main w-full flex flex-col">
        <Header2 />

        <main className="dashboard__content grow overflow-y-scroll px-8 md:px-2">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold my-4">Forum Posts</h1>

            <form
              onSubmit={handlePostSubmit}
              action="/api/posts"
              method="POST"
              encType="multipart/form-data"
            >
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
              <div className="flex flex-col mb-4">
                <input
                  type="file"
                  name="file"
                  className="border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
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
                  <div>
                    <button
                      onClick={() => handleLike(post._id)} // Implement handleLike function
                      className="like-button"
                    >
                      Like ({post.likes})
                    </button>
                    <button
                      onClick={() => handleComment(post._id)} // Implement handleComment function
                      className="comment-button"
                    >
                      Comment ({post.comments.length})
                    </button>
                    {post.user === "userId" && (
                      <button
                        onClick={() => handleDelete(post._id)} // Implement handleDelete function
                        className="delete-button"
                      >
                        Delete
                      </button>
                    )}
                  </div>
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
