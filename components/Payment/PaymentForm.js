import { useState, useRef } from 'react';
import { CardElement, useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement, CardPostalCodeElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardIcon } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios from 'axios';

const CardStyle = {
    style: {
        base: {
            fontSize: '16px',
            color: '#32325d',
            '::placeholder': {
                color: '#aab7c4',
            },
        },
        invalid: {
            color: '#fa755a',
        },
    },
};

const CardStyleIcone = {
    showIcon: true,
    style: {
        base: {
            fontSize: '16px',
            color: '#32325d',
            '::placeholder': {
                color: '#aab7c4',
            },
        },
        invalid: {
            color: '#fa755a',
        },
    },
};

const PaymentForm = ({ checkadd, checkoutData, handleSubmit }) => {

    const calculateSubtotal = () => {
        return checkoutData?.map((item) => item?.price * item?.quantity).reduce((total, value) => total + value, 0);
    };

    // Example usage
    const subtotal = calculateSubtotal();

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    // const [createPayment] = useMutation(CREATE_PAYMENT);
    // const [createOrder] = useMutation(CREATE_ORDER_USER);
    const formRef = useRef(null);
    const [sessionId, setSessionId] = useState(null);

    const router = useRouter();

    const [userID, setUserID] = useState("");

    useEffect(() => {
        const UserId = JSON.parse(localStorage.getItem("userId"));
        setUserID(UserId);
    }, [typeof window !== "undefined" && localStorage.getItem('userId')]);

    const OnSubmit = async (data) => {
        // console.log("🚀 ~ file: PaymentForm.js:66 ~ OnSubmit ~ data:", data)
        // event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement),
        });

        // var cardElement = elements.getElement('card');
        // console.log("🚀 ~ file: PaymentForm.js:82 ~ handleSubmit ~ cardElement:", cardElement)

        if (error) {
            setError(error.message);
        } else {
            axios
                .post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/v1/paymentmethods/`, {
                    fullname: data?.fname,
                    price: subtotal,
                    // billingAddress: {
                    //     address1: data?.address
                    // },
                })
                .then(response => {
                    console.log("🚀 ~ file: PaymentForm.js:97 ~ OnSubmit ~ response:", response)
                    stripe.confirmCardPayment(response?.data?.client_secret, {
                        payment_method: 'pm_card_visa',
                    }).then((res) => {
                        console.log("🚀 ~ file: PaymentForm.js:100 ~ .then ~ res:", res)
                    })
                })
                .catch(err => {
                    console.log(err);
                });

            // createPayment({
            //     variables: {
            //         input: {
            //             fname: data?.fname,
            //             address: data?.address,
            //             pincode: data?.zipcode,
            //             email: data?.email,
            //             name: "Go FullStack with KnowledgeHut",
            //             price: subtotal,
            //             quantity: 1,
            //             // transfer_data: JSON.stringify(checkoutData)
            //         },
            //     },
            // })
            //     .then((result) => {
            //         stripe.confirmCardPayment(result?.data?.createPayment?.id, {
            //             payment_method: 'pm_card_visa',
            //         }).then((res) => {
            //             console.log("🚀 ~ file: PaymentForm.js:100 ~ .then ~ res:", res)

            // createOrder({
            //     variables: {
            //         input: {
            //             userId: userID,
            //             product: ProductIDs,
            //             // productId: ProductIDs,
            //             amount: subtotal,
            //             paymentMethod: res?.payment_method_types,
            //             paymentId: res?.id,
            //             currency: res?.currency,
            //             billingAddress: res?.shipping?.address,
            //             billingCountry: res?.shipping?.address?.country,
            //         }
            //     }
            // }).then((result) => {
            //     console.log("🚀 ~ file: PaymentForm.js:92 ~ .then ~ result:", result)
            //     router.push('/')
            // }).catch((error) => {
            //     console.log("🚀 ~ file: PaymentForm.js:94 ~ .then ~ error:", error)
            // })

            //     })

            // })
            // .catch((error) => {
            //     console.log("Error creating payment:", error);
            // });
        }
    };

    return (
        <form className='mx-4 my-4'>
            <lable>CARD NUMBER</lable>
            <div className="card-element">
                <CardNumberElement options={CardStyleIcone} />
            </div>
            <div className='flex'>
                <div className=" w-full mr-2">
                    <lable>EXPIRY DATE</lable>
                    <div className='card-element'>
                        <CardExpiryElement options={CardStyle} />
                    </div>
                </div>
                <div className="w-full ms-3">
                    <lable>CVC</lable>
                    <div className='card-element'>
                        <CardCvcElement options={CardStyle} />
                    </div>
                </div>
            </div>
            {error && <div>{error}</div>}
            <button type="submit" onClick={handleSubmit(OnSubmit)} 
            className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-blue-500 py-4 w-full md:w-4/12 lg:w-full text-white bg-blue-600"
            >{`Pay $${subtotal} `}</button>
            {/* <button onClick={handleSubmit} className="btn ">Pay</button> */}
            <style jsx>
                {`
          .card-element {
              margin-bottom: 20px;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 4px;
            }
            `}
            </style>
        </form>
    );
};

export default PaymentForm;
