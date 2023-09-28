import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-[120px] pb-[137px] desktop:pb-[332px]">
      <h1 className="text-center text-main-phone-header desktop:text-main-desktop-header px-6 text-light-white mb-[52px] desktop:mb-[97px]">
        We are creatives
      </h1>
      <Image src="./icon-arrow-down.svg" width="30" height="108" alt="Arrow down" className="cursor-pointer" />
    </div>
  );
};

export default Hero;
