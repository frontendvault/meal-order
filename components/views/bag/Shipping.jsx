import React, { useState, useEffect, useMemo } from "react";
import * as yup from "yup";
import { useRouter } from "next/router";
import { Formik, useFormik } from "formik";
import { placeOrder } from "@/services/order.api";
import { useCart } from "@/utils/providers/cart.provider";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { Radio, Group, Select, TextInput } from "@mantine/core";
import { SHIPPING_TYPE } from "@/const";
import PickupForm from "@/components/views/shipping/PickupForm";
import DeliveryForm from "@/components/views/shipping/DeliveryForm";
import {
	PaymentElement,
} from "@stripe/react-stripe-js";
import TextField from "@/components/input/TextField";

const validationSchema = yup.object({
	fullName: yup.string().required("Please enter your full name"),
	deliveryAddress: yup.string().required("Please enter your delivery address"),
	postalCode: yup.string().required("Please enter your postal code"),
});

export default function Shipping({ setShippingFormValues }) {
	const [shippingType, setShippingType] = useState(SHIPPING_TYPE.DELIVERY);
	const { cart } = useCart();
	const shipmentAddressCookie = Cookies.get("shipmentAddress");

	const formik = useFormik({
		initialValues: {
			address1: "",
			address2: "",
			deliveryDate: "",
			state: "",
			postalCode: "",
			phoneNumber: "",
		},
		validationSchema,
		onSubmit: (values) => {
			Cookies.set("shipmentAddress", JSON.stringify(values));
			placeOrder(cart)
				.then(({ data }) => {
					//router push to the other page
					toast.success("Order Placed");
					formik.setSubmitting(false);
				})
				.catch((res) => {
					toast.error("Something went Wrong!");
					formik.setSubmitting(false);
				});
		},
	});

	useEffect(() => {
		if (shipmentAddressCookie) {
			const detail = JSON.parse(shipmentAddressCookie);
			formik.setValues({
				postalCode: detail.postalCode,
				phoneNumber: detail.phoneNumber,
			});
		}
	}, []);

	const isDelivery = useMemo(() => {
		return shippingType === SHIPPING_TYPE.DELIVERY;
	}, [shippingType]);

	const formsProps = () => {
		return {
			formik,
			values: formik.values,
			setValues: formik.setValues,
		};
	};

	const isSubscriptionExist = () => {
		// TODO
		return true;
	};

	useEffect(() => {
		setShippingFormValues(formik.values);
	}, [formik.values]);

	const paymentElementOptions = {
		layout: "tabs",
	};

	return (
		<div className="w-full">
			<div className="mx-auto max-w-screen-lg">
				<Radio.Group
					name="shippingMethod"
					label="Select your shipping method"
					onChange={setShippingType}
					value={shippingType}
					withAsterisk
				>
					<Group mt="xs">
						<Radio value="DELIVERY" label="Delivery" />
						<Radio value="PICK_UP" label="Pick Up" />
					</Group>
				</Radio.Group>
			</div>
			<Formik onSubmit={formik.handleSubmit}>
				<form className="mx-auto max-w-screen-lg pt-4 pb-20 pr-4">
					<div>
						{/* {isDelivery ? (
							<DeliveryForm {...formsProps()} />
						) : (
							<PickupForm {...formsProps()} />
						)} */}
						<DeliveryForm {...formsProps()} />
					</div>
					{isSubscriptionExist && (
						<div className="mb-4 w-1/2">
							<Select
								label="Subscription Frequency"
								placeholder="Pick the subscription frequency"
								data={[
									{ value: "react", label: "Once a week" },
									{ value: "ng", label: "Twice a week" },
									{ value: "svelte", label: "Monthly" },
								]}
							/>
						</div>
					)}
					<div>
						<PaymentElement
							id="payment-element"
							options={paymentElementOptions}
						/>
					</div>
				</form>
			</Formik>
		</div>
	);
}
