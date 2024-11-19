// components/HeroSection.js
import Image from 'next/image';

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-12 bg-gray-100">
        {/* Left Column (Text and Image) */}
        <div className="flex-1 mb-8 md:mb-0 md:pr-8 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-extrabold text-gray-800 mb-4">
            FIND CLOTHES THAT MATCH YOUR STYLE
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 mb-6">
            This is a short description or paragraph for the hero section. You can add more text here to highlight your message.
          </p>
          <button className="px-6 py-3 w-full md:w-44 bg-black text-white rounded-2xl hover:bg-blue-700 transition mb-8">
            Shop Now
          </button>
          <div className="relative w-full max-w-xs md:max-w-[700px] mx-auto">
            <Image src="/images/figure.png" alt="Hero Figure" width={900} height={250} layout="responsive" />
          </div>
        </div>

        {/* Right Column (Main Hero Image) */}
        <div className="flex-1 w-full md:w-auto">
          <div className="relative w-full max-w-xs md:max-w-[948px] mx-auto">
            <Image
              src="/images/heroImage.png"
              alt="Hero Image"
              width={948}
              height={511}
              className="rounded-lg w-full"
              layout="responsive"
            />
          </div>
        </div>
      </div>

      {/* Brand Logos Section */}
      <div className="bg-black flex flex-wrap justify-center items-center gap-6 p-12">
        <Image src="/images/brandlogo1.png" width={120} height={80} alt="Brand Logo 1" />
        <Image src="/images/brandlogo3.png" width={120} height={80} alt="Brand Logo 3" />
        <Image src="/images/brandlogo2.png" width={120} height={80} alt="Brand Logo 2" />
        <Image src="/images/brandlogo5.png" width={120} height={80} alt="Brand Logo 5" />
        <Image src="/images/brandlogo4.png" width={120} height={80} alt="Brand Logo 4" />
      </div>
    </>
  );
};

export default HeroSection;
