import React from "react";
import { DateInput } from "@mantine/dates";
import TextField from "@/components/input/TextField";

const DeliveryForm = ({ formik, values, setValues }) => {
	return (
		<div>
			<h1 className="mb-4 text-xl font-semibold">Delivery Information</h1>
			<div className="flex gap-4">
				<div className="mb-4 w-full">
					<TextField
						required
						label="Full Name"
						placeholder="Full Name"
						{...formik.getFieldProps("fullName")}
						error={formik.touched.fullName && formik.errors.fullName}
					/>
				</div>
				<div className="mb-4 w-full">
					<TextField
						required
						label="Phone Number"
						placeholder="Phone Number"
						{...formik.getFieldProps("phoneNumber")}
						error={formik.touched.phoneNumber && formik.errors.phoneNumber}
					/>
				</div>
			</div>

			<div className="mb-4">
				<DateInput
					required
					label="Delivery Date"
					name="deliveryDate"
					placeholder="Delivery Date"
					value={values.deliveryDate}
					onChange={(data) => setValues({ ...values, deliveryDate: data })}
				/>
			</div>
			<div className="flex gap-4">
				<div className="mb-4 w-full">
					{/* <label htmlFor="deliveryAddress">Delivery Address</label> */}
					<TextField
						required
						label="Delivery Address"
						placeholder="Delivery Address"
						{...formik.getFieldProps("deliveryAddress")}
						error={
							formik.touched.deliveryAddress && formik.errors.deliveryAddress
						}
					/>
				</div>
				<div className="mb-4 w-full">
					{/* <label htmlFor="postalCode">Postal Code</label> */}
					<TextField
						required
						label="Postal Code"
						type="number"
						placeholder="Postal Code"
						{...formik.getFieldProps("postalCode")}
						onBlur={formik.handleBlur}
						error={formik.touched.postalCode && formik.errors.postalCode}
					/>
				</div>
			</div>
		</div>
	);
};

export default DeliveryForm;
