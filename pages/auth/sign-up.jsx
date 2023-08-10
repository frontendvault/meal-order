import TextField from "@/components/input/TextField";
import client from "@/utils/client";
import axios from "axios";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import * as yup from "yup";

const validationSchema = yup.object({
  firstname: yup.string().min(2).required(),
  lastname: yup.string().min(2).required(),
  password: yup.string().min(8).required(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .matches(/^(.*)?\S+(.*)?$/, "Field should not be empty.")
    .required(),
  email: yup.string().email().required(),
});

function Signup() {
  const [agreed, setAgreed] = useState(false);
  const [agreedError, setAgreedError] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      password: "",
      confirm_password: "",
      email: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("🚀 ~ file: sign-up.jsx:40 ~ signup ~ values:", values)

      // axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/v1/auth/register`, { ...values, confirm_password: undefined })
      //   .then(({ data }) => {
      //     Cookies.set("refresh-token", data.tokens.refresh.token);
      //     Cookies.set("access-token", data.tokens.access.token);
      //     toast.success("Successfully Registered.");
      //     router.push("/");
      //     formik.setSubmitting(false);
      //   })
      //   .catch((res) => {
      //     formik.setSubmitting(false);
      //     console.log(res);
      //   });

      client
        .post("/v1/auth/register", { ...values, confirm_password: undefined })
        .then(({ data }) => {
          Cookies.set("refresh-token", data.tokens.refresh.token);
          Cookies.set("access-token", data.tokens.access.token);
          toast.success("Successfully Registered.");
          router.push("/");
          formik.setSubmitting(false);
        })
        .catch((res) => {
          formik.setSubmitting(false);
          console.log(res);
        });
    },
  });

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
      <div className="  min-w-screen main-bg flex items-center justify-center">
        <div className="col-2 m-10 md:m-12  rounded-lg p-4 md:p-8 mx-auto ">
          <div className="flex justify-center items-center w-screen h-screen bg-gray-900/[.8] ">
            <div className="flex flex-col bg-white h-min md:p-8 rounded-xl max-w-md">
              <h2 className=" text-2xl text-center md:text-left font-bold text-gray-900">
                Get Started
              </h2>
              <div className="mt-6">
                <form onSubmit={formik.handleSubmit} className="space-y-1">
                  <div className="grid grid-cols-2 gap-3 flex-1">
                    <TextField
                      label="First Name"
                      placeholder="First Name"
                      {...formik.getFieldProps("firstname")}
                      error={formik.errors.firstname}
                    />
                    <TextField
                      label="Last Name"
                      placeholder="Last Name"
                      {...formik.getFieldProps("lastname")}
                      error={formik.errors.lastname}
                    />
                    <TextField
                      label="Email"
                      parentProps={{
                        className: "col-span-2",
                      }}
                      placeholder="Email"
                      {...formik.getFieldProps("email")}
                      error={formik.errors.email}
                    />
                    <TextField
                      label="Password"
                      type="password"
                      parentProps={{
                        className: "col-span-2",
                      }}
                      placeholder="*******"
                      {...formik.getFieldProps("password")}
                      error={formik.errors.password}
                    />
                    <TextField
                      label="Confirm Password"
                      type="password"
                      parentProps={{
                        className: "col-span-2",
                      }}
                      placeholder="*******"
                      {...formik.getFieldProps("confirm_password")}
                      error={formik.errors.confirm_password}
                    />
                  </div>

                  <div className="flex items-center py-3">
                    <input
                      onChange={(e) => {
                        setAgreed(e.target.checked);
                      }}
                      value={agreed}
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
                      disabled={formik.isSubmitting || !agreed}
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mb-2"
                    >
                      Signup
                    </button>
                  </div>
                  <div className="text-sm  ">
                    Already have an account?&nbsp;
                    <span className="text-blue-700 font-medium">
                      <Link href="/auth/login">Click here to Login</Link>
                    </span>
                  </div>
                  <div>
                    <div className="p-2 mt-4 ml-10 mr-10 border-t-2" />

                    <div className="mt-1 grid md:grid-cols-2 gap-3">
                      <div>
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

export default Signup;
