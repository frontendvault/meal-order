// import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
import CheckoutComponent from "../components/CheckoutComponent";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";

export default function PaymentScreen() {
  const router = useRouter();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress, paymentMethod } = cart;

  const submitHandler = (e) => {
    e.preventDefault();
    if (!selectedPaymentMethod) {
      return toast.error("Payment method is required");
    }
    dispatch({ type: "SAVE_PAYMENT_METHOD", payload: selectedPaymentMethod });
    Cookies.set(
      "cart",
      JSON.stringify({ ...cart, paymentMethod: selectedPaymentMethod })
    );
    router.push("/placeorder");
  };

  useEffect(() => {
    if (!shippingAddress.address) {
      return router.push("/shipping");
    }
    setSelectedPaymentMethod(paymentMethod || "");
  }, [paymentMethod, router, shippingAddress.address]);

  return (
    <Layout title="Payment Method">
      <CheckoutComponent activeStep={3} />
      <form className="mx-auto max-w-screen-md" onSubmit={submitHandler}>
        <h1 className="mb-4 text-xl">Payment Method</h1>
        {["Stripe", "PayPal", "CashOnDelivery"].map((payment) => (
          <div className="mb-4" key={payment}>
            <input
              className="p-2 outline-none"
              type="radio"
              id={payment}
              checked={selectedPaymentMethod === payment}
              onChange={() => setSelectedPaymentMethod(payment)}
            />
            <label className="p-2" htmlFor={payment}>
              {payment}
            </label>
          </div>
        ))}
        <div className="mb-4 flex justify-between">
          <button
            onClick={() => router.push("/shipping")}
            className="px-4 py-2 rounded  font-medium border-2  "
          >
            Back
          </button>
          <button className="px-4 py-2 rounded text-white font-medium bg-blue-600">
            Next
          </button>
        </div>
      </form>
    </Layout>
  );
}