import React from 'react'
import { IoMail } from "react-icons/io5";

const Subcription = () => {
  return (
    <>
    <div className='flex justify-around mx-12 my-10 h-[250px] bg-black rounded-lg p-12 '>
    
      <h1 className='font-semibold text-5xl leading-normal text-white w-[589px]'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
      <div className=''>
      <div>
    <IoMail />
    <input
  type="text"
  placeholder="Enter your email address"
  class="h-[50px] w-[300px] bg-white rounded-2xl border border-gray-300 focus:border-black focus:outline-none"
/>
  </div>
   <button className='h-[50px] w-[300px] bg-white rounded-2xl mt-6'>Subscribe to Newsletter</button>
    </div>
    </div>


    </>
)
}

export default Subcription
