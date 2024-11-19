import Image from 'next/image';
import React from 'react';

const ArrivalSection = () => {
  const images = [
    { src: '/images/arrivalImage4.png', alt: 'Image 1', width: 407, height: 289 },
    { src: '/images/arrivalImage1.png', alt: 'Image 2', width: 684, height: 289 },
    { src: '/images/arrivalImage3.png', alt: 'Image 3', width: 684, height: 289 },
    { src: '/images/arrivalImage2.png', alt: 'Image 4', width: 407, height: 289 },
  ];

  return (
    <div className="bg-[#F0F0F0] py-8">
      <h1 className="text-4xl text-center font-extrabold mb-8">
        BROWSE BY DRESS STYLE
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default ArrivalSection;
