import React, { useState } from "react";
import Slide from "./Slide";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Guide = () => {
  let data_arr = [
    {
      title: "IMDB Top 250",
      desc: "Explore the highest-rated movies of all time as voted by millions on IMDb. A perfect starting point for classic and critically acclaimed films.",
      imageUrl: "",
      url: "https://www.imdb.com/chart/top/",
    },
    {
      title: "Letterboxd Top 250",
      desc: "Curated by the most active cinephiles online, this list highlights beloved and rewatchable films with strong cult followings.",
      imageUrl: "",
      url: "https://letterboxd.com/jack/list/official-top-250-films-with-the-most-fans/",
    },
    {
      title: "Favourite Director Binge",
      desc: "Dive deep into the works of your favorite directors — from Nolan to Tarantino — and experience their storytelling evolution.",
      imageUrl: "",

      url: "",
    },
    {
      title: "Franchise Binge",
      desc: "Get lost in expansive cinematic universes — Marvel, Harry Potter, LOTR, and more — in back-to-back marathons.",
      imageUrl: "",
      url: "",
    },
    {
      title: "Genre Binge",
      desc: "Craving horror? Romance? Sci-fi? This guide lets you pick a genre and go all-in with the most iconic entries.",
      imageUrl: "",
      url: "",
    },
  ];

  // Render the guide section with slides
  // Each slide will display a title, description, image, and an optional link
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

  return (
    <div id="guide" className="min-h-screen scroll-mt-18">
      <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative flex items-center justify-center">
        <div className="w-full h-full rounded-xl">
          <Slide
            title={data_arr[curridx].title}
            desc={data_arr[curridx].desc}
            imageUrl={data_arr[curridx].imageUrl}
            url={data_arr[curridx].url}
          />
        </div>
        <div
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={prevSlide}
        >
          <BsChevronCompactLeft size={30} />
        </div>
        <div
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={nextSlide}
        >
          <BsChevronCompactRight size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {data_arr.map((slide, index) => (
            <div key={index} className="text-2xl cursor-pointer hover:text-3xl" onClick={() => setCurrIdx(index)}>
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guide;
