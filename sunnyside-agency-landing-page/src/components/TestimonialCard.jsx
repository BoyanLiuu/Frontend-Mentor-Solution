import React from 'react';
import Image from 'next/image';

const TestimonialCard = ({ imgUrl, name, occupaction, content }) => {
  return (
    <div className="flex flex-col items-center col-span-12 tablet:col-span-4">
      <Image src={imgUrl} width="72" height="72" className="rounded-full mb-8" alt={`Client ${name}'s avatar`} />
      <p className="text-lg font-semibold leading-8 text-very-dark-grayish-blue mb-8 tablet:mb-[69px]">{content}</p>
      <span className="text-lg font-[999] mb-[9px] inline-block">{name}</span>
      <span className="text-sm font-semibold text-grayish-blue inline-block">{occupaction}</span>
    </div>
  );
};

export default TestimonialCard;
