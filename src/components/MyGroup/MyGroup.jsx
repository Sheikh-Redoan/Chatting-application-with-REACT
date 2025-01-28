import React from 'react'
import { FaSearch } from "react-icons/fa";
import groupProfile from "../../assets/group-profile.jpg";
import { FaUserPlus } from "react-icons/fa";
import { CustomScroll } from "react-custom-scroll";
import { HiDotsVertical } from "react-icons/hi";
import { BsChatDotsFill } from "react-icons/bs";



const MyGroup = () => {
  return (
    <div className="border  rounded-[20px] border-solid border-[#BF7D0E] bg-[rgba(255, 255, 255, 0.2)] w-[380px] h-[380px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] overflow-hidden mt-[10px]">
          <CustomScroll>
          <div className=" w-[380px] h-[380px] p-[14px] " >
          <div className="sticky top-0 z-[9]">
            <div className='flex justify-between items-center bg-[#1A1A1A]'>
            <h2 className=' text-[#CCC] text-3xl not-italic font-normal leading-[normal] font-rus shadow-(0px_4px_4px_rgba(0, 0, 0, 0.25))'>My Groups</h2>
            <HiDotsVertical className='text-[24px]' />

            </div>
          </div>
          
          {/* Group...... */}
          <div className='mt-[30px]'>
          <div className="flex justify-between items-center mb-[10px]">
            <div className="flex">
                <div className="w-[50px] h-[50px] bg-[#00E7FE] rounded-full border-[2px] border-[#00E7FE] flex justify-center items-center">
                  <img
                    src={groupProfile}
                    alt=""
                    className="rounded-full"
                  />
                </div>
              <div className="ml-[11px] flex flex-col justify-center items-start">
                <h3 className="text-white text-base not-italic font-normal leading-[normal] font-pops drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)] mt-[5px]">
                Group Name....
                </h3>
                <p className="text-[#E5DFDF] text-xs not-italic font-light leading-[normal] mb-[6px] font-pops">
                  Tittle or user tagline...
                </p>
              </div>
            </div>
            <div>
            <BsChatDotsFill
            className="text-[25px] text-[#6C6C6C] drop-shadow-2xl" />
            </div>
          </div>
          </div>
        </div>
        </CustomScroll>
        </div>
  )
}

export default MyGroup