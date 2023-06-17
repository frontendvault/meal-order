import React, { useEffect, useMemo, useState } from "react";
import Layout from "../components/Layout";
import MealItem from "@/components/Menu/Item";
import data from "@/utils/data";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import Category from "@/components/Categories/Category";
import { getMenu } from "../services/menu.api";
import { Box, LoadingOverlay, Text } from "@mantine/core";

export default function Menu() {
	const [loading, setLoading] = useState(true);
	const categories = [
		"All",
		...new Set(data.meals.map((item) => item.category)),
	];
	const [mealsInfo, setMealsInfo] = useState([]);
	const [activeCategory, setActiveCategory] = useState(null);
	const [search, setSearch] = useState("");

	const getMenuList = () => {
		setLoading(true);
		getMenu()
			.then(({ data }) => {
				setMealsInfo(data.meals);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		getMenuList();
	}, []);

	const filteredMeals = useMemo(() => {
		return mealsInfo.filter((meal) => {
			if (activeCategory === "All" || !activeCategory) return true;
			return (
				(!activeCategory || activeCategory === meal.category) &&
				meal.name.includes(search)
			);
		});
	}, [mealsInfo, activeCategory, search]);

	return (
		<Layout title="MPO Menu">
			<div className="bg-white">
				<div className="container mx-auto mb-4">
					<div className="flex bg-yellow-300 p-3 mt-5 items-center">
						<FaMapMarkerAlt size={25} />
						<p className="ml-2">Delivering To 14145 Ikorodu Close, Lagos</p>
					</div>
					<div className="mt-3 mb-5 flex relative md:mx-0">
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

					<div className="gap-4 grid grid-cols-1 lg:grid-cols-4 mx-4">
						<div className="w-full col-span-1">
							<div className="bg-gray-100  border p-5 rounded shadow-md w-full">
								<Category
									categories={categories}
									activeCategory={activeCategory}
									setActiveCategory={(category) => setActiveCategory(category)}
								/>
							</div>
						</div>
						<div className="relative col-span-1 lg:col-span-3">
						  <LoadingOverlay visible={loading} overlayBlur={2} />
							{filteredMeals && filteredMeals.length ? (
								<div className="w-full py-5 md:py-6 md:pt-0 rounded mb-20">
									<ul
										role="list"
										className="space-y-1 sm:grid grid-cols-2 lg:grid-cols-3 sm:gap-x-6 sm:gap-y-8 sm:space-y-0 lg:gap-x-8"
									>
										{filteredMeals.map((meal, index) => (
											<MealItem meal={meal} key={index} />
										))}
									</ul>
								</div>
							) : (
								<div className="col-span-3 w-full h-full flex items-center justify-center flex-col text-md">
									<Text align="center">No results found</Text>
									<Text c="dimmed">
										Look like there is no meal that match your criteria, please
										try another one.
									</Text>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
