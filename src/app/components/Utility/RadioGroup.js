
import React from "react";


const RadioGroup = () => {
  const options = [
   
    { id: "mainboard", label: "Mainboard", value: "mainboard", checked: true },
    { id: "sme", label: "SME", value: "sme" },
    { id: "all", label: "All", value: "all" },
  ];

  return (
    
    <div className="flex  lg:gap-5 gap-1 sm:gap-16 overflow-hidden ">
      <div className="text-gray-700 bg-[white] font-medium text-center justify-center hover:border-black  rounded-sm shadow-sm p-3  lg:ml-[59px] w-[132px] lg:w-[120px]">Filter</div>
      <div className="flex  w-[90vw] gap-1 lg:gap-9 shadow-md lg:w-[62vw] rounded p-3 bg-[white]">
      {options.map((option) => (
        <div key={option.id} className="flex  items-center space-x-1 ">
          <input
            type="radio"
            id={option.id}
            name="filter"
            value={option.value}
            defaultChecked={option.checked}
          />
          <label className="font-medium text-sm p-[4px] " htmlFor={option.id}>
            {option.label}
          </label>
        </div>
      ))}
    </div>
    {/* <div className="lg:w-[300px] lg:right-0 lg:top-0  h-[42vh]">
               <Playstore/>
             </div> */}
    </div>
   
  );
};

export default RadioGroup;