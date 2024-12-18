
import React from "react";

const BlogCardRow = ({ post }) => {
  return (
    <a href={post.link} className="block group ">
      <div className="overflow-hidden bg-white transition-shadow hover:shadow-md border rounded-lg ">
        <div className="p-4 flex flex-col sm:flex-row items-start gap-4">
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-semibold text-gray-900 line-clamp-2">
              {post.title}
            </h2>
            <time className="mt-1 block text-sm text-gray-500">{post.date}</time>
            <p className="mt-2 text-sm text-gray-600 line-clamp-2 sm:line-clamp-3">
              {post.excerpt}
            </p>
          </div>
          <div className="w-full sm:w-1/3 mt-4 sm:mt-0">
            <div className="aspect-w-4 aspect-h-3 relative">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover rounded-lg w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default BlogCardRow;
