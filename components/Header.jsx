import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../utils/Store";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import Image from "next/image";
import { useCart } from "@/utils/providers/cart.provider";

const menuItems = [
  {
    name: "Our Menu",
    url: "/menu",
  },
  {
    name: "Our Bag",
    url: "/bag",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
];

const Header = () => {
  const { state, dispatch } = useContext(Store);
  const { cart } = useCart();
  const { carts } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    // setCartItemsCount(carts.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart]);

  const logoutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/login" });
  };

  return (
    <header className="fixed z-20 w-screen py-1 p-4 md:px-16 bg-white  border-b-4 border-blue-700">
      {/* Desktop and Tablets */}
      <nav className="flex w-full justify-between">
        <Link href="/" className="cursor-pointer">
          <Image src="/images/mpo.png" alt="mpo-logo" height={80} width={80} />
        </Link>

        <div
          className="md:hidden bg-blue-500 p-3 w-12 h-12 flex items-center justify-center rounded mt-4"
          onClick={() => setMenu(!menu)}
        >
          <FaBars className="text-white" size={25} />
        </div>

        <div className="hidden md:flex justify-center items-center gap-8 text-blue-600 font-bold">
          {menuItems.map((item) => (
            <Link href={item.url} className="relative ">
              {item.name}
              {item.url === "/bag" && cart.length > 0 && (
                <span className="absolute -top-1 -right-4 ml-1 rounded-lg bg-red-600 px-2 text-xs font-bold text-white">
                  {cart.length}
                </span>
              )}
            </Link>
          ))}

          <Link href="/auth/sign-up">
            <button className="text-blue-600 font-bold">My Account</button>
          </Link>
          <button className="py-2 px-5 bg-blue-600 rounded text-white font-bold">
            Order Now
          </button>
        </div>

        {menu && (
          <div className="bg-white text-xl  flex items-center justify-center flex-col text-blue-600 font-bold fixed top-0 right-0 left-0 bottom-0 overflow-hidden">
            <div
              className="absolute top-5 right-5"
              onClick={() => setMenu(!menu)}
            >
              <FaRegWindowClose size={30} />
            </div>
            <Link
              href="/menu"
              className="border-b border-blue-300 w-full text-center py-2"
              onClick={() => setMenu(!menu)}
            >
              Our Menu
            </Link>
            <Link
              href="/bag"
              className="relative border-b border-blue-300 w-full text-center py-2"
            >
              My Bag
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-4 ml-1 rounded-lg bg-red-600 px-2 text-xs font-bold text-white">
                  {cartItemsCount}12
                </span>
              )}
            </Link>
            <Link href={"faq"} className="">
              FAQ
            </Link>

            <Link href="/auth/sign-up">
              <button className="text-blue-600 font-bold">My Account</button>
            </Link>
            <Link
              href={""}
              className="bg-blue-500 text-white w-full text-center py-2"
            >
              Order Now{" "}
            </Link>
          </div>
        )}
      </nav>
      {/* Mobile
      <div className="flex md:hidden w-full h-full">
        This is mobile view pending mobile design
      </div> */}
    </header>
  );
};

export default Header;
