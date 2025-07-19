import React, { useState } from "react";
import Slide from "./Slide";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
let data_arr = [
  {
    title: "IMDB Top 250",
    desc: "Explore the highest-rated movies of all time as voted by millions on IMDb. A perfect starting point for classic and critically acclaimed films.",
    imageUrl: "https://images.unsplash.com/photo-1729860649288-73dc62463c71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://www.imdb.com/chart/top/",
  },
  {
    title: "Letterboxd Top 250",
    desc: "Curated by the most active cinephiles online, this list highlights beloved and rewatchable films with strong cult followings.",
    imageUrl: "src\\assets\\letterboxd-rating.webp",
    url: "https://letterboxd.com/jack/list/official-top-250-films-with-the-most-fans/",
  },
  {
    title: "Favourite Director Binge",
    desc: "Dive deep into the works of your favorite directors — from Nolan to Fincher — and experience their storytelling evolution.",
    imageUrl: "https://images.unsplash.com/photo-1577190651915-bf62d54d5b36?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    url: "",
  },
  {
    title: "Franchise Binge",
    desc: "Get lost in expansive cinematic universes — Marvel, Harry Potter, LOTR, James Bond, Star wars and more — in back-to-back marathons.",
    imageUrl: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "",
  },
  {
    title: "Genre Binge",
    desc: "You must have a favourite genre, binge watch top films from that genre.",
    imageUrl: "https://images.unsplash.com/photo-1548754218-e9ef33578d04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "",
  },
];
const Guide = () => {
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
  const dotUpdater = (idx) => {
    setCurrIdx(idx);
  };

  return (
    <div id="guide" className="min-h-screen scroll-mt-18 flex flex-col items-center justify-center">
      <div>
      <h1 className="font-semibold text-2xl text-center pt-20">Ultimate Movie Binge Guide</h1>
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
          className="absolute top-[50%] -translate-x-0 translate-y-[-140px] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={prevSlide}
        >
          <BsChevronCompactLeft size={30} />
        </div>
        <div
          className="absolute top-[50%] -translate-x-0 translate-y-[-140px] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
          onClick={nextSlide}
        >
          <BsChevronCompactRight size={30} />
        </div>
        <div className="absolute flex bottom-74">
          {data_arr.map((slide, index) => (
            <div
              key={index}
              className={`text-2xl cursor-pointer hover:text-3xl hover:text-white text-gray-400` + (curridx === index ? "text-white text-3xl" : "")}
              onClick={() => dotUpdater(index)}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Guide;
