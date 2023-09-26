import React from 'react';
import Image from 'next/image';

const CourseCard = ({ title, content, imgUrl }) => {
  return (
    <div
      className='flex flex-col font-bold desktop:pt-16 desktop:px-8 desktop:pb-10 
   pt-14 pb-8 tablet:pl-8 tablet:pr-5 phone:px-7  rounded-card bg-white card-shadow relative  items-start'
    >
      <Image
        src={imgUrl}
        width='56'
        height='56'
        className='absolute top-[-24px]'
      />
      <span className='desktop:text-2xl text-xl font-extrabold text-darkBlue '>
        {title}
      </span>
      <p className='font-medium desktop:text-lg tablet:text-base text-gray desktop:mt-6 my-4 grow'>
        {content}
      </p>
      <button className='font-bold text-lg text-pink hover:text-lightPink'>
        Get Started
      </button>
    </div>
  );
};

export default CourseCard;
