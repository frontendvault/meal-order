import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const PasswordConfirm = () => {
  const router = useRouter();
  const loginNow = () => {
    router.push("/");
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:h-screen w-screen">
        <div className="col-1 lg:h-auto h-[40vh]">
          <img
            className="lg:h-screen lg:h-auto h-full w-full object-cover"
            src="/images/11.jpg"
            alt="meal image"
          />
        </div>
        <div className="col-2 lg:m-10 m-0 md:m-12 lg:min-h-0 min-h-[60vh]">
          <div className="flex flex-col justify-center items-center h-full lg:px-10 px-6 py-6 lg:py-0">
            <h2 className="font-bold text-xl p-5 lg:m-5 m-0 text-center">
              You're all set. Time to pack your plate!
            </h2>
            <CheckCircleIcon className="text-green-600 h-12 w-12" />
            <h3 className="m-3 font-bold">Reset Succesful</h3>
            <p className="lg:px-48 px-0 text-center">
              Make sure not to share your password to your MPO account with
              anyone{" "}
            </p>

            <p className="lg:px-48 px-0 text-center lg:mt-6 mt-4">
              Happy Eating!
            </p>
            <button
              className="px-12 py-2 lg:w-auto w-full m-5 text-white font-bold rounded-md bg-blue-700"
              type="submit"
              onClick={loginNow}
            >
              Log In
            </button>
            <div className="w-full lg:px-48 lg:mt-4 lg:ml-10 lg:mr-10">
              <div className=" border-t-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordConfirm;
