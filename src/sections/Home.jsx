import React from "react";

const Home = () => {
  return (
    <div id="home" className="min-h-screen w-screen mt-32 flex flex-col items-center px-4 gap-14 lg:flex-row lg:justify-around">
      <section>
        <h1 className="text-3xl md:text-5xl font-semibold text-center">
          Welcome, Agent 007
        </h1>
        <p className="text-center text-gray-400 mt-2 lg:text-left">
          Scroll down to explore!
        </p>
      </section>
      <section>
        <img src="src/assets/scorcese.jpg" alt="Scorcese Image" className="rounded-xl lg:rounded-full lg:h-[35rem] lg:w-[35rem] border-2" />
      </section>
    </div>
  );
};

export default Home;
