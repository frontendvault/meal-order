import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Image from "next/image";

function LoginScreen() {
  // const { data: session } = useSession();
  const router = useRouter();
  // const { redirect } = router.query;

  //When there is a change in the session, useEffect runs...
  // useEffect(() => {
  //   if (session?.user) {
  //     router.push(redirect || "/");
  //   }
  // }, [router, session, redirect]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password }) => {
    // console.log(email, password);
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
        <title>{"MPO - Login"}</title>
        <meta
          name="description"
          content="Meal Ordering Prep where you get your "
        />
        <link rel="icon" href="/mpo.png" />
      </Head>
      <div className="grid md:grid-cols-2 h-screen w-screen">
        <div className="col-1 bg-gray-200 hidden md:flex">
          <Image
            src="/images/17.jpg"
            alt=""
            className="w-1/2"
            width={600}
            height={600}
          />
        </div>
        <div className="col-2 flex items-center justify-center bg-gray-100">
          <div className="p-10">
            <div>
              <h2 className="mt-4 text-xl font-bold text-gray-900 text-center md:text-left">
                Warm welcoming message about food.
              </h2>
            </div>

            <div className="mt-8 md:mr-10 md:pr-10">
              <div className="mt-6">
                <form
                  className="space-y-1"
                  onSubmit={handleSubmit(submitHandler)}
                >
                  <div className="grid grid-cols-2 gap-3 flex-1"></div>
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
                        type="email"
                        {...register("email", {
                          required: "Please enter your email",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9_.+-]+@[a-zA_Z0-9-]+.[a-zA-Z0-9]+$/i,
                            message: "Please Enter a valid email address",
                          },
                        })}
                        placeholder="obama@yakunbo.com"
                        autoFocus
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                      {errors.email && (
                        <div className="font-base text-red-600">
                          {errors.email.message}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        type="password"
                        {...register("password", {
                          required: "Please enter password",
                          minLength: {
                            value: 8,
                            message: "Please enter should be 8 characters ",
                          },
                        })}
                        autoFocus
                        placeholder="Enter your password here"
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                      {errors.password && (
                        <div className="font-base text-red-600">
                          {errors.password.message}
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
                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Login
                    </button>
                  </div>
                  <div className="text-sm  ">
                    Don't have an account?&nbsp;
                    <span className="text-blue-700 font-medium">
                      {" "}
                      {/* <Link href={`/signup?redirect=${redirect || "/menu"}`}>
                        Click here to Signup
                      </Link> */}
                    </span>
                  </div>
                  <div>
                    <div className="p-2 mt-4 ml-10 mr-10 border-t-2" />

                    <div className="mt-1 grid grid-cols-2 gap-3">
                      <div>
                        <a
                          href="#"
                          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                        >
                          <span className="sr-only">Sign in with Google</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            width="20px"
                            height="20px"
                          >
                            <path
                              fill="#FFC107"
                              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                            />
                            <path
                              fill="#FF3D00"
                              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                            />
                            <path
                              fill="#4CAF50"
                              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                            />
                            <path
                              fill="#1976D2"
                              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                            />
                          </svg>
                          <p className="ml-5">Login with Google</p>
                        </a>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                        >
                          <span className="sr-only">Sign in with Facebook</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            width="20px"
                            height="20px"
                          >
                            <linearGradient
                              id="Ld6sqrtcxMyckEl6xeDdMa"
                              x1="9.993"
                              x2="40.615"
                              y1="9.993"
                              y2="40.615"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stop-color="#2aa4f4" />
                              <stop offset="1" stop-color="#007ad9" />
                            </linearGradient>
                            <path
                              fill="url(#Ld6sqrtcxMyckEl6xeDdMa)"
                              d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                            />
                            <path
                              fill="#fff"
                              d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                            />
                          </svg>
                          <p className="ml-3">Login with Facebook</p>
                        </a>
                      </div>
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

export default LoginScreen;
