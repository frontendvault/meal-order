import React from "react";
// import { Disclosure } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Features from "./Menu/Features";

const faqs = [
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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function FAQ() {
  return (
    <div className="bg-gray-50">
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

          {/* <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl> */}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
