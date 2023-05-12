// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
// import { signIn } from "next-auth/react";
// import { getError } from "../utils/error";
// import { toast } from "react-toastify";
// import { useSession } from "next-auth/react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Image from "next/image";

function signup() {
  const router = useRouter();
  //  const provider = new GoogleAuthProvider();
  // const auth = getAuth();

  // const signUpWithGoogle = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       console.log(user);
  //       router.push("/test");
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       console.log(error);
  //     });
  // };

  // const { data: session } = useSession();

  // const { redirect } = router.query;

  //When there is a change in the session, useEffect runs...
  // useEffect(() => {
  //   if (session?.user) {
  //     router.push(redirect || "/");
  //   }
  // }, [router, session, redirect]);

  const {
    register,
    getValues,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const submitHandler = async ({ firstName, lastName, email, password }) => {
  //   console.log(firstName, lastName, email, password);
  //   try {
  //     await axios.post("/api/auth/signup", {
  //       firstName,
  //       lastName,
  //       email,
  //       password,
  //     });
  //     const result = await signIn("credentials", {
  //       redirect: false,
  //       email,
  //       password,
  //     });
  //     if (result.error) {
  //       toast.error(result.error);
  //     }
  //   } catch (err) {
  //     toast.error(getError(err));
  //   }
  // };

  return (
    <>
      <Head>
        <title>{"MPO - Signup"}</title>
        <meta
          name="description"
          content="Meal Ordering Prep where you get your "
        />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <div className="  w-screen main-bg flex items-center justify-center">
        <div className="col-2 m-10 md:m-12  rounded-lg p-4 md:p-8 mx-auto">
          <div className="flex justify-center items-center w-screen h-screen bg-gray-900/[.8]">
            <div className="flex flex-col bg-white h-min md:p-8 rounded-xl	">
              <div>
                <h2 className=" text-2xl text-center md:text-left font-bold text-gray-900">
                  Get Started
                </h2>
              </div>

              <div className="mt-6">
                <form action="#" method="POST" className="space-y-1">
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
                        name="password"
                        type="password"
                        placeholder="Enter your password here"
                        autoComplete="current-password"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        {...register("password", {
                          required: "Please enter password",
                          minLength: {
                            value: 8,
                            message: "Please enter should be 8 characters ",
                          },
                        })}
                      />
                      {errors.password && (
                        <div className="font-base text-red-600">
                          {errors.password.message}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password here"
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        {...register("confirmPassword", {
                          required: "Please enter password again",
                          validate: (value) => value === getValues("password"),
                          minLength: {
                            value: 8,
                            message: "Please enter should be 8 characters ",
                          },
                        })}
                      />
                      {errors.confirmPassword && (
                        <div className="font-base text-red-600">
                          {errors.confirmPassword.message}
                        </div>
                      )}
                      {errors.confirmPassword &&
                        errors.confirmPassword.type === "validate" && (
                          <div className="font-base text-red-600">
                            Password do not match
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
                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-2"
                    >
                      Signup
                    </button>
                  </div>
                  <div className="text-sm  ">
                    Already have an account?&nbsp;
                    <span className="text-blue-700 font-medium">
                      <Link href="/login">Click here to Login</Link>
                    </span>
                  </div>
                  <div>
                    <div className="p-2 mt-4 ml-10 mr-10 border-t-2" />

                    <div className="mt-1 grid md:grid-cols-2 gap-3">
                      <div>
                        {/* <div onClick={signUpWithGoogle}> */}
                        <a
                          href="#"
                          className="inline-flex w-full justify-center items-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                        >
                          <span className="sr-only">Signup with Google</span>
                          <FaGoogle size={25} className="text-blue-400" />

                          <p className="ml-5 text-sm">Signup with Google</p>
                        </a>
                      </div>
                      <div>
                        <a
                          href="#"
                          className="inline-flex w-full justify-center items-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                        >
                          <span className="sr-only">Signup with Facebook</span>
                          <FaFacebook size={25} className="text-blue-400" />

                          <p className="ml-3 text-sm">Signup with Facebook</p>
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

export default signup;
