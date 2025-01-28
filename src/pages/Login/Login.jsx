import React, { useState } from "react";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { userLoginInfo } from "../../Slices/userSlice.js";
import Container from "../../components/Container/Container";
import logBG from "../../assets/logbg.jpg";
import logo from "../../assets/logo.png";
import { FaEyeSlash } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { LiaSignInAltSolid } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";




const Login = () => {

  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [emailerr, setEmailerr] = useState("");
  const [password, setPassword] = useState("");
  const [passeorderr, setPasseorderr] = useState("");
  const [showPassword, setShopPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelemail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };

  const handelpassword = (e) => {
    setPassword(e.target.value);
    setPasseorderr("");
  };

  const handlelogin = () => {
    if (!email) {
      setEmailerr("pleace give an email");
    } else {
      if (!/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)) {
        setEmailerr("give a valid email");
      }
    }
    if (!password) {
      setPasseorderr("Enter your password pleace");
    } else {
      if (
        !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
          password
        )
      ) {
        setPasseorderr("give a valid password");
      }
    }

    if (email) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          dispatch(userLoginInfo(userCredential.user));
          localStorage.setItem(
            "userLoginInfo",
            JSON.stringify(userCredential.user)
          );
          toast.success("login done");
          setTimeout(() => {
            navigate("/home");
          }, 3000);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (error.code.includes("auth/invalid-credential")) {
            toast.error("Please enter a valid email or password");
          }
        });
    }
  };
  const handelgooglelogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        toast.success("login done");
        setTimeout(() => {
          navigate("/home");
        }, 3000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        if (error.code.includes("auth/invalid-credential")) {
          toast.error("Please enter a valid email or password");
        }
      });
  };


  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-screen"
      style={{ backgroundImage: `url(${logBG})` }}
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
      <div className="flex items-center  px-[60px] py-[15px]">
        <img src={logo} className="w-[50px] h-[50px]" alt="" />
        <h3 className=" text-white text-[25px] not-italic font-normal leading-[normal] font-rus">
          GamerGO
        </h3>
      </div>
      <Container className="flex justify-end items-center">
        <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] rounded-[50px] w-[550px] h-[680px] bg-[rgba(255, 255, 255, 0.2)] p-[40px]">
          <h2
            className="text-center text-[50px] font-[400] leading-normal
                bg-gradient-to-b from-[#2BEC65] to-[#0D6F3F]
                bg-clip-text text-transparent
                font-rus "
          >
            Step Into the <br /> Arena – Sign In
          </h2>
          {/* Registration details */}


          {/* Email */}
          <input onChange={handelemail} type="email" className="w-full rounded-[50px] bg-gradient-to-r from-[#3C3C3C] to-[#3C3C3A] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-[#6C6C6C] text-[25px] not-italic font-normal leading-[normal] font-rus px-[35px] py-[15px] mt-[40px] mb-[15px]" placeholder={emailerr || `Email: demo@gmail.com`} />
          



          {/* password */}
          <div className="relative">
          <input onChange={handelpassword} type="Password" className="w-full rounded-[50px] bg-gradient-to-r from-[#3C3C3C] to-[#3C3C3A] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-[#6C6C6C] text-[25px] not-italic font-normal leading-[normal] font-rus px-[35px] py-[15px] mt-[20px] mb-[15px]" placeholder={passeorderr || "Password"} />
          {showPassword ? (
                <FaEye
                  onClick={() => {
                    setShopPassword(!showPassword);
                  }}
                  className="fill-[#6C6C6C] shadow text-[25px] absolute top-[37px] right-[25px]"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => {
                    setShopPassword(!showPassword);
                  }}
                  className="fill-[#6C6C6C] shadow text-[25px] absolute top-[37px] right-[25px]"
                />
              )}


            <p onClick={handlelogin} className='text-[#252424] cursor-pointer text-[25px] not-italic font-normal leading-[normal] font-rus  rounded-[40px] border border-[#2BEC65] bg-gradient-to-r from-[#2BEC65] to-[#0D6F3F] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex  justify-center items-center py-[10px] gap-[10px] mt-[30px]'>Sign UP <LiaSignInAltSolid  className="w-[30px] h-[30px]"/></p>


          </div>



          <div className="flex justify-between mt-[30px] mb-[10px]">
          <p className="rounded-[40px] border border-[#2BEC65] bg-gradient-to-r from-[#2BEC65] to-[#0D6F3F] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-[50px] py-[10px] text-[#252424] text-[20px] not-italic font-normal leading-[normal] flex justify-center items-center  gap-[14px] font-rus"><ImFacebook className="w-[30px] h-[30px] text-[#3b5998]"/>Facebook </p>

          <p onClick={handelgooglelogin} className="cursor-pointer rounded-[40px] border-2 border-dashed border-[#2BEC65] bg-gradient-to-r from-[#1A1A1D] to-[#232027] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-[50px] py-[10px] text-[#fff] text-[20px] not-italic font-normal leading-[normal] flex justify-center items-center  gap-[14px] font-rus"> <FcGoogle   className="w-[30px] h-[30px]"/> Google</p>
          </div>
          <Link to={"/forgotpassword"}>
              <a
                href="#"
                className="text-[#252424] mt-[5px] font-rus hover:text-[#fff]"
              >
                Forgot password
              </a>
            </Link>
          <p className="text-[#fff] text-xl not-italic font-normal leading-[normal] font-pops mt-[15px]">Don’t have an account?   <span className="text-[#1E1E1E] text-[25px] not-italic font-normal leading-[normal] font-rus cursor-pointer">  <Link to="/">Sign Up</Link></span></p>
        </div>
      </Container>
    </div>
  )
}

export default Login