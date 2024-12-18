
import React from "react";

const BrokerCard = ({ logo, name, badges, details, buttons }) => {
  return (
    <div className="card w-full max-w-full border rounded-lg shadow-sm p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 sm:gap-6">
        {/* Logo and Name Section */}
        <div className="flex sm:flex-row lg:flex-col items-center gap-4 p-1 sm:w-1/3 lg:w-[10vw]">
          {/* Logo */}
          <div className="relative w-auto h-[15vh] sm:h-[12vh] lg:h-[10vh]">
            <img
              src={logo}
              alt={name}
              className="w-auto object-contain h-full"
            />
          </div>
          {/* Name */}
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 text-center">
            {name}
          </h2>
        </div>

        {/* Details Section */}
        <div className="flex-1 space-y-4 w-full">
          {/* Badges and Buttons */}
          <div className="flex flex-wrap lg:flex-nowrap lg:items-center lg:justify-between gap-4 ">
            {/* Badges */}
            <div className="flex gap-2 flex-wrap lg:flex-1">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="badge bg-[#EEEEEE] text-gray-700 flex items-center gap-1 px-2 py-1 rounded-md text-sm sm:text-base"
                >
                  <span className="icon h-5 w-5 flex items-center justify-center text-white rounded-full bg-[#C4834A]">
                    ✓
                  </span>
                  {badge}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 lg:flex-shrink-0 ">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className={`${button.className} rounded-md text-sm sm:text-base text-center p-2 space-x-5`}
                  style={{ height: "34px", width: "120px" }}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1">
            {details.map((detail) => (
              <div key={detail.label} className="p-2">
                <p className="text-sm text-gray-500">{detail.label}</p>
                <p className="text-base sm:text-lg font-semibold text-gray-700">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokerCard;
