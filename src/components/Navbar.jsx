import React from "react";
import { CgMenu } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useEffect, useRef } from "react";


const Navbar = ({ openNavigation, setOpenNavigation }) => {
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-700 via-gray-900 to-black backdrop-blur-md">
      <nav className="flex justify-between items-center px-4 h-16 md:px-6" >
        <a
          href="/"
          className="text-3xl font-semibold font-stretch-extra-condensed hover:text-green-500"
          id="logo"
        >
          Absolute Cinema
        </a>

        <div
          className={`absolute top-[74px] left-0 w-full py-2 text-lg flex-col gap-6 items-center bg-gradient-to-r from-gray-700 via-gray-900 to-black lg:bg-transparent lg:from-transparent lg:via-transparent lg:to-transparent ${
            openNavigation ? "flex" : "hidden"
          } lg:flex lg:flex-row lg:static lg:w-auto`}
        >
          <ul className="flex flex-col gap-6 items-center lg:flex-row lg:gap-8">
            {["home", "random", "guide", "search", "about"].map((section) => (
              <a href={`#${section}`} onClick={handleClick} key={section}>
                <li className="hover:cursor-pointer hover:text-green-500 hover:underline underline-offset-4 font-semibold capitalize">
                  {section}
                </li>
              </a>
            ))}
          </ul>
        </div>

        <div onClick={toggleNavigation} className="lg:hidden">
          {openNavigation ? (
            <RxCross2 className="text-2xl hover:cursor-pointer font-bold" />
          ) : (
            <CgMenu className="text-2xl hover:cursor-pointer" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
