
import React from "react";
import BlogCard from "./BlogCard";
import BlogCardRow from "./BlogCardRow";

const BlogListing = () => {
  const posts = [
    {
      title: "IPO Pipeline for December 2024",
      date: "November 30, 2024 at 01:59 PM",
      excerpt: "The businesses are using the primary market to meet working capital needs...",
      image: "/blog-1.jpg?height=200&width=300",
      link: "#",
    },
    {
      title: "Breaking Records! Indian Startups Take IPOs by Storm",
      date: "November 29, 2024 at 04:28 PM",
      excerpt: "New-age tech startups like Swiggy, Go Digit, TBO Tek, Awfis, Ola Electric...",
      image: "/blog-2.jpg?height=200&width=300",
      link: "#",
    },
    {
      title: "IPO Calendar for December 2024: Upcoming IPOs in India",
      date: "November 29, 2024 at 02:29 PM",
      excerpt: "The Indian primary stock market is going to experience a lot of interesting IPO activities in December 2024...",
      image: "/calender.jpg?height=200&width=300",
      link: "#",
    },
    {
      title: "Suraksha Diagnostic IPO Details: Price Band, GMP, Review",
      date: "November 27, 2024 at 03:25 PM",
      excerpt: "Suraksha Diagnostic IPO comprises a pure Offer-for-Sale of 19,189,330 equity shares worth Rs 846.25 crore...",
      image: "/blog-2.jpg?height=200&width=300",
      link: "#",
    },
    {
      title: "IPO Pipeline for December 2024: Rs 15,000 Crore",
      date: "November 26, 2024 at 02:46 PM",
      excerpt: "The businesses are using the primary market to meet working capital needs, generate money for expansion...",
      image: "/calender.jpg?height=200&width=300",
      link: "#",
    },
    {
      title: "Suraksha Diagnostic sets IPO price band at Rs 418-441/share",
      date: "November 26, 2024 at 11:25 PM",
      excerpt: "The investor OrbiMed-backed company targets to raise around Rs 253 crore via...",
      image: "/colblog.jpg?height=200&width=300",
      link: "#",
    },
    {
      title: "India's IPO Boom: Stories of Big Wins and Valuable Lessons",
      date: "November 20, 2024 at 11:55 PM",
      excerpt: "India's IPO Boom: Stories of Big Wins and Valuable Lessons",
      image: "/blog-1.jpg?height=200&width=300",
      link: "#",
    },
    {
      title: "Breaking Records! Indian Startups Take IPOs by Storm",
      date: "November 26, 2024 at 11:06 AM",
      excerpt: "New-age tech startups like Swiggy, Go Digit, TBO Tek, Awfis, Ola Electric, FirstCry, ixigo, and Unicommerce...",
      image: "/blog-2.jpg?height=200&width=300",
      link: "#",
    },
  ];

  const leftPosts = posts.slice(0, 4);
  const rightPosts = posts.slice(4, 8);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#F2F4FF]">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 lg:mb-0">
          {leftPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 space-y-6">
          {rightPosts.map((post, index) => (
            <BlogCardRow key={index} post={post} />
          ))}
        </div>
      </div>

      {/* Pagination Links */}
      <div className="mt-12 flex justify-center">
        <a
          href="#"
          className="text-blue-600 hover:text-blue-700 inline-flex items-center font-medium"
        >
          View All <span className="ml-1">→</span>
        </a>
      </div>
    </div>
  );
};

export default BlogListing;

