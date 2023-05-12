import Image from "next/image";

// import { chevronRight } from "@heroicons/react/24/outline";

function Description() {
  return (
    <div className=" bg-white ">
      <div className="container md:flex  mx-auto justify-between items-center md:py-10 px-6 md:px-0">
        <div className="w-full md:w-1/2 mb-10 md:mb-10 ">
          <h3 className=" text-4xl md:text-7xl font-bold tracking-tight text-gray-900 mb-5 ">
            Healthy Affordable Sustainable
          </h3>
          <p className="md:pr-20 text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using.
          </p>
        </div>
        <div className="w-full md:w-1/2 relative">
          {/* <img
            className="shadow-lg w-full h-50 md:h-auto "
            src="/images/20.jpg"
            alt="image"
          /> */}
          <Image src="/images/20.jpg" height={700} width={640} />
          <button className="absolute bottom-0 right-0 w-full h-[82px] bg-slate-800 hover:bg-slate-900 text-white flex items-center justify-between px-10">
            <span>Discover More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* <div className=" mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <div className="aspect-w-12 aspect-h-5 lg:aspect-none">
                <img
                  className=" object-cover object-center shadow-lg"
                  src="/images/20.jpg"
                  alt="image"
                  width={1184}
                  height={500}
                />
              </div>
            </div>
          </div>
          <div className="p-[24] mx-auto">
            <div className=" m-32 mt-[400px] text-gray-500 lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <h3 className=" text-7xl font-bold tracking-tight text-gray-900">
                {" "}
                Healthy <br />
                Affordable <br /> Sustainable
              </h3>

              <p className="mt-8 text-lg text-gray-500 line-clamp-5">
                It is a long establised fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using Lorem Ipsum is that it has a more-orless normal
                distribution of letters, as oppsed to using.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Description;

// <div className="mx-auto max-w-prose text-base lg:ml-auto lg:mr-0 lg:max-w-lg">
//             <h3 className="mt-2 text-6xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
//               Healthy Affordable Sustainable
//             </h3>
//             <p className="mt-8 text-lg text-gray-500">
//               It is a long establised fact that a reader will be distracted by
//               the readable content of a page when looking at its layout. The
//               point of using Lorem Ipsum is that it has a more-orless normal
//               distribution of letters, as oppsed to using.
//             </p>
//           </div>
