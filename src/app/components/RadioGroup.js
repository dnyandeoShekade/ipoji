import React from "react";

const RadioGroup = () => {
  const options = [
   
    { id: "mainboard", label: "Mainboard", value: "mainboard", checked: true },
    { id: "sme", label: "SME", value: "sme" },
    { id: "all", label: "All", value: "all" },
  ];

  return (
    <div className="flex  lg:gap-7  sm:gap-16 overflow-hidden">
      <div className="text-gray-700 bg-[white] font-medium text-center hover:border-black  rounded-sm shadow-md p-3  lg:ml-[67px] w-[132px] lg:w-[108px]">Filter</div>
      <div className="flex w-[90vw] gap-5 lg:gap-9 shadow-sm lg:w-[67vw] rounded p-3 bg-[white]">
      {options.map((option) => (
        <div key={option.id} className="flex items-center space-x-2">
          <input
            type="radio"
            id={option.id}
            name="filter"
            value={option.value}
            defaultChecked={option.checked}
          />
          <label className="font-medium" htmlFor={option.id}>
            {option.label}
          </label>
        </div>
      ))}
    </div>
    </div>
  );
};

export default RadioGroup;
