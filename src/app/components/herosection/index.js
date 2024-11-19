// components/HeroSection.js
import Image from 'next/image';

const HeroSection = () => {
  return (
   <>
   <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gray-100">
      <div className="flex-1 mb-8 md:mb-0 md:pr-8">
        <h1 className="text-7xl w-[700px] font-extrabold text-gray-800 mb-4">
        FIND CLOTHES THAT MATCHES YOUR STYLE        </h1>
        <p className="mt-4 text-lg text-gray-600 mb-6">
          This is a short description or paragraph for the hero section. You can add more text here to highlight your message.
        </p>
        <button className="px-6 py-3 ml-6 mb-8  w-44 bg-black text-white rounded-2xl hover:bg-blue-700 transition">
          Shop Now
        </button>
        <Image src="/images/figure.png" width={900} height={250}alt="images"/>
      </div>

      <div className="flex-1">
        <Image
          src="/images/heroImage.png" 
          alt="Hero Image"
          width={948}
          height={511}
          className="rounded-lg"
        />
      </div>
    </div>
    <div className='bg-black flex justify-around p-12'>
    <Image src="/images/brandlogo1.png" width={120} height={80}alt="images"/>
    <Image src="/images/brandlogo3.png" width={120} height={80}alt="images"/>
    <Image src="/images/brandlogo2.png" width={120} height={80}alt="images"/>
    <Image src="/images/brandlogo5.png" width={120} height={80}alt="images"/>
    <Image src="/images/brandlogo4.png" width={120} height={80}alt="images"/>

    
    </div>
    
    </>
  );
};

export default HeroSection;
