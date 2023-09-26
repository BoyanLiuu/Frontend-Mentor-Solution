import React from 'react';
import CourseCard from './CourseCard';
import AnimationIcon from '../../public/icon-animation.svg';
import BusinessIcon from '../../public/icon-business.svg';
import CryptoIcon from '../../public/icon-crypto.svg';
import DesignIcon from '../../public/icon-design.svg';
import PhotographIcon from '../../public/icon-photography.svg';

const CoursesContainer = () => {
  const courses = [
    {
      imgUrl: AnimationIcon,
      title: 'Animation',
      content:
        'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
    },
    {
      imgUrl: DesignIcon,
      title: 'Design',
      content:
        'Create beautiful, usable interfaces to help shape the future of how the web looks.',
    },
    {
      imgUrl: PhotographIcon,
      title: 'Photography',
      content:
        'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
    },
    {
      imgUrl: CryptoIcon,
      title: 'Crypto',
      content:
        'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
    },
    {
      imgUrl: BusinessIcon,
      title: 'Business',
      content:
        'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
    },
  ];

  return (
    <section className='w-full phone:pb-20  tablet:pb-[140px] bg-gradient-white-gray'>
      <div className='max-w-main-container grid mx-auto desktop:grid-cols-3 desktop:gap-x-[30px] desktop:gap-y-[80px] tablet:px-10 tablet:gap-y-14 tablet:gap-x-[11px] tablet:grid-cols-2 phone:px-4 phone:gap-y-10'>
        <div className='rounded-card desktop:text-header-m text-2xl font-extrabold bg-gradient-orange-pink text-white desktop:pt-16 desktop:px-8 tablet:pl-8 tablet:pr-5 tablet:pt-14 tablet:pb-[139px] phone:pt-6 phone:px-7 phone:pb-8'>
          Check out our most popular courses!
        </div>
        {courses.map(({ title, imgUrl, content }) => (
          <CourseCard
            key={title}
            title={title}
            imgUrl={imgUrl}
            content={content}
          />
        ))}
      </div>
    </section>
  );
};

export default CoursesContainer;
