import React from "react";
import Work1 from "../assets/work1.png";
import Work2 from "../assets/work2.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Work1})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Next JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <a
                      href="https://blog-app-next-js-amolchopra1210.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link
                    </a>
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <a
                      href="https://github.com/amolchopra1210/blog-app-next-js"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Work2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl mx-auto font-bold text-white tracking-wider">
                React-Typescript Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <a
                      href="https://typescript-quiz-trivia.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <a
                      href="https://github.com/amolchopra1210/typescript-quiz-trivia"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Work2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl mx-auto font-bold text-white tracking-wider">
                React JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <a
                      href="https://food-delivery-app-amolchopra1210.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    <a
                      href="https://github.com/amolchopra1210/food-delivery-app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
