import React, { useEffect, useState } from "react";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  remove,
} from "firebase/database";
import { HiDotsVertical } from "react-icons/hi";
import { FaUnlockAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { CustomScroll } from "react-custom-scroll";
import user from "../../assets/user.JPG"; // placeholder image
import userSide from "../../assets/usersideIcon.png"; // placeholder icon

const Friends = () => {
  const db = getDatabase();
  const data = useSelector((state) => state.userDetails.userInfo); // Assuming 'userDetails' holds user data
  
  const [myFriend, setMyFriend] = useState([]);
  const [preLoad, setPreLoad] = useState(true);

  // Fetch friends from Firebase database
  useEffect(() => {
    const friendRef = ref(db, "Friends/");
    onValue(friendRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (
          data.uid == item.val().reciverid ||
          data.uid == item.val().senderid
        ) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setMyFriend(arr);
      setPreLoad(false);
    });
  }, [db, data]);

  // Block user and remove them from the friends list
  const blockUser = (item) => {
    if (data.uid == item.senderid) {
      set(push(ref(db, "block/")), {
        blockeduserid: item.reciverid,
        blockedusername: item.recivername,
        blockedbyid: item.senderid,
        blockedbyname: item.sendername,
      }).then(() => {
        remove(ref(db, "Friends/" + item.key));
      });
    } else if (data.uid == item.receiverid) {
      set(push(ref(db, "block/")), {
        blockeduserid: item.senderid,
        blockedusername: item.sendername,
        blockedbyid: item.reciverid,
        blockedbyname: item.recivername,
      }).then(() => {
        remove(ref(db, "Friends/" + item.key));
      });
    }
    
  };

  return (
    <div className="w-[300px] h-[380px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] rounded-[20px] bg-[#ffffff33] border border-solid border-[#BF7D0E] p-[2px] text-center overflow-hidden mt-[5px]">
      <CustomScroll>
        <div className="w-[300px] h-[380px] p-[14px]">
          <div className="">
            <div className="flex justify-between items-center">
              <h2 className="text-[#CCC] text-[25px] not-italic font-normal leading-[normal] font-rus shadow-(0px_4px_4px_rgba(0, 0, 0, 0.25))">
                Friends
              </h2>
              <HiDotsVertical className="text-[24px]" />
            </div>
          </div>

          {/* Display friends list */}
          {!preLoad && myFriend.length > 0 ? (
            myFriend.map((item) => (
              <div
                className="flex justify-between items-center mb-[10px]"
                key={item.key}
              >
                <div className="flex">
                  <div className="relative">
                    <div className="w-[60px] h-[60px] bg-[#FCEF02] aspect-[1/1] [clip-path:polygon(100%_50%,75%_93.3%,25%_93.3%,0%_50%,25%_6.7%,75%_6.7%)] border-[2px] border-white">
                      <img
                        src={item.reciverimage}
                        alt="Friend"
                        className="aspect-[1/1] [clip-path:polygon(100%_50%,75%_93.3%,25%_93.3%,0%_50%,25%_6.7%,75%_6.7%)]"
                      />
                    </div>
                    <div className="w-[15px] h-[15px] bg-[#fcef02cc] absolute top-[7px] right-[3px] rounded-full flex justify-center items-center">
                      <img src={item.recivercrown} alt="" className="w-[10px]" />
                    </div>
                  </div>
                  <div className="ml-[11px] text-left">
                    <h3 className="text-white text-base not-italic font-normal leading-[normal] font-pops drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)] mt-[5px]">
                      {data.uid == item.reciverid ? item.sendername : item.recivername}
                    </h3>
                    <p className="text-[#E5DFDF] text-xs not-italic font-light leading-[normal] mb-[6px] font-pops">
                      Title or user tagline...
                    </p>
                    <p className="text-[#E5DFDF] text-[8px] not-italic font-normal leading-[normal] font-pops flex justify-between">
                      <span>Dec 2024</span> <span>10:24 pm</span>
                    </p>
                  </div>
                </div>
                <div>
                  <FaUnlockAlt
                    className="text-[25px] cursor-pointer text-[#131111] drop-shadow-2xl"
                    onClick={() => blockUser(item)} // Block user
                  />
                </div>
              </div>
            ))
          ) : (
            <p>No friends found...</p>
          )}
        </div>
      </CustomScroll>
    </div>
  );
};

export default Friends;
