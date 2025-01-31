import React, { useEffect, useState, useRef } from "react";
import Container from "../../components/Container/Container";
import Navbar from "../../components/Navbar/Navbar";
import User from "../../components/User/User";
import MyGroup from "../../components/MyGroup/MyGroup";
import News from "../../components/News/News";
import BaseProfile from "../../components/BaseProfile/BaseProfile";
import Friends from "../../components/Friends/Friends";
import Blocked from "../../components/Blocked/Blocked";
import { CustomScroll } from "react-custom-scroll";
import user from "../../assets/user.JPG";
import userSide from "../../assets/usersideIcon.png";
import { FaUserPlus } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { FaCamera } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { TbTriangleFilled } from "react-icons/tb";
import { AiFillMessage } from "react-icons/ai";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  remove,
} from "firebase/database";
import { FaUnlockAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { activechatinfo } from "../../Slices/ActiveChatSlice";
import { FcGallery } from "react-icons/fc";
import { FaRegFaceMeh } from "react-icons/fa6";
import EmojiPicker from "emoji-picker-react";

const Messages = () => {
  const db = getDatabase();
  const data = useSelector((state) => state.userDetails.userInfo); // Assuming 'userDetails' holds user data
  const [myFriend, setMyFriend] = useState([]);
  const [preLoad, setPreLoad] = useState(true);
  const dispatch = useDispatch();
  const activeDetails = useSelector((state) => state.activeChat.value);
  const [sendMessage, setSendMessage] = useState("");
  const [emoji, setEmoji] = useState(false);
  const [recivedMsg, setRecivedMsg] = useState([]);
  const chatContainerRef = useRef(null); // Ref for the chat container

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

  const handelMessage = (item) => {
    if (data.uid === item.senderid) {
      dispatch(
        activechatinfo({
          id: item.reciverid,
          name: item.recivername,
        })
      );
    } else {
      dispatch(
        activechatinfo({
          id: item.senderid,
          name: item.sendername,
        })
      );
    }
  };

  const handleSend = () => {
    if (activeDetails.id) {
      set(push(ref(db, "message/")), {
        msg: sendMessage,
        whosenderid: data.uid,
        whosendername: data.displayName,
        whoreciverid: activeDetails.id,
        whorecivername: activeDetails.name,
      });
      setSendMessage("");
    }
  };

  useEffect(() => {
    const starCountRef = ref(db, "message/");
    onValue(starCountRef, (snapshot) => {
      let arry = [];
      snapshot.forEach((item) => {
        if (
          (item.val().whosenderid == data.uid &&
            item.val().whoreciverid == activeDetails.id) ||
          (item.val().whoreciverid == data.uid &&
            item.val().whosenderid == activeDetails.id)
        ) {
          arry.push(item.val());
        }
      });
      setRecivedMsg(arry);
    });
  }, [activeDetails]);

  const handleEmoji = (emoji) => {
    setSendMessage(sendMessage + emoji.emoji);
  };

  // Auto-scroll to the bottom when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [recivedMsg]);

  return (
    <div className="bg-[#1A1A1A] h-screen text-[#fff] relative flex justify-center">
      <Navbar></Navbar>
      <Container className="flex justify-center items-start flex-wrap">
        <div>
          <User></User>
          <MyGroup></MyGroup>
        </div>
        <div>
          <div>
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
                        {activeDetails.name || "user"}
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
                <div
                  ref={chatContainerRef} // Attach the ref to the chat container
                  className="w-[594px] h-[600px] overflow-y-auto"
                >
                  {recivedMsg.map((item, index) =>
                    item.whosenderid == activeDetails.id ? (
                      // Receiver Message
                      <div
                        key={index}
                        className="w-full flex justify-start h-auto"
                      >
                        <div className="bg-[#E5DFDF] my-[10px] rounded-[10px] ml-[20px] max-w-[300px] py-[6px] px-[10px] relative h-auto">
                          <p className="text-[#3C3C3B] text-xs not-italic font-light leading-[normal] whitespace-pre-wrap break-words max-w-[300px] font-pops">
                            {item.msg}
                          </p>
                          <TbTriangleFilled className="text-[#E5DFDF] absolute bottom-[-2px] left-[-5px]" />
                        </div>
                      </div>
                    ) : (
                      // Sender Message
                      <div
                        key={index}
                        className="w-full flex justify-end h-auto"
                      >
                        <div className="bg-[#3C3C3B] my-[10px] rounded-[10px] mr-[35px] max-w-[300px] py-[6px] px-[10px] relative h-auto">
                          <p className="text-[#E5DFDF] text-xs not-italic font-light leading-[normal] whitespace-pre-wrap break-words max-w-[300px] font-pops">
                            {item.msg}
                          </p>
                          <TbTriangleFilled className="text-[#3C3C3B] absolute bottom-[-2px] right-[-5px]" />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </CustomScroll>
              <div className="w-full relative mb-[15px]">
                <FaCamera className="text-[#2BEC65] text-[20px] absolute top-[50%] translate-y-[-50%] left-[20px]" />
                {emoji && (
                  <div className="absolute bottom-[77px] left-[10px]">
                    <EmojiPicker onEmojiClick={handleEmoji} />
                  </div>
                )}
                <input
                  value={sendMessage}
                  onChange={(e) => setSendMessage(e.target.value)}
                  type="text"
                  className="w-full rounded-[50px] bg-gradient-to-r from-[#3C3C3C] to-[#3C3C3A] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-[#6C6C6C] text-base not-italic font-normal leading-[18px] font-rus px-[50px] py-[10px] "
                />
                <FaRegFaceMeh
                  onClick={() => setEmoji(!emoji)}
                  className="text-[#2BEC65] text-[20px] absolute top-[50%] translate-y-[-50%] right-[60px]"
                />
                <FaPaperPlane
                  onClick={handleSend}
                  className="text-[#F60] text-[20px] absolute top-[50%] translate-y-[-50%] right-[20px] "
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Blocked></Blocked>
          <div>
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
                        onClick={() => handelMessage(item)}
                        className="flex cursor-pointer justify-between items-center mb-[10px]"
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
                              <img
                                src={item.recivercrown}
                                alt=""
                                className="w-[10px]"
                              />
                            </div>
                          </div>
                          <div className="ml-[11px] text-left">
                            <h3 className="text-white text-base not-italic font-normal leading-[normal] font-pops drop-shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)] mt-[5px]">
                              {data.uid == item.reciverid
                                ? item.sendername
                                : item.recivername}
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
                          <AiFillMessage className="text-[25px] cursor-pointer text-[#131111] drop-shadow-2xl" />
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No friends found...</p>
                  )}
                </div>
              </CustomScroll>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Messages;