import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { IoIosHome } from "react-icons/io";
import { LuMessageCircleMore } from "react-icons/lu";
import { FaUserFriends } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import { VscSignIn, VscSignOut } from "react-icons/vsc"; // Added VscSignOut for logout
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth"; // Firebase auth functions
// import { app } from "../../firebase"; // Import your Firebase app instance

const Navbar = ({ className }) => {
  const location = useLocation();
  const navigate = useNavigate(); // Hook for navigation
  const data = useSelector((state) => state.userDetails.userInfo);
  const auth = getAuth(); // Initialize Firebase auth

  // Determine the active icon based on the current path
  const getActiveIcon = (path) => location.pathname.includes(path);

  // Handle logout functionality
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful
        console.log("User signed out");
        navigate("/login"); // Redirect to the sign-in page after logout
      })
      .catch((error) => {
        // An error occurred
        console.error("Error signing out:", error);
      });
  };

  return (
    <>
      <div className={`${className} py-[20px] h-screen max-sm:hidden`}>
        <div className="rounded-[0_40px_40px_0] bg-white/10 backdrop-blur-[1.15px] w-[120px] h-[100%] p-[25px] flex flex-col justify-between items-center">
          <div>
            <img src={logo} className="w-[100px]" alt="" />
            <h3 className=" text-white text-[15px] not-italic font-normal leading-[normal] font-rus">
              GamerGO
            </h3>
          </div>
          <div className="flex flex-col gap-[15px]">
            {/* Home Icon */}
            <Link to="/home">
              <div
                className={`w-[70px] h-[70px] rounded-[20px] flex cursor-pointer justify-center items-center shadow ${
                  getActiveIcon("home") ? "bg-[#FF6600]" : "bg-[#3C3C3A]"
                }`}
              >
                <IoIosHome className="text-[#fff] text-[40px]" />
              </div>
            </Link>

            {/* Message Icon */}
            <Link to="/message">
              <div
                className={`w-[70px] h-[70px] rounded-[20px] flex cursor-pointer justify-center items-center shadow ${
                  getActiveIcon("message") ? "bg-[#FF6600]" : "bg-[#3C3C3A]"
                }`}
              >
                <LuMessageCircleMore className="text-[#fff] text-[40px]" />
              </div>
            </Link>

            {/* Friends Icon */}
            <Link to="/userfriend">
              <div
                className={`w-[70px] h-[70px] rounded-[20px] flex cursor-pointer justify-center items-center shadow ${
                  getActiveIcon("userfriend") ? "bg-[#FF6600]" : "bg-[#3C3C3A]"
                }`}
              >
                <FaUserFriends className="text-[#fff] text-[40px]" />
              </div>
            </Link>

            {/* Profile Icon */}
            <Link to="/profile">
              <div
                className={`w-[70px] h-[70px] rounded-[20px] flex cursor-pointer justify-center items-center shadow ${
                  getActiveIcon("profile") ? "bg-[#FF6600]" : "bg-[#3C3C3A]"
                }`}
              >
                <BsGearFill className="text-[#fff] text-[40px]" />
              </div>
            </Link>
          </div>

          {/* Logout Icon */}
          <div
            onClick={handleLogout} // Add logout functionality here
            className={`w-[70px] h-[70px] rounded-[20px] flex cursor-pointer justify-center items-center shadow bg-[#3C3C3A]`}
          >
            <VscSignOut className="text-[#fff] text-[40px]" />
          </div>
        </div>
      </div>
      <div
        className={`${className} fixed bottom-0 left-0 right-0 z-50 sm:hidden`}
      >
        <div className="bg-[#070606] backdrop-blur-[15px] shadow-[0px_-4px_15px_rgba(0,0,0,0.1)] rounded-t-3xl mx-4 p-3">
          <div className="flex justify-around items-center">
            {/* Home */}
            <Link
              to="/home"
              className="flex flex-col items-center group relative"
            >
              <div
                className={`p-3 rounded-xl transition-all ${
                  getActiveIcon("home")
                    ? "bg-[#FF6600] shadow-lg"
                    : "bg-transparent hover:bg-[#3C3C3A]/30"
                }`}
              >
                <IoIosHome
                  className={`text-2xl ${
                    getActiveIcon("home") ? "text-white" : "text-[#6C6C6C]"
                  }`}
                />
              </div>
              <span
                className={`text-[10px] font-medium mt-1 ${
                  getActiveIcon("home") ? "text-[#FF6600]" : "text-[#6C6C6C]"
                }`}
              >
                Home
              </span>
              {getActiveIcon("home") && (
                <div className="absolute -top-2 w-6 h-1 bg-[#FF6600] rounded-full"></div>
              )}
            </Link>

            {/* Messages */}
            <Link
              to="/message"
              className="flex flex-col items-center group relative"
            >
              <div
                className={`p-3 rounded-xl transition-all ${
                  getActiveIcon("message")
                    ? "bg-[#FF6600] shadow-lg"
                    : "bg-transparent hover:bg-[#3C3C3A]/30"
                }`}
              >
                <LuMessageCircleMore
                  className={`text-2xl ${
                    getActiveIcon("message") ? "text-white" : "text-[#6C6C6C]"
                  }`}
                />
              </div>
              <span
                className={`text-[10px] font-medium mt-1 ${
                  getActiveIcon("message") ? "text-[#FF6600]" : "text-[#6C6C6C]"
                }`}
              >
                Chat
              </span>
              {getActiveIcon("message") && (
                <div className="absolute -top-2 w-6 h-1 bg-[#FF6600] rounded-full"></div>
              )}
            </Link>

            {/* Friends */}
            <Link
              to="/userfriend"
              className="flex flex-col items-center group relative"
            >
              <div
                className={`p-3 rounded-xl transition-all ${
                  getActiveIcon("userfriend")
                    ? "bg-[#FF6600] shadow-lg"
                    : "bg-transparent hover:bg-[#3C6C6C]/30"
                }`}
              >
                <FaUserFriends
                  className={`text-2xl ${
                    getActiveIcon("userfriend")
                      ? "text-white"
                      : "text-[#6C6C6C]"
                  }`}
                />
              </div>
              <span
                className={`text-[10px] font-medium mt-1 ${
                  getActiveIcon("userfriend")
                    ? "text-[#FF6600]"
                    : "text-[#6C6C6C]"
                }`}
              >
                Friends
              </span>
              {getActiveIcon("userfriend") && (
                <div className="absolute -top-2 w-6 h-1 bg-[#FF6600] rounded-full"></div>
              )}
            </Link>

            {/* Profile */}
            <Link
              to="/profile"
              className="flex flex-col items-center group relative"
            >
              <div
                className={`p-3 rounded-xl transition-all ${
                  getActiveIcon("profile")
                    ? "bg-[#FF6600] shadow-lg"
                    : "bg-transparent hover:bg-[#3C6C6C]/30"
                }`}
              >
                <BsGearFill
                  className={`text-2xl ${
                    getActiveIcon("profile") ? "text-white" : "text-[#6C6C6C]"
                  }`}
                />
              </div>
              <span
                className={`text-[10px] font-medium mt-1 ${
                  getActiveIcon("profile") ? "text-[#FF6600]" : "text-[#6C6C6C]"
                }`}
              >
                Profile
              </span>
              {getActiveIcon("profile") && (
                <div className="absolute -top-2 w-6 h-1 bg-[#FF6600] rounded-full"></div>
              )}
            </Link>

            {/* Logout */}
            <div
              onClick={handleLogout}
              className="flex flex-col items-center group relative"
            >
              <div className="p-3 rounded-xl transition-all hover:bg-[#3C6C6C]/30">
                <VscSignOut className="text-2xl text-[#6C6C6C]" />
              </div>
              <span className="text-[10px] font-medium mt-1 text-[#6C6C6C]">
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
