import Image from 'next/image'
import React from 'react'

const Newletter = () => {
  return (
    <div className='bg-black h-[38px] flex gap-200'>
      <h1 className='text-white text-xl text-center'>Sign up and get 20% off to your first order. Sign Up Now</h1>
    <Image src="/images/cross.png" alt='image' width={80} height={80}/>
    </div>
  )
}

export default Newletter
