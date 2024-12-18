
import React from "react";
import RadioGroup2 from "../Utility/RadioGroup2";

function BuybackListing() {
  const buybackData = [
    {
      id: 1,
      title: "Insecticides (India) Buyback 2024",
      description:
        "500,000 (1.69 % of Total number of equity Shares) (₹50.00 Crores)",
      recordDate: "Sep 11, 2024",
      issueDate: "Sep 18, 2024",
      closeDate: "Sep 24, 2024",
      price: "₹1,000.00",
      imageSrc: "/insecticide.png",
      alt: "Insecticides India Logo",
    },
    {
      id: 3,
      title: "Cheviot Company Limited Buyback",
      description:
        "175,000 (2.91 % of Total number of equity Shares) (₹31.50 Crores)",
      recordDate: "Jun 14, 2024",
      issueDate: "Jun 20, 2024",
      closeDate: "Jun 26, 2024",
      price: "₹1,800.00",
      imageSrc: "/Cheviot.jpg",
      alt: "Logo",
    },
    {
      id: 4,
      title: "Indian Toners & Developers Limited Buyback",
      description:
        "458,268 (4.22 % of Total number of equity Shares) (₹20.62 Crores)",
      recordDate: "Aug 30, 2024",
      issueDate: "Sep 5, 2024",
      closeDate: "Sep 11, 2024",
      price: "₹450.00",
      imageSrc: "/indian-toner.png",
      alt: "Indian Toner Logo",
    },
    {
      id: 5,
      title: "Weizmann Limited Buyback 2024",
      description: "365,169 (2.3 % of Total number of equity Shares)",
      recordDate: "Aug 30, 2024",
      issueDate: "Sep 5, 2024",
      closeDate: "Sep 11, 2024",
      price: "₹160.00",
      imageSrc: "/weizmann.png",
      alt: "Weizmann Logo",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-7 lg:w-[71vw]">
    {/* Header Section */}
    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-blue-900">
      Buyback
    </h1>

    {/* RadioGroup Section */}
    <div className="mt-4">
      <RadioGroup2 />
    </div>

    {/* Buyback Cards Section */}
    <div className="space-y-6">
      {buybackData.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-md overflow-hidden md:flex md:items-center md:space-x-6 p-4 lg:p-6 lg:h-[213px] relative"
        >
          {/* Image Section */}
          <div className="flex items-center justify-center w-24 lg:w-[150px]">
            <img
              src={item.imageSrc}
              alt={item.alt}
              className="object-contain h-14 sm:h-20 md:h-24"
            />
          </div>

          {/* Details Section */}
          <div className="flex-1 space-y-4">
            {/* Title and Tender Offer */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-normal gap-2">
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-blue-900">
                {item.title}
              </h2>
              <span className="text-md sm:text-md text-[#6055CD] bg-[#F1F4FF] px-2 py-1 rounded w-[120px] h-8 text-center">
                Tender Offer
              </span>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Record Date</p>
                <p className="font-medium">{item.recordDate}</p>
              </div>
              <div>
                <p className="text-gray-600">Issue Date</p>
                <p className="font-medium">{item.issueDate}</p>
              </div>
              <div>
                <p className="text-gray-600">Close Date</p>
                <p className="font-medium">{item.closeDate}</p>
              </div>
              <div>
                <p className="text-gray-600">Buyback Price</p>
                <p className="font-medium">{item.price}</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-600">Issue size</p>
            <p className="text-sm text-blue-900 font-light">
              {item.description}
            </p>
            </div>
            

            {/* View Button */}
            <button className="absolute top-4 right-4 bg-[#F1F4FF] text-blue-800 text-sm h-[34px] w-[80px] font-medium py-1 px-3 rounded-md hover:bg-gray-400">
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default BuybackListing;