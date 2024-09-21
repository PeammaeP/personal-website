"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="py-8 grid grid-col-1 sm:grid-cols-12">
        {/* make the first 7 col  */}
        <div className="col-span-7 place-content-center text-center sm:text-left ">
          <h1 className="font-mono hover:-translate-y-2 grid font-bold mb-4 text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Hello, I{"'"}m
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Peam",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Tech Enthusiate",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
              className="text-white"
            />
          </h1>
          <p className="py-4 pr-2 font-mono font-semibold text-white text-lg text-left">
            Driven student passionate about Machine Learning , Software
            Engineering and Data Engineering. My ultimate goal is to leverage
            this combined knowledge to create innovative solutions and
            positively impact the field.
          </p>
          <div className="sm:mt-6 mt-5 lg:mt-4">
            <button className="px-5 py-4 w-full sm:w-fit font-bold rounded-full bg-transparent text-black hover:bg-[#edeaea] mr-5 mt-3 font-mono hover:-translate-y-2 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
              Github Pages
            </button>
            <button className="px-1 py-1 w-full sm:w-fit font-bold rounded-full hover:bg-[#1f1e1e] mt-5 hover:-translate-y-2 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
              <span className="font-mono block bg-[#080808] rounded-full hover:bg-slate-800 px-5 py-3 text-white">
                Download CV
              </span>
            </button>
          </div>
        </div>
        {/* make the division */}
        <div className="col-span-5 place-self-center mt-6 lg:mt-0">
          <div className="hover:-translate-y-2 rounded-full bg-[#161515] w-[270px] h-[270px]">
            {/* using absolute transform to make the image fit with circle */}
            <Image
              src="/images/myImageDisplay.png"
              alt="myImageDisplay"
              className="absolute transform translate-x-11 translate-y-3"
              width={180}
              height={180}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
