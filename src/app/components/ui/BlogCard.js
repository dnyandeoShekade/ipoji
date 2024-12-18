
import React from "react";

const BlogCard = ({ post }) => {
  return (
    <a href={post.link} className="block group">
      <div className="overflow-hidden transition-shadow hover:shadow-lg border rounded-lg h-full flex flex-col bg-white">
        {/* Image Section */}
        <div className="relative aspect-w-16 aspect-h-9 p-2 sm:p-4">
          <img
            src={post.image}
            alt={post.title}
            className="object-cover bg-slate-200 rounded-lg w-full h-full" // Changed `rounded-t-lg` to `rounded-lg` for better spacing
          />
        </div>
        {/* Content Section */}
        <div className="p-3 flex-grow flex flex-col gap-1">
          {/* <time className="block text-sm text-gray-500">{post.date}</time> */}
          <h2 className="mt-0 text-lg font-semibold text-gray-900 line-clamp-2">
            {post.title}
          </h2>
          <time className="block text-sm text-gray-500">{post.date}</time>
          <p className="mt-2 text-sm text-gray-600 line-clamp-3 flex-grow">
            {post.excerpt}
          </p>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
