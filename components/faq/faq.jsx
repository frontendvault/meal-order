import React from "react";
import Image from "next/image";
import { useState } from "react";

const details = [
  {
    question: "How long does it take for my package to arrive?",
    answer:
      "For sterling silver items, your order will be delivered within 7 to 10 business days. God that is so messed up. I am sure I will have died of hunger before then. I am kidding. No I am not, the next placeholder here says 10-15 business days mehn.",
  },
  {
    question: "Where is my Order?",
    answer:
      "Remember you can query the status of your orders anytime in the My Order in the my Account section. If you're not registered though, you have to register.",
  },
  {
    question: "Can I cancel or my order?",
    answer:
      "No mehn that's very dark, how do you think the chef will feel after you made him/her stress to make your order? Just tell me how you'd feel if you were the chef and the order got cancelled, Like who's going to eat this meal now? I'm kidding mehn, Aki says you can cancel. So yeah you can.",
  },
  // More questions...
];

const faqs = [
  {
    name: "Shipping",
    icon: "shipping.svg",
  },
  {
    name: "Payment",
    icon: "dollar.svg",
  },
  {
    name: "Products",
    icon: "product.svg",
  },
  {
    name: "Return Policy",
    icon: "return.svg",
  },
  {
    name: "Account",
    icon: "settings.svg",
  },
  {
    name: "Contact",
    icon: "contact.svg",
  },
];

function Faqs() {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
          <div>
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>

            <p className="text-center mt-3">
              Here are few of the most frequently asked questions by our
              valueable customers
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-8 lg:mx-auto">
        <div
          className={`flex space-x-4 justify-between items-center py-4 overflow-x-auto`}
        >
          {faqs.map((faq, index) => (
            <div
              className={`faq-card ${
                selected === index ? "border border-gray-700" : ""
              }`}
              onClick={() => setSelected(index)}
              key={faq.question}
            >
              <div>
                <Image src={`/images/faq/${faq.icon}`} height={64} width={64} />
              </div>
              <p className="font-semibold mt-2">{faq.name}</p>
            </div>
          ))}
        </div>
        <div className="py-12">
          {details.map((detail) => (
            <div className="mb-3">
              <h2 className="font-semibold text-lg mb-2">{detail.question}</h2>
              <p className="mb-8">{detail.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Faqs;
