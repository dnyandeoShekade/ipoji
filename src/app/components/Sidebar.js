
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi, faCalendar, faList } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const links = [
    { href: "#current", label: "Current IPOs", icon: faWifi },
    { href: "#upcoming", label: "Upcoming IPOs", icon: faCalendar },
    { href: "#listed", label: "Listed IPOs", icon: faList },
  ];

  return (
    <div className="mt-1 lg:mt-0 sm:mt-2 ">
      <div className="flex flex-wrap justify-center lg:justify-end md:justify-start gap-4 sm:px-2 md:px-4  py-4 md:py-0  rounded-lg hover:text-white ">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="flex flex-col  items-center justify-center gap-2 sm:w-[140px] sm:h-[90px] w-[150px] h-[120px] md:w-[120px] md:h-[140px] lg:w-[112px] lg:h-[129px] rounded-lg shadow-md border hover:border-indigo-600  transition-all bg-white  "
          >
            <FontAwesomeIcon className=" h-8 w-8 text-indigo-900 m-2 bg-[#F2F4FF] rounded" icon={link.icon} />
            <div className="text-center">
              <span className="block font-medium text-indigo-900 text-md">{link.label}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
