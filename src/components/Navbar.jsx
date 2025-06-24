import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";

const Navbar = () => {

const [openNavigation, setOpenNavigation] = useState(false);

const toggleNavigation = () => {
  setOpenNavigation(!openNavigation)
}

  return (
    // bg-[#FFFFFF30] - old bg
    <header className="fixed top-0 left-0 w-full z-50 bg-opacity-70 backdrop-blur-md">
      <nav className="flex justify-between items-center px-4 h-16 lg:">
        <a href="#home" className="text-2xl font-semibold">ABSOLUTE CINEMA</a>
        <div className={`absolute top-[64px]  left-0 w-full py-2 text-lg flex-col gap-6 items-center ${openNavigation ? 'flex' : 'hidden'} lg:flex lg:flex-row lg:static lg:w-auto lg:bg-transparent`}>
          <ul className="flex flex-col gap-6 items-center lg:flex-row lg:gap-8">
            <a href="#home"><li className="hover:cursor-pointer">Home</li></a>
            <a href="#random"><li className="hover:cursor-pointer">Random</li></a>
            <a href="#guide"><li className="hover:cursor-pointer">Guide</li></a>
            <a href="#search"><li className="hover:cursor-pointer">Search</li></a>
            <a href="#about"><li className="hover:cursor-pointer">About</li></a>
          </ul>
        </div>
        <div onClick={toggleNavigation} className="lg:hidden">
          <CgMenu className={`text-2xl hover:cursor-pointer`}/>
        </div>
      </nav>
    </header> 
  );
};

export default Navbar;
