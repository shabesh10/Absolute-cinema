import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";

const RandomResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const fullMovie = location.state?.fullMovie;
  console.log(fullMovie);

  return (
    <div className="mt-18 flex items-center justify-center flex-col gap-6">
      {/* <h1 className="font-semibold text-xl">Your randomly generated movie</h1> */}
      <section>
        {/* <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${fullMovie.backdrop_path}`}
            alt="backdrop"
            className=""
          />
        </div> */}
        <div className="flex gap-6 justify-between px-4 mt-2">
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-2xl">{fullMovie.title}</p>
            <p>
              <p className="text-sm">DIRECTED BY</p>
              <p className="font-semibold">{fullMovie.credits.crew[0].name}</p>
            </p>
            <p>
              {fullMovie.release_date.substring(0, 4)} &middot;{" "}
              {`${fullMovie.runtime} mins`}
            </p>
          </div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original/${fullMovie.poster_path}`}
              alt="Poster"
              className="w-32 h-48 rounded-sm"
            />
          </div>
        </div>
        <div className="px-4 py-2">{fullMovie.overview}</div>
      </section>
      <div className="flex text-xl cursor-pointer" title="Go Back">
        <IoArrowBackSharp onClick={() => navigate(-1)} />
      </div>
    </div>
  );
};

export default RandomResult;
