import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";

const RandomResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const fullMovie = location.state?.fullMovie;
  // console.log(fullMovie);
  const backdropUrl = `https://image.tmdb.org/t/p/original/${fullMovie.backdrop_path}`;
  

  return (
    <div className="lg:block lg:min-h-screen fixed inset-0 overflow-hidden z-50"
    style={{
        // Only apply background image on lg and up
        ...(window.innerWidth >= 1024
          ? {
              backgroundImage: `linear-gradient(to bottom, rgba(20,20,30,0.85) 0%, rgba(20,20,30,0.95) 60%), url(${backdropUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
            }
          : {}),
      }}>
    <div
      className="mt-18 flex items-center justify-center flex-col gap-6 lg:w-[80%] lg:mx-auto lg:mt-22"
    >
      {/* <h1 className="font-semibold text-xl">Your randomly generated movie</h1> */}
      <section>
        
        <div className="flex gap-6 justify-between px-4 mt-2">
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-2xl">{fullMovie?.title}</p>
            <div>
              <span className="text-sm">DIRECTED BY</span>
              <br />
              <span className="font-semibold">
                {fullMovie?.credits.crew[0].name}
              </span>
            </div>
            <p>
              {fullMovie?.release_date.substring(0, 4)} &middot;{" "}
              {`${fullMovie?.runtime} mins`}
            </p>
          </div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original/${fullMovie?.poster_path}`}
              alt="Poster"
              className="w-32 h-48 rounded-sm"
            />
          </div>
        </div>
        <div className="px-4 py-2">{fullMovie?.overview}</div>
      </section>

      {/* <div>
        <div
          className="flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition"
          onClick={() => navigate("/")}
          title="Go Home"
        >
          <IoHomeSharp className="text-2xl" />
          Go Home
        </div>
      </div> */}
      <div
        className="flex text-xl cursor-pointer absolute top-8 right-4 lg:top-8 lg:right-[11.5vw]"
        title="Go Back"
      >
        <IoHomeSharp onClick={() => navigate("/")} />
      </div>
      <div
        className="flex text-2xl cursor-pointer absolute top-8 left-4 lg:top-8 lg:left-[10.8vw]"
        title="Go Back"
      >
        <IoArrowBackSharp onClick={() => navigate(-1)} />
      </div>
    </div>
    </div>
  );
};

export default RandomResult;
