import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { IoMdEyeOff } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import login from "../../assets/login.png";
const Login = () => {
  const [email, setEmail] = useState("");
  const [emailerr, setEmailerr] = useState("");
  const [password, setPassword] = useState("");
  const [passeorderr, setPasseorderr] = useState("");
  const [showPassword, setShopPassword] = useState(false);






  const handelemail = (e)=>{
    setEmail(e.target.value);
    setEmailerr("")
  }

  const handelpassword = (e)=>{
    setPassword(e.target.value);
    setPasseorderr("")
  }

  const handlelogin = ()=>{
    if(!email){
      setEmailerr("pleace give an email");
    }else{
      if(!/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)){
        setEmailerr("give a valid email")
      }
    }
    if (!password) {
      setPasseorderr("Enter your password pleace")
    }else{
      if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)) {
        setPasseorderr("give a valid password")
      }
    }
    
  }
  

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-1/2 flex flex-col justify-center items-end">
          <div className="mr-[142px]">
            <h2 className=" text-[#11175D] text-[34.401px] not-italic font-bold leading-[normal] font-nuni mb-[29px]">
              Login to your account!
            </h2>
            <a href="#" className="text-[#03014C] text-[13.338px] not-italic font-semibold leading-[normal] tracking-[0.267px] font-sans gap-[15px] opacity-30 rounded-[8.336px] border-[0.834px] border-solid border-[#03014C] py-[22px] px-[42px] inline-block mb-[68px]"><FcGoogle className="inline-block mr-[5px]" /> Login with Google </a>
            <div className="relative mb-[34px]">
                <label htmlFor="email" className="text-[#11175D] text-[13.76px] not-italic font-semibold leading-[normal] tracking-[1.032px] font-nuni py-[13px] px-[14px] bg-white absolute top-[-50%] left-[0px] translate-y-[50%] z-[2]">Email</label>
                <input onChange={handelemail} className="opacity-30 rounded-[8.6px] border-[1.72px] border-solid border-[#11175D] w-[368px] h-[81px] text-[#11175D] text-[20px] not-italic font-semibold leading-[normal] font-nuni pl-[15px]" type="Email" id="email" />

                <p className="bg-red-400 max-w-[368px] rounded font-pops">{emailerr}</p>

            </div>
            <div className="relative mb-[34px]">
                <label htmlFor="email" className="text-[#11175D] text-[13.76px] not-italic font-semibold leading-[normal] tracking-[1.032px] font-nuni py-[13px] px-[14px] bg-white absolute top-[-50%] left-[0px] translate-y-[50%] z-[2]">Password</label>
                <input onChange={handelpassword} className="opacity-30 rounded-[8.6px] border-[1.72px] border-solid border-[#11175D] w-[368px] h-[81px] text-[#11175D] text-[20px] not-italic font-semibold leading-[normal] font-nuni pl-[15px]" type={`${showPassword? "text" : "password"}`} id="email" />
                {
                  showPassword ? (<FaEye onClick={()=>{setShopPassword(!showPassword)}} className="text-[20px] absolute top-[50%] cursor-pointer translate-y-[-50%] left-[330px]" />) : (<FaEyeSlash onClick={()=>{setShopPassword(!showPassword)}} className="text-[20px] absolute top-[50%] cursor-pointer translate-y-[-50%] left-[330px]" />)
                }
                <p className="bg-red-400 max-w-[368px] rounded font-pops">{passeorderr}</p>
            </div>
            <a onClick={handlelogin} href="#" className="py-[26px] px-[122px] text-white text-[20.897px] not-italic font-semibold leading-[normal] rounded-[8.707px] bg-[#5f34f5] mb-[44px] mt-[55px] inline-block">Login to Continue</a>
            <a href="#" className="text-[#03014C] block text-[13.338px] text-left not-italic font-normal leading-[normal] font-sans ">Don’t have an account?<span className="text-[#EA6C00]  text-[13.338px] not-italic font-bold  leading-[normal] font-sans"> Sign Up</span></a>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img src={login} className="w-full h-[100vh] object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
