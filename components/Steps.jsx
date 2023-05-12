// import React from "react";
// import {
//   ArchiveBoxArrowDownIcon,
//   CheckIcon,
//   CodeBracketIcon,
//   ComputerDesktopIcon,
// } from "@heroicons/react/24/outline";

import {
  HiOutlineArchiveBoxArrowDown,
  HiCheck,
  HiCodeBracket,
  HiComputerDesktop,
} from "react-icons/hi2";

const steps = [
  {
    id: 1,
    name: "High Level Value Prop",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: HiOutlineArchiveBoxArrowDown,
  },
  {
    id: 2,
    name: "High Level Value Prop",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: HiCheck,
  },
  {
    id: 3,
    name: "High Level Value Prop",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: HiCodeBracket,
  },
  {
    id: 4,
    name: "High Level Value Prop",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: HiComputerDesktop,
  },
];

function Steps() {
  return (
    <div className="bg-white w-screen md:py-20 px-5 md:px-0 mt-10 container mx-auto">
      <div className="lg:text-center">
        <h2 className="text-lg  text-gray-500">IN FEW EASY STEPS</h2>
        <h3 className="mt-2 text-2xl md:text-3xl font-black text-gray-900 sm:text-4xl">
          From the kitchen, to your doorstep, as easy as 1-2-3
        </h3>
      </div>

      <div className="py-10 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-10 md:space-y-2 md:mt-20 ">
        {steps.map((step) => (
          <div key={step.id} className="flex items-start mb-10">
            <div className=" flex p-5 items-center justify-center rounded-md bg-blue-700 text-white">
              <step.icon className="h-8 w-8 font-bold" aria-hidden="true" />
            </div>
            <div className="ml-5">
              <p className=" text-xl font-bold leading-6 text-gray-900">
                {step.name}
              </p>
              <p className="mt-2 text-base text-gray-500 md:pr-20">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Steps;
