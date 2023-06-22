import { useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useMemo, useState } from "react";
import Shipping from "./Shipping";
import { Button, Image, Rating, Text } from "@mantine/core";
import { updatePaymentIntent } from "@/services/paymentIntent.api";
import { useUser } from "@/utils/providers/user.provider";
import { RESTAURANT_ID } from "@/const";

const CheckoutForm = ({
	cartMeals,
	setShippingFormValues,
	totalPrice,
	paymentIntent,
	shippingFormValues,
}) => {
	const [message, setMessage] = useState("");
	const stripe = useStripe();
	const elements = useElements();
  const { user } = useUser();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js hasn't yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return;
		}
		await updatePaymentIntent(paymentIntent.paymentIntentId, {
			order: {
				items: cartMeals,
				shipping: {
					...shippingFormValues,
				},
        userId: user.id,
        restaurantId: RESTAURANT_ID
			},
		});

		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				// Make sure to change this to your payment completion page
				return_url: "http://localhost:3000",
			},
		});

		// This point will only be reached if there is an immediate error when
		// confirming the payment. Otherwise, your customer will be redirected to
		// your `return_url`. For some payment methods like iDEAL, your customer will
		// be redirected to an intermediate site first to authorize the payment, then
		// redirected to the `return_url`.
		if (error.type === "card_error" || error.type === "validation_error") {
			setMessage(error.message);
		} else {
			setMessage("An unexpected error occurred.");
		}
	};

	const isDisabledCheckout = useMemo(() => {
		const { address1, state, postalCode, phoneNumber, deliveryDate } =
			shippingFormValues;
		return !(address1 && state && postalCode && phoneNumber && deliveryDate);
	}, [shippingFormValues]);

	return (
		<div className="flex">
			<Shipping
				className="w-full"
				setShippingFormValues={setShippingFormValues}
			/>
			{message}
			<section
				aria-labelledby="summary-heading"
				className={` bg-gray-100  px-4 py-6 sm:p-6 lg:mt-0 lg:p-8 rounded w-full right-4 lg:w-1/3 ${
					!cartMeals.length ? "hidden" : ""
				}`}
			>
				<div>
					<h2
						id="summary-heading"
						className="text-2xl mb-2 font-bold text-gray-900"
					>
						Summary
					</h2>
					<div>
						<ul
							role="list"
							className="flex-auto divide-y divide-gray-200 overflow-y-auto"
						>
							{cartMeals.map((item) => (
								<li key={item.id} className="flex space-x-6 py-4">
									<Image
										src={item?.image}
										alt={item?.name}
										height={100}
										width={100}
									/>

									<div className="flex flex-col justify-between space-y-4 grow">
										<div className="space-y-1 text-sm grow">
											<div className="flex items-center gap-2">
												<div>
													<h3 className="text-gray-900 text-lg font-semibold">
														{item?.name}
													</h3>
												</div>
												<div>
													<Text variant="sm" color="gray">
														x {item?.quantity}
													</Text>{" "}
												</div>
											</div>
											<div className="flex items-center justify-between">
												<div>
													<Rating readOnly defaultValue={item.rating} />
												</div>
												<div>
													<p className="font-bold text-xl text-gray-900">
														${item?.price}
													</p>
												</div>
											</div>
										</div>

										<div className="flex space-x-4">
											<button
												onClick={() => removeCartItem(item.id)}
												type="button"
												className="text-sm font-medium text-red-600 hover:text-red-400 underline"
											>
												Remove
											</button>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
					<dl className="mt-6 space-y-2">
						<div className="flex items-center justify-between">
							<dt className="text-sm text-gray-600">
								Subtotal ({cartMeals.reduce((a, c) => a + c.quantity, 0)})
							</dt>
							<dd className="text-sm font-medium text-gray-900">
								$
								{Math.round(
									cartMeals.reduce((a, c) => a + c.quantity * c.price, 0),
									2
								)}
							</dd>
						</div>
						<div className="flex items-center justify-between border-t border-gray-200 pt-4">
							<dt className="flex items-center text-sm text-gray-600">
								<span>Shipping</span>
							</dt>
							<dd className="text-sm font-medium text-gray-900">$30</dd>
						</div>
						<div className="flex items-center justify-between border-t border-gray-200 pt-4">
							<dt className="flex text-sm text-gray-600">
								<span>Tax </span>
							</dt>
							<dd className="text-sm font-medium text-gray-900">$39</dd>
						</div>
					</dl>
				</div>

				<div className="mt-6">
					<div className="flex items-center justify-between border-t border-gray-200 pt-4 mb-6">
						<dt className="text-xl font-semibold text-gray-900">Total</dt>
						<dd className="text-xl font-semibold text-gray-900">
							{" "}
							${totalPrice()}
						</dd>
					</div>
					<Button
						type="mantine-button"
						onClick={handleSubmit}
						disabled={isDisabledCheckout}
						// onClick={() => router.push("login?redirect=/shipping")}
						className="w-full h-fit border border-transparent bg-indigo-500 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
					>
						Checkout ${totalPrice()}
					</Button>
				</div>
			</section>
		</div>
	);
};

export default CheckoutForm;
