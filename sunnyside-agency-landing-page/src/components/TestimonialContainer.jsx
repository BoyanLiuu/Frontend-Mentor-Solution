import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialContainer = () => {
  const clients = [
    {
      imgUrl: '/image-emily.jpg',
      name: 'Emily R.',
      occupaction: 'Marketing Director',
      content:
        'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    },
    {
      imgUrl: '/image-thomas.jpg',
      name: 'Thomas S.',
      occupaction: 'Chief Operating Officer',
      content:
        'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
    },
    {
      imgUrl: '/image-jennie.jpg',
      name: 'Jennie F.',
      occupaction: 'Business Owner',
      content:
        'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    },
  ];
  return (
    <section className="flex flex-col items-center bg-light-white pt-16 pb-[86px] px-6">
      <h3 className="mb-16 text-base tracking-[4px] text-grayish-blue font-black">CLIENT TESTIMONIALS</h3>
      <div className="w-full text-center">
        {clients.map((client) => (
          <TestimonialCard {...client} key={client.name} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialContainer;
