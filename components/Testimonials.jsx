import Image from "next/image";
import React from "react";

const testimonials = [
  {
    name: "Kera Joo",
    designation: "Coach & Fitess Enthusiast",
    text: "When I'm in a rush and need to get a quick meal on the go. I know stopping into a location is my best bet. Ican save tima & stay on track with MPO.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Alen Max",
    designation: "Designer",
    text: "When I'm in a rush and need to get a quick meal on the go. I know stopping into a location is my best bet. Ican save tima & stay on track with MPO.",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Tom Koch",
    designation: "Developer",
    text: "When I'm in a rush and need to get a quick meal on the go. I know stopping into a location is my best bet. Ican save tima & stay on track with MPO.",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
];

function Testimonials() {
  return (
    <div className="bg-gray-100 py-14 mt-10">
      <div className="mx-auto  container px-5 md:px-0">
        <div className="lg:text-center">
          <h2 className="text-lg text-gray-400 font-bold">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            What our client says
          </p>
        </div>

        <div className="mx-auto py-10 lg:py-20">
          <div className="space-y-12">
            <ul
              role="list"
              className=" sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
            >
              {testimonials.map((testimonial) => (
                <li key={testimonial.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-2 aspect-h-2 group items-center flex-col justify-center">
                      <div className="relative bg-white px-10 py-16 group-hover:text-white group-hover:bg-blue-500">
                        <svg
                          className="absolute group-hover:bg-blue-500 top-8 left-44 h-8 w-8 -translate-x-3 -translate-y-2 transform  text-gray-600"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="text-gray-700">{testimonial.text}</p>
                      </div>
                      <div className=" flex justify-center">
                        <div className="absolute  w-8 overflow-hidden inline-block">
                          <div className=" h-6 w-6 bg-white group-hover:bg-blue-500  -rotate-45 transform origin-top-left"></div>
                        </div>
                        <div className="mt-10  flex flex-col justify-center items-center">
                          {/* <img
                            className="h-12 w-12  rounded-full "
                            src={testimonial.imageUrl}
                            alt=""
                          /> */}

                          {/* <Image
                            src={testimonial.imageUrl}
                            height={25}
                            width={25}
                          /> */}

                          <div className="text-gray-600">
                            <p className="font-bold text-center">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-center">
                              {testimonial.designation}
                            </p>
                          </div>
                        </div>
                      </div>
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

export default Testimonials;
