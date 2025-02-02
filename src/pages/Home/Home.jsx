import React, { useEffect, useState } from "react";
import verifynav from "../../assets/verifynav.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Container from "../../components/Container/Container";
import Navbar from "../../components/Navbar/Navbar";
import User from "../../components/User/User";
import MyGroup from "../../components/MyGroup/MyGroup";
import News from "../../components/News/News";
import BaseProfile from "../../components/BaseProfile/BaseProfile";
import Friends from "../../components/Friends/Friends";

const Home = () => {
  const auth = getAuth();
  const data = useSelector((state) => state.userDetails.userInfo);
  const navigate = useNavigate();
  const [verify , setVerify] = useState(false);
  useEffect(()=>{
    if(!data){
      navigate("/login");
    }
  })

  onAuthStateChanged(auth, (user) =>{
    if(user.emailVerified == true){
        setVerify(true)
    }else{
      setVerify(false)
    }
  })

  return (
    <>
      {
        verify ? 
        <div className="bg-[#1A1A1A] h-screen text-[#fff] relative flex justify-center">
      <Navbar></Navbar>
      <Container className='flex justify-center items-start flex-wrap max-sm:mx-0 max-sm:w-full max-sm:overflow-y-hidden'>
        <div className="max-sm:hidden">
            <User></User>
            <MyGroup></MyGroup>
        </div>
        <div className="order-1">
          <News></News>
        </div>
        <div className="max-sm:hidden">
          <BaseProfile></BaseProfile>
          <Friends></Friends>
        </div>
      </Container>
    </div>
    : <div className="max-w-[29.375em] w-full rounded-xl bg-white mx-auto border border-white flex flex-col">
      <div className="flex flex-col border-[2px] border-solid border-[#5e34f580] rounded-[20px] overflow-hidden pb-[30px] drop-shadow">
        <img 
          src={verifynav} 
          alt="Logo"
        />
        <div className="w-4/5 mx-auto mt-8 mb-8">
          <p className="tracking-widest text-lg mt-0 mb-2">WELCOME</p>
          <p className="text-4xl font-semibold tracking-tight mt-0">Chatting App</p>
          <p className="text-base mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc gravida erat leo, ut tincidunt felis interdum vel. Phasellus quis rutrum est. Curabitur quis dolor nisi.
          </p>
          <a 
            href="https://mail.google.com/mail/u/0/#inbox" 
            className="bg-[#5F34F5] text-white rounded-md px-6 py-4 text-lg text-center mt-12 block"
          >
            Verify Email Address
          </a>
        </div>
        <div className="flex flex-col justify-around mx-auto max-w-[200px] mt-7">
          <a 
            href="#" 
            className="text-black text-center mb-2"
          >
            Chatting-App.io
          </a>
          <div className="flex space-x-2">
            <img 
              src="https://res.cloudinary.com/marykaystuff/image/upload/v1654783962/images/tradefarm/znh7kihdxwrvhfiakish.svg" 
              alt="Icon 1" 
              className="w-[39.3px]"
            />
            <img 
              src="https://res.cloudinary.com/marykaystuff/image/upload/v1654783962/images/tradefarm/m6q7n9zsbbugxuxomu6u.svg" 
              alt="Icon 2" 
              className="w-[39.3px]"
            />
            <img 
              src="https://res.cloudinary.com/marykaystuff/image/upload/v1654783962/images/tradefarm/a8lmondoqbs47bjwin5k.svg" 
              alt="Icon 3" 
              className="w-[39.3px]"
            />
            <img 
              src="https://res.cloudinary.com/marykaystuff/image/upload/v1654783962/images/tradefarm/ifd0qtokg2vv1fll59ta.svg" 
              alt="Icon 4" 
              className="w-[39.3px]"
            />
          </div>
        </div>
      </div>
    </div>
      }
    </>









    
  );
};

export default Home;
