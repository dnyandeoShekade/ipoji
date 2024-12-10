
"use client";
import { useState } from "react";
import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialCarousel() {
  const testimonials = [
    {
      name: "Pavan Dileep",
      message:
        "It's a wonderful app, where u can all IPO related data as summary in one shot. Easy to understand and it as allotment status feature too.",
      rating: 5,
      avatar: "/user1.webp", 
    },
    {
      name: "Shailendra Goel",
      message:
        "This app has been a great help in keeping me updated with IPOs. Highly recommended!",
      rating: 5,
      avatar: "/user2.webp", 
    },
    {
      name: "Vaishvik Trivedi",
      message:
        "Just a perfect app for every little details to every big news about upcoming and current IPOs as they provide just proper details about the company which one investor should know before investing or applying for any IPO and also few things i like about this app is that to see live subscription and also you can check your allotment too with ease. Recommended 💯💯💯💯",
      rating: 5,
      avatar: "/user4.webp", 
    },
    {
      name: "Ankit Maheshwari",
      message:
        "I am using this app since 3 months. Amazing app and good app. Their gmp and live subscription feature is best and accurate. I have follows their recommend and get good earning throw ipo. Good work team of IPOJI.",
      rating: 5,
      avatar: "/user-4.webp", 
    },
    {
      name: "Parth Shah",
      message:
        "I am using this app since 3 months. Amazing app and good app. Their gmp and live subscription feature is best and accurate. I have follows their recommend and get good earning throw ipo. Good work team of IPOJI.",
      rating: 5,
      avatar: "/user3.webp", 
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 md:p-8 text-center">
      <div className="bg-[#FFFFFF] rounded-lg shadow-md p-6 sm:p-8 lg:h-[70vh]">
        <div className="text-6xl sm:text-7xl lg:text-8xl text-[#FFA41B] mt-6 sm:mt-8 font-serif">
          "
        </div>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 text-[#0A2472] leading-relaxed">
          {testimonials[currentIndex].message}
        </p>

        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-6 h-6 sm:w-8 sm:h-8 fill-[#FFA41B] text-[#FFA41B]"
            />
          ))}
        </div>

        <div className="mb-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={testimonials[currentIndex].avatar}
              alt={`Profile of ${testimonials[currentIndex].name}`}
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
        </div>

        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#0A2472] mb-1">
          {testimonials[currentIndex].name}
        </h3>
        <p className="text-sm sm:text-base text-[#7E8CAC] mb-6">App User</p>

        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-[#374c69]" : "bg-[#ccc]"
              } transition-all`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
