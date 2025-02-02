import React from "react";
import Forgot from "../../assets/forgotpassword.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import lockBG from "../../assets/lock-bg.jpg";
import logo from "../../assets/logo.png";
import Container from "../../components/Container/Container";

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
    <div
      className="bg-cover bg-no-repeat bg-center h-screen max-sm:h-screen font-pops"
      style={{ backgroundImage: `url(${lockBG})` }}
    >
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

      {/* Header */}
      <div className="flex items-center px-[60px] py-[15px] max-sm:py-[4px] max-sm:px-[10px]">
        <img src={logo} className="w-[50px] h-[50px]" alt="Logo" />
        <h3 className="text-white text-[25px] not-italic font-normal leading-[normal] font-rus">
          GamerGO
        </h3>
      </div>

      <Container className="flex justify-center items-center max-sm:justify-center">
        <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] rounded-[50px] w-[550px] bg-[rgba(255,255,255,0.2)] p-[40px] max-sm:backdrop-blur-[2px] max-sm:p-[30px] max-sm:w-[400px] max-sm:mb-[100px]">
          <h2
            className="text-center text-[40px] font-[400] leading-[50px] 
                     bg-gradient-to-b from-[#FF9B00] to-[#FFA300] 
                     bg-clip-text text-transparent font-rus 
                     max-sm:text-[30px] max-sm:leading-[40px] mb-6"
          >
            Password Recovery
          </h2>

          <div className="space-y-6">
            <div className="relative">
              <input
                onChange={handelemail}
                type="email"
                className="w-full rounded-[50px] bg-gradient-to-r from-[#3C3C3C] to-[#3C3C3A] 
                      shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-[#6C6C6C] text-[25px] 
                      not-italic font-normal leading-[normal] font-rus px-[35px] py-[15px] 
                      max-sm:text-xs max-sm:px-5 max-sm:py-2.5"
                placeholder="Enter your registered email"
              />
            </div>

            <button
              onClick={handelReset}
              className="w-full rounded-[40px] border border-[#C06C24] 
                   bg-gradient-to-r from-[#FF9C00] to-[#FF8000] 
                   shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-[#252424] 
                   text-[20px] font-rus py-[15px] hover:opacity-90 
                   transition-opacity max-sm:text-[15px] max-sm:py-[10px]"
            >
              Reset Password
            </button>

            <div className="text-center space-y-4">
              <Link to="/login" className="block">
                <span
                  className="text-[#fff] text-[18px] font-pops hover:text-[#FF9B00] 
                            transition-colors max-sm:text-[15px]"
                >
                  Remember your password? Sign In
                </span>
              </Link>

              <Link to="/" className="block">
                <span
                  className="text-[#FF9B00] text-[18px] font-rus 
                            hover:text-[#FF8000] transition-colors max-sm:text-[15px]"
                >
                  Create new account
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ForgotPassword;
