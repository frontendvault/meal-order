import Layout from "@/components/Layout";
import { createUserAddress, updateUserAddress } from "@/services/user.api";
import { useUser } from "@/utils/providers/user.provider";
import {
	Button,
	Card,
	Group,
	Input,
	Modal,
	Text,
	TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useEffect, useState } from "react";

const Address = () => {
	const [opened, { open, close }] = useDisclosure(false);
	const [loading, setLoading] = useState();
	const [addresses, setAddresses] = useState([]);
	const [selectedAddress, setSelectedAddress] = useState({});
	const { user } = useUser();

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setAddresses([
				mock,
				mock,
				mock,
				mock,
				mock,
				mock,
				mock,
				mock,
				mock,
				mock,
				mock,
				mock,
			]);
			setLoading(false);
		}, 1000);
	}, []);

	const handleOnClickAddress = (address) => {
		setSelectedAddress(address);
		open();
	};

	const handleCloseAddressModal = () => {
		setSelectedAddress({});
		close();
	};

	const onAddressInputChange = (key, value) => {
		setSelectedAddress({
			...selectedAddress,
			[key]: value,
		});
	};

	const handleSaveAddress = async () => {
		try {
			const addressId = selectedAddress.id;
			const userId = user.id;
			if (addressId) {
				await updateUserAddress({
					userId,
					addressId,
					params: selectedAddress,
				});
			} else {
				await createUserAddress({
					userId,
					params: selectedAddress,
				});
			}
		} catch (error) {
			console.error(error);
		}
	};

	const mock = {
		name: "Mock Address",
		address1: "380/1A Nam Kỳ Khởi Nghĩa",
		address2: "",
		state: "Hải Triều",
		postalCode: "70000",
		country: "Vietnam",
	};
	return (
		<Layout title={"My Address"} loading={loading}>
			<div className="container mx-8 lg:mx-auto mb-4 mt-8 w-full">
				<div className="flex justify-between">
					<div>
						<Text className="text-2xl font-bold mb-4">My Delivery Address</Text>
					</div>
					<div>
						<Button className="bg-blue-500 text-white" onClick={open}>
							Add Delivery Address
						</Button>
					</div>
				</div>
				<div className="mt-4 flex flex-wrap gap-4">
					{addresses.map((address) => (
						<Card
							cu
							shadow="sm"
							padding="lg"
							radius="md"
							withBorder
							className="max-w-[350px]"
							onClick={() => handleOnClickAddress(address)}
						>
							<Group position="apart" mb="xs" className="w-full">
								<Text size={"md"} className="text-blue-400 font-semibold">
									{address.name}
								</Text>
							</Group>
							<Group position="apart" mb="xs" className="w-full">
								<Text size={"sm"}>{address.address1}</Text>
							</Group>
							<Group position="apart" mb="xs" className="w-full">
								<Text size={"sm"}>{address.address2}</Text>
							</Group>
							<Group position="apart" mb="xs" className="w-full">
								<Text size={"sm"}>{address.state}</Text>
							</Group>
							<Group position="apart" mb="xs" className="w-full">
								<Text size={"sm"}>{address.postalCode}</Text>
							</Group>
						</Card>
					))}
				</div>
				<Modal
					opened={opened}
					onClose={handleCloseAddressModal}
					title="Add Delivery Address"
				>
					{/* Modal content */}
					<div className="w-full">
						<form>
							<div className="mb-4">
								<TextInput
									withAsterisk
									label="Name"
									value={selectedAddress.name}
									onChange={(event) =>
										onAddressInputChange("name", event.target.value)
									}
								/>
							</div>
							<div className="mb-4">
								<TextInput
									withAsterisk
									label="Address"
									placeholder="Street, Apt/Suite"
									value={selectedAddress.address1}
									onChange={(event) =>
										onAddressInputChange("address1", event.target.value)
									}
								/>
							</div>
							<div className="mb-4">
								<TextInput
									label="Address 2 (Optional)"
									placeholder="Street, Apt/Suite"
									value={selectedAddress.address2}
									onChange={(event) =>
										onAddressInputChange("address2", event.target.value)
									}
								/>
							</div>
							<div className="mb-4">
								<TextInput
									withAsterisk
									label="State / Province"
									value={selectedAddress.state}
									onChange={(event) =>
										onAddressInputChange("state", event.target.value)
									}
								/>
							</div>
							<div className="mb-4">
								<TextInput
									withAsterisk
									label="Zip / Postal"
									value={selectedAddress.postalCode}
								/>
							</div>
							<div className="w-full mt-6">
								<Button
									className="w-full h-10"
									type="mantine-button"
									variant="filled"
									color="blue"
									onClick={handleSaveAddress}
								>
									Save
								</Button>
							</div>
						</form>
					</div>
				</Modal>
			</div>
		</Layout>
	);
};

export default Address;
