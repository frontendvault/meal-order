import React from "react";
import { DateInput } from "@mantine/dates";
import TextField from "@/components/input/TextField";
import { Select } from "@mantine/core";

const PickupForm = ({ formik, values, setValues }) => {
	return (
		<div>
			<h1 className="mb-4 text-xl font-semibold">Pickup Information</h1>
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
			<div className="flex gap-4">
				<div className="mb-4 w-1/2">
					<DateInput
						required
						type="date"
						label="Pickup Date"
						name="pickupDate"
						placeholder="Delivery Date"
						value={values.deliveryDate}
						onChange={(data) => setValues({ ...values, pickupDate: data })}
					/>
				</div>
				<div className="mb-4 w-1/2">
					<Select
						required
						label="Pickup Address"
						placeholder="Pick one"
						data={[
							{ value: "react", label: "A Street, NY City" },
							{ value: "ng", label: "B Street, NY City" },
							{ value: "svelte", label: "C Street NY City" },
						]}
					/>
				</div>
			</div>
		</div>
	);
};

export default PickupForm;
