
import React from "react";
import RadioGroup2 from "./RadioGroup2";

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
    <div className="container mx-auto px-4 py-6 lg:w-[74vw]">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-blue-900">
        Buyback
      </h1>
      <div className="mr-9">
      <RadioGroup2/>
      </div>
     
        
    
        <div className="space-y-4">
          {buybackData.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow rounded-md overflow-hidden"
            >
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex items-center justify-center sm:w-48">
                    <img
                      src={item.imageSrc}
                      alt={item.alt}
                      className="object-contain h-20 sm:h-28"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-2 sm:gap-4">
                      <div className="flex gap-4">
                        <h2 className="text-lg sm:text-xl font-semibold text-blue-900">
                          {item.title}
                        </h2>
                        <span className="flex-1 inline-block text-[#6055CD] bg-[#F1F4FF] px-2 py-1 rounded">
                          Tender Offer
                        </span>
                      </div>
                      <div>
                        <button className="text-[#630088] bg-[#F1F4FF] hover:border-blue-800 px-4 py-2 rounded border">
                          View
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Record date</p>
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
                    <p className="text-sm text-blue-900 font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    // </div>
  );
}

export default BuybackListing;
