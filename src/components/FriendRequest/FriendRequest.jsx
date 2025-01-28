import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, set, push, remove } from "firebase/database"; // Import `remove`
import { FaSearch } from "react-icons/fa";
import user from "../../assets/user.JPG";
import userSide from "../../assets/usersideIcon.png";
import { FaUserPlus } from "react-icons/fa";
import { CustomScroll } from "react-custom-scroll";
import { HiDotsVertical } from "react-icons/hi";
import { FaUnlockAlt } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { useSelector } from "react-redux";

const FriendRequest = () => {
  const db = getDatabase();
  const [friendRequestList, setFriendRequestList] = useState([]);
  const data = useSelector((selector) => selector.userDetails.userInfo);

  useEffect(() => {
    const friendRequestRef = ref(db, 'FriendRequest/');
    onValue(friendRequestRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        if (item.val().reciverid === data.uid) {
          arr.push({ ...item.val(), id: item.key });
        }
      });
      setFriendRequestList(arr);
    });
  }, [data, db]);

  const acceptFriend = (item) => {
    // Add the friend to the 'Friends' list
    const friendsRef = ref(db, 'Friends/');
    push(friendsRef, {
      sendername: item.sendername,
      senderid: item.senderid,
      recivername: item.recivername,
      reciverid: item.reciverid,
      senderimage: item.senderimage,
      sendercrown: item.sendercrown,
      sendercolor: item.sendercolor,
      // Add other fields if necessary
    }).then(() => {
      // Remove the accepted request from 'FriendRequest' list
      remove(ref(db, 'FriendRequest/' + item.id));
    }).catch((error) => {
      console.error("Error accepting friend request:", error);
    });
  };

  const rejectFriend = (item) => {
    // Remove the rejected friend request from 'FriendRequest' list
    remove(ref(db, 'FriendRequest/' + item.id)).catch((error) => {
      console.error("Error rejecting friend request:", error);
    });
  };

  return (
    <div className="w-[380px] h-[375px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] rounded-[20px] bg-[#ffffff33] border border-solid border-[#BF7D0E] p-[2px] text-center overflow-hidden mt-[5px]">
      <CustomScroll>
        <div className="w-[380px] h-[375px] p-[14px]">
          <div className="flex justify-between items-center">
            <h2 className="text-[#CCC] text-[25px] not-italic font-normal leading-[normal] font-rus shadow-(0px_4px_4px_rgba(0, 0, 0, 0.25))">
              Friend Request
            </h2>
          </div>

          {/* Friend Requests */}
          {friendRequestList.map((item) => (
            <div className="flex justify-between items-center mb-[10px]" key={item.id}>
              <div className="flex">
                <div className="relative">
                  <div className="w-[60px] h-[60px] bg-[#FCEF02] aspect-[1/1] [clip-path:polygon(100%_50%,75%_93.3%,25%_93.3%,0%_50%,25%_6.7%,75%_6.7%)] border-[2px] border-white">
                    <img
                      src={item.senderimage}
                      alt=""
                      className="aspect-[1/1] [clip-path:polygon(100%_50%,75%_93.3%,25%_93.3%,0%_50%,25%_6.7%,75%_6.7%)]"
                    />
                  </div>

                  <div className="w-[15px] h-[15px] bg-[#fcef02cc] absolute top-[7px] right-[3px] rounded-full flex justify-center items-center">
                    <img src={item.sendercrown} alt="" className="w-[10px]" />
                  </div>
                </div>
                <div className="ml-[11px] text-left">
                  <h3 className="text-white text-base not-italic font-normal leading-[normal] font-pops drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)] mt-[5px]">
                    {item.sendername}
                  </h3>
                  <p className="text-[#E5DFDF] text-xs not-italic font-light leading-[normal] mb-[6px] font-pops">
                    Tittle or user tagline...
                  </p>
                  <p className="text-[#E5DFDF] text-[8px] not-italic font-normal leading-[normal] font-pops flex justify-between">
                    <span>Dec 2024</span> <span>10:24 pm</span>
                  </p>
                </div>
              </div>

              <div>
                <div className="flex justify-center items-center gap-[20px]">
                  <IoMdCheckmarkCircle
                    onClick={() => acceptFriend(item)}
                    className="text-[30px] text-[#32E032] drop-shadow-2xl cursor-pointer"
                  />
                  <FaCircleXmark
                    onClick={() => rejectFriend(item)}
                    className="text-[25px] text-[#E15454] drop-shadow-2xl cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CustomScroll>
    </div>
  );
};

export default FriendRequest;
