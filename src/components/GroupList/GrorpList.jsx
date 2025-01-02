import React from 'react'
import profile from '../../assets/profile.png';
import { IoIosSearch } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";



const GrorpList = ({className}) => {
  return (
      <div className={` ${className}`}>
          <div className={`w-full h-[59px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[20px] flex justify-between items-center px-[23px]`}>
              <IoIosSearch className='text-[20px]'/>
              <input type="text" className='w-full outline-none text-[rgba(61,61,61,0.35)] text-base not-italic font-medium leading-[normal] font-pops pl-[36px]' placeholder='Search' />
              <HiDotsVertical className='text-[20px]'/>
          </div>
          <div className='w-full h-[347px] rounded-[20px] mt-[43px] bg-[#fff] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-[20px]'>
              <div className='flex justify-between items-center mb-[17px]'>
                  <h2 className='text-black text-xl not-italic font-semibold leading-[normal] font-pops'>Groups List</h2>
                  <HiDotsVertical className='text-[20px]'/>
              </div>
  
              {/* Profile view  */}
              <div className="w-full flex justify-between items-center pb-[13px] border-b-[1px] border-solid border-[rgba[0,0,0,0.80]]">
                  <img src={profile} alt="" className='w-[70px] h-[70px] rounded-full'/>
                  {/* name and id */}
                  <div className='mr-auto ml-[14px]'>
                      <h2 className='text-black text-lg not-italic font-semibold leading-[normal] font-pops'>Friends Reunion</h2>
                      <p className='text-[rgba(77,77,77,0.75)] text-sm not-italic font-medium leading-[normal] font-pops'>Hi Guys, Wassup!</p>
                  </div>
                  {/* name and id */}
                  <a href="#" className='w-[87px] h-[30px] rounded-[5px] bg-[#5f35f5] text-white text-xl not-italic font-semibold leading-[normal] font-pops text-center'>Join</a>
              </div>
              {/* Profile view  */}
  
  
  
  
  
          </div>
      </div>
    )
}

export default GrorpList