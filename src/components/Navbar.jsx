import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ openNavigation, setOpenNavigation }) => {
  const pathname = useLocation();

  // const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () =>{
      if(!openNavigation) return;
      enablePageScroll()
      setOpenNavigation(false)
    }

  return (
    // bg-[#FFFFFF30] - old bg
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-700 via-gray-900 to-black backdrop-blur-md">
      <nav className="flex justify-between items-center px-4 h-16">
        <a
          href="#home"
          className="text-2xl font-semibold font-serif font-stretch-extra-condensed hover:text-green-500"
        >
          ABSOLUTE CINEMA
        </a>
        <div
          className={`absolute top-[64px] left-0 w-full py-2 text-lg flex-col gap-6 items-center bg-gradient-to-r from-gray-700 via-gray-900 to-black lg:bg-transparent lg:from-transparent lg:via-transparent lg:to-transparent ${
            openNavigation ? "flex" : "hidden"
          } lg:flex lg:flex-row lg:static lg:w-auto lg:bg-transparent`}
        >
          <ul className="flex flex-col gap-6 items-center lg:flex-row lg:gap-8 ">
            <a href="#home" onClick={handleClick}>
              <li className="hover:cursor-pointer hover:text-green-500 font-semibold">
                {pathname.hash === "#home" ? (
                  <span className="relative inline-block text-green-500">
                    Home
                    <svg
                      className="absolute -bottom-0.5 left-0 w-full max-h-1.5"
                      viewBox="0 0 55 5"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                        stroke="currentColor"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </span>
                ) : (
                  "Home"
                )}
              </li>
            </a>
            <a href="#random" onClick={handleClick}>
              <li className="hover:cursor-pointer hover:text-green-500 font-semibold">
                {pathname.hash === "#random" ? (
                  <span className="relative inline-block text-green-500">
                    Random
                    <svg
                      className="absolute -bottom-0.5 left-0 w-full max-h-1.5"
                      viewBox="0 0 55 5"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                        stroke="currentColor"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </span>
                ) : (
                  "Random"
                )}
              </li>
            </a>
            <a href="#guide" onClick={handleClick}>
              <li className="hover:cursor-pointer hover:text-green-500 font-semibold">
                {pathname.hash === "#guide" ? (
                  <span className="relative inline-block text-green-500">
                    Guide
                    <svg
                      className="absolute -bottom-0.5 left-0 w-full max-h-1.5"
                      viewBox="0 0 55 5"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                        stroke="currentColor"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </span>
                ) : (
                  "Guide"
                )}
              </li>
            </a>
            <a href="#search" onClick={handleClick}>
              <li className="hover:cursor-pointer hover:text-green-500 font-semibold">
                {pathname.hash === "#search" ? (
                  <span className="relative inline-block text-green-500">
                    Search
                    <svg
                      className="absolute -bottom-0.5 left-0 w-full max-h-1.5"
                      viewBox="0 0 55 5"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                        stroke="currentColor"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </span>
                ) : (
                  "Search"
                )}
              </li>
            </a>
            <a href="#about" onClick={handleClick}>
              <li className="hover:cursor-pointer hover:text-green-500 font-semibold">
                {pathname.hash === "#about" ? (
                  <span className="relative inline-block text-green-500">
                    About
                    <svg
                      className="absolute -bottom-0.5 left-0 w-full max-h-1.5"
                      viewBox="0 0 55 5"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                        stroke="currentColor"
                        strokeWidth="2"
                      ></path>
                    </svg>
                  </span>
                ) : (
                  "About"
                )}
              </li>
            </a>
          </ul>
        </div>
        <div onClick={toggleNavigation} className="lg:hidden">
          {openNavigation ? <RxCross2 className={`text-2xl hover:cursor-pointer font-bold`}/> : <CgMenu className={`text-2xl hover:cursor-pointer`} />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
