import React from 'react'
import Logo from './Logo';

const Header = () => {
  return (
    <header className=" flex pt-[34px] justify-between px-10">
      <Logo color="#FFF" />
      <div>
        <ul className="flex text-light-white text-lg font-semibold leading-[25px] ">
          <li className="mr-[57px] cursor-pointer">About</li>
          <li className="mr-[57px] cursor-pointer">Services</li>
          <li className="mr-[57px] cursor-pointer">Projects</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header