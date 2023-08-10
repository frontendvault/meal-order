import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useMemo } from "react";
import Layout from "../components/Layout";
import Testimonials from "../components/Testimonials";

import { Faqs } from "@/components/faq";
import { useCart } from "@/utils/providers/cart.provider";
import client from "@/utils/client";
import { toast } from "react-toastify";
import Shipping from "@/components/views/bag/Shipping";
import { Image, Rating, Text } from "@mantine/core";
import { useUser } from "@/utils/providers/user.provider";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { createPaymentIntent } from "@/services/paymentIntent.api";
import CheckoutForm from "@/components/views/bag/CheckoutForm";
import Select from 'react-select';

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function BagScreen() {
	const { cart, addCartItem, removeCartItem } = useCart();
	const [cartMeals, setCartMeals] = useState([]);
	const [shippingFormValues, setShippingFormValues] = useState({});
	const [clientSecret, setClientSecret] = useState("");
	const [paymentIntent, setPaymentIntent] = useState({});
	const [quantity, setQuantity] = useState(2)

	const { user } = useUser();

	// const totalPrice = () => {
	// 	return cartMeals.reduce((a, c) => a + c.quantity * c.price, 0) + 69;
	// };

	const initialValue = 0;
	const TotalPrice = cartMeals?.reduce(
		(accumulator, currentValue) => accumulator + currentValue?.price * currentValue?.quantity,
		initialValue
	);

	useEffect(() => {
		setCartMeals(cart)
	}, [cart])

	// useEffect(() => {
	// 	if (!cart.length) {
	// 		return;
	// 	}
	// 	client
	// 		.get(`/v1/meals?limit=50&only=${cart.map((item) => item.id).join(",")}`)
	// 		.then(({ data }) => {
	// 			setCartMeals(
	// 				data.results.map((meal) => ({
	// 					...meal,
	// 					quantity: cart.find((m) => m.id === meal.id).quantity,
	// 				}))
	// 			);
	// 		})
	// 		.catch(() => {
	// 			toast.error("Unable to load Cart data");
	// 		});
	// }, [cart]);

	useEffect(() => {
		handleFetchPaymentIntent();
	}, [cartMeals]);

	const appearance = {
		theme: "stripe",
	};
	const options = {
		clientSecret,
		appearance,
	};

	const isCartEmpty = useMemo(() => {
		return !cart.length;
	}, [cart]);

	const handleFetchPaymentIntent = async () => {
		if (cartMeals.length === 0) return;
		try {
			const { data } = await createPaymentIntent({
				mealIds: cartMeals.map((item) => item.id),
			});
			setClientSecret(data.clientSecret);
			setPaymentIntent(data);
		} catch (error) {
			console.error(error);
		}
	};

	const subscriptionDetail = [1, 2, 3, 4]
	const subscriptionDetail2 = [1, 2]
	const quantintyOption = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	const onOptionChangeHandler = (event) => {
		setQuantity(event.target.value)
	}

	const handleAddToCart = (meal, event) => {
		// if (quantity > 0) {
		setQuantity(meal?.quantity)
		addCartItem(meal.id, event.target.value, meal.price);
		// } else {
		// 	removeCartItem(meal.id)
		// }
	};

	const handleRemove = (id) => {
		removeCartItem(id)
	}

	return (
		<div>
			<Layout title="MPO - Shopping Bag">
				<div className="container mx-auto mt-10 p-5">
					<div className="border-b border-gray-200 pb-3 mb-3">
						{" "}
						<a href="/menu" className="flex items-center text-sm mb-2 mr-2">
							{/* <ChevronLeftIcon className="h-3 w-3 mr-2" /> */}
							<p>Back</p>
						</a>
						<h1 className=" text-3xl font-bold">My Bag</h1>
					</div>
					<div
					// className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
					>
						{isCartEmpty ? (
							<section
								aria-labelledby="cart-heading"
								className="w-full lg:w-2/3"
							>
								<div>
									{/* <Link href="/menu">Go to Menu</Link> */}
									<li className="flex  mt-15 md:mt-0 py-6 items-center justify-center">
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
							</section>
						) : <div>
							<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
								<div className="  lg:col-span-2">
									{cartMeals?.map((data, index) => <div className="pt-4 lg:pb-20 pb-4">
										<div className="flex flex-col gap-12 lg:px-6 px-0">
											<div className="flex lg:gap-8 gap-4 lg:flex-row flex-col items-center">
												<div className="grow-0 lg:flex-row flex-col flex items-center lg:gap-8 gap-4">

													<Image
														width="150"
														height="150"
														src={data?.mealId?.image}
														alt=""
														className="h-full w-full object-cover"
														unoptimized={true}
													/>

													<div className="grow mr-12">
														<h4 className="font-bold text-xl ">
															{data?.mealId?.name}
														</h4>
														<p className="text-sm">
															description : {data?.mealId?.description}
														</p>
														<p className="text-sm">
															ingredients : {data?.mealId?.ingredients?.map((data, index) => `${data} , `)}
														</p>
														<p className="text-sm">
															Tags : {data?.mealId?.tags?.map((data, index) => `${data?.name} , `)}
														</p>
														<div className="flex">
															<Link href={"/"}>
																<span className="flex underline text-md  text-black-500 cursor-pointer mr-4">
																	Add to favourites
																</span>
															</Link>
															<Link href={"/bag"} onClick={() => removeCartItem(data?.mealId?.id)}>
																<span className="flex underline text-md  text-red-500 cursor-pointer">
																	remove
																</span>
															</Link>
														</div>
													</div>

													<div className=" grow ml-12 flex justify-around lg:flex-col md:flex-col xl:flex-col 2xl:flex-col">

														<select onChange={(event) => handleAddToCart(data?.mealId, event)} className="border-solid border-2 border-black-500 mb-6 mr-6">
															{quantintyOption?.map((option, index) => {
																return <option key={index} value={quantity}>
																	{`0${option}`}
																</option>
															})}
														</select>

														{/* <Select
															// {...props}
															onChange={(event) => handleAddToCart(data?.mealId, event)}
															// onBlur={() => props.input.onBlur(props.input.value)}//If needed
															defaultValue={data?.quantity}
															options={quantintyOption}
															// placeholder={props.placeholder}
														/> */}

														{/* <Select
															value={quantintyOption}
															options={quantintyOption}
															// defaultValue={data?.quantity}
														/> */}
														<h4 className="font-bold text-xl">
															{`$${data?.mealId?.price}`}
														</h4>
													</div>
												</div>

											</div>
										</div>
									</div>

									)}
								</div>
								<div className="bg-slate-100 container mx-auto" style={{ height: "fit-content" }}>
									<div className="flex justify-start items-center">
										<h1 className=" text-3xl font-bold ml-5 mt-4">Summary</h1>
									</div>
									<div className=" flex flex-col items-center justify-center gap-[20px] text-base mt-5">
										<div className="self-stretch flex flex-row items-center justify-around">
											<div className="">
												Subtotal
											</div>
											<div className="">
												{`$${TotalPrice}`}
											</div>
										</div>
										<div className="self-stretch flex flex-row items-center justify-around">
											<div className="">
												Shipping
											</div>
											<div className="">
												--
											</div>
										</div>
										<div className="self-stretch flex flex-row items-center justify-around ">
											<div className="">
												Tax
											</div>
											<div className="">
												--
											</div>
										</div>
									</div>
									<div className="self-stretch flex flex-col items-start justify-start text-xl mt-8 ">
										<div className="self-stretch flex flex-row items-center justify-around ">
											<div className="relative">
												Total
											</div>
											<div className="relative  font-bold">
												{`$${TotalPrice}`}
											</div>
										</div>
										<div className="self-stretch bg-royalblue flex flex-row p-5 items-center justify-center text-base text-white">
											<Link href={'/order/payment'} className="w-full">	<button className=" w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
												CheckOut
											</button>
											</Link>
										</div>
									</div>
								</div>
							</div>

							<div>

								<div className="border-b border-gray-200 pb-3">
									{" "}
									<Link href="/menu" className="flex items-center text-sm mb-2 mr-2">
										{/* <p>Back</p> */}
									</Link>
									<h1 className=" text-3xl font-bold">My Subscriptions</h1>
								</div>

								{subscriptionDetail2?.map((data, index) => <div className="pt-4 lg:pb-20 pb-4">
									<div className="flex flex-col gap-12 lg:px-6 px-0">
										<div className="flex lg:gap-8 gap-4 lg:flex-row flex-col items-center">
											<div className="grow-0 lg:flex-row flex-col flex items-center lg:gap-8 gap-4">

												<Image
													width="150"
													height="150"
													src="/images/17.jpg"
													alt=""
													className="h-full w-full object-cover"
													unoptimized={true}
												/>

												<div className="grow mr-12">
													<h4 className="font-bold text-xl ">
														Chicken & Rice Protein Packs
													</h4>
													<p className="text-sm">
														Macros : Black
													</p>
													<p className="text-sm">
														Composition : 100% calf leather
													</p>
													<div className="flex">
														<Link href={"/"}>
															<span className="flex underline text-md  text-black-500 cursor-pointer mr-4">
																Add to favourites
															</span>
														</Link>
														<Link href={"/bag"}>
															<span className="flex underline text-md  text-red-500 cursor-pointer">
																remove
															</span>
														</Link>
													</div>
												</div>

												<div className="grow ml-12 flex justify-around lg:flex-col md:flex-col xl:flex-col 2xl:flex-col">

													<select onChange={onOptionChangeHandler} className="border-solid border-2 border-black-500 mb-6 mr-6">
														{quantintyOption?.map((option, index) => {
															return <option key={index} value={option} >
																{`0${option}`}
															</option>
														})}
													</select>
													<h4 className="font-bold text-xl">
														$250
													</h4>
												</div>
											</div>

										</div>
									</div>


									{/* <div className="grid grid-cols-4">
		<div className="col-start-1">

			<Image
				width="100"
				height="100"
				src="/images/17.jpg"
				alt=""
				className="h-full w-full object-cover"
				unoptimized={true}
			/>
		</div>

		<div className="">
			<h4 className="font-bold text-xl ">
				Chicken & Rice Protein Packs
			</h4>
			<p className="text-sm">
				Macros : Black
			</p>
			<p className="text-sm">
				Composition : 100% calf leather
			</p>
			<div className="flex">
				<Link href={"/"}>
					<span className="flex underline text-md  text-black-500 cursor-pointer mr-4">
						Add to favourites
					</span>
				</Link>
				<Link href={"/"}>
					<span className="flex underline text-md  text-red-500 cursor-pointer">
						remove
					</span>
				</Link>
			</div>
		</div>

		<div className="col-start-">

			<select onChange={onOptionChangeHandler} className="border-solid border-2 border-black-500 mb-6">
				{quantintyOption?.map((option, index) => {
					return <option key={index} value={option} >
						{`0${option}`}
					</option>
				})}
			</select>
			<h4 className="font-bold text-xl">
				$250
			</h4>
		</div>
	</div> */}
								</div>

								)}

								{/* <svg xmlns="http://www.w3.org/2000/svg" width="136" height="137" viewBox="0 0 136 137" fill="none">
	<path d="M124.839 14.8724C128.058 14.8724 130.668 12.2626 130.668 9.04332C130.668 5.824 128.058 3.21423 124.839 3.21423C121.62 3.21423 119.01 5.824 119.01 9.04332C119.01 12.2626 121.62 14.8724 124.839 14.8724Z" stroke="black" strokeWidth={4.66327} strokeLinecap="round" strokeLinejoin="round" />
	<path d="M44.0176 9.42334L35.4512 17.9898" stroke="black" strokeWidth={4.66327} strokeLinecap="round" strokeLinejoin="round" />
	<path d="M35.4512 9.42334L44.0176 17.9898" stroke="black" strokeWidth={4.66327} strokeLinecap="round" strokeLinejoin="round" />
	<path d="M30.4078 28.8622C31.6955 28.8622 32.7394 27.8183 32.7394 26.5306C32.7394 25.2429 31.6955 24.199 30.4078 24.199C29.1201 24.199 28.0762 25.2429 28.0762 26.5306C28.0762 27.8183 29.1201 28.8622 30.4078 28.8622Z" fill="black" />
	<path d="M11.1855 73.1636C16.2522 99.4154 31.7669 120.069 51.4669 126.791H42.0657V133.786H88.6984V126.791H79.2972C98.9972 120.069 114.505 99.4154 119.579 73.1636" stroke="black" strokeWidth={4.66327} strokeLinecap="round" strokeLinejoin="round" />
	<path d="M48.2139 38.2146C44.7948 38.4219 41.5707 39.8764 39.1525 42.3023C36.7343 44.7282 35.2901 47.957 35.0938 51.3767" stroke="black" strokeWidth={4.66327} strokeLinecap="round" strokeLinejoin="round" />
	<path d="M83.9249 37.3962C83.5943 34.4654 82.5279 31.6658 80.8247 29.2579C79.1216 26.8499 76.8371 24.9119 74.1837 23.624C71.5304 22.3361 68.5944 21.7403 65.6489 21.8919C62.7034 22.0435 59.8442 22.9376 57.337 24.4911C54.8299 26.0446 52.7565 28.2069 51.3096 30.777C49.8626 33.3471 49.0892 36.2414 49.0613 39.1906C49.0334 42.1399 49.7519 45.0483 51.15 47.6452C52.548 50.2422 54.5802 52.4434 57.0575 54.044" stroke="black" strokeWidth={4.66327} strokeLinecap="round" strokeLinejoin="round" />
	<path d="M98.0245 52.1789C98.0245 48.4686 96.5506 44.9102 93.927 42.2866C91.3034 39.663 87.7451 38.1891 84.0347 38.1891C80.3244 38.1891 76.766 39.663 74.1424 42.2866C71.5188 44.9102 70.0449 48.4686 70.0449 52.1789" stroke="black" strokeWidth={4.66327} strokeLinecap="round" strokeLinejoin="round" />
	<path d="M49.0454 65.525C48.8843 61.9265 47.3415 58.5289 44.7382 56.0394C42.1348 53.55 38.6716 52.1606 35.0696 52.1606C31.4675 52.1606 28.0043 53.55 25.401 56.0394C22.7976 58.5289 21.2548 61.9265 21.0938 65.525" stroke="black" strokeWidth={4.66327} strokeLinecap="round" strokeLinejoin="round" />
	<path d="M79.3579 65.5295C79.1968 61.931 77.654 58.5334 75.0507 56.044C72.4473 53.5545 68.9841 52.1652 65.3821 52.1652C61.78 52.1652 58.3168 53.5545 55.7135 56.044C53.1101 58.5334 51.5673 61.931 51.4062 65.5295" stroke="black" strokeWidth={4.66327} strokeLinecap="round" strokeLinejoin="round" />
	<path d="M109.664 65.448C109.481 61.8591 107.923 58.4783 105.315 56.0065C102.707 53.5346 99.2472 52.1613 95.6536 52.1712C92.0601 52.1811 88.6081 53.5734 86.0134 56.0596C83.4187 58.5458 81.8802 61.9351 81.7168 65.5249" stroke="black" strokeWidth={4.66327} strokeLinecap="round" strokeLinejoin="round" />
	<path d="M55.5201 87.785L61.5986 88.4448L65.4295 83.679L69.2604 88.4448L75.339 87.785L74.6768 93.8635L79.4426 97.6944L74.6768 101.525L75.339 107.604L69.2604 106.942L65.4295 111.708L61.5986 106.942L55.5201 107.604L56.1799 101.525L51.4141 97.6944L56.1799 93.8635L55.5201 87.785Z" stroke="black" strokeWidth={4.66327} strokeLinecap="round" strokeLinejoin="round" />
	<path d="M25.2319 73.1636H10.5892C9.66167 73.1636 8.77208 72.7951 8.11618 72.1392C7.46028 71.4833 7.0918 70.5937 7.0918 69.6662C7.0918 68.7386 7.46028 67.849 8.11618 67.1931C8.77208 66.5372 9.66167 66.1687 10.5892 66.1687H120.176C121.104 66.1687 121.993 66.5372 122.649 67.1931C123.305 67.849 123.674 68.7386 123.674 69.6662C123.674 70.5937 123.305 71.4833 122.649 72.1392C121.993 72.7951 121.104 73.1636 120.176 73.1636H42.0663" stroke="black" strokeWidth={4.66327} strokeLinecap="round" strokeLinejoin="round" />
	<path d="M51.3926 126.791H63.0507" stroke="black" strokeWidth={4.66327} strokeLinecap="round" strokeLinejoin="round" />
	<path d="M2.42773 133.786H132.999C133.006 130.143 131.591 126.642 129.057 124.026C126.522 121.41 123.067 119.885 119.426 119.777C115.785 119.668 112.245 120.984 109.559 123.445C106.873 125.906 105.253 129.317 105.043 132.953" stroke="black" strokeWidth={4.66327} strokeLinecap="round" strokeLinejoin="round" />
</svg> */}
							</div>
						</div>}

						{clientSecret && (
							<Elements options={options} stripe={stripePromise}>
								<CheckoutForm
									totalPrice={totalPrice}
									cartMeals={cartMeals}
									setShippingFormValues={setShippingFormValues}
									paymentIntent={paymentIntent}
									shippingFormValues={shippingFormValues}
								/>
							</Elements>
						)}
						{/* Order summary */}
					</div>
				</div>
				<Testimonials />
				<Faqs />
			</Layout>
		</div>
	);
}

// export default dynamic(() => Promise.resolve(BagScreen), { ssr: false });
export default BagScreen;
