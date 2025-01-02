import React, { useState } from 'react';
import profile from '../../assets/profile.png';
import { IoHomeOutline } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { CiBellOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";

const Sidebar = ({ className }) => {
  // State to track the active icon
  const [activeIcon, setActiveIcon] = useState('home');

  // Handle the icon click
  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <div className={`bg-[#5F35F5] rounded-[20px] flex justify-around items-center flex-col ${className}`}>
        <div className="w-[100px] h-[100px] rounded-[100px] mt-[38px] mx-auto">
            <img src={profile} alt="" />
        </div>
        
        {/* Home Icon */}
        <div
          className={`w-[131px] h-[66px] rounded-[20px_0px_0px_20px] self-end flex justify-center items-center justify-self-center ${activeIcon === 'home' ? 'bg-[#fff]' : ''}`}
          onClick={() => handleIconClick('home')}
        >
            <a href="#">
                <IoHomeOutline className={`w-[46.199px] h-[43.413px] ${activeIcon === 'home' ? 'text-[#5F35F5]' : 'text-[#BAD1FF]'}`} />
            </a>
        </div>

        {/* Message Icon */}
        <div
          className={`w-[131px] h-[66px] rounded-[20px_0px_0px_20px] self-end flex justify-center items-center justify-self-center ${activeIcon === 'message' ? 'bg-[#fff]' : ''}`}
          onClick={() => handleIconClick('message')}
        >
            <a href="#">
                <AiFillMessage className={`w-[46.199px] h-[43.413px] ${activeIcon === 'message' ? 'text-[#5F35F5]' : 'text-[#BAD1FF]'}`} />
            </a>
        </div>

        {/* Bell Icon */}
        <div
          className={`w-[131px] h-[66px] rounded-[20px_0px_0px_20px] self-end flex justify-center items-center justify-self-center ${activeIcon === 'bell' ? 'bg-[#fff]' : ''}`}
          onClick={() => handleIconClick('bell')}
        >
            <a href="#">
                <CiBellOn className={`w-[46.199px] h-[43.413px] ${activeIcon === 'bell' ? 'text-[#5F35F5]' : 'text-[#BAD1FF]'}`} />
            </a>
        </div>

        {/* Settings Icon */}
        <div
          className={`w-[131px] h-[66px] rounded-[20px_0px_0px_20px] self-end flex justify-center items-center justify-self-center ${activeIcon === 'settings' ? 'bg-[#fff]' : ''}`}
          onClick={() => handleIconClick('settings')}
        >
            <a href="#">
                <IoSettingsOutline className={`w-[46.199px] h-[43.413px] ${activeIcon === 'settings' ? 'text-[#5F35F5]' : 'text-[#BAD1FF]'}`} />
            </a>
        </div>

        {/* Exit Icon */}
        <div
          className={`w-[131px] h-[66px] rounded-[20px_0px_0px_20px] self-end flex justify-center items-center ${activeIcon === 'exit' ? 'bg-[#fff]' : ''}`}
          onClick={() => handleIconClick('exit')}
        >
            <a href="#">
                <ImExit className={`w-[46.199px] h-[43.413px] ${activeIcon === 'exit' ? 'text-[#5F35F5]' : 'text-[#BAD1FF]'}`} />
            </a>
        </div>
    </div>
  );
}

export default Sidebar;
