
import React from "react";

function BrokerCard({ logo, name, badges, details, buttons }) {
  return (
    <div className="card w-full border rounded-lg shadow-sm bg-white">
      <div className="card-content p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          {/* Logo Section */}
          <div className="flex flex-col items-center sm:w-1/4 lg:w-[12vw] justify-center">
            <img
              src={logo}
              alt={name}
              className="w-auto object-contain h-[25vh] sm:h-[20vh] lg:h-[15vh]"
            />
            <h2 className="mt-2 text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 text-center">
              {name}
            </h2>
          </div>

          {/* Details Section */}
          <div className="flex-1 space-y-4">
            {/* Badges and Buttons */}
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex gap-2 flex-wrap">
                {badges.map((badge, index) => (
                  <span
                    key={index}
                    className="badge bg-[#EEEEEE] text-gray-700 flex items-center gap-2 p-2 rounded-sm text-sm sm:text-base"
                  >
                    <span className="icon h-5 w-5 flex items-center justify-center text-white rounded-full bg-[#C4834A]">
                      ✓
                    </span>
                    {badge}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {buttons.map((button, index) => (
                  <button
                    key={index}
                    className={`${
                      button.label === "View Details"
                        ? "text-[#580088] bg-[#F2F4FF] hover:border-blue-700 border font-bold"
                        : "bg-[#6055CD] text-white hover:bg-[#6055CD]/90"
                    } rounded-md py-2 px-4 text-sm sm:text-base`}
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {details.map((detail, index) => (
                <div key={index} className="p-2">
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
    </div>
  );
}

export default BrokerCard;
