import React from "react";
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="bg-gray-100 border-b-2  " >
     
      <div className="">
        {/* <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        > */}
        <div className="pt-10  h-[472px] bg-[url('/images/22.jpg')] bg-no-repeat bg-center bg-cover relative" >
        <div className="absolute bg-slate-900/[.80] h-full w-full top-0 flex items-center justify-center">
         
            <div className=" z-9">
              <h1 className=" justify-center flex items-center  tracking-wider  text-white text-3xl md:text-6xl font-bold z-10">
                Meal Prep & Ordering
              </h1>
              <h2 className="items-center justify-center my-4 md:my-8 font-bold text-2xl md:text-4xl flex text-white">
                Sub-Heading
              </h2>
              <p className="text-center text-white font-normal mx-50 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Conguw
                vel pulvinar <br/> preasent tempus sit feugiat felus, eget.
              </p>
              {/* <p className="items-center justify-center flex text-white font-semibold">preasent tempus sit feugiat felus, eget.</p> */}
             <div className="items center justify-center flex mt-10 space-x-10">
             <button className="py-3 px-8 rounded bg-blue-700 hover:bg-blue-800 text-white font-normal shadow-lg">Meal Prep</button>
              <button className="py-3 px-8 rounded bg-white text-blue-700 hover:bg-blue-700 hover:text-white font-normal shadow-lg">Order Now</button>
             </div>
            </div>
            </div>
        </div>
        {/* <div className="w-[1750px] h-[650px]">
            <img className="" src="/images/16.jpg" />
          </div>
          <div className="w-[1750px] h-[650px]">
            <img className="" src="/images/22.jpg" />
          </div> */}
        {/* </Carousel> */}
      </div>
    </div>
  );
}

export default Banner;
