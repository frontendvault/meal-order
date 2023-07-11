import React from 'react';

// ** Import Layout
import Layout from "../components/Layout";

// ** Hero icons Import
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

const Index = () => {

    const planArr = [{
        title: "Weekly",
        price: "$2.99",
        field1: "Test",
        field2: "Test",
        field3: "Test",
        field5: "Test",
        field6: "Test",
        field7: "Test",
    },
    {
        title: "Bi-Weekly",
        price: "$5",
        field1: "Test",
        field2: "Test",
        field3: "Test",
        field5: "Test",
        field6: "Test",
        field7: "Test",
    },
    {
        title: "Monthly",
        price: "$10",
        field1: "Test",
        field2: "Test",
        field3: "Test",
        field5: "Test",
        field6: "Test",
        field7: "Test",
    },
    ]

    return (
        <Layout title="Subscription">
            <div className="p-5">
                <div className="lg:mt-12 mt-4 lg:px-6 px-0">
                    <Link href="/" className="flex items-center text-sm mb-2 mr-2">
                        <ChevronLeftIcon className="h-3 w-3 mr-2" />
                        <p>Back</p>
                    </Link>
                    <h1 className=" text-3xl font-bold">Choose your Subscription</h1>
                </div>

                {/* Card Design */}
                <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">

                    <div className=" flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">

                            <div className="relative transform transition duration-500 hover:scale-110 flex w-full max-w-[25rem] flex-col rounded-xl bg-gradient-to-tr from-blue-800 to-blue-500 bg-clip-border p-8 text-white shadow-md shadow-blue-600/40 my-2 lg:my-0">
                                <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">

                                    <h1 className="mt-12 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                                        <span className="mt-2 text-4xl">$</span>X
                                        <span className="self-end text-4xl">/mo</span>
                                    </h1>
                                </div>
                                <div className="p-0">
                                    <ul className="flex flex-col gap-4">
                                        <li className="flex items-center gap-4">
                                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-3 w-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </span>
                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                5 team members
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-3 w-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </span>
                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                200+
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-3 w-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </span>
                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                40+ built-in
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-3 w-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </span>
                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                1 year free updates
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-3 w-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </span>
                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                Life time technical support
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-12 p-0">
                                    <button className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-blue-600 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-dark="true">
                                        Get Started
                                    </button>
                                </div>
                            </div>

                            <div className="relative transform transition duration-500 hover:scale-110 flex w-full max-w-[25rem] flex-col rounded-xl bg-gradient-to-tr from-blue-800 to-blue-500 bg-clip-border p-8 text-white shadow-md shadow-blue-600/40 my-2 lg:my-0">
                                <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">

                                    <button className="rounded-full font-sans text-sm uppercase leading-normal text-white bg-slate-100/[0.5] px-2 antialiased">
                                        standard
                                    </button>
                                    <h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                                        <span className="mt-2 text-4xl">$</span>2X
                                        <span className="self-end text-4xl">/mo</span>
                                    </h1>
                                </div>
                                <div className="p-0">
                                    <ul className="flex flex-col gap-4">
                                        <li className="flex items-center gap-4">
                                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-3 w-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </span>
                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                5 team members
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-3 w-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </span>
                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                200+
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-3 w-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </span>
                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                40+ built-in
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-3 w-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </span>
                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                1 year free updates
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-3 w-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </span>
                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                Life time technical support
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-12 p-0">
                                    <button className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-blue-600 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-dark="true">
                                        Get Started
                                    </button>
                                </div>
                            </div>

                            <div className="relative transform transition duration-500 hover:scale-110 flex w-full max-w-[25rem] flex-col rounded-xl bg-gradient-to-tr from-blue-800 to-blue-500 bg-clip-border p-8 text-white shadow-md shadow-blue-600/40 my-2 lg:my-0">
                                <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">

                                    <h1 className="mt-12 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                                        <span className="mt-2 text-4xl">$</span>2.5X
                                        <span className="self-end text-4xl">/mo</span>
                                    </h1>
                                </div>
                                <div className="p-0">
                                    <ul className="flex flex-col gap-4">
                                        <li className="flex items-center gap-4">
                                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-3 w-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </span>
                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                5 team members
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-3 w-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </span>
                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                200+
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-3 w-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </span>
                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                40+ built-in
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-3 w-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </span>
                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                1 year free updates
                                            </p>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true" className="h-3 w-3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </span>
                                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                                Life time technical support
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-12 p-0">
                                    <button className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-blue-600 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" data-ripple-dark="true">
                                        Get Started
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Monthly Membership  */}
                    <div className='mt-20 grid md:grid-cols-3 gap-4'>
                        <div className='md:col-span-2 p-3'>
                            <h2 className='text-xl font-bold'>Monthly Membership</h2>
                            <p className='mt-2 text-gray-400'>Utnulla in est qui. Ullamco veniam irure aliqua mollit aliqua irure tempor. Dolor incididunt et ipsum sint reprehenderit Lorem.
                            </p>

                            <div className='mt-4 flex items-center'>
                                <p className='text-gray-400 whitespace-nowrap mr-4'> INCLUDED FEATURES</p>
                                <hr className='border-2 border-gray-300 w-full' />
                            </div>

                            <div className='flex mt-8'>
                                <div className="flex items-center mr-4">
                                    <input id="inline-checkbox" type="checkbox" value={true} className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded   dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="inline-checkbox" className="ml-2 text-md font-medium text-gray-400">Private forum access</label>
                                </div><div className="flex items-center mr-4">
                                    <input id="inline-checkbox" type="checkbox" value={true} className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="inline-checkbox" className="ml-2 text-md font-medium text-gray-400">Private forum access</label>
                                </div>
                            </div>
                            <div className='flex mt-3'>
                                <div className="flex items-center mr-4">
                                    <input id="inline-checkbox" type="checkbox" value={true} className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded   dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="inline-checkbox" className="ml-2 text-md font-medium text-gray-400">Private forum access</label>
                                </div><div className="flex items-center mr-4">
                                    <input id="inline-checkbox" type="checkbox" value={true} className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="inline-checkbox" className="ml-2 text-md font-medium text-gray-400">Private forum access</label>
                                </div>
                            </div>

                        </div>
                        <div className='subscriptionBg p-3 justify-center items-center flex  items-center flex-col'>
                            <div className='flex justify-center'>
                                <span className='text-3xl'>$599</span><span className='text-gray-400 text-xs mt-2 ml-1'> USD</span>
                            </div>
                            <div className='flex justify-center text-center my-5'>
                                <p className='font-semibold'>No monthly subscription, you <br /> only pay once</p>
                            </div>
                            <div className='flex justify-center bg-blue-600 rounded-full py-1 w-11/12'>
                                <button className='text-white whitespace-nowrap'>Get Started</button> 
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </Layout>
    );
}

export default Index;
