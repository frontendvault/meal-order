import React, { useContext, useEffect } from "react";
import CheckoutComponent from "../components/CheckoutComponent";
// import Cookies from "js-cookie";
import Layout from "../components/Layout";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import TextField from "@/components/input/TextField";
import { placeOrder } from './API_List/order.api'
import { useCart } from "@/utils/providers/cart.provider";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const validationSchema = yup.object({
  fullName: yup.string().required("Please enter your full name"),
  deliveryAddress: yup.string().required("Please enter your delivery address"),
  postalCode: yup.number().required("Please enter your postal code"),
});

export default function ShippingScreen() {
  const router = useRouter();
  const { cart } = useCart();
  const shipmentAddressCookie = Cookies.get("shipmentAddress");

  const formik = useFormik({
    initialValues: {
      fullName: '',
      deliveryAddress: '',
      postalCode: '',
    },
    validationSchema,
    onSubmit: (values) => {
      Cookies.set("shipmentAddress", JSON.stringify(values));
      placeOrder(cart)
        .then(({ data }) => {
          //router push to the other page
          toast.success("Order Placed")
          formik.setSubmitting(false);
        })
        .catch((res) => {
          toast.error("Something went Wrong!")
          formik.setSubmitting(false);
        });
    },
  });

  useEffect(() => {
    if (shipmentAddressCookie) {
      const detail = JSON.parse(shipmentAddressCookie)
      formik.setValues({
        fullName: detail.fullName,
        deliveryAddress: detail.deliveryAddress,
        postalCode: detail.postalCode,
      });
  console.log("cart",detail,shipmentAddressCookie)
      
    }
  }, []);

  return (
    <Layout title="MPO Shipping Address">
      {/* <CheckoutComponent activeStep={2} /> */}
      <form
        onSubmit={formik.handleSubmit}
        className="mx-auto max-w-screen-md py-20 px-5"
      >
        <h1 className="mb-7 text-xl font-semibold">Delivery Address</h1>
        <div className="mb-4 ">
          {/* <label htmlFor="fullName">Full Name</label> */}
          <TextField
            label="Full Name"
            placeholder="Full Name"
            {...formik.getFieldProps("fullName")}
            error={formik.touched.fullName && formik.errors.fullName}
          />
        </div>

        <div className="mb-4">
          {/* <label htmlFor="deliveryAddress">Delivery Address</label> */}
          <TextField
            label="Delivery Address"
            placeholder="Delivery Address"
            {...formik.getFieldProps("deliveryAddress")}
            error={formik.touched.deliveryAddress && formik.errors.deliveryAddress}
          />
        </div>

        <div className="mb-4">
          {/* <label htmlFor="postalCode">Postal Code</label> */}
          <TextField
            label="Postal Code"
            type="number"
            placeholder="Postal Code"
            {...formik.getFieldProps("postalCode")}
            onBlur={formik.handleBlur}
            error={formik.touched.postalCode && formik.errors.postalCode}
          />
        </div>

        <div className="mb-4 flex justify-between">
          <button
            disabled={formik.isSubmitting}
            type="submit"
            className="w-full  border border-transparent bg-blue-600 py-1 px-4 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">
            {formik.isSubmitting ? "proceeding... " : 'Proceed to Payment'}
          </button>
        </div>
      </form>
    </Layout>
  );
}

ShippingScreen.auth = true;
