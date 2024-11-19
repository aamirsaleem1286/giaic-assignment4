import Image from 'next/image';
import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-black h-[38px] flex justify-between items-center px-4 sm:px-6 md:px-8">
      {/* Newsletter Text */}
      <h1 className="text-white text-sm sm:text-base md:text-lg text-center">
        Sign up and get 20% off your first order. Sign Up Now
      </h1>

      {/* Close Button (Image) */}
      <Image src="/images/cross.png" alt="close" width={20} height={20} className="cursor-pointer" />
    </div>
  );
}

export default Newsletter;
