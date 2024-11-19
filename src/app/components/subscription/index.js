import React from 'react';
import { IoMail } from "react-icons/io5";

const Subcription = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mx-4 sm:mx-6 lg:mx-12 my-10 h-[auto] bg-black rounded-lg p-8 sm:p-10 md:p-12">
      
      {/* Headline Section */}
      <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-white mb-6 md:mb-0 md:w-[50%]">
        STAY UP TO DATE ABOUT OUR LATEST OFFERS
      </h1>

      {/* Input and Button Section */}
      <div className="flex flex-col md:w-[45%]">
        <div className="relative mb-4">
          {/* Input Field with Icon */}
          <IoMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black" size={25} />
          <input
            type="email"
            placeholder="Enter your email address"
            className="h-[50px] w-full sm:w-[280px] md:w-[300px] bg-white rounded-2xl border border-gray-300 focus:border-black focus:outline-none pl-12 px-4"
          />
        </div>

        <button className="h-[50px] w-full sm:w-[280px] md:w-[300px] bg-white rounded-2xl mt-4 text-black font-semibold hover:bg-gray-200 transition-colors">
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  );
}

export default Subcription;
