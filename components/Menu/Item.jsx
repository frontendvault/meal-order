import Link from "next/link";
import React, { useContext, useMemo, useState } from "react";
import Modal from "./Modal";
import { Store } from "../../utils/Store";
import { FaStar } from "react-icons/fa";
import { CartContext, useCart } from "@/utils/providers/cart.provider";
import { Card, Image, Badge, Button, Group, Text, Rating } from "@mantine/core";
import { useRouter } from "next/router";
import Counter from "../Counter";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

function MealItem({ meal }) {
	const [openModal, setOpenModal] = useState(false);
	const { addCartItem, cart, removeCartItem } = useCart();
	// console.log("🚀 ~ file: Item.jsx:18 ~ MealItem ~ cart:", cart)

	const handleAddToCart = (meal, quantity) => {
		// if (quantity > 0) {
			addCartItem(meal.id, quantity, meal.price);
		// } else {
		// 	removeCartItem(meal.id)
		// }
	};

	
	const cartItemsCount = useMemo(
		() =>
			cart.reduce((count, item) => {
				if (item) {
					if (item.mealId === meal.id) return count + item.quantity;
				}
				return count;
			}, 0),
		[cart, meal.id]
	);

	const renderMealTag = () => {
		if (meal.tags)
			return meal.tags.map((tag) => (
				<Badge color="pink" variant="light">
					{tag?.name}
				</Badge>
			));
	};

	return (
		<div className="relative mb-10 md:mb-0 ">
			<Card cu shadow="sm" padding="lg" radius="md" withBorder>
				<Card.Section>
					<Link href={`/meal/${meal.id}`}>
						<Image src={meal.image} height={160} alt="Norway" />
					</Link>
				</Card.Section>

				<Group className="cursor-pointer" position="apart" mt="xs">
					{/* <Group className="cursor-pointer" position="apart" mt="md"> */}
					<Link href={`/meal/${meal.id}`}>
						<Text weight={500}>{meal.name}</Text>
					</Link>
				</Group>
				{renderMealTag()}
				<Text size="sm" color="dimmed" lineClamp={3}>
					{meal.description}
				</Text>
				<Group position="apart" mb="xs" className="w-full">
					<div className="flex items-center justify-between w-full flex-wrap">
						<Group className="cursor-pointer" position="apart">
							{/* <Group className="cursor-pointer" position="apart" mt="xs" mb="xs"> */}
							<Link href={`/meal/${meal.id}`}>
								<Text size={24} weight={500}>
									{meal.price}$
								</Text>
							</Link>
						</Group>
						<div>
							<Rating defaultValue={meal?.rating || 4} readOnly />
						</div>
						<div>
							{cartItemsCount  ? (
								<div className="">
									<Counter value={cartItemsCount} setValue={(value) => handleAddToCart(meal, value)} />
								</div>
							) : (
								<Button
									type="mantine-button"
									className="bg-blue-500"
									fullWidth
									radius="md"
									onClick={() => handleAddToCart(meal, 1)}
								>
									Add
								</Button>
							)}
						</div>
					</div>
				</Group>
				{/* <div>
					{cartItemsCount ? (
						<div className="mt-4">
							<Counter value={cartItemsCount} setValue={(value) => handleAddToCart(meal, value)} />
						</div>
					) : (
						<Button
							type="mantine-button"
							className="bg-blue-500 mt-5"
							fullWidth
							radius="md"
							onClick={() => handleAddToCart(meal, 1)}
						>
							Add
						</Button>
					)}
				</div> */}
			</Card>
			{/* <p className="absolute bg-red-500  px-2 text-white text-sm font-semibold right-2 rounded">
        {meal.type}
      </p>

      <Link href={`/meal/${meal.id}`}>
        <img src={meal.image} alt={meal.name} style={{ height: "200px" }} />
      </Link>

      <div className="px-2" onClick={() => setOpenModal(true)}>
        <div className="relative flex ">
          <h2 className="text-md mt-3 font-bold leading-5 cursor-pointer mb-2 text-gray-800">
            {meal.name}
          </h2>
        </div>
        <p className="text-md text-gray-500 leading-4 mb-3">
          {meal.description}
        </p>
      </div>
      <div className="flex flex-col px-2">
        <div className="flex justify-between">
          <h2 className="text-sm mb-1 text-lg font-bold text-gray-800">
            ${meal.price || "--"}
          </h2>
          <div className="ml-1 flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <FaStar
                key={rating}
                className={classNames(
                  meal.rating > rating ? "text-yellow-400" : "text-gray-200",
                  "h-5 w-5 flex-shrink-0"
                )}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
        <button
          className=" text-white m-2 py-1 px-3 bg-blue-400 hover:bg-blue-500 rounded"
          onClick={() => {
            handleAddToCart(meal);
          }}
        >
          ADD
        </button>
      </div>
      <div className="flex items-center justify-between"></div> */}
			{/* <Modal open={openModal} meal={meal} onClose={() => setOpenModal(false)} /> */}
		</div>
	);
}

export default MealItem;
