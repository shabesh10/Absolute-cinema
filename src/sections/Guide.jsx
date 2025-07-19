// import React, { useState } from "react";
// import Slide from "./Slide";
// import { BsChevronCompactLeft } from "react-icons/bs";
// import { BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";
// let data_arr = [
//   {
//     title: "IMDB Top 250",
//     desc: "Explore the highest-rated movies of all time as voted by millions on IMDb. A perfect starting point for classic and critically acclaimed films.",
//     imageUrl: "https://images.unsplash.com/photo-1729860649288-73dc62463c71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     url: "https://www.imdb.com/chart/top/",
//   },
//   {
//     title: "Letterboxd Top 250",
//     desc: "Curated by the most active cinephiles online, this list highlights beloved and rewatchable films with strong cult followings.",
//     imageUrl: "src\\assets\\letterboxd-rating.webp",
//     url: "https://letterboxd.com/jack/list/official-top-250-films-with-the-most-fans/",
//   },
//   {
//     title: "Favourite Director Binge",
//     desc: "Dive deep into the works of your favorite directors — from Nolan to Fincher — and experience their storytelling evolution.",
//     imageUrl: "https://images.unsplash.com/photo-1577190651915-bf62d54d5b36?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

//     url: "",
//   },
//   {
//     title: "Franchise Binge",
//     desc: "Get lost in expansive cinematic universes — Marvel, Harry Potter, LOTR, James Bond, Star wars and more — in back-to-back marathons.",
//     imageUrl: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     url: "",
//   },
//   {
//     title: "Genre Binge",
//     desc: "You must have a favourite genre, binge watch top films from that genre.",
//     imageUrl: "https://images.unsplash.com/photo-1548754218-e9ef33578d04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     url: "",
//   },
// ];
// const Guide = () => {
//   // Render the guide section with slides
//   // Each slide will display a title, description, image, and an optional link
//   const [curridx, setCurrIdx] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = curridx === 0;
//     const newidx = isFirstSlide ? data_arr.length - 1 : curridx - 1;
//     setCurrIdx(newidx);
//   };
//   const nextSlide = () => {
//     const isLastSlide = curridx === data_arr.length - 1;
//     const newidx = isLastSlide ? 0 : curridx + 1;
//     setCurrIdx(newidx);
//   };
//   const dotUpdater = (idx) => {
//     setCurrIdx(idx);
//   };

//   return (
//     <div id="guide" className="min-h-screen scroll-mt-18 flex flex-col items-center justify-center">
//       <div>
//       <h1 className="font-semibold text-2xl text-center pt-20">Ultimate Movie Binge Guide</h1>
//       <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative flex items-center justify-center">
//         <div className="w-full h-full rounded-xl">
//           <Slide
//             title={data_arr[curridx].title}
//             desc={data_arr[curridx].desc}
//             imageUrl={data_arr[curridx].imageUrl}
//             url={data_arr[curridx].url}
//           />
//         </div>
//         <div
//           className="absolute top-[50%] -translate-x-0 translate-y-[-140px] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
//           onClick={prevSlide}
//         >
//           <BsChevronCompactLeft size={30} />
//         </div>
//         <div
//           className="absolute top-[50%] -translate-x-0 translate-y-[-140px] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
//           onClick={nextSlide}
//         >
//           <BsChevronCompactRight size={30} />
//         </div>
//         <div className="absolute flex bottom-74">
//           {data_arr.map((slide, index) => (
//             <div
//               key={index}
//               className={`text-2xl cursor-pointer hover:text-3xl hover:text-white text-gray-400` + (curridx === index ? "text-white text-3xl" : "")}
//               onClick={() => dotUpdater(index)}
//             >
//               <RxDotFilled />
//             </div>
//           ))}
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const data_arr = [
  {
    title: "IMDB Top 250",
    desc: "Explore the highest-rated movies of all time as voted by millions on IMDb. A perfect starting point for classic and critically acclaimed films.",
    imageUrl: "https://images.unsplash.com/photo-1729860649288-73dc62463c71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://www.imdb.com/chart/top/"
  },
  {
    title: "Letterboxd Top 250",
    desc: "Curated by the most active cinephiles online, this list highlights beloved and rewatchable films with strong cult followings.",
    imageUrl: "src\\assets\\letterboxd-rating.webp",
    url: "https://letterboxd.com/jack/list/official-top-250-films-with-the-most-fans/"
  },
  {
    title: "Favourite Director Binge",
    desc: "Dive deep into the works of your favorite directors — from Nolan to Fincher — and experience their storytelling evolution.",
    imageUrl: "https://images.unsplash.com/photo-1577190651915-bf62d54d5b36?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: ""
  },
  {
    title: "Franchise Binge",
    desc: "Get lost in expansive cinematic universes — Marvel, Harry Potter, LOTR, James Bond, Star wars and more — in back-to-back marathons.",
    imageUrl: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: ""
  },
  {
    title: "Genre Binge",
    desc: "You must have a favourite genre, binge watch top films from that genre.",
    imageUrl: "https://images.unsplash.com/photo-1548754218-e9ef33578d04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: ""
  },
];

