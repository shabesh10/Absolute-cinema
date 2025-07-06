import React from "react";

const Home = () => {
  const greets = [
    "Welcome, Agent 007",
    "Welcome, Avenger",
    "Let's find your next magical watch.",
    "One site to rule your movie nights.",
    "Welcome to the watch side.",
    "Assemble your perfect movie night.",
    "Justice begins with a great film.",
    "Welcome to the multiverse of movies.",
    "Winter is bingeing.",
    "Expecto Watchtronum.",
    "May your stream never buffer.",
    "This is the way to discover your movie.",
  ];
  let greet = greets[Math.floor(Math.random() * greets.length)];
  return (
    <div
      id="home"
      className="min-h-screen w-screen mt-32 flex flex-col items-center px-4 gap-14 lg:flex-row lg:justify-around"
    >
      <section>
        <h1 className="text-3xl md:text-5xl font-semibold text-center">
          {greet}
        </h1>
        <p className="text-center text-gray-400 mt-2 lg:text-left">
          Scroll down to explore and watch some quality cinema!
        </p>
      </section>
      <section>
        <img
          src="src/assets/scorcese.jpg"
          alt="Scorcese Image"
          className="rounded-xl lg:rounded-full lg:h-[35rem] lg:w-[35rem] border-2"
        />
      </section>
    </div>
  );
};

export default Home;
