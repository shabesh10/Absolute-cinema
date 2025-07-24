import React from "react";
import logo from "../assets/tmdb_logo.svg";

const About = () => {
  const year = new Date().getFullYear();
  return (
    <div id="about" className="h-[calc(100vh-70px)] flex flex-col items-center justify-between">
      <section className="flex flex-1 justify-center items-center">
        <div className="flex flex-col items-center">
          
        <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">
          <img
            src={logo}
            alt="TMDB"
            className="h-40 w-40"
          />
        </a>
        <p className="text-center text-sm px-6 md:text-base">This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
        </div>
      </section>
      <section>
        <hr className="my-4 border-t-2 border-gray-700 w-sm md:w-2xl lg:w-7xl mx-auto rounded" />
        <footer className="text-center text-sm text-gray-400 py-6">
          <p>
            Built by{" "}
            <span className="font-semibold text-gray-200">Shabeshvaran S</span>{" "}
            &copy; {year} —{" "}
            <a
              href="https://github.com/shabesh10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
          </p>
        </footer>
      </section>
    </div>
  );
};

export default About;
