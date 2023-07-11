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
						<Link href="/menu" className="flex items-center text-sm mb-2 mr-2">
							{/* <ChevronLeftIcon className="h-3 w-3 mr-2" /> */}
							<p>Back</p>
						</Link>
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

						<div>
							<div className="bg-gray-100">

								<div>
									<h3 className="text-4xl">A La Cart</h3>
									<button className="text-white text-sm bg-blue-600 rounded py-3 px-6">Button CTA <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline">
										<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
									</svg>

									</button>
								</div>
								<div>
									<svg xmlns="http://www.w3.org/2000/svg" width="133" height="131" viewBox="0 0 133 131" fill="none">
										<path d="M70.375 116.459C99.1445 116.459 122.467 93.1371 122.467 64.3676C122.467 35.5981 99.1445 12.2758 70.375 12.2758C41.6055 12.2758 18.2832 35.5981 18.2832 64.3676C18.2832 93.1371 41.6055 116.459 70.375 116.459Z" fill="#E5EFEF" />
										<path d="M11.4883 3.21631V7.74603" stroke="#4C241D" strokeWidth={4.52972} strokeLinecap="round" strokeLinejoin="round" />
										<path d="M11.4883 16.8054V21.3351" stroke="#4C241D" strokeWidth={4.52972} strokeLinecap="round" strokeLinejoin="round" />
										<path d="M2.42969 12.2758H6.95941" stroke="#4C241D" strokeWidth={4.52972} strokeLinecap="round" strokeLinejoin="round" />
										<path d="M16.0195 12.2758H20.5493" stroke="#4C241D" strokeWidth={4.52972} strokeLinecap="round" strokeLinejoin="round" />
										<path d="M98.6856 21.3352C101.813 21.3352 104.348 18.8001 104.348 15.673C104.348 12.5459 101.813 10.0109 98.6856 10.0109C95.5585 10.0109 93.0234 12.5459 93.0234 15.673C93.0234 18.8001 95.5585 21.3352 98.6856 21.3352Z" stroke="#4C241D" strokeWidth={4.52972} strokeLinecap="round" strokeLinejoin="round" />
										<path d="M42.4067 23.8265C42.4067 24.3054 42.2647 24.7735 41.9987 25.1716C41.7327 25.5698 41.3545 25.8801 40.9121 26.0634C40.4697 26.2466 39.9829 26.2946 39.5133 26.2011C39.0436 26.1077 38.6122 25.8771 38.2736 25.5385C37.935 25.1999 37.7044 24.7685 37.611 24.2989C37.5176 23.8292 37.5655 23.3424 37.7488 22.9C37.932 22.4576 38.2423 22.0795 38.6405 21.8134C39.0386 21.5474 39.5067 21.4054 39.9856 21.4054C40.6277 21.4054 41.2435 21.6605 41.6976 22.1145C42.1516 22.5686 42.4067 23.1844 42.4067 23.8265Z" fill="#4C241D" />
										<path d="M133 28.3563C133 28.8352 132.858 29.3033 132.592 29.7014C132.326 30.0996 131.948 30.4099 131.506 30.5932C131.063 30.7764 130.577 30.8244 130.107 30.7309C129.637 30.6375 129.206 30.4069 128.867 30.0683C128.529 29.7297 128.298 29.2983 128.205 28.8287C128.111 28.359 128.159 27.8722 128.343 27.4298C128.526 26.9874 128.836 26.6093 129.234 26.3432C129.632 26.0772 130.1 25.9352 130.579 25.9352C131.221 25.9352 131.837 26.1903 132.291 26.6443C132.745 27.0984 133 27.7142 133 28.3563Z" fill="#4C241D" />
										<path d="M48.4081 122.575C46.0721 120.238 44.7598 117.07 44.7598 113.767C44.7598 110.463 46.0721 107.295 48.4081 104.958L99.6506 53.7228C101.987 51.3868 105.155 50.0745 108.459 50.0745C111.762 50.0745 114.931 51.3868 117.267 53.7228C119.603 56.0588 120.915 59.2272 120.915 62.5308C120.915 65.8344 119.603 69.0028 117.267 71.3389L66.0174 122.575C63.6816 124.908 60.5147 126.219 57.2127 126.219C53.9107 126.219 50.7439 124.908 48.4081 122.575Z" fill="#BF7E68" stroke="#4C241D" strokeWidth={4.52972} strokeLinecap="round" strokeLinejoin="round" />
										<path d="M27.3438 100.605V125.519" stroke="#4C241D" strokeWidth={4.52972} strokeLinecap="round" strokeLinejoin="round" />
										<path d="M18.2852 127.784H36.4041" stroke="#4C241D" strokeWidth={4.52972} strokeLinecap="round" strokeLinejoin="round" />
										<path d="M5.49783 70.7816C0.601197 84.9778 10.2178 100.508 25.2021 101.484C25.7442 101.52 26.2915 101.538 26.8442 101.538C30.0479 101.547 33.2227 100.932 36.1912 99.7265C41.314 97.5157 45.4549 93.513 47.8384 88.4683C50.222 83.4236 50.6845 77.683 49.1394 72.3217L43.9733 53.0432H11.4295L5.49783 70.7816Z" fill="white" stroke="#4C241D" strokeWidth={4.52972} strokeLinecap="round" strokeLinejoin="round" />
										<path d="M4.38086 81.1411C4.91957 86.4338 7.29921 91.3695 11.1047 95.0873C14.9102 98.8051 19.9001 101.069 25.204 101.484C25.7461 101.52 26.2934 101.538 26.846 101.538C30.0498 101.547 33.2246 100.932 36.1931 99.7265C41.3158 97.5157 45.4568 93.513 47.8403 88.4683C50.2238 83.4236 50.6864 77.6829 49.1413 72.3217L48.7631 70.9628C42.247 72.8819 36.0249 75.6855 30.2705 79.2952C18.7378 85.9924 9.91845 84.099 4.38086 81.1411Z" fill="#F53E28" stroke="#4C241D" strokeWidth={4.52972} strokeLinecap="round" strokeLinejoin="round" />
										<path d="M91.6016 61.7654L106.615 62.1028" stroke="#4C241D" strokeWidth={4.52972} strokeLinecap="round" strokeLinejoin="round" />
										<path d="M75.7461 77.6195L90.7599 77.957" stroke="#4C241D" strokeWidth={4.52972} strokeLinecap="round" strokeLinejoin="round" />
										<path d="M59.8926 93.4735L72.6415 93.6411" stroke="#4C241D" strokeWidth={4.52972} strokeLinecap="round" strokeLinejoin="round" />
										<path d="M47.7363 107.094L61.3164 107.4" stroke="#4C241D" strokeWidth={4.52972} strokeLinecap="round" strokeLinejoin="round" />
										<path d="M77.1719 100.605H124.734V125.519H77.1719V100.605Z" fill="#D9BE6F" stroke="#4C241D" strokeWidth={4.52972} strokeLinecap="round" strokeLinejoin="round" />
										<path d="M90.761 87.0162L77.1719 100.605H97.5556V113.062C97.5556 113.963 97.9136 114.827 98.5507 115.464C99.1878 116.102 100.052 116.459 100.953 116.459C101.854 116.459 102.718 116.102 103.355 115.464C103.992 114.827 104.35 113.963 104.35 113.062V106.268C104.35 107.169 104.708 108.033 105.345 108.67C105.982 109.307 106.846 109.665 107.748 109.665C108.649 109.665 109.513 109.307 110.15 108.67C110.787 108.033 111.145 107.169 111.145 106.268V100.605H124.734L90.761 87.0162Z" fill="#FFCE56" stroke="#4C241D" strokeWidth={4.52972} strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</div>


							</div>
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
