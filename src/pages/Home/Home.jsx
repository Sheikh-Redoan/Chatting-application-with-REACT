import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Friends from "../../components/Friends/Friends";
import GrorpList from "../../components/GroupList/GrorpList";
import UserList from "../../components/UserList/UserList";
import FriendRequest from "../../components/FriendRequest/FriendRequest";
import MyGroups from "../../components/MyGroups/MyGroups";
import BlockedUsers from "../../components/BlockedUsers/BlockedUsers";

const Home = () => {
  return (
    <div className="flex p-[35px]  box-border gap-x-[22px] gap-y-[43px]">
      <Sidebar className="w-[10%]"></Sidebar>
      <div className="w-full flex flex-wrap gap-x-[22px] gap-y-[43px]">
        <GrorpList className="w-[32%] h-[451px]" />
        <Friends className="w-[32%] h-[451px]"></Friends>
        <UserList className="w-[32%] h-[451px]"/>
        <FriendRequest className="w-[32%] h-[451px]"/>
        <MyGroups  className="w-[32%] h-[451px]" />
        <BlockedUsers  className="w-[32%] h-[451px]"/>
      </div>
    </div>
  );
};

export default Home;
