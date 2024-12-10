import React from "react";
// import RadioGroup from "./RadioGroup";
import IPOCard from "./IPOCard";

const MainContent = () => {
  const ipoData = [
    {
      logo: "/suraksha.png",
      name: "Suraksha Diagnostic",
      type: "Mainboard",
      // status: "Live",
      offerDate: "Nov 29, 2024 - Dec 3, 2024",
      offerPrice: "420-441",
      lotSize: 34,
      subscription: "0.25 times",
      hasApply: true,
      description:
        " UPI Mandate for Bids placed between 5 PM and before 10 AM will be received after 10 AM.",
    },
    {
      logo: "/Property.jpg",
      name: "Property Share Investment Trust REIT",
      type: "Mainboard",
      // status: "Live",
      offerDate: "Dec 2, 2024 - Dec 4, 2024",
      offerPrice: "1000000-1050000",
      lotSize: 1,
      subscription: "N/A times",
      hasApply: false,
    },
    {
      logo: "/Mamata.jpeg",
      name: "Mamata Machinery",
      type: "Mainboard",
      // status: "Live",
      offerDate: "TBA - TBA",
      offerPrice: "N/A",
      lotSize: "N/A",
      subscription: "N/A times",
      hasApply: false,
    },
    {
      logo: "/Avanse.png",
      name: "Avanse Financial Services",
      type: "Mainboard",
      // status: "Live",
      offerDate: "TBA - TBA",
      offerPrice: "1000000-1050000",
      lotSize: 1,
      subscription: "N/A times",
      hasApply: false,
    },
    {
      logo: "/mobikwik.png",
      name: "One Mobikwik Systems",
      type: "Mainboard",
      // status: "Live",
      offerDate: "TBA - TBA",
      offerPrice: "1000000-1050000",
      lotSize: 1,
      subscription: "N/A times",
      hasApply: false,
    },
  ];

  return (
    <>
      <main className="space-y-2 overflow-hidden">
        {ipoData.map((ipo, index) => (
          <IPOCard key={index} {...ipo} />
        ))}
        <div className="flex justify-center relative right-9">
          {/* <button className="px-6 py-4">
            <a
              href="#"
              className="border font-bold  border-blue-700 rounded text-sky-900 px-8 py-4"
            >
              View All
            </a>
          </button> */}
        </div>
      </main>
    </>
  );
};

export default MainContent;
