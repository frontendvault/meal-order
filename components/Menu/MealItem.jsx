import Link from "next/link";

import React, { Fragment, useContext, useState } from "react";

import Modal from "../../pages/meal/modal";
import data from "../../utils/data";
import { Store } from "../../utils/Store";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MealItem({ meal }) {
  const [openModal, setOpenModal] = useState(false);
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = (meal) => {
    const existItem = cart.cartItems.find((x) => x.slug === meal.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    dispatch({ type: "CART_ADD_ITEM", payload: { ...meal, quantity } });
  };

  return (
    <Fragment>
      <div className="relative card mb-10 md:mb-0 ">
        <p className="absolute bg-red-500  px-2 text-white text-sm font-semibold right-2 rounded">
          {meal.category}
        </p>
        <Link href={`/meal/${meal.slug}`}>
          <Image src={meal.imageUrl} alt={meal.name} width={200} height={160} />
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
              ${meal.price}
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
            onClick={() => addToCartHandler(meal)}
          >
            ADD
          </button>
        </div>
        <div className="flex items-center justify-between"></div>
        <Modal
          open={openModal}
          meal={meal}
          onClose={() => setOpenModal(false)}
        />
      </div>
    </Fragment>
  );
}

export default MealItem;
