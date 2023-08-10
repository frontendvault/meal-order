import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import CheckoutComponent from "../../components/CheckoutComponent";
import { Store } from "../../utils/Store";

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '@/components/Payment/PaymentForm'
import { useCart } from "@/utils/providers/cart.provider";
import PaymentOption from "@/components/PaymentOption/PaymentOption";

// export default function PaymentScreen() {

//   const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

//   const router = useRouter();
//   const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
//   // const { state, dispatch } = useContext(Store);

//   const { addCartItem, cart, removeCartItem } = useCart();
//   // const { cart } = state;
//   const { shippingAddress, paymentMethod } = cart;

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (!selectedPaymentMethod) {
//       return toast.error("Payment method is required");
//     }
//     // dispatch({ type: "SAVE_PAYMENT_METHOD", payload: selectedPaymentMethod });
//     Cookies.set(
//       "cart",
//       JSON.stringify({ ...cart, paymentMethod: selectedPaymentMethod })
//     );
//     router.push("/placeorder");
//   };

//   // useEffect(() => {
//   //   if (!shippingAddress.address) {
//   //     return router.push("/shipping");
//   //   }
//   //   setSelectedPaymentMethod(paymentMethod || "");
//   // }, [paymentMethod, router, shippingAddress.address]);

//  const  checkadd ={
//   email: "ChristopherBrown63@gmail.com",
//   fname: "Christopher Brown",
//   pincode: 395006,
//   address : "surat"

//  }

//   return (
//     <Layout title="Payment Method">
//       <CheckoutComponent activeStep={3} />

//       {/* <Elements stripe={stripePromise}>
//         <PaymentForm checkadd={checkadd} checkoutData={checkoutData} />
//       </Elements> */}

//       <PaymentOption stripe={stripePromise} checkadd={checkadd} checkoutData={cart} />

//       {/* <form className="mx-auto max-w-screen-md" onSubmit={submitHandler}>
//         <h1 className="mb-4 text-xl">Payment Method</h1>
//         {["Stripe", "PayPal", "CashOnDelivery"].map((payment) => (
//           <div className="mb-4" key={payment}>
//             <input
//               className="p-2 outline-none"
//               type="radio"
//               id={payment}
//               checked={selectedPaymentMethod === payment}
//               onChange={() => setSelectedPaymentMethod(payment)}
//             />
//             <label className="p-2" htmlFor={payment}>
//               {payment}
//             </label>
//           </div>
//         ))}
//         <div className="mb-4 flex justify-between">
//           <button
//             onClick={() => router.push("/shipping")}
//             className="px-4 py-2 rounded  font-medium border-2  "
//           >
//             Back
//           </button>
//           <button className="px-4 py-2 rounded text-white font-medium bg-blue-600">
//             Next
//           </button>
//         </div>
//       </form> */}
//     </Layout>
//   );
// }


import Layout from "@/components/Layout";
import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import Link from "next/link";
export default function Index() {

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  const { addCartItem, cart, removeCartItem } = useCart();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const checkadd = {
    email: "ChristopherBrown63@gmail.com",
    fname: "Christopher Brown",
    pincode: 395006,
    address: "surat"

  }


  const onSubmit = (data) => {
    console.log(data)


  }

  return (

    <Layout title="Payment Method">
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <div className="overflow-y-hidden">
          <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
            <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
              <div className="flex w-full  flex-col justify-start items-start">
                <div className>
                  <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Check out</p>
                </div>
                <div className="mt-2">
                  <Link href="/bag" className="text-base leading-4 underline  hover:text-gray-800 text-gray-600">
                    Back to my bag
                  </Link>
                </div>
                <div className="mt-12">
                  <p className="text-xl font-semibold leading-5 text-gray-800">Shipping Details</p>
                </div>
                <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
                  <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                    type="text" placeholder="First Name" name="fname" {...register('fname', { required: true })} />
                  {errors.fname && <span style={{ color: "red" }}> * Please Enter First Name</span>}
                  <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                    type="text" placeholder="Last Name" name="lname" {...register('lname', { required: true })} />
                  {errors.lname && <span style={{ color: "red" }}> * Please Enter Last Name</span>}
                  <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                    type="text" placeholder="Address" name="address" {...register('address', { required: true })} />
                  {errors.address && <span style={{ color: "red" }}> * Please Enter Address</span>}
                  {/* <input className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                    type="text" placeholder="Address (line 02)" name="address2" {...register('address2')} /> */}
                  <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                    <div className="w-full">
                      <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3   w-full"
                        type="text" placeholder="Country" name="country" {...register('country', { required: true })} />
                      {errors.country && <span style={{ color: "red" }}> * Please Enter Country</span>}
                    </div>
                  </div>
                  <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">

                    <div className="w-full">
                      <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3   w-full"
                        type="text" placeholder="Zip Code" name="zipCode" {...register('zipCode', { required: true })} />
                      {errors.zipCode && <span style={{ color: "red" }}> * Please EnterZip Code</span>}
                    </div>
                  </div>
                  <input className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4   w-full"
                    type="text" placeholder="Phone Number" name="mobile" {...register('mobile', { required: true, pattern: /^[0-9]+$/, minLength: 10, maxLength: 10 })} />
                  {errors.mobile && <span style={{ color: "red" }}>* Please Enter Valid phone Number</span>}
                </div>
                <div className="w-full mt-9">

                </div>

              
                {/* <div className="mt-4 flex justify-start items-center w-full">
                  <a href="javascript:void(0)" className="text-base leading-4 underline focus:outline-none focus:text-gray-500  hover:text-gray-800 text-gray-600">
                    Back to my bag
                  </a>
                </div> */}
              </div>
              <div className="w-full">
                <div className="mb-12">
                  <p className="text-xl font-semibold leading-5 text-gray-800">Payment  Details</p>
                </div>
                <Elements stripe={stripePromise}>
                  <PaymentForm handleSubmit={handleSubmit} checkadd={checkadd} checkoutData={cart} />
                </Elements>

              
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}
