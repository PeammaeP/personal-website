"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-col w-full h-fit bg-[#080808] text-[#e5e7eb] px-14 py-14">
        <div className="flex flex-row">
          <div className="flex flex-col gap-2 justify-center w-[35%] w-[35%]">
            <div className="flex items-center w-full gap-4">
              <div className="text-3xl font-bold font-mono">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Thank you for view my website",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Your time is much appreciated",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "1em", display: "inline-block" }}
                  repeat={Infinity}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-200"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row w-[65%] justify-end gap-16 text-nowrap">
            <div className="grid grid-cols-2 gap-12">
              <div className="flex flex-col gap-2">
                <div className="font-bold uppercase text-[#9ca3af] pb-3 font-mono text-xl">
                  Navigation
                </div>{" "}
                <a
                  href="#about"
                  className="hover:underline font-bold font-mono text-white"
                >
                  About Me
                </a>{" "}
                <a
                  href="#projects"
                  className="hover:underline font-bold font-mono text-white"
                >
                  Projects
                </a>{" "}
                <a
                  href="#contact"
                  className="hover:underline font-bold font-mono text-white"
                >
                  Contact
                </a>{" "}
              </div>
              {/* <div className="flex flex-col gap-2">
                <div className="font-bold uppercase text-[#9ca3af] pb-3">
                  Legal
                </div>{" "}
                <a href="#xxx" className="hover:underline">
                  Imprint
                </a>{" "}
                <a href="#xxx" className="hover:underline">
                  Privacy Policy
                </a>{" "}
                <a href="#xxx" className="hover:underline">
                  Terms of Use
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="w-full border-t border-gray-500 my-8"></div>
        <div className="mt-2 text-center text-2xl font-bold font-mono text-white">
          © 2024 PeamMiiZ - All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
