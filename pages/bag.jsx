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

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function BagScreen() {
	const { cart, addCartItem, removeCartItem } = useCart();
	const [cartMeals, setCartMeals] = useState([]); 
	const [shippingFormValues, setShippingFormValues] = useState({});
	const [clientSecret, setClientSecret] = useState("");
	const [paymentIntent, setPaymentIntent] = useState({});
	const { user } = useUser();

	const totalPrice = () => {
		return cartMeals.reduce((a, c) => a + c.quantity * c.price, 0) + 69;
	};

	useEffect(() => {
		if (!cart.length) {
			return;
		}
		client
			.get(`/v1/meals?limit=50&only=${cart.map((item) => item.id).join(",")}`)
			.then(({ data }) => {
				setCartMeals(
					data.results.map((meal) => ({
						...meal,
						quantity: cart.find((m) => m.id === meal.id).quantity,
					}))
				);
			})
			.catch(() => {
				toast.error("Unable to load Cart data");
			});
	}, [cart]);

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

	return (
		<div>
			<Layout title="MPO - Shopping Bag">
				<div className="container mx-auto mt-10 p-5">
					<div className="border-b border-gray-200 pb-3">
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
						{isCartEmpty && (
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
						)}
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
