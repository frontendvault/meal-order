"use strict";
exports.id = 435;
exports.ids = [435];
exports.modules = {

/***/ 5435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ StoreProvider),
/* harmony export */   "y": () => (/* binding */ Store)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// import Cookies from "js-cookie";
const Store = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
// const initialState = {
//   cart: Cookies.get("cart")
//     ? JSON.parse(Cookies.get("cart"))
//     : { cartItems: [], shippingAddress: {}, paymentMethod: "" },
// };
const initialState = {
    cart: {
        cartItems: [],
        shippingAddress: {},
        paymentMethod: ""
    }
};
function reducer(state, action) {
    switch(action.type){
        case "CART_ADD_ITEM":
            {
                const newItem = action.payload;
                const existItem = state.cart.cartItems.find((item)=>item.slug === newItem.slug);
                const cartItems = existItem ? state.cart.cartItems.map((item)=>item.name === existItem.name ? newItem : item) : [
                    ...state.cart.cartItems,
                    newItem
                ];
                // Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        cartItems
                    }
                };
            }
        case "CART_REMOVE_ITEM":
            {
                const cartItems = state.cart.cartItems.filter((item)=>item.slug !== action.payload.slug);
                // Cookies.set("cart", JSON.stringify({ ...state.cart, cartItems }));
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        cartItems
                    }
                };
            }
        case "CART_RESET":
            {
                return {
                    ...state,
                    cart: {
                        cartItems: [],
                        shippingAddress: {
                            location: {}
                        },
                        paymentMethod: ""
                    }
                };
            }
        case "SAVE_SHIPPING_ADDRESS":
            {
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        shippingAddress: {
                            ...state.cart.shippingAddress,
                            ...action.payload
                        }
                    }
                };
            }
        case "SAVE_PAYMENT_METHOD":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    paymentMethod: action.payload
                }
            };
        default:
            return state;
    }
}
function StoreProvider({ children  }) {
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
    const value = {
        state,
        dispatch
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Store.Provider, {
        value: value,
        children: children
    });
}


/***/ })

};
;