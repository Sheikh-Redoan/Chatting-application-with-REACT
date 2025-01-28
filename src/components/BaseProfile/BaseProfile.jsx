import React, { useEffect, useState } from "react";
import user from "../../assets/user.JPG";
import userSide2 from "../../assets/usersideIcon2.png";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuPencil } from "react-icons/lu";
import { useSelector } from "react-redux";
import { getDatabase, onValue, ref } from "firebase/database";
import { Link } from "react-router-dom";



const BaseProfile = () => {
  const db = getDatabase();

  const data = useSelector((state) => state.userDetails.userInfo);

  const [userDetails, setUserDetails] = useState("");

  useEffect(() => {
    const UserRef = ref(db, "users/");
    
    onValue(UserRef, (snapshot) => {
      snapshot.forEach((item) => {
        const user = item.key;
        if (data.uid == user) {
          setUserDetails(item.val());
        }
      });
    });
  }, [data.uid, db]); 

  console.log(userDetails);
  


  return (
    <div>
      {
        <div className="w-[300px] h-[380px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] rounded-[20px] bg-[#ffffff33] border border-solid border-[#BF7D0E] p-[2px] text-center">
        <div className="flex justify-center ">
          <div className="relative">
            <div className={`w-[140px] h-[140px] bg-[${userDetails.color}] aspect-[1/1] [clip-path:polygon(100%_50%,75%_93.3%,25%_93.3%,0%_50%,25%_6.7%,75%_6.7%)]  border-[2px] border-white  shadow-regal`}>
              <img
                src={userDetails.profile_picture}
                alt=""
                className="aspect-[1/1] [clip-path:polygon(100%_50%,75%_93.3%,25%_93.3%,0%_50%,25%_6.7%,75%_6.7%)]"
              />
            </div>

            <div className={`w-[40px] h-[40px] bg-[${userDetails.color}] absolute top-[7px] right-[3px] rounded-full flex justify-center items-center`}>
              {" "}
              <img src={userDetails.crown} alt="" className="w-[32px]" />
            </div>
          </div>
        </div>
        <div className="text-center mt-[10px]">
            <h3 className="text-white text-center text-[22px] not-italic font-normal leading-[normal] font-rus mb-[5px]">{userDetails.username}</h3>
            <p className="text-[#E5DFDF] text-xs not-italic font-light leading-[normal] font-pops">{userDetails.email}</p>
        </div>
        <div className="flex justify-center items-center gap-[15px] mt-[15px]">
            <a href={userDetails.facebook} className="w-[35px] h-[35px] bg-[#ff6600] flex justify-center items-center rounded shadow-10xl text-[#000] text-[25px]"><FaFacebook /></a>
            <a href={userDetails.youtube} className="w-[35px] h-[35px] bg-[#ff6600] flex justify-center items-center rounded shadow-10xl text-[#000] text-[25px]"><FaYoutube /></a>
            <a href={userDetails.instagram} className="w-[35px] h-[35px] bg-[#ff6600] flex justify-center items-center rounded shadow-10xl text-[#000] text-[25px]"><FaInstagram /></a>
            <a href={userDetails.twitter} className="w-[35px] h-[35px] bg-[#ff6600] flex justify-center items-center rounded shadow-10xl text-[#000] text-[25px]"><FaXTwitter /></a>
        </div>
        <div className="flex justify-center items-center gap-[50px] mt-[15px] mb-[10px]">
            <div className="text-center">
                <h2 className="text-white text-center text-[18px] not-italic font-normal leading-[normal] font-rus">209</h2>
                <h3 className=" text-white text-center text-[14px] not-italic font-bold leading-[normal] font-pops">Post</h3>
            </div>
            <div className="text-center">
                <h2 className="text-white text-center text-[18px] not-italic font-normal leading-[normal] font-rus">209K</h2>
                <h3 className=" text-white text-center text-[14px] not-italic font-bold leading-[normal] font-pops">Follower</h3>
            </div>
            <div className="text-center">
                <h2 className="text-white text-center text-[18px] not-italic font-normal leading-[normal] font-rus">19K</h2>
                <h3 className=" text-white text-center text-[14px] not-italic font-bold leading-[normal] font-pops">Likes</h3>
            </div>
        </div>
        <Link to='/profile'>
        <a href="#" className="text-white text[18px] not-italic font-normal leading-[normal] font-pops px-[45px] py-[10px]  bg-gradient-to-r from-[#F60] to-[#FFA300] inline-flex justify-center items-center rounded-[40px] ">Edit Profile <span className="w-[30px] h-[30px] rounded-full flex justify-center items-center ml-[10px] border border-white"><LuPencil/></span></a>
        </Link>
      </div>
      }
      
    </div>
  );
};

export default BaseProfile;
