import React from 'react';
import Image from 'next/image';
import LogoLightIcon from '../../public/logo-light.svg';
import Button from './Button';

const Footer = () => {
  return (
    <footer className='flex justify-center items-center w-full bg-darkBlue h-[120px]'>
      <div className='flex w-full max-w-main-container justify-between items-center tablet:px-10 phone:px-4'>
        <Image alt='Skilled dark logo' src={LogoLightIcon} className='h-7' />
        <Button type='three'>Get Started</Button>
      </div>
    </footer>
  );
};

export default Footer;
