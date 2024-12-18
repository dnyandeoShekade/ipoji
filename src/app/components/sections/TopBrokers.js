import React from "react";
import BrokerCard from "./BrokerCard";

function TopBrokers() {
  const brokers = [
    {
      logo: "/Zerodha-logo.jpeg",
      name: "Zerodha",
      badges: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      details: [
        { label: "Account Opening", value: "Free" },
        { label: "Account Maintenance", value: "₹300" },
        { label: "Equity Delivery", value: "Zero" },
        { label: "Equity Intraday", value: "0.03%" },
      ],
      buttons: [
        {
          label: "View Details",
          className:
            "btn btn-outline text-[#580088] bg-[#F1F4FF] hover:border-black font-bold",
        },
        {
          label: "Open Account",
          className:
            "btn bg-[#6055CD] text-white hover:bg-blue-700 flex flex-row",
        },
      ],
    },
    {
      logo: "/angel-logo.jpeg",
      name: "Angel One",
      badges: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      details: [
        { label: "Account Opening", value: "Free" },
        { label: "Account Maintenance", value: "₹240" },
        { label: "Equity Delivery", value: "Zero" },
        { label: "Equity Intraday", value: "0.03%" },
      ],
      buttons: [
        {
          label: "View Details",
          className:
            "btn btn-outline text-[#580088] bg-[#F1F4FF] hover:border-black font-bold",
        },
        {
          label: "Open Account",
          className:
            "btn bg-[#6055CD] text-white hover:bg-blue-700 flex flex-row",
        },
      ],
    },
    {
      logo: "/upstox-logo.jpeg",
      name: "Upstox",
      badges: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      details: [
        { label: "Account Opening", value: "Free" },
        { label: "Account Maintenance", value: "Free" },
        { label: "Equity Delivery", value: "2.5%" },
        { label: "Equity Intraday", value: "0.05%" },
      ],
      buttons: [
        {
          label: "View Details",
          className:
            "btn btn-outline text-[#580088] bg-[#F1F4FF] hover:border-black font-bold",
        },
        {
          label: "Open Account",
          className:
            "btn bg-[#6055CD] text-white hover:bg-blue-700 flex flex-row",
        },
      ],
    },
    {
      logo: "/dhan-logo.jpeg",
      name: "dhan",
      badges: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      details: [
        { label: "Account Opening", value: "Free" },
        { label: "Account Maintenance", value: "Free" },
        { label: "Equity Delivery", value: "zero" },
        { label: "Equity Intraday", value: "0.03%" },
      ],
      buttons: [
        {
          label: "View Details",
          className:
            "btn btn-outline text-[#580088] bg-[#F1F4FF] hover:border-black font-bold",
        },
        {
          label: "Open Account",
          className:
            "btn bg-[#6055CD] text-white hover:bg-blue-700 flex flex-row",
        },
      ],
    },
    {
      logo: "/kotak-sec-logo.jpeg",
      name: "Kotak",
      badges: ["Equity", "Commodity", "Currency", "Futures", "Options"],
      details: [
        { label: "Account_Opening", value: "Free" },
        { label: "Account Maintenance", value: "600" },
        { label: "Equity Delivery", value: "2.5%" },
        { label: "Equity Intraday", value: "zero" },
      ],
      buttons: [
        {
          label: "View Details",
          className:
            "btn btn-outline text-[#580088] bg-[#F1F4FF] hover:border-black font-bold",
        },
        {
          label: "Open Account",
          className:
            "btn bg-[#6055CD] text-white hover:bg-blue-700 flex flex-row ",
        },
      ],
    },
  ];

  return (
    <div className="container lg:relative lg:right-[90px] mx-auto lg:px-1 lg:py-1 px-1 py-1 lg:w-[67vw]">
      <h1 className="mb-6 text-2xl sm:text-3xl md:text-4xl font-bold  text-blue-900">
        Top Brokers
      </h1>
      <div className="space-y-6">
        {brokers.map((broker, index) => (
          <BrokerCard key={index} {...broker} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-6 py-3 font-bold border hover:border-blue-500 text-sky-900 rounded-lg">
          View All
        </button>
      </div>
    </div>
  );
}

export default TopBrokers;
