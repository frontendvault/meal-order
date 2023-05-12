import Image from "next/image";
import React from "react";

const partners = [
  {
    name: "Kera Joo",
    designation: "Coach & Fitess Enthusiast",
    text: '" It was an absolute pleasure working with them. They are the best, Highly Recommended! "',
    imageUrl: "/images/vogue.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Alen Max",
    designation: "Designer",
    text: '"Love this! Does exactly what it is supposed to do and so far without any real issues"',
    imageUrl: "/images/vogue.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Tom Koch",
    designation: "Developer",
    text: "Thanks. I am fully satisfied and would recommend buying ffrom them as they have made my liife much easier :) ",
    imageUrl: "/images/gq.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
];

function Partners() {
  return (
    <div className="bg-white py-14 mt-10 w-screen">
      <div className="container mx-auto px-5 md:px-0">
        <div className="lg:">
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Our Partners
          </p>
        </div>

        <div className=" py-10">
          <div className="space-y-12">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {partners.map((partner) => (
                <li key={partner.name}>
                  <div className="  flex items-start">
                    <div className="w-28 mr-3">
                      <Image
                        src={partner.imageUrl}
                        alt=""
                        width={60}
                        height={30}
                      />
                    </div>

                    <div className=" text-gray-600  ">
                      <p>{partner.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
