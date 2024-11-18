import React from "react";
import registration from "../../assets/registration.png";
const Registrarrion = () => {
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
                <label htmlFor="email" className="text-[#11175D] text-[13.76px] not-italic font-semibold leading-[normal] tracking-[1.032px] font-nuni py-[13px] px-[14px] bg-white absolute top-[-50%] left-[34px] translate-y-[50%] z-[2]">Email</label>
                <input className="opacity-30 rounded-[8.6px] border-[1.72px] border-solid border-[#11175D] w-[368px] h-[81px] text-[#11175D] text-[20px] not-italic font-semibold leading-[normal] font-nuni" type="Email" id="email" />
            </div>
            <div className="relative mb-[34px]">
                <label htmlFor="email" className="text-[#11175D] text-[13.76px] not-italic font-semibold leading-[normal] tracking-[1.032px] font-nuni py-[13px] px-[14px] bg-white absolute top-[-50%] left-[34px] translate-y-[50%] z-[2]">Ful name</label>
                <input className="opacity-30 rounded-[8.6px] border-[1.72px] border-solid border-[#11175D] w-[368px] h-[81px]" type="Email" id="email" />
            </div>
            <div className="relative mb-[51px]">
                <label htmlFor="email" className="text-[#11175D] text-[13.76px] not-italic font-semibold leading-[normal] tracking-[1.032px] font-nuni py-[13px] px-[14px] bg-white absolute top-[-50%] left-[34px] translate-y-[50%] z-[2]"> Password</label>
                <input className="opacity-30 rounded-[8.6px] border-[1.72px] border-solid border-[#11175D] w-[368px] h-[81px]" type="Email" id="email" />
            </div>
            <div className="inline-block " >
            <a href="#" className="py-[19px] px-[138px] text-white text-[20.641px] not-italic font-semibold leading-[normal] bg-[#5F35F5] mb-[35px] inline-block rounded-[86.003px]">Sig n up</a>
            <a href="#" className="text-[#03014C] block text-[13.338px] text-center not-italic font-normal leading-[normal] font-sans ">Already  have an account ?<span className="text-[#EA6C00] text-[13.338px] not-italic font-bold leading-[normal] font-sans"> Sign In</span></a>
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
