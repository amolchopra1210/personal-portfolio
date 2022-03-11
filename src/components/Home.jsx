import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Amol Chopra
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Front End developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          With over 5 years of experience in tinkering with Javascript and over
          2 years of experience in React JS. I am currently experimenting with
          the MERN stack and transitioning into a full stack role. I'm focused
          on building responsive front end web applications
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 hover:" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
