import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";
import Head from "next/head";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { getError } from "../utils/error";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

function ResetPasswordScreen() {
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  // const auth = getAuth();

  const signUpWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        router.push("/test");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error);
      });
  };

  const signInWithFacebook = () => {
    //Facebook sdk
    {
      /* <script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,
      xfbml      : true,
      version    : '{api-version}'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script> */
    }
  };
  const { data: session } = useSession();

  const { redirect } = router.query;

  //When there is a change in the session, useEffect runs...
  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/");
    }
  }, [router, session, redirect]);

  const {
    register,
    getValues,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ firstName, lastName, email, password }) => {
    console.log(firstName, lastName, email, password);
    try {
      await axios.post("/api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });
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
        <title>{"MPO - Reset Password"}</title>
        <meta
          name="description"
          content="Meal Ordering Prep where you get your "
        />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <div className="grid lg:grid-cols-2 grid-cols-1  w-screen">
        <div className="col-1 hidden lg:block">
          <img
            className="h-screen w-full object-cover"
            src="/images/11.jpg"
            alt="meal image"
          />
        </div>
        <div className="col-2 lg:m-10 m-0 md:m-12 lg:min-h-0 min-h-screen">
          <div className="flex flex-col justify-center h-full lg:px-10 px-6 py-6 lg:py-0">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Update your password
              </h2>
            </div>

            <div className="mt-8 lg:mr-10 lg:pr-10 mr-0 pr-0">
              <div className="lg:mt-6 mt-0">
                <form action="#" method="POST" className="space-y-2">
                  <div className="">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      New Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter New password here"
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
                  <div className="">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Re-Enter New Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="confirmPassword"
                        type="password"
                        placeholder="Enter password here"
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

export default ResetPasswordScreen;
