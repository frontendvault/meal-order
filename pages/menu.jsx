import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import MealItem from "@/components/Menu/Item";
import data from "@/utils/data";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import Category from "@/components/Categories/Category";
import { getMenu } from "../services/menu.api";

export default function Menu() {
  const categories = [
    "All",
    ...new Set(data.meals.map((item) => item.category)),
  ];
  const [mealsInfo, setMealsInfo] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [search, setSearch] = useState("");

  const getMenuList = () => {
    getMenu().then(({data})=>{
      setMealsInfo(data.meals)
    })
  }

  useEffect(() => {
    getMenuList();
  }, []);

  return (
    <Layout title="MPO Menu">
      <div className="bg-white">
        <div className="container mx-auto  px-0  sm:px-6 lg:px-8 ">
          <div className="flex bg-yellow-300 p-3 mt-5 items-center">
            <FaMapMarkerAlt size={25} />
            <p className="ml-2">Delivering To 14145 Ikorodu Close, Lagos</p>
          </div>
          <div className="mt-3 mb-5 flex relative mx-5 md:mx-0">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
              <div className="bg-gray-100  border p-5 rounded shadow-md mr-4 w-full md:w-[300px]">
                <Category
                  categories={categories}
                  setActiveCategory={(category) => setActiveCategory(category)}
                />
              </div>
            </div>
            <div className="w-full md:w-3/4 py-5 md:ml-7 md:py-6 md:pt-0 rounded mb-20 ">
              <ul
                role="list"
                className="space-y-1 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:gap-y-8 sm:space-y-0 lg:gap-x-8"
              >
                {mealsInfo
                  .filter(
                    (meal) =>
                      (!activeCategory || activeCategory === meal.category) &&
                      meal.name.includes(search)
                  )
                  .map((meal, index) => (
                    <MealItem meal={meal} key={index} />
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
