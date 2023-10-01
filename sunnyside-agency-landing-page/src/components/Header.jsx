'use client';
import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import Image from 'next/image';
import { useWindowSize } from '../hooks/useWindowSize';

const Header = () => {
  const [isPhoneNavigationAvailable, setIsPhoneNavigationAvailable] = useState(false);
  const { width } = useWindowSize();
  const isShowingPhoneDropDown = isPhoneNavigationAvailable && width <= 768;

  const navigationList = ['About', 'Services', 'Projects', 'Contact'];
  return (
    <header className="relative flex pt-[34px] justify-between px-10 ">
      <Logo color="#FFF" />
      <div className="hidden tablet:block">
        <ul className="flex text-light-white text-lg font-semibold leading-[25px] ">
          {navigationList.map((list) => {
            return (
              <li
                key={list}
                className="relative mr-[57px] cursor-pointer after:content-['']  after:w-[140px] after:h-14 after:absolute after:bg-white after:rounded-[28px] after:opacity-25 after:left-2/4 after:top-2/4
                after:translate-y-[-50%] after:translate-x-[-50%] after:hidden  hover:after:block"
              >
                {list}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="relative block tablet:hidden" onClick={() => setIsPhoneNavigationAvailable((prev) => !prev)}>
        <Image alt="Hamburger" src="./icon-hamburger.svg" className="cursor-pointer" width="24" height="18" />
      </div>
      {isShowingPhoneDropDown && (
        <ul className="absolute bg-light-white w-[calc(87%)]   h-[305px]  py-[39px] flex flex-col items-center justify-between text-dark-grayish-blue text-[20px] font-semibold leading-[25px] top-[82px] left-2/4 translate-x-[-50%] z-10">
          {navigationList.map((list) => {
            return (
              <li
                onClick={() => setIsPhoneNavigationAvailable((prev) => !prev)}
                key={list}
                className="after:-z-[1] relative cursor-pointer after:content-['']  after:w-[140px] after:h-14 after:absolute after:bg-yellow after:rounded-[28px]  after:left-2/4 after:top-2/4
                after:translate-y-[-50%] after:translate-x-[-50%] after:hidden  hover:after:block"
              >
                {list}
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
};

export default Header;
