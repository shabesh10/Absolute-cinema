import React from "react";

const Home = () => {
  return (
    <div id="home" className="min-h-screen w-screen mt-32 flex flex-col items-center px-4 gap-12">
      <section>
        <h1 className="text-3xl md:text-5xl font-semibold text-center">
          Welcome, true believer.
        </h1>
        <p className="text-center text-gray-400 mt-2">
          Absolute Cinema begins here.
        </p>
      </section>
      <section>
        <img src="src\assets\letterboxd-rating.webp" alt="" />
      </section>
    </div>
  );
};

export default Home;
