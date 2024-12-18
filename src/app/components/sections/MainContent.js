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
      ExpPremium: "18-19 (3.28%)",
      hasApply: true,
      description:
        " Pre-Apply Open. The mandate will be received when the IPO starts.",
    },
    {
      logo: "/Property.jpg",
      name: "Property Share Investment Trust REIT",
      type: "Mainboard",
      // status: "Live",
      offerDate: "Dec 2, 2024 - Dec 4, 2024",
      offerPrice: "1000000",
      lotSize: 1,
      subscription: "N/A times",
      ExpPremium: "18-19 (3.28%)",
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
      ExpPremium: "18-19 (3.28%)",
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
      ExpPremium: "18-19 (3.28%)",
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
      ExpPremium: "18-19 (3.28%)",
      hasApply: false,
    },
  ];

  return (
    <>
    <main className="space-y-3 overflow-hidden  md:w-[65vw]  m-0 lg:w-[63vw] 3sm:w-[120%] sm:h-[full] sm:m-2 shadow-sm">
        {ipoData.map((ipo, index) => (
          <IPOCard key={index} {...ipo} />
        ))}
       
      </main>
    </>
  );
};

export default MainContent;
