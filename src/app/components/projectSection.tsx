"use client";

import React from "react";
import ProjectCard from "./projectCard";
import TagComponent from "./TagComponent";
import { useState, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "Siriraj Chatbot AI Hackathon",
    description:
      " I have built a Chatbot about Siriraj Chatbot in order to answer the general question of the patients which required to give the answer correctly with the Siriraj Hospital Dataset.",
    image: "/images/siriraj-chatbot.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "TEDxMahidolU Website",
    description:
      "As a backend developer , I have experienced in developing robust admin features that enable seamless CRUD operation.",
    image: "/images/tedx-website.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Data Pipeline and ETL Online Transaction Data",
    description:
      "I learned how to perform ETL processes, involved transforming data from Cloud Storage, orchestrating workflows using Apache Airflow, and loading the transformed data into BigQuery.",
    image: "/images/data-pipeline.png",
    tag: ["All", "App"],
  },
  {
    id: 4,
    title: "Propositum Game ( Java GUI )",
    description:
      "I have experienced in developing all features in this game which use Java Frameworks such as GUI , Object-Oriented and Functional Programming Style.",
    image: "/images/java-game.png",
    tag: ["All", "App"],
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [selectedId, setSelectedId] = useState("");

  const handleTagChange = (myTag: string) => {
    setTag(myTag);
  };

  const filteredProject = projectData.filter((project) => {
    return project.tag.includes(tag);
  });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="flex flex-col justify-center text-4xl items-center font-bold font-mono mt-4 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-200">
        Projects
      </h2>
      <div className="flex flex-row gap-4 px-6 py-6 justify-center">
        <TagComponent
          selectedTab={handleTagChange}
          // isActive={tag === "All"}
          tagName="All"
        />
        <TagComponent
          selectedTab={handleTagChange}
          // isActive={tag === "Web"}
          tagName="Web"
        />
        <TagComponent
          selectedTab={handleTagChange}
          // isActive={tag === "App"}
          tagName="App"
        />
      </div>
      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-6">
        {filteredProject.map((project, index) => (
          <motion.li
            layoutId={`${tag}-${index}`}
            key={`${tag}-${index}`}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            onClick={() => setSelectedId(`${tag}-${index}`)}
          >
            <ProjectCard
              key={project.id}
              id={project.id}
              imgUrl={project.image}
              title={project.title}
              description={project.description}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
