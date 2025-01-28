import React from "react";
import { CustomScroll } from "react-custom-scroll";
import user from "../../assets/user.JPG";
import userSide from "../../assets/usersideIcon.png";
import { FaUserPlus } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { FaCamera } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { TbTriangleFilled } from "react-icons/tb";




const MessageBox = () => {
  return (
    <div className="w-[594px] h-[773px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] rounded-[20px] bg-[#ffffff33] overflow-hidden mx-[5px] px-[14px] pt-[30px]">
      <div>
        <div className="flex justify-between items-center pb-[10px] border-b-[2px] border-solid border-[#fff]">
          <div className="flex">
            <div className="relative">
              <div className="w-[70px] h-[70px] bg-[#FCEF02] aspect-[1/1] [clip-path:polygon(100%_50%,75%_93.3%,25%_93.3%,0%_50%,25%_6.7%,75%_6.7%)]  border-[2px] border-white">
                <img
                  src={user}
                  alt=""
                  className="aspect-[1/1] [clip-path:polygon(100%_50%,75%_93.3%,25%_93.3%,0%_50%,25%_6.7%,75%_6.7%)]"
                />
              </div>

              <div className="w-[15px] h-[15px] bg-[#fcef02cc] absolute top-[7px] right-[3px] rounded-full flex justify-center items-center">
                {" "}
                <img src={userSide} alt="" className="w-[16px]" />
              </div>
            </div>
            <div className="ml-[20px]">
              <h3 className="text-white text-base not-italic font-normal leading-[normal] font-pops drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)] mt-[15px]">
                Name:....
              </h3>
              <p className="text-[#E5DFDF] text-xs not-italic font-light leading-[normal] mb-[6px] font-pops">
                Tittle or user tagline...
              </p>
            </div>
          </div>
          <div>
            <HiDotsVertical className="text-[25px] text-[#ffffff] drop-shadow-2xl" />
          </div>
        </div>
      </div>
      <CustomScroll>
        <div className="w-[594px] h-[600px] ">
            {/* sender Message */}

            <div className="bg-[#3C3C3B] inline-block my-[10px] rounded-[10px] mr-[35px] ml-[45%] max-w-[300px] py-[6px] px-[10px] relative">
            <p className="text-[#E5DFDF] text-xs not-italic font-light leading-[normal] font-pops">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, eveniet?</p>
            <TbTriangleFilled className="text-[#3C3C3B] absolute bottom-[-2px] right-[-5px]" />
            </div>


            {/* Reciver Message */}

            <div className="bg-[#E5DFDF] my-[10px] rounded-[10px] ml-[20px] max-w-[300px] inline-block py-[6px] px-[10px] relative">
            <p className="text-[#3C3C3B] text-xs not-italic font-light leading-[normal] inline-block max-w-[300px] font-pops">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, eveniet?</p>
            <TbTriangleFilled className="text-[#E5DFDF] absolute bottom-[-2px] left-[-5px]" />
            </div>
        </div>
      </CustomScroll>

      <div className="w-full relative mb-[15px]">
      <FaCamera className="text-[#2BEC65] text-[20px] absolute top-[50%] translate-y-[-50%] left-[20px]"/>
        <input type="text" className="w-full rounded-[50px] bg-gradient-to-r from-[#3C3C3C] to-[#3C3C3A] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-[#6C6C6C] text-base not-italic font-normal leading-[18px] font-rus px-[50px] py-[10px] " />
        <FaPaperPlane className="text-[#F60] text-[20px] absolute top-[50%] translate-y-[-50%] right-[20px] " />
      </div>
    </div>
  );
};

export default MessageBox;
