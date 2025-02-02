import React, { useState } from "react";
import Container from "../../components/Container/Container";
import regBG from "../../assets/regbg.jpg";
import logo from "../../assets/logo.png";
import { FaEyeSlash } from "react-icons/fa";
import { LiaSignInAltSolid } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InfinitySpin } from "react-loader-spinner";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [emailerr, setEmainerr] = useState("");
  const [fullname, setFullname] = useState("");
  const [fullnameerr, setfullnameerr] = useState("");
  const [password, setpassword] = useState("");
  const [passworderr, setpassworderr] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getDatabase();
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmainerr("");
  };

  const handelfullname = (e) => {
    setFullname(e.target.value);
    setfullnameerr("");
  };
  const handlepassword = (e) => {
    setpassword(e.target.value);
    setpassworderr("");
  };

  const handelSignUP = () => {
    if (!email) {
      setEmainerr("give me valid mail");
    } else {
      if (!/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)) {
        setEmainerr("valid mail pleace");
      }
    }

    if (!fullname) {
      setfullnameerr("give full name");
    }

    if (!password) {
      setpassworderr("pleace give a password");
    } else {
      if (!/(?=.*?[A-Z])/.test(password)) {
        setpassworderr("At least one upper case");
      } else if (!/(?=.*?[a-z])/.test(password)) {
        setpassworderr("At least one lower case English letter");
      } else if (!/(?=.*?[0-9])/.test(password)) {
        setpassworderr("At least one digit");
      } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
        setpassworderr("At least one special character");
      } else if (!/.{8,}/.test(password)) {
        setpassworderr("Minimum eight in length ");
      }
    }

    if (email && fullname && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          updateProfile(auth.currentUser, {
            displayName: fullname,
          }).then(() => {
            console.log(user);

            sendEmailVerification(auth.currentUser)
              .then(() => {
                setLoading(true);
                toast.success("Registration Successfull");
                setEmail("");
                setFullname("");
                setpassword("");
                setTimeout(() => {
                  navigate("/login");
                }, 3000);
              })
              .then(() => {
                set(ref(db, "users/" + user.user.uid), {
                  username: user.user.displayName,
                  email: user.user.email,
                });
              });
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes("auth/email-already-in-use")) {
            toast.error("This email is already in use");
          }
        });
    }
  };

  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-screen max-sm:h-full"
      style={{ backgroundImage: `url(${regBG})` }}
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
      <div className="flex items-center  px-[60px] py-[15px] max-sm:py-[4px] max-sm:px-[10px]">
        <img src={logo} className="w-[50px] h-[50px]" alt="" />
        <h3 className=" text-white text-[25px] not-italic font-normal leading-[normal] font-rus ">
          GamerGO
        </h3>
      </div>
      <Container className="flex justify-end items-center max-sm:justify-center">
        <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] rounded-[50px] w-[550px] h-[680px] bg-[rgba(255, 255, 255, 0.2)] p-[40px] max-sm:justify-center max-sm:backdrop-blur-[2px] max-sm:p-[30px] max-sm:w-[400px] max-sm:h-[500px] max-sm:mb-[100px]">
          <h2
            className="text-center text-[40px] font-[400] leading-[50px] 
                bg-gradient-to-b from-[#FF9B00] to-[#FFA300] 
                bg-clip-text text-transparent 
                font-rus max-sm:text-[20px] max-sm:leading-[20px]  "
          >
            Sign Up to Start <br className="max-sm:none" /> Your <br />
            Adventure
          </h2>
          {/* Registration details */}

          {/* Email */}
          <div className="relative  ">
            <input
              onChange={handleEmail}
              type="email"
              className="w-full rounded-[50px] bg-gradient-to-r from-[#3C3C3C] to-[#3C3C3A] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-[#6C6C6C] text-[25px] not-italic font-normal leading-[normal] font-rus px-[35px] py-[15px] mt-[40px] mb-[15px] max-sm:text-xs max-sm:mt-[30px] max-sm:mb-[5px] max-sm:px-5 max-sm:py-2.5"
              placeholder={emailerr || ` ${"Email: demo@gmail.com"}`}
            />
          </div>
          {/* Name */}
          <div className="relative  ">
            <input
              onChange={handelfullname}
              type="text"
              className="w-full rounded-[50px] bg-gradient-to-r from-[#3C3C3C] to-[#3C3C3A] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-[#6C6C6C] text-[25px] not-italic font-normal leading-[normal] font-rus px-[35px] py-[15px] mt-[20px] mb-[15px] max-sm:text-xs max-sm:mt-[10px] max-sm:mb-[5px] max-sm:px-5 max-sm:py-2.5"
              placeholder={fullnameerr || ` ${"Email: Name :"}`}
            />
          </div>

          {/* password */}
          <div className="relative mb-[51px] max-sm:mb-[20px]">
            <input
              onChange={handlepassword}
              type={`${showPassword ? "text" : "password"}`}
              id="email"
              className="w-full rounded-[50px] bg-gradient-to-r from-[#3C3C3C] to-[#3C3C3A] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-[#6C6C6C] text-[25px] not-italic font-normal leading-[normal] font-rus px-[35px] py-[15px] mt-[20px] mb-[15px] max-sm:text-xs max-sm:mt-[20px] max-sm:mb-[5px] max-sm:px-5 max-sm:py-2.5"
              placeholder={passworderr || ` ${"Password"}`}
            />
            {showPassword ? (
              <FaEye
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className="fill-[#6C6C6C] shadow text-[25px] absolute top-[37px] right-[25px] sm:text-[20px] sm:right-[20px] sm:top-[30px] max-sm:text-[19px] max-sm:right-[15px] max-sm:top-[28px]"
              />
            ) : (
              <FaEyeSlash
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
                className="fill-[#6C6C6C] shadow text-[25px] absolute top-[37px] right-[25px] sm:text-[20px] sm:right-[20px] sm:top-[30px] max-sm:text-[19px] max-sm:right-[15px] max-sm:top-[28px]"
              />
            )}
          </div>

          <div className="flex justify-between mt-[30px] mb-[10px]">
            {loading ? (
              <InfinitySpin
                visible={true}
                width="200"
                color="#5f35f5"
                ariaLabel="infinity-spin-loading"
              />
            ) : (
              <p
                onClick={handelSignUP}
                className="rounded-[40px] border border-[#C06C24] bg-gradient-to-r from-[#FF9C00] to-[#FF8000] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-[50px] py-[20px] text-[#252424] text-[20px] not-italic font-normal leading-[normal] flex justify-center items-center  gap-[14px] font-rus cursor-pointer max-sm:text-[15px] max-sm:py-[10px] max-sm:px-[20px] "
              >
                Sign UP <LiaSignInAltSolid className="w-[30px] h-[30px]" />
              </p>
            )}
            <p className="rounded-[40px] border-2 border-dashed border-[#D3B010] bg-gradient-to-r from-[#1A1A1D] to-[#232027] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-[50px] py-[20px] text-[#fff] text-[20px] not-italic font-normal leading-[normal] flex justify-center items-center  gap-[14px] font-rus max-sm:text-[15px] max-sm:py-[10px] max-sm:px-[20px] ">
              {" "}
              <FcGoogle className="w-[30px] h-[30px]" /> Google
            </p>
          </div>

          <p className="text-[#1E1E1E] text-xl not-italic font-normal leading-[normal] font-pops mt-[25px] max-sm:text-[15px] max-sm:text-[#fff]">
            Have an account?{" "}
            <span className="text-[#1E1E1E] text-[25px] not-italic font-normal leading-[normal] font-rus cursor-pointer max-sm:text-[#FF9B00]">
              <Link to="/login">Sign IN</Link>
            </span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Registration;
