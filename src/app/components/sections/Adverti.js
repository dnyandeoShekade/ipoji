
import React from 'react'
import Image from 'next/image'

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
    name: "paytm_Money",
    imageSrc: "/ad-9.png",
    buttonText: "Know More",
    buttonClass: "bg-[#7952B3] hover:bg-[#6742A3]",
  },
  {
    name: "Kotak Securities",
    imageSrc: "/ad-10.jpeg",
    buttonText: "Know More",
    buttonClass: "bg-[#7952B3] hover:bg-[#6742A3]",
  },
  {
    name: "Angel Broking",
    imageSrc: "/ad-11.jpeg",
    buttonText: "Know More",
    buttonClass: "bg-[#7952B3] hover:bg-[#6742A3]",
  },
]

export default function Adverti() {
  return (
    <div className="block lg:hidden max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-[#F2F4FF]">
      {platforms.map((platform, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <h2 className="text-sm sm:text-lg md:text-xl font-medium text-left mb-4">
              {platform.name}
            </h2>
            <div className="flex justify-center">
              <Image
                src={platform.imageSrc}
                alt={`${platform.name} App`}
                width={244}
                height={163}
                className="rounded-sm object-cover w-full h-40 sm:h-48 md:h-36"
              />
            </div>
          </div>
          <div className="p-4 flex justify-start">
            <button 
              className={`h-10 w-32 font-semibold text-white px-3 py-2 rounded-lg text-sm sm:text-base ${platform.buttonClass}`}
            >
              {platform.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

