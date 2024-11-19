import Image from 'next/image'
import React from 'react'

const CustomerReview = () => {
    const reviewData=[{
        name:"Sarah M.",
        star:4,
        para:"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        src:"/images/correctImage.png",
        starImage:"/images/stars.png"
  
    },
      {
          name:"Alex K.",
          star:4,
          para:"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
          src:"/images/correctImage.png",
          starImage:"/images/stars.png"

        },
        {
          name:"James L.",
          star:4,
          para:"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
          src:"/images/correctImage.png",
          starImage:"/images/stars.png"
        }
      ]

    return (
    <div>
    <h1 className=' my-16 mx-12 text-4xl font-extrabold'>OUR HAPPY CUSTOMERS</h1>
    <div className='flex justify-around ' >
    {reviewData.map((item,index)=>{
    return(
    <div key={index} className=' border border-color-[#0000001A] w-[400px] h-[320px] gap-12 p-12 rounded-lg' >
    <Image src={item.starImage} alt="img" width={200} height={200}/>
    <div className='flex items-center gap-6 mt-4'>
    <h1 className=' font-extrabold text-xl'>{item.name}</h1>
    <Image src={item.src} alt="img" width={25} height={30}/>
    </div>
    <p className='text-[#00000099]'>{item.para}</p>
    </div>
       )})}
    </div>
    </div>
  )
}

export default CustomerReview
