import React from 'react';
import Image from 'next/image';
import LogoDarkIcon from '../../public/logo-dark.svg';
import Button from './Button';

const Header = () => {
  return (
    <header className='flex justify-center items-center w-full mt-4 tablet:mt-6'>
      <div className='flex w-full max-w-main-container justify-between items-center tablet:px-10 phone:px-4'>
        <Image alt='Skilled light logo' src={LogoDarkIcon} className='h-7' />
        <Button type='one'>Get Started</Button>
      </div>
    </header>
  );
};

export default Header;
