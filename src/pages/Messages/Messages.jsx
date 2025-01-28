import React from 'react'
import Container from "../../components/Container/Container";
import Navbar from "../../components/Navbar/Navbar";
import User from "../../components/User/User";
import MyGroup from "../../components/MyGroup/MyGroup";
import News from "../../components/News/News";
import BaseProfile from "../../components/BaseProfile/BaseProfile";
import Friends from "../../components/Friends/Friends";
import Blocked from '../../components/Blocked/Blocked';
import MessageBox from '../../components/MessageBox/MessageBox';


const Messages = () => {
  return (
    <div className="bg-[#1A1A1A] h-screen text-[#fff] relative flex justify-center">
    <Navbar></Navbar>
    <Container className='flex justify-center items-start flex-wrap'>
      <div>
          <User></User>
          <MyGroup></MyGroup>
      </div>
      <div>
        <MessageBox></MessageBox>
      </div>
      <div>
        <Blocked></Blocked>
        <Friends></Friends>
      </div>
    </Container>
  </div>
  )
}

export default Messages