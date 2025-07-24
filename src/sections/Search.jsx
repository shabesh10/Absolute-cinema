import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { IoSearchSharp } from "react-icons/io5";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [creditsMap, setCreditsMap] = useState({});
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchInput = document.getElementById("searchbox");

    if (searchQuery.trim()) {
      setLoading(true);
      try {
        const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          searchQuery.trim()
        )}&api_key=${API_KEY}&language=en-US&page=1`;
        let response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        let data = await response.json();
        // console.log(data);

        if (data.results && data.results.length > 0) {
          setSearchResults(data.results.slice(0, 10)); // Limit to top 10
        } else {
          toast.error("No results found for your search.");
          setSearchResults([]);
          searchInput.focus();
        }
      } catch (error) {
        console.error("Search error:", error);
        toast.error("Error searching for movies. Please try again.");
        setSearchResults([]);
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Please enter a search term.");
      searchInput.focus();
    }
  };

  const fetchCredits = async (movieId) => {
    if (creditsMap[movieId]) return;

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      const director = data.credits?.crew?.find((p) => p.job === "Director");
      setCreditsMap((prev) => ({
        ...prev,
        [movieId]: {
          director: director?.name || "Unknown",
          runtime: data.runtime || null,
          fullMovieData: data, // Store full movie data
        },
      }));
    } catch (err) {
      console.error("Error fetching credits:", err);
      setCreditsMap((prev) => ({
        ...prev,
        [movieId]: {
          director: "Unknown",
          runtime: null,
          fullMovieData: null,
        },
      }));
    }
  };

  // Fetch credits for all search results
  useEffect(() => {
    if (searchResults.length > 0) {
      searchResults.forEach((movie) => {
        fetchCredits(movie.id);
      });
    }
  }, [searchResults]);

  // Handle movie selection and navigation
  const handleMovieClick = (movie) => {
    const movieDetails = creditsMap[movie.id];

    // Create enhanced movie object with runtime and other details
    const enhancedMovie = {
      ...movie,
      runtime: movieDetails?.runtime || null,
      // Add any other details from the full API response
      ...(movieDetails?.fullMovieData || {}),
    };

    // Navigate to search result page with enhanced movie data and credits
    navigate("/search-result", {
      state: {
        movie: enhancedMovie,
        credits: movieDetails?.director || "Unknown",
      },
    });
  };

  // Handle key press for search
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="scroll-container h-[calc(100vh-74px)] w-[80%] mx-auto overflow-y-scroll">

      <div id="search" className="scroll-mt-24" />

      <section className="w-full">
        {/* Fixed Search Bar */}
        <div className="sticky top-0 bg-transparent z-20 pt-6 pb-2">
          <form
            className="relative w-full flex items-center justify-center"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="searchbox"
              id="searchbox"
              placeholder="Search for a movie..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              disabled={loading}
              className="bg-gradient-to-r from-gray-700 via-gray-900 to-black border-2 border-gray-400 rounded-3xl px-4 py-1 md:px-5 md:py-2 outline-none w-full focus:border-green-500 focus:scale-100 transition-colors duration-300 focus:bg-gradient-to-r focus:from-gray-700 focus:via-gray-900 focus:to-black disabled:opacity-50"
            />
            <button
              type="submit"
              className="absolute right-0 disabled:opacity-50"
              disabled={loading}
            >
              <IoSearchSharp className="text-xl mr-2 hover:cursor-pointer" />
            </button>
          </form>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center mt-8">
            <div className="text-lg">Searching...</div>
          </div>
        )}

        {/* Render Results */}
        <div className="flex flex-col gap-8 mt-4">
          {searchResults.map((item) => (
            <div
              key={item.id}
              className="flex gap-2 cursor-pointer hover:bg-black/50 p-2 rounded-md transition-colors duration-300"
              onClick={() => handleMovieClick(item)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleMovieClick(item);
                }
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.title || "Movie Poster"}
                className="rounded-sm w-24 h-38 object-cover"
              />
              <div className="flex flex-col justify-center ml-4">
                <div className="text-md text-left font-semibold">
                  {item.title}
                </div>
                <div className="inline text-sm text-gray-300">
                  {item.release_date
                    ? `${item.release_date}`.substring(0, 4)
                    : "Unknown Year"}
                </div>
                {creditsMap[item.id] && (
                  <p className="text-sm text-gray-400">
                    {`Directed by ${
                      creditsMap[item.id]?.director || creditsMap[item.id]
                    }`}
                  </p>
                )}
                {item.overview && (
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {item.overview.length > 100
                      ? `${item.overview.substring(0, 100)}...`
                      : item.overview}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {searchResults.length === 0 && searchQuery && !loading && (
          <div className="flex justify-center items-center mt-8"></div>
        )}
      </section>
    </div>
  );
};

export default Search;
