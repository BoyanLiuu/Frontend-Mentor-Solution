import React from 'react'
import Image from 'next/image';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="pt-16 pb-20 px-10 desktop:py-[72px] bg-footer-color flex flex-col items-center">
      <Logo color="#2C7566" />
      <ul className="flex text-dark-moderate-cyan text-lg  font-semibold leading-[25px] mt-10 mb-[88px] ">
        <li className="mr-[57px] cursor-pointer">About</li>
        <li className="mr-[57px] cursor-pointer">Services</li>
        <li className="cursor-pointer">Projects</li>
      </ul>
      <div className="flex h-5">
        <Image src="./icon-facebook.svg" width="20" height="20" alt="Facebook logo" className="mr-7 cursor-pointer" />

        <Image src="./icon-instagram.svg" width="20" height="20" alt="Instagram logo" className="mr-7 cursor-pointer" />
        <Image src="./icon-twitter.svg" width="20" height="20" alt="Twitter logo" className="mr-7 cursor-pointer" />
        <Image src="./icon-pinterest.svg" width="20" height="20" alt="Pinterest logo" className="cursor-pointer" />
      </div>
    </footer>
  );
};

export default Footer