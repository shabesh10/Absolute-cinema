import React from "react";
import { NavLink } from "react-router-dom";
import SpeedTestButton from "../helpers/GenerateButton";

const Random = () => {
  return (
    <div
      id="random"
      className="min-h-screen scroll-mt-16 flex flex-col items-center gap-28"
    >
      <section className="font-semibold text-2xl">
        Random movie generator
      </section>
      <section>
        <NavLink>
          <SpeedTestButton />
        </NavLink>
      </section>
      <section className="flex gap-10 flex-col font-semibold text-md">
        <article className="">Filters</article>
        <article className="flex flex-col gap-4 text-white">
          <div>
            <label htmlFor="genre" className="block mb-1 font-medium">
              Genre
            </label>
            <select
              id="genre"
              className="p-2 rounded text-white w-48"
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
            <label htmlFor="duration">Duration</label>
            <select name="duration" id="duration">
              <option value="">Any Length</option>
              <option value="short">Under 90 min</option>
              <option value="medium">90-120 min</option>
              <option value="long">Over 120 min</option>
            </select>
          </div>
          <div>
            <label htmlFor="language">Language</label>
            <select name="language" id="language">
              <option value="">Any Language</option>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="ta">Tamil</option>
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
