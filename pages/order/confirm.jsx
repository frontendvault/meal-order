import Image from "next/image";
import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

import dynamic from "next/dynamic";

function OrderConfirm() {
  return (
    <Layout title="MPO - Order Confirm">
    <div className="mt-36 p-5">
      <div className="lg:mt-12 mt-4 lg:px-6 px-0">
        <Link href="/menu" className="flex items-center text-sm mb-2 mr-2">
          <p>Thank you</p>
        </Link>
        <h1 className=" text-3xl font-bold">It's on the way</h1>
      </div>
      <div className="lg:mt-12 mt-4 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <section aria-labelledby="cart-heading" className="lg:col-span-12">
          <div className="lg:px-6 px-0">
            <div>
              <div className="pt-4 lg:pb-20 lg:pb-8">
                <div className="flex flex-col gap-12 px-0">
                  <div className="flex lg:gap-8 gap-4 lg:flex-row flex-col lg:items-center">
                    <div className="grow-0 lg:flex-row flex-col	flex items-center lg:gap-8 gap-4">
                      <div className="grow-0	 lg:w-48 lg:h-48 w-full h-32">
                        <Image
                          width="20"
                          height="20"
                          src="/images/17.jpg"
                          alt=""
                          className="h-full w-full object-cover"
                          unoptimized={true}
                        />
                      </div>
                      <div className="grow">
                        <h4 className="font-bold text-xl ">
                          Unrapped Chicken Burrito
                        </h4>
                        <p className="text-sm">
                          This glass bottle with a mesh insert for steeping tea
                          or cold-brewing coffee.
                        </p>
                      </div>
                    </div>
                    <div className="grow">
                      <h4 className="font-bold text-xl ">Shipping Address</h4>
                      <p className="text-sm">
                        180 North King street, Northhampton MA 1060
                      </p>
                    </div>
                    <div className="grow">
                      <h4 className="font-bold text-xl ">Billing Address</h4>
                      <p className="text-sm">
                        180 North King street, Northhampton MA 1060
                      </p>
                    </div>
                  </div>
                  <div className="flex lg:gap-8 gap-4 lg:flex-row flex-col lg:items-center">
                    <div className="grow-0 lg:flex-row flex-col	flex items-center lg:gap-8 gap-4">
                      <div className="grow-0	 lg:w-48 lg:h-48 w-full h-32">
                        <Image
                          width="20"
                          height="20"
                          src="/images/17.jpg"
                          alt=""
                          className="h-full w-full object-cover"
                          unoptimized={true}
                        />
                      </div>
                      <div className="grow">
                        <h4 className="font-bold text-xl ">
                          Unrapped Chicken Burrito
                        </h4>
                        <p className="text-sm">
                          This glass bottle with a mesh insert for steeping tea
                          or cold-brewing coffee.
                        </p>
                      </div>
                    </div>
                    <div className="grow">
                      <h4 className="font-bold text-xl ">Shipping Address</h4>
                      <p className="text-sm">
                        180 North King street, Northhampton MA 1060
                      </p>
                    </div>
                    <div className="grow">
                      <h4 className="font-bold text-xl ">Billing Address</h4>
                      <p className="text-sm">
                        180 North King street, Northhampton MA 1060
                      </p>
                    </div>
                  </div>
                </div>

                <div className="items-center lg:gap-12 gap-8 flex lg:flex-row flex-col w-full lg:p-6 p-4 mt-8 mb-4 text-white bg-blue-100">
                  <div className="text-left text-black lg:w-[33%] w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mb-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                      />
                    </svg>
                    <h4 className="font-lg font-bold">Shipping Method</h4>
                    <p className="text-sm">DHL - Takes up to 3 </p>
                    <p className="text-sm">working days</p>
                  </div>
                  <div className="text-left text-black lg:w-[33%] w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mb-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                      />
                    </svg>

                    <h4 className="font-lg font-bold">Payment Method</h4>
                    <p className="text-sm">Apply Pay Master Card </p>
                    <p className="text-sm">*******1433</p>
                  </div>
                  <div className="text-left lg:w-[33%] w-full">
                    <div
                      aria-labelledby="summary-heading"
                      className="flex justify-between lg:space-y-20 flex-col lg:px-4 px-0 lg:col-span-4"
                    >
                      <div>
                        <dl className="lg:mt-0 mt-2 space-y-2">
                          <div className="flex items-center justify-between">
                            <dt className="text-sm text-gray-600">Subtotal</dt>
                            <dd className="text-sm text-black">$20</dd>
                          </div>
                          <div className="flex items-center justify-between">
                            <dt className="text-sm text-black">Discount</dt>
                            <dd className="text-sm text-black">$20</dd>
                          </div>
                          <div className="flex items-center justify-between pt-4">
                            <dt className="flex items-center text-sm text-black">
                              <span>Shipping</span>
                            </dt>
                            <dd className="text-sm text-black">$30</dd>
                          </div>
                          <div className="flex items-center justify-between">
                            <dt className="flex text-sm text-black">
                              <span>Tax </span>
                            </dt>
                            <dd className="text-sm  text-black">$39</dd>
                          </div>
                          <div className="flex items-center justify-between pt-4">
                            <dt className="text-sm font-semibold text-black">
                              Total
                            </dt>
                            <dd className="text-sm font-semibold text-black">
                              $20
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  href="/"
                  className="flex items-center text-sm mb-2 mr-2 justify-end underline hover:text-blue-500"
                >
                  <p>New Order CTA</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(OrderConfirm), { ssr: false });
