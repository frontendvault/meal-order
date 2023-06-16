import "@/styles/globals.css";
import { StoreProvider } from "@/utils/Store";
import { UserProvider } from "@/utils/providers/user.provider";
import { CartProvider } from "@/utils/providers/cart.provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MantineProvider } from "@mantine/core";
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";

export default function App({ Component, pageProps }) {
	const guest = Component.guest;
  const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

	return (
		<Elements stripe={stripePromise}>
			<MantineProvider>
				<StoreProvider>
					<ToastContainer />
					<UserProvider guest={guest}>
						<CartProvider>
							<Component {...pageProps} />
						</CartProvider>
					</UserProvider>
				</StoreProvider>
			</MantineProvider>
		</Elements>
	);
}
