import React, { useContext, useEffect } from "react";
import CheckoutComponent from "../components/CheckoutComponent";
// import Cookies from "js-cookie";
import Layout from "../components/Layout";

import { useForm } from "react-hook-form";
import { Store } from "../utils/Store";
import { useRouter } from "next/router";

export default function ShippingScreen() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress } = cart;

  const router = useRouter();

  useEffect(() => {
    setValue("fullName", shippingAddress.fullName);
    setValue("billingAddress", shippingAddress.address);
    setValue("deliveryAddress", shippingAddress.city);
    setValue("postalCode", shippingAddress.postalCode);
  }, [setValue, shippingAddress]);

  const submitHandler = ({
    fullName,
    billingAddress,
    deliveryAddress,
    postalCode,
  }) => {
    dispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: { fullName, billingAddress, deliveryAddress, postalCode },
    });
    // Cookies.set(
    //   "cart",
    //   JSON.stringify({
    //     ...createImageBitmap,
    //     shippingAddress: {
    //       fullName,
    //       billingAddress,
    //       deliveryAddress,
    //       postalCode,
    //     },
    //   })
    // );
    router.push("/payment");
  };
  return (
    <Layout title="MPO Shipping Address">
      {/* <CheckoutComponent activeStep={2} /> */}
      <form
        action="/api/checkout"
        method="POST"
        className="mx-auto max-w-screen-md py-20 px-5"
      >
        <h1 className="mb-7 text-xl font-semibold">Delivery Address</h1>
        <div className="mb-4 ">
          <label htmlFor="fullName">Full Name</label>
          <input
            className="w-full border  p-2"
            id="fullName"
            {...register("fullName", {
              required: "Please enter full name",
            })}
          />
          {errors.fullName && (
            <div className="text-red-500">{errors.fullName.message}</div>
          )}
        </div>
        {/* <div className="mb-4">
          <label htmlFor="bilingAddress">Billing Address</label>
          <input
            className="w-full border p-2"
            id="billingAddress"
            {...register("billingAddress", {
              required: "Please enter the address you want meal delivered",
              minLength: {
                value: 3,
                message: "Address is more than 2 characters",
              },
            })}
          />
          {errors.billingAddress && (
            <div className="text-red-500">{errors.billingAddress.message}</div>
          )}
        </div> */}

        <div className="mb-4">
          <label htmlFor="deliveryAddress">Delivery Address</label>
          <input
            className="w-full border  p-2"
            id="deliveryAddress"
            {...register("deliveryAddress", {
              required: "Please enter your Delivery Address",
            })}
          />
          {errors.deliveryAddress && (
            <div className="text-red-500">{errors.deliveryAddress.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            className="w-full border  p-2"
            id="postalCode"
            {...register("postalCode", {
              required: "Please enter your postal code",
            })}
          />
          {errors.postalCode && (
            <div className="text-red-500">{errors.postalCode.message}</div>
          )}
        </div>
        <div className="mb-4 flex justify-between">
          <button className="w-full  border border-transparent bg-blue-600 py-1 px-4 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
            Proceed to Payment
          </button>
        </div>
      </form>
    </Layout>
  );
}

ShippingScreen.auth = true;
