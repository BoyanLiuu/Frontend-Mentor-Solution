import React from 'react';
import Button from './Button';
import Image from 'next/image';
import HeroMobile from '../../public/image-hero-mobile.png';

const Hero = () => {
  return (
    <section className='flex justify-center mt-[38px] tablet:mt-[105px] tablet:mb-[210px] desktop:mt-[178px] desktop:mb-[250px]'>
      <div className='max-w-main-container relative w-full tablet:px-10 phone:px-4'>
        <div className='mb-[70px] tablet:max-w-[398px] desktop:max-w-[457px]'>
          <h1 className='desktop:text-header-xl text-header-l text-darkBlue'>
            Maximize skill, minimize budget
          </h1>
          <span className='inline-block desktop:text-lg text-base text-gray desktop:mt-[29px] desktop:mb-10 tablet:my-[25px] phone:mt-[26px] phone:mb-6'>
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life you want.
          </span>
          <Button type='two'>Get Started</Button>
        </div>

        <picture>
          <source
            type={'image/png'}
            srcSet={'/image-hero-mobile.png, /image-hero-mobile@2x.png 2x'}
            media={'(max-width: 767px)'}
          />
          <source
            type={'image/webp'}
            srcSet={'/image-hero-mobile.webp, /image-hero-mobile@2x.webp 2x'}
            media={'(max-width: 767px)'}
          />

          <source
            type={'image/png'}
            srcSet={'/image-hero-tablet.png, /image-hero-tablet@2x.png 2x'}
            media={'(max-width: 1439px)'}
          />
          <source
            type={'image/webp'}
            srcSet={'/image-hero-tablet.webp, /image-hero-tablet@2x.webp 2x'}
            media={'(max-width: 1439px)'}
          />

          <source
            type={'image/png'}
            srcSet={'/image-hero-desktop.png, /image-hero-desktop@2x.png 2x'}
            media={'(min-width: 1440px)'}
          />
          <source
            type={'image/webp'}
            srcSet={'/image-hero-desktop.webp, /image-hero-desktop@2x.webp 2x'}
            media={'(min-width: 1440px)'}
          />

          <Image
            alt='Women with a cup'
            src={HeroMobile}
            className='mx-auto tablet:absolute tablet:w-[695px] tablet:top-[-275px] tablet:right-[-289px] desktop:w-[800px] desktop:top-[-350px] desktop:right-[-400px]'
          />
        </picture>
      </div>
    </section>
  );
};

export default Hero;
