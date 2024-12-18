
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi, faCalendar, faList } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const links = [
    { href: "#current", label: "Current IPO", icon: faWifi },
    { href: "#upcoming", label: "Upcoming IPO", icon: faCalendar },
    { href: "#listed", label: "Listed IPO", icon: faList },
  ];

  const linkStyle =
    "flex items-center justify-center flex-col sm:flex-row gap-2 rounded-md hover:border-indigo-400 transition-all bg-white border-2 overflow-x-hidden hover:bg-blue-600";

  return (
    <div className="mt-1 w-full">
      {/* Wrapper for sidebar links */}
      <div className="flex flex-row sm:flex-row md:flex-col justify-center sm:justify-start gap-1 lg:h-[60vh] lg:space-y-4 p-1 w-[92vw] md:w-full rounded-md">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={`${linkStyle} lg:space-y-1 w-[190px] h-[36px] sm:w-[270px] sm:h-[80px] md:w-[154px] md:h-[94px] lg:w-[120px] lg:h-[120px] md:flex-col space-y-1 shadow-md rounded-md space-x-1 hover:bg-[#6055CD] text-sky-950 hover:text-white lg:hover:bg-slate-50 `}

          >
            {/* Icon */}
            <FontAwesomeIcon
              className="hidden sm:block h-7 w-8 text-indigo-900  bg-gray-200 rounded-md p-1"
              icon={link.icon}
            />
            {/* Label */}
            <span className="text-center font-medium  text-md sm:text-md rounded-md  ">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;