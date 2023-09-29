import React from 'react'
import Logo from './Logo';
import Image from 'next/image';

const Header = () => {
  const navigationList = ['About', 'Services', 'Projects', 'Contact'];
  return (
    <header className="relative flex pt-[34px] justify-between px-10 ">
      <Logo color="#FFF" />
      <div className="hidden desktop:block">
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
      <div className="relative block desktop:hidden">
        <Image alt="Hamburger" src="./icon-hamburger.svg" className="cursor-pointer" width="24" height="18" />
      </div>
      <ul className="absolute bg-light-white min-w-[329px]  h-[305px]  py-[39px] flex flex-col items-center justify-between text-dark-grayish-blue text-[20px] font-semibold leading-[25px]  top-[82px] right-[40px]">
        {navigationList.map((list) => {
          return (
            <li
              key={list}
              className="relative cursor-pointer after:content-['']  after:w-[140px] after:h-14 after:absolute after:bg-yellow after:rounded-[28px]  after:left-2/4 after:top-2/4
                after:translate-y-[-50%] after:translate-x-[-50%] after:hidden  hover:after:block"
            >
              {list}
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Header