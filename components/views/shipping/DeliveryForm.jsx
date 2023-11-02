import React from "react";
import { DateInput } from "@mantine/dates";
import TextField from "@/components/input/TextField";
import moment from "moment";

const DeliveryForm = ({ formik, values, setValues }) => {
	const disabledDateBefore = (date) => {
		return moment(date).isBefore(moment(), 'D')
	}
	return (
		<div>
			<h1 className="mb-4 text-xl font-semibold">Delivery Information</h1>
			<div className="flex gap-4">
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
					excludeDate={disabledDateBefore}
					value={values.deliveryDate}
					onChange={(data) => setValues({ ...values, deliveryDate: data })}
				/>
			</div>
			<div className="flex gap-4">
				<div className="mb-4 w-full">
					{/* <label htmlFor="deliveryAddress">Delivery Address</label> */}
					<TextField
						required
						label="Address 1"
						placeholder=""
						{...formik.getFieldProps("address1")}
						error={
							formik.touched.deliveryAddress && formik.errors.deliveryAddress
						}
					/>
				</div>
				<div className="mb-4 w-full">
					{/* <label htmlFor="deliveryAddress">Delivery Address</label> */}
					<TextField
						label="Address 2 (Optional)"
						placeholder=""
						{...formik.getFieldProps("address2")}
						error={
							formik.touched.deliveryAddress && formik.errors.deliveryAddress
						}
					/>
				</div>
			</div>
			<div className="mb-4 flex gap-4">
				<div className=" w-full">
					{/* <label htmlFor="postalCode">Postal Code</label> */}
					<TextField
						required
						label="State"
						{...formik.getFieldProps("state")}
						onBlur={formik.handleBlur}
						error={formik.touched.postalCode && formik.errors.postalCode}
					/>
				</div>
				<div className=" w-full">
					<TextField
						required
						label="Postal Code"
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
