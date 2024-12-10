
import React from "react";

const RadioGroup2 = () => {
  const tabs = [
    { id: "Current", label: "Current", value: "Current", checked: true }, 
    { id: "Upcoming", label: "Upcoming", value: "Upcoming" },
    { id: "Closed", label: "Closed", value: "Closed" },
  ];

  return (
    <div className="rounded-md p-1  mr-14 ">
      <div className="flex gap-9 shadow-sm lg:w-[72vw] md:w-[99vh] w-[43vh] rounded p-3 bg-[white]">
        {tabs.map((tab) => (
          <div key={tab.id} className="flex items-center space-x-2 text-blue-950 font-medium">
            <input
              type="radio"
              id={tab.id}
              name="filter"
              value={tab.value}
              defaultChecked={tab.checked || false} 
              className="cursor-pointer"
            />
            <label className="font-medium cursor-pointer" htmlFor={tab.id}>
              {tab.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup2;
