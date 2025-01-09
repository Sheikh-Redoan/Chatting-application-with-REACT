import React, { useEffect, useState } from "react";
import profile from "../../assets/profile.png";
import { HiDotsVertical } from "react-icons/hi";
import { FaUserPlus } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from "react-redux";
import { InfinitySpin } from "react-loader-spinner";

const UserList = ({ className }) => {
  const db = getDatabase();
  const mydata = useSelector((selector) => selector.userDetails.userInfo);
  const [userlist, setUserist] = useState([]);
  const [removeFriendRequest, setRemoveFriendRequest] = useState([]);
  const [loading, setLoading] = useState(false);
  const [friendRequestList, setFriendRequestList] = useState([]);

  useEffect(() => {
    setLoading(true);

    const UserRef = ref(db, "users/");
    onValue(UserRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (mydata.uid != item.key) {
          arr.push({ ...item.val(), userid: item.key });
        }
      });
      setUserist(arr);
      setLoading(false);
    });
  }, []);

  const handleFriendRequest = (item) => {
    console.log("ok", item);
    set(push(ref(db, "FriendRequest/")), {
      sendername: mydata.displayName,
      senderid: mydata.uid,
      recivername: item.username,
      reciverid: item.userid,
    });
  };



  useEffect(() => {
    const FriendRequestListRef = ref(db, "FriendRequest/");
    onValue(FriendRequestListRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val().senderid + item.val().reciverid);
        
      });
      setFriendRequestList(arr);
    });
  }, []);

  


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
        {loading ? (
          <div className="w-full h-full flex justify-center items-start">
            <InfinitySpin
            visible={true}
            width="200"
            color="#5f35f5"
            ariaLabel="infinity-spin-loading"
          />
          </div>
        ) : (
          userlist.map((item) => (
            <div className="w-full flex justify-between items-center pb-[13px] border-b-[1px] border-solid border-[rgba[0,0,0,0.80]]">
              <img
                src={profile}
                alt=""
                className="w-[70px] h-[70px] rounded-full"
              />
              {/* name and id */}
              <div className="mr-auto ml-[14px]">
                <h2 className="text-black text-lg not-italic font-semibold leading-[normal] font-pops">
                  {item.username}
                </h2>
                <p className="text-[rgba(77,77,77,0.75)] text-sm not-italic font-medium leading-[normal] font-pops">
                  {item.email}
                </p>
              </div>
              {/* name and id */}
              {
                friendRequestList.includes(mydata.uid + item.userid) ||
                friendRequestList.includes(item.userid + mydata.uid) ? 
                <a
                href="#"
                className="w-[30px] h-[30px] rounded-[5px] bg-[#5f35f5] text-white text-xl not-italic font-semibold leading-[normal] font-pops text-center flex justify-center items-center"
              >
                <FaUserCheck />
              </a> : <a
              onClick={() => handleFriendRequest(item)} 
                href="#"
                className="w-[30px] h-[30px] rounded-[5px] bg-[#5f35f5] text-white text-xl not-italic font-semibold leading-[normal] font-pops text-center flex justify-center items-center"
              >
                <FaUserPlus />
              </a>
              }
              
            </div>
          ))
        )}
        {/* UserList Profile view  */}
      </div>
    </div>
  );
};

export default UserList;
