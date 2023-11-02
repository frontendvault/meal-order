import { AuthClient } from "@/utils/client";

// export const getUserAddresses = (userId) => {
//     return AuthClient().get(`/v1/users/${userId}/addresses`);
// };

export const addToCart = ({ params }) => {
	return AuthClient().post(`/v1/cart`, {
		params,
	});
};

// export const updateUserAddress = ({ userId, addressId ,params }) => {
//     return AuthClient().put(`/v1/users/${userId}/addresses/${addressId}`, {
//       params
//     });
// }

// export const removeUserAddress = ({ userId, addressId }) => {
//     return AuthClient().delete(`/v1/users/${userId}/addresses/${addressId}`)
// }
