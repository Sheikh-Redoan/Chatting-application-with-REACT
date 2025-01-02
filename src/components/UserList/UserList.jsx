import React, { useState } from "react";
import profile from "../../assets/profile.png";
import { HiDotsVertical } from "react-icons/hi";
import { FaUserPlus } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";

const UserList = ({ className }) => {
  const [friendRequest, setFriendRequest] = useState(true);
  const handelFriendRequest = () => {
    setFriendRequest();
  };
  return (
    <div className={` ${className}`}>
      <div className="w-full h-[451px] rounded-[20px] bg-[#fff] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[20px]">
        <div className="flex justify-between items-center mb-[17px]">
          <h2 className="text-black text-xl not-italic font-semibold leading-[normal] font-pops">
            User List
          </h2>
          <HiDotsVertical className="text-[20px]" />
        </div>

        {/* UserList Profile view  */}
        <div className="w-full flex justify-between items-center pb-[13px] border-b-[1px] border-solid border-[rgba[0,0,0,0.80]]">
          <img
            src={profile}
            alt=""
            className="w-[70px] h-[70px] rounded-full"
          />
          {/* name and id */}
          <div className="mr-auto ml-[14px]">
            <h2 className="text-black text-lg not-italic font-semibold leading-[normal] font-pops">
              Friends Reunion
            </h2>
            <p className="text-[rgba(77,77,77,0.75)] text-sm not-italic font-medium leading-[normal] font-pops">
              Hi Guys, Wassup!
            </p>
          </div>
          {/* name and id */}
          <a
            onClick={handelFriendRequest}
            href="#"
            className="w-[30px] h-[30px] rounded-[5px] bg-[#5f35f5] text-white text-xl not-italic font-semibold leading-[normal] font-pops text-center flex justify-center items-center"
          >
            {friendRequest ? <FaUserPlus /> : <FaUserCheck />}
          </a>
        </div>
        {/* UserList Profile view  */}
      </div>
    </div>
  );
};

export default UserList;
