import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChipTheCup from "../posts/ChipTheCup";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      date: "14 de Julho de 2023",
      title: "Chip the Cup",
      content: <ChipTheCup />,
    },
  ];

  const [expandedPostId, setExpandedPostId] = useState(null);

  const handlePostClick = (postId) => {
    if (postId === expandedPostId) {
      setExpandedPostId(null);
    } else {
      setExpandedPostId(postId);
    }
  };

  return (
    <div className="flex flex-col fade-in min-h-screen">
      <div className="flex-grow">
        <Header />
        <div className="flex justify-start">
          <div className="w-full mx-auto">
            <div className="max-w-3xl mx-auto ml-12">
              <h2 className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold mb-4 text-white">
                Blog Posts
              </h2>
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className={`p-4 my-2 bg-gray-700 hover:bg-gray-800 duration-500 rounded-lg cursor-pointer ${
                    expandedPostId === post.id
                      ? "w-full -ml-5 sm:-ml-0 bg-gray-800"
                      : "w-11/12 "
                  }`}
                  onClick={() => handlePostClick(post.id)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl text-sky-400 lg:text-2xl xl:text-2xl font-bold mb-2 text-white">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 font-mono !text-white">
                      {post.date}
                    </p>
                  </div>
                  {expandedPostId === post.id && (
                    <div className="mt-4 text-white ">{post.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
