
import React from "react";

const IPOCard = ({
  logo,
  name,
  type,
  offerDate,
  offerPrice,
  lotSize,
  subscription,
  ExpPremium,
  description,
  hasApply,
}) => {
  return (
    <div className="overflow-hidden border rounded-lg bg-white lg:h-[199px] lg:w-[99%] md:w-[63vw] sm:w-[80vw] relative">
      <div className="flex flex-col p-3 gap-2 sm:gap-9 md:flex-row md:items-start">
        {/* Logo */}
        <img
          src={logo}
          alt={`${name} Logo`}
          className="h-19 w-24 rounded-lg object-cover"
        />
       
        {/* Details Section */}
        <div className="flex-1 space-y-4">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h2 className="text-xl text-blue-900 font-bold">{name}</h2>
              <span className="hidden lg:block rounded bg-[#5E783D] px-2 py-2 w-[90px] text-center h-[30px] text-xs font-medium text-white">
                {type}
              </span>
            </div>
            <p className="text-sm text-slate-600">Offer Date: {offerDate}</p>
          </div>
        
          <span className="block lg:hidden rounded bg-[#5E783D] px-2 py-2 w-[90px] text-center h-[30px] text-xs font-medium text-white">
            {type}
          </span>
         
         
          {/* Offer Details */}
          {/* Offer Details */}
          <div className="flex flex-wrap lg:justify-normal items-center gap-3 ">
            <div className="sm:p-1">
              <p className="text-md text-slate-600">Offer Price</p>
              <p className="font-medium text-sm">{offerPrice}</p>
            </div>
            <div className="p-1 ">
              <p className="text-sm text-slate-600">Lot Size</p>
              <p className="font-medium">{lotSize}</p>
            </div>
            <div className="p-1">
              <p className="text-sm text-slate-600">Subscription</p>
              <p className="font-medium">{subscription}</p>
            </div>
            <div className="p-1">
              <p className="text-sm text-slate-600">Exp Premium</p>
              <p className="font-medium text-green-700">{ExpPremium}</p>
            </div>
            <div className="flex gap-2 ml-auto mt-4 sm:mt-0 ">
              <button className="hover:border px-4 py-2 text-violet-800 text-md text-md rounded bg-[#F2F4FF] hover:border-blue-700">
                View
              </button>
            </div>
          </div>

          {/* Additional Information */}
          <div className="flex items-center gap-1 text-sm text-amber-600">
            {description}
          </div>
        </div>

        {/* Buttons Section */}
      </div>
    </div>
  );
};

export default IPOCard;
