// import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import Testimonials from "../components/Testimonials";

import Image from "next/image";
import { Faqs } from "@/components/faq";
import { useCart } from "@/utils/providers/cart.provider";
import { getMenu } from "../services/menu.api";
import client from "@/utils/client";
import { toast } from "react-toastify";

function BagScreen() {
  const { cart, addCartItem, removeItem } = useCart();
  const [cartMeals, setCartMeals] = useState([]);
  const router = useRouter();

  const totalPrice = () => {
    return cartMeals.reduce((a, c) => a + c.quantity * c.price, 0) + 69;
  };

  useEffect(() => {
    if (!cart.length) {
      return;
    }
    client
      .get(`/v1/meals?limit=50&only=${cart.map((item) => item.id).join(",")}`)
      .then(({ data }) => {
        setCartMeals(
          data.results.map((meal) => ({
            ...meal,
            quantity: cart.find((m) => m.id === meal.id).quantity,
          }))
        );
      })
      .catch(() => {
        toast.error("Unable to load Cart data");
      });
  }, [cart]);

  return (
    <Layout title="MPO - Shopping Bag">
      <div className="container mx-auto mt-10 p-5">
        <div className="border-b border-gray-200 pb-3">
          {" "}
          <a href="/menu" className="flex items-center text-sm mb-2 mr-2">
            {/* <ChevronLeftIcon className="h-3 w-3 mr-2" /> */}
            <p>Back</p>
          </a>
          <h1 className=" text-3xl font-bold">My Bag</h1>
        </div>
        <div
          // className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
          className="mt-1 md:mt-12 flex items-start flex-col md:flex-row"
        >
          <section aria-labelledby="cart-heading" className="md:w-2/3">
            {cart.length === 0 ? (
              <div>
                {/* <Link href="/menu">Go to Menu</Link> */}
                <li className="flex  mt-15 md:mt-32 py-6 items-center justify-center">
                  <Image
                    src="/images/empty.png"
                    alt="empty"
                    width={100}
                    height={100}
                    // className="h-40 w-40 flex-none  bg-white object-cover object-center"
                  />
                  <div className="flex flex-col justify-between space-y-4 grow">
                    <div className="space-y-1 text-sm grow">
                      <div className="flex items-center justify-between grow mb-2">
                        <div>
                          <p>Uh Oh!</p>
                          <h3 className="text-gray-900 text-xl font-medium">
                            Your cart is empty!
                          </h3>
                          <span className="text-gray-900 text-xl font-medium">
                            Time to pick your meals for the week!
                          </span>
                        </div>
                      </div>

                      <Link href={"/menu"}>
                        <span className="flex underline text-lg font-bold text-blue-500 cursor-pointer">
                          Add meals to cart
                        </span>
                      </Link>
                    </div>
                  </div>
                </li>
              </div>
            ) : (
              <div>
                <ul
                  role="list"
                  className="flex-auto divide-y divide-gray-200 overflow-y-auto md:px-6 md:pl-0 md:mr-10"
                >
                  {cartMeals.map((item) => (
                    <li key={item.id} className="flex space-x-6 py-6">
                      <Image
                        src={item?.image}
                        alt={item?.name}
                        height={100}
                        width={100}
                      />

                      <div className="flex flex-col justify-between space-y-4 grow">
                        <div className="space-y-1 text-sm grow">
                          <div className="flex items-center justify-between grow">
                            <div>
                              <h3 className="text-gray-900 text-lg font-semibold">
                                {item?.name}
                              </h3>
                            </div>
                            {/* <p className="mr-3">{item.quantity}</p> */}
                            <select
                              value={item?.quantity}
                              onChange={(e) =>
                                addCartItem(item, e.target.value * 1)
                              }
                              className="max-w-full border border-gray-300 py-1.5 px-2 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                            >
                              {[...Array(item?.quantity).keys()].map((x) => (
                                <option>{x * 1 + 1}</option>
                              ))}
                            </select>
                          </div>

                          <p>{item?.description}</p>
                          <p>{item?.rating}</p>

                          <p className="flex justify-end font-bold text-2xl text-gray-900">
                            ${item?.price}
                          </p>
                        </div>

                        <div className="flex space-x-4">
                          <button
                            type="button"
                            className="text-sm font-medium  hover:text-indigo-500 underline"
                          >
                            Add to favorites
                          </button>
                          <div className="flex border-l border-gray-300 pl-4">
                            <button
                              onClick={() => removeItem(item.id)}
                              type="button"
                              className="text-sm font-medium text-red-600 hover:text-red-400 underline"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className={`mt-16 bg-gray-100  px-4 py-6 sm:p-6 lg:mt-0 lg:p-8 rounded w-full md:w-1/3 ${
              !cart.length ? "hidden" : ""
            }`}
          >
            <div>
              <h2
                id="summary-heading"
                className="text-2xl mb-10 font-bold text-gray-900"
              >
                Summary
              </h2>

              <dl className="mt-6 space-y-2">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">
                    Subtotal ({cartMeals.reduce((a, c) => a + c.quantity, 0)})
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">
                    $
                    {Math.round(
                      cartMeals.reduce((a, c) => a + c.quantity * c.price, 0),
                      2
                    )}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex items-center text-sm text-gray-600">
                    <span>Shipping</span>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">$30</dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex text-sm text-gray-600">
                    <span>Tax </span>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">$39</dd>
                </div>
              </dl>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between border-t border-gray-200 pt-4 mb-6">
                <dt className="text-xl font-semibold text-gray-900">Total</dt>
                <dd className="text-xl font-semibold text-gray-900">
                  {" "}
                  ${totalPrice()}
                </dd>
              </div>
              <button
                type="button"
                onClick={() => router.push("/shipping")}
                // onClick={() => router.push("login?redirect=/shipping")}
                className="w-full  border border-transparent bg-indigo-500 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Checkout ${totalPrice()}
              </button>
            </div>
          </section>
          <input
            type="hidden"
            name="meals"
            // value={selectedProducts.join(",")}
          />
        </div>
      </div>
      <Testimonials />
      <Faqs />
    </Layout>
  );
}

// export default dynamic(() => Promise.resolve(BagScreen), { ssr: false });
export default BagScreen;
