import Head from "next/head";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { getError } from "../utils/error";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function ForgotPasswordScreen() {
  const { data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/");
    }
  }, [router, session, redirect]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password }) => {
    console.log(email, password);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <>
      <Head>
        <title>{"MPO - Forgot Password"}</title>
        <meta
          name="description"
          content="Meal Ordering Prep where you get your "
        />
        <link rel="icon" href="/mpo.png" />
      </Head>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:h-screen w-screen">
        <div className="col-1 bg-gray-200 lg:block hidden">
          <img
            className="  h-screen w-full object-cover"
            src="/images/17.jpg"
            alt=""
          />
        </div>
        <div className="col-2 lg:m-10 m-0 md:m-12 lg:min-h-0 min-h-screen">
          <div className="flex flex-col justify-center h-full lg:p-10 p-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Let's get you logged back in.
              </h2>
            </div>

            <div className="mt-8 lg:mr-10 lg:pr-10 mr-0 pr-0">
              <div className="lg:mt-6 mt-0">
                <form action="#" method="POST" className="space-y-2">
                  <div className="grid grid-cols-2 gap-3 flex-1">
                    <div>
                      <label
                        htmlFor="text"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First Name
                      </label>
                      <div className="mt-1">
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          autoComplete="first-name"
                          placeholder="David"
                          required
                          className="w-full  rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          {...register("firstName", {
                            required: "Please enter your firstName",
                          })}
                        />
                        {errors.firstName && (
                          <div className="font-base text-red-600">
                            {errors.firstName.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </label>
                      <div className="mt-1">
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          autoComplete="lastname"
                          required
                          placeholder="Clerk"
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          {...register("lastName", {
                            required: "Please enter your lastName",
                          })}
                        />
                        {errors.lastName && (
                          <div className="font-base text-red-600">
                            {errors.lastName.message}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="aki@gmail.com"
                        required
                        className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        {...register("email", {
                          required: "Please enter your email",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9_.+-]+@[a-zA_Z0-9-]+.[a-zA-Z0-9]+$/i,
                            message: "Please Enter a valid email address",
                          },
                        })}
                      />
                      {errors.email && (
                        <div className="font-base text-red-600">
                          {errors.email.message}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center py-3">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      I agree to Terms of Service & Privacy Policy
                    </label>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="flex lg:w-auto mx-auto w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Update Password
                    </button>
                  </div>
                  <div>
                    <div className="w-full lg:px-40 mt-12 lg:mt-6">
                      <div className=" border-t-2"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPasswordScreen;
