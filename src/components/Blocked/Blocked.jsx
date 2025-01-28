import React from 'react'
import { FaSearch } from "react-icons/fa";
import user from "../../assets/user.JPG";
import userSide from "../../assets/usersideIcon.png";
import { FaUserPlus } from "react-icons/fa";
import { CustomScroll } from "react-custom-scroll";
import { HiDotsVertical } from "react-icons/hi";
import { FaUnlockAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


const Blocked = () => {
  return (
    <div className="w-[300px] h-[380px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] rounded-[20px] bg-[#ffffff33] border border-solid border-[#BF7D0E] p-[2px] text-center overflow-hidden mt-[5px]">
          <CustomScroll>
            <div className=" w-[300px] h-[380px] p-[14px] ">
              <div className="">
                <div className="flex justify-between items-center">
                  <h2 className=" text-[#CCC] text-[25px] not-italic font-normal leading-[normal] font-rus shadow-(0px_4px_4px_rgba(0, 0, 0, 0.25))">
                    Blocked
                  </h2>
                  <HiDotsVertical className="text-[24px]" />
                </div>
              </div>
    
              {/* Friends...... */}
              <div className="flex justify-between items-center mb-[10px]">
                <div className="flex">
                  <div className="relative">
                    <div className="w-[60px] h-[60px] bg-[#FCEF02] aspect-[1/1] [clip-path:polygon(100%_50%,75%_93.3%,25%_93.3%,0%_50%,25%_6.7%,75%_6.7%)]  border-[2px] border-white">
                      <img
                        src={user}
                        alt=""
                        className="aspect-[1/1] [clip-path:polygon(100%_50%,75%_93.3%,25%_93.3%,0%_50%,25%_6.7%,75%_6.7%)]"
                      />
                    </div>
    
                    <div className="w-[15px] h-[15px] bg-[#fcef02cc] absolute top-[7px] right-[3px] rounded-full flex justify-center items-center">
                      {" "}
                      <img src={userSide} alt="" className="w-[10px]" />
                    </div>
                  </div>
                  <div className="ml-[11px] text-left">
                    <h3 className="text-white text-base not-italic font-normal leading-[normal] font-pops drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)] mt-[5px]">
                      Name:....
                    </h3>
                    <p className="text-[#E5DFDF] text-xs not-italic font-light leading-[normal] mb-[6px] font-pops">
                      Tittle or user tagline...
                    </p>
                    <p className="text-[#E5DFDF] text-[8px] not-italic font-normal leading-[normal] font-pops flex justify-between">
                      {" "}
                      <span>Dec 2024</span> <span>10:24 pm</span>{" "}
                    </p>
                  </div>
                </div>
                <div>
                  <FaLock className="text-[25px] text-[#131111] drop-shadow-2xl" />
                </div>
              </div>
            </div>
          </CustomScroll>
        </div>
  )
}

export default Blocked