import React, { useState } from "react";
import Image from "next/image";

const MailingList = () => {
  const [subscrition, setSubscription] = useState("");
  console.log(subscrition);
  return (
    <div className="w-screen border-t-2 border-gray-100">
      <div className="container md:flex flex-col md:flex-row mx-auto py-10 md:py-20 items-center px-5 md:px-0 bg-blue-100 md:bg-white">
        <div className="md:w-1/2 md:pr-20">
          <span className="text-gray-600 md:text-gray-400 mb-3 flex">
            Subscribe to our newsletter
          </span>
          <h3 className="text-3xl font-semibold mb-3 text-gray-600">
            Join Our Mailing List
          </h3>
          <p className="mb-10 text-gray-600 md:text-gray-400 font-light">
            Subscribe to your newsletter to stay in the loop. Our newsletter is
            sent once in a week on every friday to get latest news and updates.
          </p>
          <div className="relative bg-white md:bg-gray-100 w-full md:w-[480px] md:h-[64px] flex p-2">
            <input
              className="md:absolute h-12 md:w-[450px] bg-white md:bg-gray-100"
              type="text"
              placeholder="Enter your email address here"
              value={subscrition}
              onChange={(e) => setSubscription(e.target.value)}
            />
            <button className="absolute right-2 h-12 px-4 md:px-8 bg-slate-800 hover:bg-blue-700 text-white capitalize">
              subscribe
            </button>
          </div>
        </div>
        <div className="hidden md:flex items-start md:justify-end">
          <div className="md:mt-8 md:mr-5">
            <Image
              src="/images/mailing-list1.png"
              alt=""
              width={297}
              height={401}
            />
          </div>
          <Image
            src="/images/mailing-list2.png"
            alt=""
            width={297}
            height={401}
          />
        </div>
      </div>
    </div>
  );
};

export default MailingList;
