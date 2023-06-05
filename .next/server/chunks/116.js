"use strict";
exports.id = 116;
exports.ids = [116];
exports.modules = {

/***/ 2116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu_Features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2228);


// import { Disclosure } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
    {
        question: "How long does it take for my package to arrive?",
        answer: "For sterling silver items, your order will be delivered within 7 to 10 business days. God that is so messed up. I am sure I will have died of hunger before then. I am kidding. No I am not, the next placeholder here says 10-15 business days mehn."
    },
    {
        question: "Where is my Order?",
        answer: "Remember you can query the status of your orders anytime in the My Order in the my Account section. If you're not registered though, you have to register."
    },
    {
        question: "Can I cancel or my order?",
        answer: "No mehn that's very dark, how do you think the chef will feel after you made him/her stress to make your order? Just tell me how you'd feel if you were the chef and the order got cancelled, Like who's going to eat this meal now? I'm kidding mehn, Aki says you can cancel. So yeah you can."
    }
];
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function FAQ() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-gray-50",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mx-auto max-w-3xl divide-y-2 divide-gray-200",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",
                            children: "Frequently asked questions"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-center mt-3",
                            children: "Here are few of the most frequently asked questions by our valueable customers"
                        })
                    ]
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FAQ);


/***/ }),

/***/ 2228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// import {
//   // BoltIcon,
//   GlobeAltIcon,
//   // ScaleIcon,
//   LifebuoyIcon,
// } from "@heroicons/react/24/outline";
// import { CpuChipIcon, GlobeEuropeAfricaIcon } from "@heroicons/react/24/solid";
const features = [
    {
        name: "Great for drinks",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste."
    },
    {
        name: "Durable hardware",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste."
    },
    {
        name: "Eco-friendly",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste."
    },
    {
        name: "Minimal Design",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste."
    }
];
function Features() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-white py-12 ",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dl", {
                className: "space-y-10 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0",
                children: features.map((feature)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mt-2 text-lg font-medium leading-6 text-gray-900",
                                    children: feature.name
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                className: "mt-2 text-base text-gray-500",
                                children: feature.description
                            })
                        ]
                    }, feature.name))
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Features);


/***/ })

};
;