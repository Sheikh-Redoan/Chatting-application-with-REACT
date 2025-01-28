import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import user from "../../assets/user.JPG";
import userSide from "../../assets/usersideIcon.png";
import { FaUserPlus } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { CustomScroll } from "react-custom-scroll";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from "react-redux";

const User = ({ className, innerclassName }) => {
  const db = getDatabase();
  const mydata = useSelector((selector) => selector.userDetails.userInfo);  // Use mydata for the current user
  const [userList, setUserList] = useState([]);
  const [friendRequestList, setFriendRequestList] = useState([]);
  const [userDetails, setUserDetails] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch users data
  useEffect(() => {
    setLoading(true);

    const UserRef = ref(db, "users/");
    onValue(UserRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (mydata.uid !== item.key) {
          arr.push({ ...item.val(), userid: item.key });
        }
      });
      setUserList(arr);
      setLoading(false);
    });
  }, [db, mydata.uid]);

  // Fetch the current user's details
  useEffect(() => {
    const UsersRef = ref(db, "users/");
    onValue(UsersRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (mydata.uid === item.key) {
          setUserDetails(item.val());
        }
      });
    });
  }, [mydata.uid, db]);

  // Handle friend request
  const handleFriendRequest = (item) => {
    if (userDetails) {
      set(push(ref(db, "FriendRequest/")), {
        sendername: mydata.displayName,
        senderid: mydata.uid,
        recivername: item.username,
        reciverid: item.userid,
        senderimage: userDetails.profile_picture,
        sendercrown: userDetails.crown,
        sendercolor: userDetails.color,
      });
    }
  };

  // Fetch friend request list
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

  if (loading) {
    return <div>Loading...</div>;  // Show loading spinner or message
  }

  return (
    <div
      className={`${className} border rounded-[20px] border-solid border-[#BF7D0E] bg-[rgba(255, 255, 255, 0.2)] w-[380px] h-[380px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] overflow-hidden`}
    >
      <CustomScroll>
        <div className={`${innerclassName} w-[380px] h-[380px] p-[14px]`}>
          <div className="sticky top-0 z-[9]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-[50px] bg-gradient-to-r from-[#3C3C3C] to-[#3C3C3A] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-[#6C6C6C] text-[25px] not-italic font-normal leading-[normal] font-rus px-[20px] py-[5px] mb-[15px]"
            />
            <FaSearch className="text-[24px] fill-[#6C6C6C] shadow absolute top-[8px] right-[20px]" />
          </div>

          {/* User List */}
          {userList.map((item) => (
            <div className="flex justify-between items-center mb-[10px]" key={item.userid}>
              <div className="flex">
                <div className="relative">
                  <div className={`w-[80px] h-[80px] bg-[${item.color}] aspect-[1/1] [clip-path:polygon(100%_50%,75%_93.3%,25%_93.3%,0%_50%,25%_6.7%,75%_6.7%)]  border-[2px] border-white`}>
                    <img
                      src={item.profile_picture}
                      alt=""
                      className="aspect-[1/1] [clip-path:polygon(100%_50%,75%_93.3%,25%_93.3%,0%_50%,25%_6.7%,75%_6.7%)]"
                    />
                  </div>
                  <div className={`w-[20px] h-[20px] bg-[${item.color}] absolute top-[7px] right-[3px] rounded-full flex justify-center items-center`}>
                    <img src={item.crown} alt="" className="w-[16px]" />
                  </div>
                </div>
                <div className="ml-[11px]">
                  <h3 className="text-white text-base not-italic font-normal leading-[normal] font-pops drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)] mt-[5px]">
                    {item.username}
                  </h3>
                  <p className="text-[#E5DFDF] text-xs not-italic font-light leading-[normal] mb-[6px] font-pops">
                    {item.contact_email}
                  </p>
                </div>
              </div>

              {/* Friend Request Button */}
              <div>
                {friendRequestList.includes(mydata.uid + item.userid) ||
                friendRequestList.includes(item.userid + mydata.uid) ? (
                  <FaUserCheck className="text-[25px] text-[#6C6C6C] drop-shadow-2xl" />
                ) : (
                  <a onClick={() => handleFriendRequest(item)} href="#">
                    <FaUserPlus className="text-[25px] text-[#6C6C6C] drop-shadow-2xl" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </CustomScroll>
    </div>
  );
};

export default User;
