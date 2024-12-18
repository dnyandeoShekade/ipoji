
"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const platforms = [
  {
    name: "Angel Broking",
    imageSrc: "/ad-1.jpeg",
    buttonText: "Know More",
    buttonClass: "bg-[#7952B3] hover:bg-[#6742A3]",
  },
  {
    name: "Zerodha",
    imageSrc: "/ad-2.png",
    buttonText: "Know More",
    buttonClass: "bg-[#7952B3] hover:bg-[#6742A3]",
  },
  {
    name: "Dhan",
    imageSrc: "/ad-3.png",
    buttonText: "Know More",
    buttonClass: "bg-[#7952B3] hover:bg-[#6742A3]",
  },
  {
    name: "Upstox",
    imageSrc: "/ad-4.png",
    buttonText: "Know More",
    buttonClass: "bg-[#7952B3] hover:bg-[#6742A3]",
  },
  {
    name: "5 Paisa",
    imageSrc: "/ad-5.png",
    buttonText: "Know More",
    buttonClass: "bg-[#7952B3] hover:bg-[#6742A3]",
  },
  {
    name: "StoxKart - Powered by SMC",
    imageSrc: "/ad-6.png",
    buttonText: "Know More",
    buttonClass: "bg-[#7952B3] hover:bg-[#6742A3]",
  },
  {
    name: "ICICI direct",
    imageSrc: "/ad-7.png",
    buttonText: "Know More",
    buttonClass: "bg-[#7952B3] hover:bg-[#6742A3]",
  },
  {
    name: "Paytm Money",
    imageSrc: "/ad-9.png",
    buttonText: "Know More",
    buttonClass: "bg-[#7952B3] hover:bg-[#6742A3]",
  },
];

export default function Advertising() {
  return (
    <>
      {/* <div className="lg:w-[200px] lg:right-0 lg:top-0  h-[80px]">
            <Playstore/>
          </div> */}
      <div className="hidden lg:block xl:block  right-0 top-0 h-screen w-[280px] ">
       
        <div className="p-4">
          <div className="grid grid-cols-1 gap-4">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="w-full bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
              >
                <div className="p-3">
                  <h2 className="text-md font-semibold text-blue-950 hover:text-rose-400 text-left mb-2 truncate">
                    {platform.name}
                  </h2>
                  <div className="flex justify-center items-center h-[162px]">
                    <Image
                      src={platform.imageSrc}
                      alt={`${platform.name} App`}
                      width={244}
                      height={162}
                      className="rounded-sm object-contain"
                    />
                  </div>
                </div>
                 <div className="p-2 flex justify-start">
               <Button  className={`h-[42px] w-[126px] text-sm font-semibold text-white bg-[#574BC2] hover:bg-blue-800 px-3 py-2 rounded-lg transition-colors`}>{platform.buttonText}</Button>
               </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
