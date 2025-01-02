import React from "react";
import Forgot from "../../assets/forgotpassword.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const auth = getAuth();

  const handelemail = (e) => {
    setEmail(e.target.value);
  };

  const handelReset = () => {
    if (!email) {
      toast.error("pleace give an email");
    } else {
      if (!/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)) {
        toast.error("give a valid email");
      }
    }
    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          toast.success("Please cheack your email");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (error.code.includes("auth/invalid-credential")) {
            toast.error("Please enter a valid email");
          }
        });
    }
  };

  return (
    <div className="font-pops bg-gray-400">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen px-6">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg bg-[]"
              style={{ backgroundImage: `url(${Forgot})` }}
            />

            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <div className="px-8 mb-4 text-center">
                <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
                <p className="mb-4 text-sm text-gray-700">
                  We get it, stuff happens. Just enter your email address below
                  and we'll send you a link to reset your password!
                </p>
              </div>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    onChange={handelemail}
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter Email Address..."
                  />
                </div>
                <div className="mb-6 text-center">
                  <button
                    onClick={handelReset}
                    className="w-full px-4 py-2 font-bold text-white bg-[#5f35f57e] rounded-full hover:bg-[#5F35F5] focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Reset Password
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <Link to="/">
                    <a
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      href="./register.html"
                    >
                      Create an Account!
                    </a>
                  </Link>
                </div>
                <div className="text-center">
                  <Link to="/login">
                    <a
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      href="./index.html"
                    >
                      Already have an account? Login!
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
