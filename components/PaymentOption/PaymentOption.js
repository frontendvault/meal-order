import PaymentForm from '../Payment/PaymentForm'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';


const PaymentOption = ({ checkoutData, checkadd }) => {

    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

    return (
        <>
           
            <div>
                <div className="left-sidebar-checkout">
                    <div className="checkout-detail-box">
                        <ul>
                            <li>
                                {/* <div className="delivery-checkout-icon">
                                    <Icon icon="ph:coins-fill" target=".nav-item" src="https://cdn.lordicon.com/qmcsqnle.json"
                                        trigger="loop-on-hover" colors="primary:#0baf9a,secondary:#0baf9a"
                                        className="lord-icon">
                                    </Icon>
                                </div> */}
                                <div className="checkout-box">
                                    <div className="checkout-title">
                                        <h4>Payment Option</h4>
                                    </div>

                                    <div className="checkout-detail">
                                        <div className="accordion accordion-flush custom-accordion"
                                            id="accordionFlushExample">
                                            <div className="accordion-item bgwigth">
                                                <div className="accordion-header" id="flush-headingFour">
                                                    <div className="accordion-button collapsed border-none"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#flush-collapseFour">
                                                        <div className="custom-form-check form-check mb-0">
                                                            <label className="form-check-label" htmlFor="cash">
                                                                <input
                                                                    className="form-check-input mt-0"
                                                                    type="radio"
                                                                    name="flexRadioDefault"
                                                                    id="cash"
                                                                /> Cash
                                                                On Delivery</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="flush-collapseFour"
                                                    className="accordion-collapse collapse show"
                                                    data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">
                                                        <p className="cod-review">Pay digitally with SMS Pay
                                                            Link. Cash may not be accepted in COVID restricted
                                                            areas. <Link href="#">Know more.</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item bgwigth">
                                                <div className="accordion-header" id="flush-headingOne">
                                                    <div className="accordion-button collapsed border-none"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#flush-collapseOne">
                                                        <div className="custom-form-check form-check mb-0">
                                                            <label className="form-check-label" htmlFor="credit"><input
                                                                className="form-check-input mt-0" type="radio"
                                                                name="flexRadioDefault" id="credit" />
                                                                Credit or Debit Card</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div id="flush-collapseOne" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionFlushExample">

                                                </div>
                                            </div>

                                            <div className="accordion-item bgwigth">
                                                <div className="accordion-header" id="flush-headingTwo">
                                                    <div className="accordion-button collapsed border-none"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#flush-collapseTwo">
                                                        <div className="custom-form-check form-check mb-0">
                                                            <label className="form-check-label" htmlFor="banking"><input
                                                                className="form-check-input mt-0" type="radio"
                                                                name="flexRadioDefault" id="banking" />Net
                                                                Banking</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">
                                                        <h5 className="text-uppercase mb-4">Select Your Bank
                                                        </h5>
                                                        <div className="row g-2">
                                                            <div className="col-md-6">
                                                                <div className="custom-form-check form-check">
                                                                    <input className="form-check-input mt-0"
                                                                        type="radio" name="flexRadioDefault"
                                                                        id="bank1" />
                                                                    <label className="form-check-label"
                                                                        htmlFor="bank1">Industrial & Commercial
                                                                        Bank</label>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="custom-form-check form-check">
                                                                    <input className="form-check-input mt-0"
                                                                        type="radio" name="flexRadioDefault"
                                                                        id="bank2" />
                                                                    <label className="form-check-label"
                                                                        htmlFor="bank2">Agricultural Bank</label>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="custom-form-check form-check">
                                                                    <input className="form-check-input mt-0"
                                                                        type="radio" name="flexRadioDefault"
                                                                        id="bank3" />
                                                                    <label className="form-check-label" htmlFor="bank3">Bank
                                                                        of America</label>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="custom-form-check form-check">
                                                                    <input className="form-check-input mt-0"
                                                                        type="radio" name="flexRadioDefault"
                                                                        id="bank4" />
                                                                    <label className="form-check-label"
                                                                        htmlFor="bank4">Construction Bank Corp.</label>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="custom-form-check form-check">
                                                                    <input className="form-check-input mt-0"
                                                                        type="radio" name="flexRadioDefault"
                                                                        id="bank5" />
                                                                    <label className="form-check-label" htmlFor="bank5">HSBC
                                                                        Holdings</label>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="custom-form-check form-check">
                                                                    <input className="form-check-input mt-0"
                                                                        type="radio" name="flexRadioDefault"
                                                                        id="bank6" />
                                                                    <label className="form-check-label"
                                                                        htmlFor="bank6">JPMorgan Chase & Co.</label>
                                                                </div>
                                                            </div>

                                                            <div className="col-12">
                                                                <div className="select-option">
                                                                    <div className="form-floating theme-form-floating">
                                                                        <select
                                                                            className="form-select theme-form-select"
                                                                            aria-label="Default select example">
                                                                            <option value="hsbc">HSBC Holdings
                                                                            </option>
                                                                            <option value="loyds">Lloyds Banking
                                                                                Group</option>
                                                                            <option value="natwest">Nat West Group
                                                                            </option>
                                                                            <option value="Barclays">Barclays
                                                                            </option>
                                                                            <option value="other">Others Bank
                                                                            </option>
                                                                        </select>
                                                                        <label>Select Other Bank</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item bgwigth">
                                                <div className="accordion-header" id="flush-headingThree">
                                                    <div className="accordion-button collapsed border-none"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#flush-collapseThree">
                                                        <div className="custom-form-check form-check mb-0">
                                                            <label className="form-check-label" htmlFor="wallet"><input
                                                                className="form-check-input mt-0" type="radio"
                                                                name="flexRadioDefault" id="wallet" />My
                                                                Wallet</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="flush-collapseThree" className="accordion-collapse collapse"
                                                    data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">
                                                        <h5 className="text-uppercase mb-4">Select Your Wallet
                                                        </h5>
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="custom-form-check form-check">
                                                                    <label className="form-check-label"
                                                                        htmlFor="amazon"><input
                                                                            className="form-check-input mt-0"
                                                                            type="radio" name="flexRadioDefault"
                                                                            id="amazon" />Amazon Pay</label>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="custom-form-check form-check">
                                                                    <input className="form-check-input mt-0"
                                                                        type="radio" name="flexRadioDefault"
                                                                        id="gpay" />
                                                                    <label className="form-check-label"
                                                                        htmlFor="gpay">Google Pay</label>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="custom-form-check form-check">
                                                                    <input className="form-check-input mt-0"
                                                                        type="radio" name="flexRadioDefault"
                                                                        id="airtel" />
                                                                    <label className="form-check-label"
                                                                        htmlFor="airtel">Airtel Money</label>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="custom-form-check form-check">
                                                                    <input className="form-check-input mt-0"
                                                                        type="radio" name="flexRadioDefault"
                                                                        id="paytm" />
                                                                    <label className="form-check-label"
                                                                        htmlFor="paytm">Paytm Pay</label>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="custom-form-check form-check">
                                                                    <input className="form-check-input mt-0"
                                                                        type="radio" name="flexRadioDefault"
                                                                        id="jio" />
                                                                    <label className="form-check-label" htmlFor="jio">JIO
                                                                        Money</label>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <div className="custom-form-check form-check">
                                                                    <input className="form-check-input mt-0"
                                                                        type="radio" name="flexRadioDefault"
                                                                        id="free" />
                                                                    <label className="form-check-label"
                                                                        htmlFor="free">Freecharge</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <Elements stripe={stripePromise}>
                    <PaymentForm checkadd={checkadd} checkoutData={checkoutData} />
                </Elements>
            </div>

        </>
    )
}

export default PaymentOption