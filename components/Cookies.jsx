import React, { useState } from "react";
import { FaHamburger } from "react-icons/fa";

const Cookies = () => {
  const [cookie, setCookies] = useState(true);

  return (
    <div className="fixed bottom-0 left-0 right-0 w-screen bg-white ">
      <div className="container mx-auto">
        {cookie && (
          <div className="flex items-center justify-between p-4 text-gray-600">
            <div className="hidden md:flex">
              <FaHamburger size={30} className="text-blue-500" />
            </div>
            <div className="hidden md:flex">
              <p>
                We use cookies to make your experience on this website better
              </p>
            </div>
            <div>
              <button className="py-2 md:py-3 md:px-3 px-5">
                Cookie Policies
              </button>
              <button
                className="bg-slate-900 py-2 md:py-3 px-3  md:px-5 shadow text-white"
                onClick={() => setCookies(!cookie)}
              >
                Accept Cookies
              </button>
              <button
                className="text-3xl ml-5"
                onClick={() => {
                  setCookies(!cookie);
                }}
              >
                x
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cookies;
