import React from "react";

const PriceRange = () => {
  return (
    <div className="border-b border-blue-500 md:pb-5">
      <h4 className="mb-4 font-semibold text-gray-800"> Price Range</h4>
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Low"
          className="w-[49%] h-12 rounded px-3"
        />
        <input
          type="text"
          placeholder="High"
          className="w-[49%] h-12 rounded px-3"
        />
      </div>
    </div>
  );
};

export default PriceRange;
