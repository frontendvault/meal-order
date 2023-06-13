import React, { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    const addCartItem = (id, quantity) => {

        setCart((prevCartItems) => {
            const existingItem = prevCartItems.find((item) => item.id === id);
            if (existingItem) {
                return prevCartItems.map((item) =>
                    item.id === id ? quantity === 0 ? removeItem(id) : { ...item, quantity: item.quantity + quantity } : item
                );
            } else {
                return [...prevCartItems, { id, quantity }];
            }
        });
    };
    console.log("cart => ", cart);

    const removeItem = (id) => {
        setCart((prevCartItems) => prevCartItems.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addCartItem, removeItem }}>
            {children}
        </CartContext.Provider>
    );
}

const useCart = () => {
    return useContext(CartContext);
};

export { CartProvider, useCart };
