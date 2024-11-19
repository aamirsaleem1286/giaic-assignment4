import Image from 'next/image'
import React from 'react'

const HeroSection = () => {

const arrivalData=[{
  src:"/images/arrival1.png",
  heading:"T-SHIRT WITH TAPE DETAILS",
  star:4,
  price:"$120"
},
{
    src:"/images/arrival2.png",
    heading:"SKINNY FIT JEANS",
    star:4,
    price:"$240"
  },
  {
    src:"/images/arrival3.png",
    heading:"CHECKERED SHIRT",
    star:4,
    price:"$180"
  },
  {
    src:"/images/arrival4.png",
    heading:"SLEEVE STRIPED T-SHIRT",
    star:4,
    price:"$130"
  },
]

const topSellingData=[{
    src:"/images/arrival5.png",
    heading:"VERTICAL STRIPED SHIRT",
    star:4,
    price:"$212"
  },
  {
      src:"/images/arrival6.png",
      heading:"COURAGE GRAPHIC T-SHIRT",
      star:4,
      price:"$145"
    },
    {
      src:"/images/arrival7.png",
      heading:"LOOSE FIT BERMUDA SHORTS",
      star:4,
      price:"$80"
    },
    {
      src:"/images/arrival8.png",
      heading:"FADED SKINNY JEANS",
      star:4,
      price:"$210"
    },
  ]


  return (
    <div>
      <h1 className='text-center my-12 text-2xl font-extrabold'>NEW ARRIVALS</h1>
    <div>
   <div className='flex items-center justify-around'>
      
      
    {arrivalData.map((item,index)=>{
        return( 
    <div key={index}>
      <Image src={item.src}alt="img" width={280} height={270}/>  
      <h1 className='font-extrabold'>{item.heading}</h1>
      <h1 className='text-xl font-extrabold'>{item.price}</h1>
    </div>
     )})} 
    </div>
    </div>
 
    <h1 className='text-center my-12 text-2xl font-extrabold'>Top Selling</h1>
    <div>
   <div className='flex items-center justify-around'>
      
      
    {topSellingData.map((item,index)=>{
        return( 
    <div key={index}>
      <Image src={item.src}alt="img" width={280} height={270}/>  
      <h1 className=' font-extrabold'>{item.heading}</h1>
      <h1 className='text-xl font-extrabold'>{item.price}</h1>
    </div>
     )})} 
    </div>
    </div>

    </div>
  )
}

export default HeroSection
