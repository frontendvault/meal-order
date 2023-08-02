import { useState, useRef } from 'react';
import { CardElement, useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement, CardPostalCodeElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardIcon } from '@stripe/stripe-js';
import { useRouter } from 'next/router';

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

const PaymentForm = ({ checkadd, checkoutData }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const formRef = useRef(null);
    const [sessionId, setSessionId] = useState(null);

    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement),
        });

        // if (error) {
        //     setError(error.message);
        // } else {
            // createPayment({
            //     variables: {
            //         input: {
            //             fname: checkadd?.fname,
            //             address: checkadd?.address,
            //             pincode: checkadd?.pincode,
            //             email: checkadd?.email,
            //             name: "Go FullStack with KnowledgeHut",
            //             price: 1000,
            //             quantity: 1,
            //             // checkoutData: JSON.stringify(checkoutData)
            //         },
            //     },
            // })
            //     .then((result) => {
            //         // console.log("🚀 ~ file: PaymentForm.js:55 ~ .then ~ result:", result)
            //         stripe.confirmCardPayment(result?.data?.createPayment?.id, {
            //             payment_method: 'pm_card_visa',
            //         }).then((res) => {
            //             router.push('/')
            //             // console.log("🚀 ~ file: PaymentForm.js:63 ~ .then ~ res:", res)

            //         })

            //     })
            //     .catch((error) => {
            //         console.log("Error creating payment:", error);
            //     });
        // }
    };

    return (
        <form className='mx-4'>
            <lable>CARD NUMBER</lable>
            <div className="card-element">
                <CardNumberElement options={CardStyleIcone} />
            </div>
            <div className='d-flex'>
                <div className=" w-100 mr-2">
                    <lable>EXPIRY DATE</lable>
                    <div className='card-element'>
                        <CardExpiryElement options={CardStyle} />
                    </div>
                </div>
                <div className="w-100 ms-3">
                    <lable>CVC</lable>
                    <div className='card-element'>
                        <CardCvcElement options={CardStyle} />
                    </div>
                </div>
            </div>
            {error && <div>{error}</div>}
            <button onClick={handleSubmit} className="btn theme-bg-color text-white btn-md w-100 mb-4 fw-bold">Pay</button>
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
