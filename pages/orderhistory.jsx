import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";

import dynamic from "next/dynamic";

function BagScreen() {
    const Items = ["", "", ""]
    return (
        <Layout title="MPO - Order History">
            <div className="mt-36 p-5">
                <div className="lg:mt-12 mt-4 lg:px-6 px-0">
                    <a href="/menu" className="flex items-center text-sm mb-2 mr-2">
                        <ChevronLeftIcon className="h-3 w-3 mr-2" />
                        <p>Back</p>
                    </a>
                    <h1 className=" text-3xl font-bold">Order History</h1>
                </div>
                <div className="lg:mt-12 mt-4 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                    <section aria-labelledby="cart-heading" className="lg:col-span-12">
                        <div className="lg:px-6 px-0">
                            <div className="shadow-lg lg:p-6 p-4 border-t border-t-blue-700 rounded-lg">
                                <div className="flex gap-2 justify-between pb-4 lg:flex-row flex-col">
                                    <div>
                                        <h4 className="text-blue-700 font-bold text-xl">Recent Orders</h4>
                                        <p className="text-blue-500 text-md">Subtitle Text</p>
                                    </div>
                                    <div className="text-right flex lg:flex-row flex-col lg:gap-4 gap-2 items-center">
                                        <div className="relative w-full">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg aria-hidden="true" className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                            </div>
                                            <input type="text" id="simple-search" className="bg-white border border-dashed border-blue-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 outline-none focus:outline-none" placeholder="" required />
                                        </div>
                                        <div className="flex gap-4 justify-between w-full lg:w-full">
                                            <div className="lg:w-auto w-1/2">
                                                <button className="lg:min-w-[8rem] w-full bg-white border border-blue-700 text-blue-700 text-sm rounded-lg  block p-2.5">Search Orders</button></div>
                                            <div className="lg:w-auto w-1/2"><button className="lg:min-w-[8rem] w-full border border-blue-700 bg-blue-100 text-blue-700 text-sm rounded-lg  block p-2.5">Button  Text</button></div>
                                        </div>
                                    </div>
                                </div>

                                <div className='pt-4 lg:pb-20 pb-8'>
                                    <div className="bg-yellow-500  flex w-full mb-8 text-yellow-500">
                                        <div className="py-4 px-4 text-left">
                                            <div className="flex gap-4 items-center">
                                                <div className="h-10 w-10 grow-0 rounded-full overflow-hidden">
                                                    <Image unoptimized={true} width="20" height="20" src="/images/17.jpg" alt="" className="h-full w-full" />
                                                </div>
                                                <div className="grow">
                                                    <h4 className="text-blue-700 font-lg font-bold">Order Name</h4>
                                                    <p className="text-sm text-blue-500">Order Id</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-12 lg:px-6 px-0">
                                        <div className="flex lg:flex-row flex-col lg:gap-4 gap-2 items-center">
                                            <div className='grow-0 lg:flex-row flex-col	flex items-center lg:gap-8 gap-4'>
                                                <div className="grow-0 lg:w-48 lg:h-48 h-32 w-full">
                                                    <Image width="20" height="20" src="/images/17.jpg" alt="" className="h-full w-full object-cover" unoptimized={true} />
                                                </div>
                                                <div className="grow">
                                                    <h4 className="font-bold text-xl ">Unrapped Chicken Burrito</h4>
                                                    <p className='text-sm'>This glass bottle with a mesh insert for steeping tea or cold-brewing coffee.</p>
                                                </div>
                                            </div>
                                            <div className="grow">
                                                <h4 className="font-bold text-xl ">Macros</h4>
                                                <p className='text-sm'>180 North King street, Northhampton MA 1060</p>
                                            </div>
                                            <div className="grow"></div>
                                        </div>
                                        <div className="flex lg:gap-8 gap-4 lg:flex-row flex-col items-center">
                                            <div className='grow-0 lg:flex-row flex-col	flex items-center lg:gap-8 gap-4'>
                                                <div className="grow-0	 lg:w-48 lg:h-48 w-full h-32">
                                                    <Image width="20" height="20" src="/images/17.jpg" alt="" className="h-full w-full object-cover" unoptimized={true} />
                                                </div>
                                                <div className="grow">
                                                    <h4 className="font-bold text-xl ">Unrapped Chicken Burrito</h4>
                                                    <p className='text-sm'>This glass bottle with a mesh insert for steeping tea or cold-brewing coffee.</p>
                                                </div>
                                            </div>
                                            <div className="grow">
                                                <h4 className="font-bold text-xl ">Shipping Address</h4>
                                                <p className='text-sm'>180 North King street, Northhampton MA 1060</p>
                                            </div>
                                            <div className="grow">
                                                <h4 className="font-bold text-xl ">Billing Address</h4>
                                                <p className='text-sm'>180 North King street, Northhampton MA 1060</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="cursor-pointer lg:gap-12 gap-4 flex lg:flex-row flex-col w-full lg:p-6 p-4 mt-8 mb-4 text-white bg-blue-700">
                                        <div className="text-left lg:w-[20%] w-full">
                                            <h4 className="font-lg font-bold">Deliver To</h4>
                                            <p className="text-sm">54-22 Costa Arroya Lane, Jaxonivillla, Florida</p>
                                            <p className="text-sm">ZIP: 78787</p>
                                        </div>
                                        <div className="text-left lg:w-[20%] w-full">
                                            <div className="text-yellow-500 flex gap-1">
                                                <Image src="/icons/star.svg" alt="star" width={20} height={20} />
                                                <Image src="/icons/star.svg" alt="star" width={20} height={20} />
                                                <Image src="/icons/star.svg" alt="star" width={20} height={20} />
                                                <Image src="/icons/star.svg" alt="star" width={20} height={20} />
                                                <Image src="/icons/star.svg" alt="star" width={20} height={20} />
                                            </div>
                                            <p className="text-sm text-yellow-400">Edit Rating</p>
                                        </div>
                                        <div className="text-left lg:w-[20%] w-full">
                                            <h4 className="font-lg font-bold">Subtotal</h4>
                                            <p className="text-sm">$32.99</p>
                                        </div>
                                        <div className="text-left lg:w-[40%] w-full">
                                            <h4 className="font-lg font-bold">Our Feedback</h4>
                                            <p className="text-sm">&quot;Loved the thanksgiving! The Unwrapped burrito was a bit messy, but enjoyed it as well&quot;</p>
                                            <p className="text-xs text-yellow-400 italic">Edit Review</p>
                                        </div>
                                    </div>
                                </div>


                                <div className="w-full">
                                    <div className="table-fixed w-full text-left">
                                        <div className="bg-blue-700 text-white mb-4 text-xl rounded-lg">
                                            <div className="lg:flex hidden w-full">
                                                <div className="py-4 px-4 text-left w-full lg:w-[20%]">Order</div>
                                                <div className="py-4 px-4 text-left w-full lg:w-[50%]">Items</div>
                                                <div className="py-4 px-4 text-left w-full lg:w-[20%]">Reviews</div>
                                                <div className="py-4 px-4 text-left w-full lg:w-[10%]"></div>
                                            </div>
                                          <div className="flex w-full lg:hidden">
                                                <div className="py-4 px-4 text-left w-full lg:w-[20%]">Orders</div>
                                              </div>
                                        </div>
                                        <div >
                                            {Items.map((e, i) => {
                                                return <div className="cursor-pointer group flex lg:flex-row flex-col w-full mb-4 bg-blue-100 text-blue-700 bg-blue-100" key={i}>
                                                    <div className="py-4 px-4 text-left w-full lg:w-[20%] ease-in-out transisition duration-300 group-hover:bg-yellow-500">
                                                        <div className="flex gap-4 items-center">
                                                            <div className="h-10 w-10 grow-0 rounded-full overflow-hidden">
                                                                <Image unoptimized={true} width="20" height="20" src="/images/17.jpg" alt="" className="h-full w-full" />
                                                            </div>
                                                            <div className="grow">
                                                                <h4 className="text-blue-700 font-lg font-bold">Order Name</h4>
                                                                <p className="text-sm text-blue-500">Order Id</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="py-4 px-4 text-left w-full lg:w-[50%] ease-in-out transisition duration-300 group-hover:bg-blue-700">
                                                        <div className="grid lg:grid-cols-3 grid-cols-1">
                                                            {Items.map((e,i)=>{
return                                                  <div key={i+1} className={`lg:pb-0 ${i!==0?"pt-4":""}`}>
                                                                <h4 className="text-blue-700 ease-in-out transisition duration-300 group-hover:text-white font-lg font-bold">Heading</h4>
                                                                <p className="text-sm text-blue-500 ease-in-out transisition duration-300 group-hover:text-white">Caption Text</p>
                                                            </div>          })}
                                                            </div>
                                                    </div>
                                                    <div className="py-4 px-4 text-left w-full lg:w-[20%]">
                                                        <div className="text-yellow-500 flex gap-1">
                                                            <Image src="/icons/star.svg" alt="star" width={20} height={20} />
                                                            <Image src="/icons/star.svg" alt="star" width={20} height={20} />
                                                            <Image src="/icons/star.svg" alt="star" width={20} height={20} />
                                                            <Image src="/icons/star.svg" alt="star" width={20} height={20} />
                                                            <Image src="/icons/star.svg" alt="star" width={20} height={20} />
                                                        </div>
                                                        <p className="text-sm text-blue-500">Edit Rating</p>
                                                    </div>
                                                    <div className="py-4 px-4 text-left w-full lg:w-[10%]">
                                                        <button className="w-full border border-dashed border-blue-700 bg-blue-100 text-blue-700 text-sm rounded-lg block p-2.5">Button  Text</button>
                                                    </div>
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div >
            </div >
        </Layout >
    );
}

export default dynamic(() => Promise.resolve(BagScreen), { ssr: false });
