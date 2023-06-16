import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const CartContext = createContext([]);

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const cartCookie = Cookies.get("cart");

  const addCartItem = (item, quantity) => {
    setCart((prevCartItems) => {
      const existingItem = prevCartItems.find(
        (prevItem) => prevItem.id === item
      );

      if (existingItem) {
        return prevCartItems.map((prevItem) =>
          prevItem.id === item
            ? quantity === 0
              ? removeItem(item)
              : { ...prevItem, quantity: prevItem.quantity + quantity }
            : prevItem
        );
      } else {
        return [...prevCartItems, { id: item, quantity }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((prevCartItems) => prevCartItems.filter((item) => item.id !== id));
  };

  const updateCart = (updatedCart) => {
    Cookies.set("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    setTimeout(() => {
      updateCart(cart);
    }, 1500);
  }, [cart]);

  useEffect(() => {
    if (cartCookie) {
      setCart(JSON.parse(cartCookie));
    }
  }, []);

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