const Slide = ({ title, desc, imageUrl, url }) => (
  <div className="relative w-full h-full bg-gradient-to-r from-gray-700 via-gray-900 to-black border border-gray-600 overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center grayscale opacity-20"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    
    {/* Content with proper padding to avoid icon overlap */}
    <div className="relative h-full flex flex-col justify-center px-12 py-6 sm:px-16 md:px-20 lg:px-24 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-3 sm:mb-4 md:mb-6 tracking-tight">
          {title}
        </h2>
        
        <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 md:mb-8 font-light max-w-2xl mx-auto">
          {desc}
        </p>
        
        {url && (
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 border border-white text-white text-xs sm:text-sm md:text-base font-normal hover:bg-white hover:text-gray-900 transition-all duration-300 cursor-pointer"
          >
            Explore
          </a>
        )}
      </div>
    </div>
  </div>
);

const Guide = () => {
  const [curridx, setCurrIdx] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = curridx === 0;
    const newidx = isFirstSlide ? data_arr.length - 1 : curridx - 1;
    setCurrIdx(newidx);
  };

  const nextSlide = () => {
    const isLastSlide = curridx === data_arr.length - 1;
    const newidx = isLastSlide ? 0 : curridx + 1;
    setCurrIdx(newidx);
  };

  const goToSlide = (idx) => {
    setCurrIdx(idx);
  };

  return (
    <div id="guide" className="min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black scroll-mt-18 flex flex-col items-center justify-center py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-2xl md:text-4xl font-light text-white mb-3 sm:mb-4 md:mb-6 tracking-tight">
            Ultimate Movie Binge Guide
          </h1>
          <div className="w-12 sm:w-16 md:w-24 h-px bg-gray-400 mx-auto"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] mb-6 sm:mb-8 md:mb-12">
          
          {/* Main Slide */}
          <div className="relative w-full h-full">
            <Slide
              title={data_arr[curridx].title}
              desc={data_arr[curridx].desc}
              imageUrl={data_arr[curridx].imageUrl}
              url={data_arr[curridx].url}
            />
          </div>

          {/* Navigation Buttons - Positioned outside content area on mobile */}
          <button
            onClick={prevSlide}
            className="absolute left-1 sm:left-2 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-gray-700 via-gray-900 to-black border border-gray-500 flex items-center justify-center text-white hover:border-white hover:text-white transition-all duration-300 cursor-pointer z-10"
          >
            <BsChevronCompactLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-1 sm:right-2 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-gray-700 via-gray-900 to-black border border-gray-500 flex items-center justify-center text-white hover:border-white hover:text-white transition-all duration-300 cursor-pointer z-10"
          >
            <BsChevronCompactRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center items-center space-x-2 sm:space-x-3 md:space-x-4 mb-6 sm:mb-8 md:mb-12">
          {data_arr.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 cursor-pointer ${
                curridx === index 
                  ? 'w-6 sm:w-8 md:w-12 h-2 bg-white' 
                  : 'w-2 h-2 bg-gray-500 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Navigation Numbers */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-400 font-light">
            <span className="text-white font-normal">
              {String(curridx + 1).padStart(2, '0')}
            </span>
            <div className="w-6 sm:w-8 h-px bg-gray-500"></div>
            <span>
              {String(data_arr.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;