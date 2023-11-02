import React from "react";
import Image from "next/image";
import { useState } from "react";
import { FAQData } from "./faq.data";

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
          {FAQData.map((faq, index) => (
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
          {FAQData.find((_, index) => index === selected).details.map(
            (detail) => (
              <div className="mb-3">
                <h2 className="font-semibold text-lg mb-2">
                  {detail.question}
                </h2>
                <p className="mb-8">{detail.answer}</p>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Faqs;
