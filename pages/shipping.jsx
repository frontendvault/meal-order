import React, { useState, useEffect, useMemo } from "react";
import Layout from "../components/Layout";
import * as yup from "yup";
import { useRouter } from "next/router";
import { Formik, useFormik } from "formik";
import { placeOrder } from "../services/order.api";
import { useCart } from "@/utils/providers/cart.provider";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { Radio, Group, Select } from "@mantine/core";
import { SHIPPING_TYPE } from "@/const";
import PickupForm from "@/components/views/shipping/PickupForm";
import DeliveryForm from "@/components/views/shipping/DeliveryForm";

const validationSchema = yup.object({
	fullName: yup.string().required("Please enter your full name"),
	deliveryAddress: yup.string().required("Please enter your delivery address"),
	postalCode: yup.number().required("Please enter your postal code"),
});

export default function ShippingScreen() {
	const router = useRouter();
	const [shippingType, setShippingType] = useState(SHIPPING_TYPE.DELIVERY);
	const { cart } = useCart();
	const shipmentAddressCookie = Cookies.get("shipmentAddress");

	const formik = useFormik({
		initialValues: {
			fullName: "",
			deliveryAddress: "",
			postalCode: "",
			deliveryDate: "",
			pickupAddress: "",
			pickupDate: "",
			phoneNumber: ""
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
				fullName: detail.fullName,
				deliveryAddress: detail.deliveryAddress,
				postalCode: detail.postalCode,
				phoneNumber: detail.phoneNumber
			});
			console.log("cart", detail, shipmentAddressCookie);
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
		console.log(formik.values);
	}, [formik.values]);

	return (
		<Layout title="MPO Shipping Address">
			<div className="mx-auto max-w-screen-md pt-20 px-5">
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
				<form className="mx-auto max-w-screen-md pt-4 pb-20 px-5">
					<div>
						{isDelivery ? (
							<DeliveryForm {...formsProps()} />
						) : (
							<PickupForm {...formsProps()} />
						)}
					</div>
					{isSubscriptionExist && (
						<div className="mb-4">
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
					<div className="mb-4 flex justify-between">
						<button
							disabled={formik.isSubmitting}
							type="submit"
							className="w-full  border border-transparent bg-blue-600 py-1 px-4 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
						>
							{formik.isSubmitting ? "proceeding... " : "Proceed to Payment"}
						</button>
					</div>
				</form>
			</Formik>
		</Layout>
	);
}

ShippingScreen.auth = true;
