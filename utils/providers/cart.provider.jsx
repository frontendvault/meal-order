import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { addToCart } from "@/services/cart.api";

export const CartContext = createContext([]);

function CartProvider({ children }) {
	const [cart, setCart] = useState([]);
	const [dataChange, setDataChange] = useState(false);

	const cartCookie = Cookies.get("cart");

	const addCartItem = (item, quantity, price) => {
		axios
			.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/v1/carts/`, {

				userId: "64c9d87f7fd51e047142df7d",
				items: [
					{
						"mealId": item,
						"quantity": quantity,
						"price": price,
						"total": (quantity * price)
					}
				],
				// "subTotal" : 160
			})
		// addToCart({
		// 	userId: "64c9d87f7fd51e047142df7d",
		// 		items: [
		// 			{
		// 				"mealId": item,
		// 				"quantity": quantity,
		// 				"price": price,
		// 				"total": (quantity * price)
		// 			}
		// 		],
		// 		// "subTotal" : 160
		// })
			.then(response => {
				setCart(response.data?.items);

			})
			.catch(err => {
				console.log(err);
			});
		// setCart((prevCartItems) => {
		// 	const existingItem = prevCartItems.find(
		// 		(prevItem) => prevItem.id === item
		// 	);
		// 	if (existingItem) {
		// 		return prevCartItems.map((prevItem) =>
		// 			prevItem.id === item
		// 				? quantity === 0
		// 					? removeCartItem(item)
		// 					: { ...prevItem, quantity }
		// 				: prevItem
		// 		);
		// 	} else {
		// 		return [...prevCartItems, { id: item, quantity }];
		// 	}
		// });
	};

	const removeCartItem = (id) => {

		axios.delete(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/v1/carts/64c9d87f7fd51e047142df7d`, {
			data: {
				"mealId": id
			}
		})
			.then(response => {
				console.log('Item deleted successfully');
				// Perform additional actions if needed
			})
			.catch(error => {
				console.error('Error deleting item:', error);
			});
		// setCart((prevCartItems) => prevCartItems.filter((item) => item.id !== id));

	};

	// const updateCart = (updatedCart) => {
	// 	Cookies.set("cart", JSON.stringify(updatedCart ?? []));
	// };

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		updateCart(cart);
	// 	}, 1500);
	// }, [cart]);

	useEffect(() => {
		axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/v1/carts/64c9d87f7fd51e047142df7d`)
			.then((response) => {
				setCart(response?.data?.items);
			});
	}, [])

	// useEffect(() => {
	// 	// if (cartCookie) {
	// 		// setCart(JSON.parse(cartCookie));
	// 	// }
	// }, []);

	return (
		<CartContext.Provider value={{ cart, addCartItem, removeCartItem }}>
			{children}
		</CartContext.Provider>
	);
}

const useCart = () => {
	return useContext(CartContext);
};

export { CartProvider, useCart };
