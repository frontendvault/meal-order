import React from "react";
import { FaCheck } from "react-icons/fa";

function CheckoutComponent({ activeStep = 0 }) {
  return (
    <div className="mb-5 flex flex-wrap">
      {[
        "User Details",
        "Subscription Plan",
        "Shipping Address",
        "Payment Method",
        "Place Order",
        "Share with Friends",
      ].map((step, index) => (
        <div
          key={step}
          className={`flex-1 px-3 border-b-[4px] text-xl py-3 border-r-2 border-r-white  text-center ${
            index <= activeStep
              ? "border-green-500 text-green-500 font-medium text-sm bg-green-100"
              : "border-gray-400 text-gray-400"
          }`}
        >
          <div>{/* <FaCheck className="mx-auto" /> */}</div>
          {step}
        </div>
      ))}
    </div>
  );
}

export default CheckoutComponent;
