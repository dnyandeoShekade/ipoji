
import React from "react";

const BlogCard = ({ post }) => {
  return (
    <a href={post.link} className="block group">
      <div className="overflow-hidden transition-shadow hover:shadow-lg border rounded-lg bg-white h-full flex flex-col">
        {/* Image Section */}
        <div className="relative aspect-w-16 aspect-h-9">
          <img
            src={post.image}
            alt={post.title}
            className="object-cover bg-slate-200 rounded-t-lg w-full h-full"
          />
        </div>
        {/* Content Section */}
        <div className="p-4 flex-grow flex flex-col">
          <time className="block text-sm text-gray-500">{post.date}</time>
          <h2 className="mt-2 text-lg font-semibold text-gray-900 line-clamp-2">
            {post.title}
          </h2>
          <p className="mt-2 text-sm text-gray-600 line-clamp-3 flex-grow">
            {post.excerpt}
          </p>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
