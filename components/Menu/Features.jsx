import React from "react";
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
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste.",
    // icon: GlobeAltIcon,
  },
  {
    name: "Durable hardware",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste.",
    // icon: LifebuoyIcon,
  },
  {
    name: "Eco-friendly",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste.",
    // icon: GlobeEuropeAfricaIcon,
  },
  {
    name: "Minimal Design",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste.",
    // icon: CpuChipIcon,
  },
];

function Features() {
  return (
    <div className="bg-white py-12 ">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <dl className="space-y-10 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                {/* <feature.icon
                  className="h-12 w-12 text-indigo-600"
                  aria-hidden="true"
                /> */}

                <p className="mt-2 text-lg font-medium leading-6 text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Features;
