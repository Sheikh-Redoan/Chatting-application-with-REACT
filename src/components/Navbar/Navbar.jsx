import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { IoIosHome } from "react-icons/io";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaUserFriends } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import { VscSignIn } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ className }) => {
  // Get current location
  const location = useLocation();

  // Determine the active icon based on the current path
  const getActiveIcon = (path) => location.pathname.includes(path);

  const data = useSelector((state) => state.userDetails.userInfo);

  return (
    <div className={`${className} py-[20px] h-screen`}>
      <div className="rounded-tl-[0px] rounded-tr-[50px] rounded-br-[50px] rounded-bl-[0px] bg-white/10 backdrop-blur-[1.15px] w-[120px] h-[100%] p-[25px] flex flex-col justify-between items-center">
        <div>
          <img src={logo} className="w-[100px]" alt="" />
          <h3 className=" text-white text-[15px] not-italic font-normal leading-[normal] font-rus">
            GamerGO
          </h3>
        </div>
        <div className="flex flex-col gap-[15px]">
          
          {/* Home Icon */}
          <Link to='/home'>
            <div
              className={`w-[70px] h-[70px] rounded-[20px] flex cursor-pointer justify-center items-center shadow ${
                getActiveIcon('home') ? "bg-[#FF6600]" : "bg-[#3C3C3A]"
              }`}
            >
              <IoIosHome className="text-[#fff] text-[40px]" />
            </div>
          </Link>

          {/* Message Icon */}
          <Link to='/message'>
            <div
              className={`w-[70px] h-[70px] rounded-[20px] flex cursor-pointer justify-center items-center shadow ${
                getActiveIcon('message') ? "bg-[#FF6600]" : "bg-[#3C3C3A]"
              }`}
            >
              <LuMessageCircleMore className="text-[#fff] text-[40px]" />
            </div>
          </Link>

          {/* Friends Icon */}
          <Link to='/userfriend'>
            <div
              className={`w-[70px] h-[70px] rounded-[20px] flex cursor-pointer justify-center items-center shadow ${
                getActiveIcon('userfriend') ? "bg-[#FF6600]" : "bg-[#3C3C3A]"
              }`}
            >
              <FaUserFriends className="text-[#fff] text-[40px]" />
            </div>
          </Link>

          {/* Profile Icon */}
          <Link to='/profile'>
            <div
              className={`w-[70px] h-[70px] rounded-[20px] flex cursor-pointer justify-center items-center shadow ${
                getActiveIcon('profile') ? "bg-[#FF6600]" : "bg-[#3C3C3A]"
              }`}
            >
              <BsGearFill className="text-[#fff] text-[40px]" />
            </div>
          </Link>

        </div>

        {/* SignIn Icon */}
        <Link to='/signin'>
          <div
            className={`w-[70px] h-[70px] rounded-[20px] flex cursor-pointer justify-center items-center shadow ${
              getActiveIcon('signin') ? "bg-[#FF6600]" : "bg-[#3C3C3A]"
            }`}
          >
            <VscSignIn className="text-[#fff] text-[40px]" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
