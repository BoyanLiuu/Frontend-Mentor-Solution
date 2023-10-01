import React from 'react';

const Feature = ({ title, content, className, hoverColor }) => {
  return (
    <div
      className={` px-6 bg-light-white text-center tablet:text-left py-12 tablet:py-16 tablet:max-w[445px]  tablet:pl-[165px] tablet:pr-[107px] ${className} `}
    >
      <h2 className="text-main-phone-header tracking-normal">{title}</h2>
      <p className="text-lg text-dark-grayish-blue font-semibold leading-[30px] mt-8 mb-10">{content}</p>
      <div className="cursor-pointer">
        <span
          className={`z-[5] cursor-pointer text-[15px] tracking-[1px] leading-[25px] font-black relative after:hidden after:content-[''] after:absolute after:w-[137px] after:h-[10px] ${hoverColor} after:rounded-[28px] after:bottom-0 after:left-[-8px] after:-z-[1] hover:after:block`}
        >
          LEARN MORE
        </span>
      </div>
    </div>
  );
};

export default Feature;
