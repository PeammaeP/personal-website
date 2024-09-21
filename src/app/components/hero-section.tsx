"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [sayHelloClicked, setSayHelloClicked] = useState(false);

  const emojiVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: (i: number) => ({
      opacity: 1,
      scale: [1, 1.5, 1],
      y: [-20, 0],
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        opacity: { duration: 1 },
        scale: { duration: 0.5 },
      },
    },
  };

  const emojis = [
    "👋",
    "😊",
    "💻",
    "🚀",
    "🎉",
    "👋",
    "😊",
    "💻",
    "🚀",
    "🎉",
    "👋",
    "😊",
    "💻",
    "🚀",
    "🎉",
  ];

  const handleSayHello = () => {
    setSayHelloClicked(true);

    setTimeout(() => {
      setSayHelloClicked(false);
    }, 3000);
  };

  return (
    <section>
      <div className="py-8 grid grid-col-1 sm:grid-cols-12">
        {/* make the first 7 col  */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="col-span-7 place-content-center text-center sm:text-left "
        >
          <h1 className="font-mono hover:-translate-y-2 grid font-bold mb-4 text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Hello, I{"'"}m
            </span>
            <TypeAnimation
              sequence={["Peam", 1000, "Tech Enthusiate", 1000]}
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
            <button
              className="px-5 py-4 w-full sm:w-fit font-bold rounded-full bg-transparent text-black hover:bg-[#edeaea] mr-5 mt-3 font-mono hover:-translate-y-2 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
              onClick={() => handleSayHello()}
            >
              Say Hello
            </button>
            <button className="px-1 py-1 w-full sm:w-fit font-bold rounded-full hover:bg-[#1f1e1e] mt-5 hover:-translate-y-2 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
              <span className="font-mono block bg-[#080808] rounded-full hover:bg-slate-800 px-5 py-3 text-white">
                <Link href="https://www.canva.com/design/DAF8HUGnvIQ/pdsJW16_6FTtsC1JMuSRiQ/edit?utm_content=DAF8HUGnvIQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                  Download CV
                </Link>
              </span>
            </button>
          </div>
          {sayHelloClicked && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center pointer-events-none">
              {emojis.map((emoji, index) => (
                <motion.span
                  key={index}
                  variants={emojiVariants}
                  initial="initial"
                  animate="animate"
                  custom={index}
                  className="absolute text-5xl"
                  style={{
                    top: `${Math.random() * 80}%`,
                    left: `${Math.random() * 80}%`,
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </div>
          )}
        </motion.div>
        {/* make the division */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1.4, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeatDelay: 1,
          }}
          className="col-span-5 place-self-center mt-6 lg:mt-0"
        >
          <motion.div
            whileHover={{ scale: [null, 1.2, 1.3] }}
            transition={{ duration: 0.3 }}
            className="hover:-translate-y-2 rounded-full bg-[#161515] w-[270px] h-[270px]"
          >
            {/* using absolute transform to make the image fit with circle */}
            <Image
              src="/images/myImageDisplay.png"
              alt="myImageDisplay"
              className="absolute transform translate-x-11 translate-y-3"
              width={180}
              height={180}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
