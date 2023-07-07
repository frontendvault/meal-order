import React from "react";

const Category = ({ categories, setActiveCategory }) => {
  return (
    <>
      <div className="pb-5">
        <h4 className="mb-4 font-semibold text-gray-800 pb-3 border-b-2 border-blue-600">
          Categories
        </h4>
        <div className="flex flex-col h-[200px] overflow-y-scroll divide-y divide-slate-300">
          {categories.map((category) => {
            return (
              <button
                key={category}
                className=" text-gray-500 px-4 py-2  hover:bg-blue-500 hover:text-white text-left "
                onClick={() =>
                  setActiveCategory(category === "All" ? null : category)
                }
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
