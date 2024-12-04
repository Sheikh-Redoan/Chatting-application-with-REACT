import React, { useState } from "react";
import registration from "../../assets/registration.png";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
const Registrarrion = () => {
  const [email, setEmail] = useState("");
  const [emailerr, setEmainerr] = useState("");
  const [fullname, setFullname] = useState("");
  const [fullnameerr, setfullnameerr] = useState("");
  const [password, setpassword] = useState("");
  const [passworderr, setpassworderr] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const handleEmail = (e)=>{
   setEmail(e.target.value);
   setEmainerr("");
  }


  const handelfullname = (e)=>{
    setFullname(e.target.value);
    setfullnameerr("");
    
  }
  const handlepassword = (e)=>{
    setpassword(e.target.value);
    setpassworderr("")
  }






  const handelSignUP= ()=>{
    if(!email){
      setEmainerr("give me valid mail")
    }else{
      if (!/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)) {
        setEmainerr("valid mail pleace")
      }
    }

    if(!fullname){
      setfullnameerr("give full name")
    }
    
    if(!password){
      setpassworderr("pleace give a password")
    }
    else{
      if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)) {
        setpassworderr("give a valid password");
      }
    }
  }

 
  



  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-1/2 flex flex-col justify-center items-end">
          <div className="mr-[69px]">
            <h2 className=" text-[#11175D] text-[34.401px] not-italic font-bold leading-[normal] font-nuni">
              Get started with easily register
            </h2>
            <p className="text-[#11175D] text-black text-[20.641px] not-italic font-normal leading-[normal] font-nuni mb-[61px]">
              Free register and you can enjoy it
            </p>
            <div className="relative mb-[34px]">
              <label
                htmlFor="email"
                className="text-[#11175D] text-[13.76px] not-italic font-semibold leading-[normal] tracking-[1.032px] font-nuni py-[13px] px-[14px] bg-white absolute top-[-50%] left-[34px] translate-y-[50%] z-[2]"
              >
                Email
              </label>
              <input onChange={handleEmail}
              value={email}
                className="opacity-30 rounded-[8.6px] border-[1.72px] border-solid border-[#11175D] w-[368px] h-[81px] text-[#11175D] text-[20px] not-italic font-semibold leading-[normal] font-nuni pl-[20px]"
                type="Email"
                id="email"
              />
              <p className="bg-red-400 max-w-[368px] rounded font-pops">{emailerr}</p>
            </div>
            <div className="relative mb-[34px]">
              <label
                htmlFor="email"
                className="text-[#11175D] text-[13.76px] not-italic font-semibold leading-[normal] tracking-[1.032px] font-nuni py-[13px] px-[14px] bg-white absolute top-[-50%] left-[34px] translate-y-[50%] z-[2]"
              >
                Ful name
              </label>
              <input onChange={handelfullname}
                className="opacity-30 rounded-[8.6px] border-[1.72px] border-solid border-[#11175D] w-[368px] h-[81px] pl-[20px]"
                type="Email"
                id="text"
              />
              <p className="bg-red-400 max-w-[368px] rounded font-pops">{fullnameerr}</p>
            </div>
            <div className="relative mb-[51px]">
              <label
                htmlFor="email"
                className="text-[#11175D] text-[13.76px] not-italic font-semibold leading-[normal] tracking-[1.032px] font-nuni py-[13px] px-[14px] bg-white absolute top-[-50%] left-[34px] translate-y-[50%] z-[2]"
              >
                {" "}
                Password
              </label>
              <input 
              onChange={handlepassword}
                className="opacity-30 rounded-[8.6px] border-[1.72px] border-solid border-[#11175D] w-[368px] h-[81px] pl-[20px]"
                type={`${showPassword ? "text" : "password"}`}
                id="email"
              />
              {
                showPassword ? (<FaEye onClick={()=>{setShowPassword(!showPassword)}} className="text-[20px] absolute top-[50%] cursor-pointer translate-y-[-50%] left-[330px]" />) : (<FaEyeSlash onClick={()=>{setShowPassword(!showPassword)}} className="text-[20px] absolute top-[50%] cursor-pointer translate-y-[-50%] left-[330px]" />)
              }

              <p className="bg-red-400 max-w-[368px] rounded font-pops">{passworderr}</p>
            </div>
            <div className="inline-block ">
              <a onClick={handelSignUP}
                href="#"
                className="py-[19px] px-[138px] text-white text-[20.641px] not-italic font-semibold leading-[normal] bg-[#5F35F5] mb-[35px] inline-block rounded-[86.003px]"
              >
                Sig n up
              </a>
              <a
                href="#"
                className="text-[#03014C] block text-[13.338px] text-center not-italic font-normal leading-[normal] font-sans "
              >
                Already have an account ?
                <span className="text-[#EA6C00] text-[13.338px] not-italic font-bold leading-[normal] font-sans">
                  {" "}
                  Sign In
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={registration}
            className="w-full h-[100vh] object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Registrarrion;
