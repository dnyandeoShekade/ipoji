import React from "react";

const IPOCard = ({
  logo,
  name,
  type,
  status,
  offerDate,
  offerPrice,
  lotSize,
  subscription,
  hasApply,
  description,
}) => {
  return (
    <div className="overflow-hidden border rounded-lg shadow-md bg-white space-x-7 lg:w-[67vw] md:w-[70vw] sm:w-[80vw] ">
      <div className="flex flex-col sm:gap-9 gap-6 p-8 md:flex-row md:items-start">
        <img
          src={logo}
          alt={`${name} Logo`}
          className="h-19 w-24 rounded-lg object-cover"
        />
        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold">{name}</h2>
              <span className="rounded bg-[#5E783D] px-2 py-2 w-[90px] text-center h-[30px] text-xs font-medium text-white">
                {type}
              </span>
              {/* <span className="rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                {status}
              </span> */}
            </div>
            <p className="text-sm text-slate-600">Offer Date: {offerDate}</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <p className="text-sm text-slate-600">Offer Price</p>
              <p className="font-medium">{offerPrice}</p>
            </div>
            <div>
              <p className="text-sm text-slate-600">Lot Size</p>
              <p className="font-medium">{lotSize}</p>
            </div>
            <div>
              <p className="text-sm text-slate-600">Subscription</p>
              <p className="font-medium">{subscription}</p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-sm text-amber-600">
            {description}
          </div>
        </div>

        <div className="flex gap-2 md:flex md:flex-row">
          <button className="hover:border  px-4 py-2 text-[#00249F] text-md rounded bg-[#F2F4FF] hover:border-blue-700 ">
            View
          </button>
          {hasApply && (
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded">
              Apply
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default IPOCard;
