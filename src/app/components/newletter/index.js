import Image from 'next/image'
import React from 'react'

const Newletter = () => {
  return (
    <div className='bg-black h-[38px] flex justify-around items-center text-bold'>
      <h1 className='text-white text-xl text-center'>Sign up and get 20% off to your first order. Sign Up Now</h1>
    <Image src="/images/cross.png" alt='image' width={40} height={25}/>
    </div>
  )
}

export default Newletter
