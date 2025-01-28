import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import feature1 from "../../assets/feature1.jpg";
import feature2 from "../../assets/feature2.jpg";
import popular1 from "../../assets/popular1.png";
import popular2 from "../../assets/populer2.png";
import popular1bg from "../../assets/popular1bg.jpg";
import popular2bg from "../../assets/popular2bg.jpg";
import recently1 from "../../assets/recently1.jpg";
import recently2 from "../../assets/recently2.jpg";
import recently3 from "../../assets/recently3.jpg";
import { CustomScroll } from "react-custom-scroll";

const News = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "ease-in",
    arrows: false,
  };

  return (
    <div className="w-[594px] h-[773px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] rounded-[20px] bg-[#ffffff33] overflow-hidden mx-[5px]">
        <CustomScroll>
      <div className="w-[594px] h-[773px] px-[14px] py-[14px] ">
        {/* banner slider */}
        <div className="w-[566px] h-[250px] rounded-[20px] ">
          <Slider {...settings}>
            <div>
              <div className="w-full h-full rounded-[20px] relative">
                <img
                  src={banner1}
                  className="w-full h-full rounded-[20px]"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="w-full h-full rounded-[20px] relative">
                <img
                  src={banner2}
                  className="w-full h-full rounded-[20px]"
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="w-full h-full rounded-[20px] relative">
                <img
                  src={banner3}
                  className="w-full h-full rounded-[20px]"
                  alt=""
                />
              </div>
            </div>
          </Slider>
        </div>
        <div className="mt-[41px] ">
            <div className="flex justify-between items-end mb-[20px]">
            <h3 className="text-white text-[22px] not-italic font-normal leading-[normal] font-rus shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)]">Featured Community</h3>
            <p className="text-[#E5DFDF] text-xs not-italic font-normal leading-[18px] font-pops underline">See All</p>
            </div>
            <div className="flex justify-between items-center">
                <div className="w-[278px] h-[200px] border  rounded-[20px] border-solid border-[#BF7D0E] bg-[rgba(255, 255, 255, 0.2)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] overflow-hidden flex justify-center items-center ">
                    <img src={feature1} alt="" className="w-full object-cover h-full rounded-[20px] " />
                    <div className="rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[20px] rounded-br-[20px] bg-[rgba(255,255,255,0.2)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] w-full h-[100px] flex-shrink-0 absolute bottom-0 p-[15px]">
                        <h4 className="text-white text-lg not-italic font-bold leading-[normal];
  font-family: Poppins; font-pops mb-[5px]">Virtual Reality</h4>
                        <p className="text-white text-xs not-italic font-normal leading-[14px] font-pops">A virtual reality game experience will </p>
                    </div>
                </div>
                <div className="w-[278px] h-[200px] border  rounded-[20px] border-solid border-[#BF7D0E] bg-[rgba(255, 255, 255, 0.2)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] overflow-hidden flex justify-center items-center ">
                    <img src={feature2} alt="" className="w-full object-cover h-full rounded-[20px] " />
                    <div className="rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[20px] rounded-br-[20px] bg-[rgba(255,255,255,0.2)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] w-full h-[100px] flex-shrink-0 absolute bottom-0 p-[15px]">
                        <h4 className="text-white text-lg not-italic font-bold leading-[normal];
  font-family: Poppins; font-pops mb-[5px]">Game Plays</h4>
                        <p className="text-white text-xs not-italic font-normal leading-[14px] font-pops">Future of game play is here. No need to 
                        get stuck for net.... </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-[41px] ">
            <div className="flex justify-between items-end mb-[20px]">
            <h3 className="text-white text-[22px] not-italic font-normal leading-[normal] font-rus shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)]">Popular Right Now</h3>
            <p className="text-[#E5DFDF] text-xs not-italic font-normal leading-[18px] font-pops underline">See All</p>
            </div>
            <div className="flex justify-between items-center">
                <div className="w-[278px] h-[130px] border  rounded-[20px] border-solid border-[#BF7D0E] bg-[rgba(255, 255, 255, 0.2)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] overflow-hidden flex justify-center items-center ">
                    <img src={popular1bg} alt="" className="w-full object-cover h-full rounded-[20px] " />
                    <img src={popular1} alt="" className="absolute w-[108px] h-[108px] object-cover top-[50%] translate-y-[-50%] left-[5px]" />
                    <div className="rounded-tl-[10px] rounded-tr-[20px] rounded-bl-[10px] rounded-br-[20px] bg-[rgba(255,255,255,0.2)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] w-[170px] h-[128px] border px-[10px] py-[15px]   flex-shrink-0 absolute bottom-0 right-0">
                        <h4 className="text-white text-lg not-italic font-bold leading-[normal];
  font-family: Poppins; font-pops mb-[5px]">PUBG Mobile</h4>
                        <p className="text-white text-xs not-italic font-normal leading-[14px] font-pops">A game that is on a next 
                        generation.... </p>
                    </div>
                </div>
                <div className="w-[278px] h-[130px] border  rounded-[20px] border-solid border-[#BF7D0E] bg-[rgba(255, 255, 255, 0.2)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] overflow-hidden flex justify-center items-center ">
                    <img src={popular2bg} alt="" className="w-full object-cover h-full rounded-[20px] " />
                    <img src={popular2} alt="" className="absolute w-[108px] h-[108px] object-cover top-[50%] translate-y-[-50%] left-[0px]" />
                    <div className="rounded-tl-[10px] rounded-tr-[20px] rounded-bl-[10px] rounded-br-[20px] bg-[rgba(255,255,255,0.2)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] w-[170px] h-[128px] border px-[10px] py-[15px]   flex-shrink-0 absolute bottom-0 right-0">
                        <h4 className="text-white text-lg not-italic font-bold leading-[normal];
  font-family: Poppins; font-pops mb-[5px]">Call Of Duty</h4>
                        <p className="text-white text-xs not-italic font-normal leading-[14px] font-pops">A game that is on a next 
                        generation....</p>
                    </div>
                </div>

            </div>
        </div>
        <div className="mt-[41px] ">
            <div className="flex justify-between items-end mb-[20px]">
            <h3 className="text-white text-[22px] not-italic font-normal leading-[normal] font-rus shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)]">Recently Add</h3>
            <p className="text-[#E5DFDF] text-xs not-italic font-normal leading-[18px] font-pops underline">See All</p>
            </div>
            <div className="flex justify-between items-center">
                <div className="w-[182px] h-[182px] border  rounded-[20px] border-solid border-[#BF7D0E] bg-[rgba(255, 255, 255, 0.2)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] overflow-hidden flex justify-center items-center ">
                    <img src={recently1} alt="" className="w-full object-cover h-full rounded-[20px] " />
                    <div className="rounded-[20px] bg-[rgba(255,255,255,0.2)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] w-[180px] h-[65px] border px-[10px] py-[15px]   flex-shrink-0 absolute bottom-0 right-0">
                        <h4 className="text-white text-[16px] not-italic font-bold leading-[normal];
  font-family: Poppins; font-pops">Dragon Ball Z</h4>
                        <p className="text-white text-xs not-italic font-normal leading-[14px] font-pops">A new Version is lanched </p>
                    </div>
                </div>
                <div className="w-[182px] h-[182px] border  rounded-[20px] border-solid border-[#BF7D0E] bg-[rgba(255, 255, 255, 0.2)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] overflow-hidden flex justify-center items-center ">
                    <img src={recently2} alt="" className="w-full object-cover h-full rounded-[20px] " />
                    <div className="rounded-[20px] bg-[rgba(255,255,255,0.2)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] w-[180px] h-[65px] border px-[10px] py-[15px]   flex-shrink-0 absolute bottom-0 right-0">
                        <h4 className="text-white text-[16px] not-italic font-bold leading-[normal];
  font-family: Poppins; font-pops ">Solo Levelling</h4>
                        <p className="text-white text-xs not-italic font-normal leading-[14px] font-pops">A new Version is lanched </p>
                    </div>
                </div>
                <div className="w-[182px] h-[182px] border  rounded-[20px] border-solid border-[#BF7D0E] bg-[rgba(255, 255, 255, 0.2)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] overflow-hidden flex justify-center items-center ">
                    <img src={recently3} alt="" className="w-full object-cover h-full rounded-[20px] " />
                    <div className="rounded-[20px] bg-[rgba(255,255,255,0.2)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-[11.149999618530273px] w-[180px] h-[65px] border px-[10px] py-[15px]   flex-shrink-0 absolute bottom-0 right-0">
                        <h4 className="text-white text-[16px] not-italic font-bold leading-[normal];
  font-family: Poppins; font-pops">How To Train Dra...</h4>
                        <p className="text-white text-xs not-italic font-normal leading-[14px] font-pops">A new Version is lanched </p>
                    </div>
                </div>

            </div>
        </div>
      </div>
      </CustomScroll>
    </div>
  );
};

export default News;
