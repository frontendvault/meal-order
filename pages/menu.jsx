import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import MealItem from "@/components/Menu/MealItem";

import data from "@/utils/data";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import CategoriesSection from "@/components/Categories";

export default function Menu() {
  const [openModal, setOpenModal] = useState(false);
  const allCategories = [
    "All",
    ...new Set(data.meals.map((item) => item.category)),
  ];

  const [mealsInfo, setMealsInfo] = useState(data.meals);
  // console.log("mealsinfo", mealsInfo);
  const [category, seCategory] = useState(allCategories);
  const [search, setSearch] = useState("");

  const filterCategories = (category) => {
    if (category === "All") {
      setMealsInfo(mealsInfo);
      return;
    }
    const newitems = mealsInfo.filter((meal) => meal.category === category);
    setMealsInfo(newitems);
  };

  const filterSearch = (e) => {
    const enteredSearch = e.target.value.toLowerCase();
    const filteredSearch = mealsInfo.filter((item) =>
      item.name.toLowerCase().includes(enteredSearch)
    );
    setSearch(filteredSearch);
    setMealsInfo(filteredSearch);
  };

  return (
    <Layout title="MPO Menu">
      {/* <Meals meals={meals} /> */}
      <div className="bg-white">
        <div className="container mx-auto  px-0  sm:px-6 lg:px-8 ">
          <div className="flex bg-yellow-300 p-3 mt-5 items-center">
            <FaMapMarkerAlt size={25} />
            <p className="ml-2">Delivering To 14145 Ikorodu Close, Lagos</p>
          </div>
          <div className="mt-3 mb-5 flex relative mx-5 md:mx-0">
            <input
              // value={search}
              onChange={filterSearch}
              type="text"
              placeholder="Search for meals..."
              className=" hover:shadow-lg border w-full py-3 px-4 rounded outline-none bg-gray-200"
            />
            <FaSearch
              size={25}
              className="text-blue-600 absolute right-5 top-3"
            />
          </div>

          <div className="flex items-start flex-col md:flex-row">
            <div className="md:w-1/4">
              <CategoriesSection
                category={category}
                filterCategories={filterCategories}
              />
            </div>
            <div className="w-full md:w-3/4 py-5 md:ml-7 md:py-6 md:pt-0 rounded mb-20 ">
              <ul
                role="list"
                className="space-y-1 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:gap-y-8 sm:space-y-0 lg:gap-x-8"
              >
                {mealsInfo.map((meal) => (
                  <div>
                    <MealItem meal={meal} key={meal.slug} />
                    {/* <Modal open={openModal} /> */}
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
