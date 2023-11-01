import { AuthClient } from "@/utils/client";

export const getTags = async (params) => {
	try {
		return await AuthClient().get(`/v1/tags`, {
			params,
		});
	} catch (error) {
		console.log(error);
	}
};
