
const RadioGroup2 = () => {
  const tabs = [
    { id: "Current", label: "Current", value: "Current", checked: true },
    { id: "Upcoming", label: "Upcoming", value: "Upcoming" },
    { id: "Closed", label: "Closed", value: "Closed" },
  ];

  return (
    <div className="rounded-md p-2  sm:p-4 ">
      <div className="flex flex-wrap gap-3 sm:gap-6 md:gap-8 lg:gap-10 lg:w-[103%]   rounded-md p-4 bg-white lg:relative lg:right-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="flex items-center space-x-2 text-blue-950 font-medium"
          >
            <input
              type="radio"
              id={tab.id}
              name="filter"
              value={tab.value}
              defaultChecked={tab.checked || false}
              className="cursor-pointer"
            />
            <label
              className="cursor-pointer"
              htmlFor={tab.id}
            >
              {tab.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup2;