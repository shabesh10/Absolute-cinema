import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoArrowBackSharp } from 'react-icons/io5';
import { IoHomeSharp } from 'react-icons/io5';

const SearchResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get the movie data and credits from navigation state
  const { movie, credits } = location.state || {};

  // Handle case where no movie data is available
  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No movie data found</h2>
          <button 
            onClick={() => navigate('/search')}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors"
          >
            Back to Search
          </button>
        </div>
      </div>
    );
  }

  const backdropUrl = `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`; // Changed from 'original' to 'w1280' for faster loading

  return (
    <div className="lg:block lg:min-h-screen fixed inset-0 overflow-hidden z-[9999] bg-gray-900" // Added bg-gray-900 fallback while backdrop loads
      style={{
        // Only apply background image on lg and up
        ...(window.innerWidth >= 0
          ? {
              backgroundImage: `linear-gradient(to bottom, rgba(20,20,30,0.85) 0%, rgba(20,20,30,0.95) 60%), url(${backdropUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
            }
          : {}),
      }}>
      <div className="mt-18 flex items-center justify-center flex-col gap-6 lg:w-[80%] lg:mx-auto lg:mt-22">
        <section>
          <div className="flex gap-6 justify-between px-4 mt-2">
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-2xl">{movie?.title}</p>
              <div>
                <span className="text-sm">DIRECTED BY</span>
                <br />
                <span className="font-semibold">
                  {credits || "Unknown"}
                </span>
              </div>
              <p>
                {movie?.release_date?.substring(0, 4)} &middot;{" "}
                {movie?.runtime ? `${movie.runtime} mins` : "Runtime unknown"}
              </p>
            </div>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                alt="Poster"
                className="w-32 h-48 rounded-sm"
                
              />
            </div>
          </div>
          <div className="px-4 py-2">{movie?.overview}</div>
        </section>

        <div
          className="text-xl cursor-pointer absolute top-8 right-4 lg:top-8 lg:right-[11.5vw]" // Removed 'flex' class
          title="Go Home"
        >
          <IoHomeSharp onClick={() => navigate("/")} />
        </div>
        <div
          className="text-2xl cursor-pointer absolute top-8 left-4 lg:top-8 lg:left-[10.8vw]" // Removed 'flex' class
          title="Go Back"
        >
          <IoArrowBackSharp onClick={() => navigate(-1)} />
        </div>
      </div>
    </div>
  );
};

export default SearchResult;