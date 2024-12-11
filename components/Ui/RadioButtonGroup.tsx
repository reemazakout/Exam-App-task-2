import React, { useState } from "react";

const RadioButtonGroup = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    "Voluptate itaque sunt ut scscsoluta est sunt illum.",
    "Its going to rain today.",
    "Voluptate itaque sunt ut soluta est sunt illum.",
    "Voluptas necessitatibus et ut sit suscipit a.",
  ];

  return (
    <div className="space-y-4 max-w-lg">
      {options.map((option, index) => (
        <label
          key={index}
          className={`flex items-center p-4 rounded-xl border ${
            selectedOption === option ? "bg-[#CCD7EB]" : "bg-[#EDEFF3]"
          } cursor-pointer`}
        >
          <input
            type="radio"
            name="options"
            value={option}
            checked={selectedOption === option}
            onChange={() => setSelectedOption(option)}
            className="form-radio w-3 h-3 text-[#02369C] mr-3"
          />
          <span className="text-gray-800 text-sm">{option}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButtonGroup;
