import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { FaStar, FaPlus, FaMinus } from "react-icons/fa";
import data from "../../utils/data";

import Features from "../../components/Menu/Features";
import Testimonials from "../../components/Testimonials";
import Layout from "../../components/Layout";
import { Store } from "../../utils/Store";
import { Faqs } from "@/components/faq";

export default function MealScreen() {
  // const { meal } = props;
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  const { query } = useRouter();
  const { slug } = query;
  const [quantity, setQuantity] = useState(1);
  const meal = data.meals.find((x) => x.slug === slug);
  if (!meal) {
    return (
      <Layout title="Meal not found">
        <div className="flex justify-center mt-[700px] items-center text-red-400 font-bold">
          Help me! Help me!! I am going to die of hunger because I cant find the
          meal
        </div>
      </Layout>
    );
  }

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === meal.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    // const { data } = await axios.get(`/api/meals/${meal._id}`);
    // if (data.countInStock < quantity) {
    //   return toast.error("Sorry. Meal is out of stock");
    // }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...meal, quantity } });
    router.push("/bag");
  };

  return (
    <Layout title={meal.name}>
      <div className="py-2  mx-auto">
        <div className="md:px-10 mt-10 container mx-auto">
          <Link href="/menu">Back to meals</Link>
        </div>
        <div className="md:px-10 mt-10 container mx-auto  flex">
          <div className=" mr-8 md:w-[500]">
            <ul className="">
              <li>
                <h1 className="text-2xl font-bold">{meal.name}</h1>
              </li>
              {/* <li>Category: {meal.category}</li> */}
              <li className="flex items-center  gap-3 mb-4">
                <div className="flex ">
                  {Array(meal.rating)
                    .fill()
                    .map((_, i) => (
                      <FaStar className="text-yellow-400" />
                    ))}
                </div>
                <div>{meal.review} reviews</div>
              </li>
              <li className="flex text-align">{meal.longDescription}</li>
              <li className="font-bold text-2xl mt-3">${meal.price}</li>
              <li className="flex items-center  mt-10">
                <p>Select quantity</p>
                <div className="border  flex items-center m-1 h-12">
                  <FaMinus
                    className="h-6 w-8 border-r p-1 text-black cursor-pointer font-bold"
                    onClick={(e) => setQuantity(quantity - 1)}
                  />
                  <p className="text-xl font-bold mx-1 ">0{quantity}</p>
                  <FaPlus
                    className="h-6 w-8 border-l p-1 text-black cursor-pointer font-bold"
                    onClick={(e) => setQuantity(quantity + 1)}
                  />
                </div>
              </li>
              <li className="flex justify-between mt-10">
                <p>Meal in stock today</p>
                <p className="font-bold">
                  {meal.countInStock > 0 ? "In Stock" : "Unavailable"}
                </p>
              </li>
              <li className="flex mt-10">
                <button
                  className="bg-blue-700 text-white p-3 grow text-left"
                  onClick={addToCartHandler}
                >
                  ADD TO CART
                </button>
              </li>
            </ul>
          </div>
          <div className="flex md:w-[500px] flex-col">
            <div className="md:w-[500px]">
              <Image
                src={meal.imageUrl}
                alt={meal.name}
                width={500}
                height={500}
              ></Image>
            </div>
            <div className=" flex justify-between">
              <Image
                src={meal.imageUrl}
                alt={meal.name}
                width={200}
                height={200}
              />
              <Image
                src={meal.imageUrl}
                alt={meal.name}
                width={200}
                height={200}
              />
              <Image
                src={meal.imageUrl}
                alt={meal.name}
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
        <div className="md:mt-20">
          <Features />
          <Testimonials />
          <Faqs />
        </div>
      </div>
    </Layout>
  );
}
