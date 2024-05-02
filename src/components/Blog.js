import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ posts }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl text-black font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.date}</p>
            <Link to={`/blog/${post.id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
