// import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className='z-20'>
    <div name="home" className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078] z-20">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full z-20">
        <p className="text-gray-50 text-lg z-20">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#00FFCA] z-20">
          Akash Dewangan
        </h1>
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-50 pt-2 flex z-20">
            <span className='mr-2 z-20'>I am</span>
            <div className='z-20'>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Frontend Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Competitive Programmer")
                  .start();
              }}
            />
            </div>
          </h2>
        </div>
        <p className="text-gray-300 py-4 leading-8 z-20">
          A budding programmer with special interest in Competitive Programming and Web Development. Agile minded and dedicated with a stronghold in analytical thinking and problem solving, looking for a suitable position to utilize and improve my skills.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold z-20">
            View Work{" "}
            <span className="group-hover:translate-x-1 duration-300 z-20">
              {" "}
              <HiArrowNarrowRight className="ml-4 z-20" />
            </span>
          </button>
        </div>
      </div>
    </div>

    </div>
  );
}

export default Home;