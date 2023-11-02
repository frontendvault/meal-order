import "@/styles/globals.css";
import { UserProvider } from "@/utils/providers/user.provider";
import { CartProvider } from "@/utils/providers/cart.provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MantineProvider } from "@mantine/core";
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";

export default function App({ Component, pageProps }) {
	const guest = Component.guest;

	return (
			<MantineProvider>
				<CartProvider>
					<ToastContainer />
					<UserProvider guest={guest}>
						<CartProvider>
							<Component {...pageProps} />
						</CartProvider>
					</UserProvider>
				</CartProvider>
			</MantineProvider>
	);
}
