import React, { useState } from "react";
import GenerateButton from "./../helpers/GenerateButton";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Random = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    genre: "",
    duration: "",
    language: "",
  });

  let { genre, duration, language } = data;

  const getter = (event) => {
    let element = event.target;
    let value = element.value;
    let key = element.name;
    setData({ ...data, [key]: value });
  };

  const handleGenerate = async () => {
    // fetching movies based on filters
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    // console.log(data);
    let url =
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}` +
      `&vote_count.gte=1000&sort_by=vote_average.desc`;
    if (language) {
      if (language === "en" || language === "fr" || language === "es" || language === "it") {
        url += `&with_original_language=${language}`;
      } else {
        url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
        url += `&with_original_language=${language}`;
      }
    }
    if (genre) url += `&with_genres=${genre}`;

    if (duration === "short") url += `&with_runtime.lte=90`;
    if (duration === "medium")
      url += `&with_runtime.gte=90&with_runtime.lte=120`;
    if (duration === "long") url += `&with_runtime.gte=120`;

    const page = Math.floor(Math.random() * 10) + 1;
    url += `&page=${page}`;

    try {
      let response = await fetch(url);
      let { results = [] } = await response.json();
      if (!results.length) {
        toast.error("No movies found—try loosening the filters a bit.");
        return;
      }
      const movie = results[Math.floor(Math.random() * results.length)];
      const detailsRes = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}&append_to_response=credits`
      );
      const fullMovie = await detailsRes.json();
      navigate("/random-result", { state: { fullMovie } });
    } catch (err) {
      console.error("Error fetching movie:", err);
      toast.error("Failed to fetch movie. Please try again.");
    }
  };
  return (
    <div
      id="random"
      className="h-screen flex flex-col justify-center items-center gap-16 lg:flex-wrap"
    >
      <section className="font-semibold text-3xl">
        Random movie generator
      </section>
      <section>
        <div
          className="flex items-center justify-center"
          onClick={handleGenerate}
        >
          <GenerateButton />
        </div>
      </section>
      <section className="flex gap-10 flex-col font-semibold text-md">
        <article className="text-lg">Filters</article>
        <article className="flex flex-col gap-4 text-white">
          <div>
            <label htmlFor="genre" className="block mb-1 font-medium">
              Genre
            </label>
            <select
              className="p-1 rounded text-white bg-black/90 w-48 text-sm border border-gray-600 focus:border-gray-400 focus:outline-none transition-colors"
              onChange={getter}
              value={genre}
              name="genre"
              id="genre"
            >
              <option value="">All Genres</option>
              <option value="28">Action</option>
              <option value="35">Comedy</option>
              <option value="18">Drama</option>
              <option value="27">Horror</option>
              <option value="10749">Romance</option>
              <option value="878">Sci-Fi</option>
              <option value="99">Documentary</option>
              <option value="16">Animation</option>
            </select>
          </div>
          <div>
            <label htmlFor="duration" className="block mb-1 font-medium">
              Duration
            </label>
            <select
              className="p-1 rounded text-white bg-black/90 w-48 text-sm border border-gray-600 focus:border-gray-400 focus:outline-none transition-colors"
              onChange={getter}
              value={duration}
              name="duration"
              id="duration"
            >
              <option value="">Any Length</option>
              <option value="short">Under 90 min</option>
              <option value="medium">90-120 min</option>
              <option value="long">Over 120 min</option>
            </select>
          </div>
          <div>
            <label htmlFor="language" className="block mb-1 font-medium">
              Language
            </label>
            <select
              name="language"
              id="language"
              className="p-1 rounded text-white bg-black/90 w-48 text-sm"
              onChange={getter}
              value={language}
            >
              <option value="">Any Language</option>
              <option value="en">English</option>
              <option value="ta">Tamil</option>
              <option value="hi">Hindi</option>
              <option value="te">Telugu</option>
              <option value="ml">Malayalam</option>
              <option value="kn">Kannada</option>
              <option value="ur">Urdu</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="it">Italian</option>
            </select>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Random;
