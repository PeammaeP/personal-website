import React from "react";
import { motion } from "framer-motion";

// @ts-expect-error : parameter type can be any type
const ProjectCard = ({ id, imgUrl, title, description }) => {
  return (
    <motion.div
      key={id}
      className="mt-8 ml-8 hover:-translate-y-3"
      whileHover={{ scale: [null, 1, 1.1] }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="h-52 md:h-72 w-full relative object-center rounded-t-xl"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="text-white rounded-b-xl bg-[#121212] px-5 py-5">
        <h5 className="text-2xl font-mono font-bold mt-4">{title}</h5>
        <p className="mt-2 font-mono text-lg text-left">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
