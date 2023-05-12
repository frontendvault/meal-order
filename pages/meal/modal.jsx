import Link from "next/link";
import React, { useContext } from "react";
import { Store } from "../../utils/Store";
import Image from "next/image";
import { FaCross, FaStar } from "react-icons/fa";

function Modal({ open, meal, onClose }) {
  const { state, dispatch } = useContext(Store);

  if (!open) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const addToCartHandler = (meal) => {
    const existItem = state.cart.cartItems.find((x) => x.slug === meal.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    // const { data } = await axios.get(`/api/meals/${meal._id}`);
    // if (product.countInStock < quantity) {
    //   return toast.error("Sorry. Meal is out of stock");
    // }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...meal, quantity } });
    // toast.success("Meal added to the cart");
  };

  return (
    <div
      className="fixed z-50 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      // onClick={() => onClose(handleClose)}
    >
      <div className="bg-white relative modalCard flex ">
        <div
          className="flex text-md cursor-pointer items-center p-3 gap-2 font-semibold text-gray-600 absolute top-0 right-0 "
          onClick={() => onClose()}
        >
          <p>Close</p>
          <FaCross className="h-5 w-5" />
        </div>
        <div className="w-[700px] bg-white   flex flex-col ">
          <div className="">
            <div className="flex">
              <div>
                <Link href={`/meal/${meal.slug}`}>
                  <Image
                    className="p-3"
                    src={meal.imageUrl}
                    alt={meal.name}
                    width={360}
                    height={360}
                  />
                </Link>
                <div className="flex gap-3 p-3">
                  <Image
                    src={meal.imageUrl}
                    alt={meal.name}
                    width={100}
                    height={80}
                  />
                  <Image
                    src={meal.imageUrl}
                    alt={meal.name}
                    width={100}
                    height={80}
                  />
                  <Image
                    src={meal.imageUrl}
                    alt={meal.name}
                    width={100}
                    height={80}
                  />
                </div>
              </div>

              <div>
                <hr className="mt-3 mr-6" />
                <div className="p-4">
                  <div className="flex justify-between relative">
                    <h2 className="font-bold text-xl">{meal.name}</h2>
                  </div>
                  <p className="mt-1 text-lg ">${meal.price}</p>
                  <div className="flex items-center gap-4">
                    <p>{meal.rating}/5</p>
                    <div className="flex h-14 w-14  ">
                      {Array(meal.rating)
                        .fill()
                        .map((_, i) => (
                          <FaStar className="text-gray-700" key={i} />
                        ))}
                    </div>
                    <p className="underline cursor-pointer">See all reviews</p>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-500 ">
                    Health Benefits
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Healthy meals make you live longer{" "}
                    <span className="underline cursor-pointer">Click more</span>
                  </p>
                  <h3 className="font-semibold text-lg text-gray-500 mb-1">
                    Quantity
                  </h3>
                  <div className="flex gap-2 justify-between">
                    <div className="border p-2 pr-10">
                      <p>Small</p>
                      <p className="text-xs font-semibold text-gray-400">
                        120 by 18 inches
                      </p>
                    </div>
                    <div className="border p-2 pr-10">
                      <p>Medium</p>
                      <p className="text-xs font-semibold text-gray-400">
                        150 by 18 inches
                      </p>
                    </div>
                  </div>
                  <p className="underline text-sm text-gray-500">
                    Find the perfect quantity?
                  </p>
                  <div className="flex flex-col gap-2 mt-14">
                    <button
                      className="bg-blue-600 text-white p-3"
                      onClick={() => addToCartHandler(meal)}
                    >
                      Add to Cart
                    </button>
                    <button className="border p-3">Save To My List</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
