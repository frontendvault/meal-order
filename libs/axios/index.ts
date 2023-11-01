import axios, {
	Method,
	AxiosRequestConfig,
	AxiosError,
	AxiosResponse,
} from "axios";
import UrlPattern from "url-pattern";

import * as endpoints from "./endpoints";

type Path = {
	url: keyof typeof endpoints;
	params: any;
};

type Error = {
	message: string;
	status: number;
};

type Payload = {
	method: Method;
	path: Path;
	data?: any;
	query?: Object;
};

const generateEndpoint = (path: Path) => {
	const url = endpoints[path.url];
	const urlPattern = new UrlPattern(url);
	return urlPattern.stringify(path.params);
};

const http = async (
	payload: Payload
): Promise<{
	response: AxiosResponse<any, any> | null;
	error: null | Error;
}> => {
	try {
		const api = axios.create({
			baseURL: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/v1`,
		});

		const { method, path, data, query } = payload;
		const url = generateEndpoint(path);

		const options: AxiosRequestConfig = {
			headers: {
				"Content-Type": "application/json",
			},
			method,
			url,
		};

		if (data && method !== "GET") {
			options.data = data;
		}

		console.log("query ==> ", query);

		if (query && method === "GET") {
			options.params = JSON.stringify(query);
		}

		// TODO: add token if needed

		const response = await api(options);
		return {
			response,
			error: null,
		};
	} catch (error) {
		if (error instanceof AxiosError) {
			return {
				response: null,
				error: error.response?.data,
			};
		}

		return {
			response: null,
			error: error.message,
		};
	}
};

export default http;
