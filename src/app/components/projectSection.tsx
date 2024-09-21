"use client";

import React from "react";
import ProjectCard from "./projectCard";
import TagComponent from "./TagComponent";
import { useState } from "react";

const projectData = [
  {
    id: 1,
    title: "Siriraj Chatbot AI Hackathon",
    description:
      "I have experienced in developing all features in this game which use Java Frameworks such as GUI , Object-Oriented and Functional Programming Style.",
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
      "I have experienced in developing all features in this game which use Java Frameworks such as GUI , Object-Oriented and Functional Programming Style",
    image: "/images/java-game.png",
    tag: ["All", "App"],
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (myTag: string) => {
    setTag(myTag);
  };

  const filteredProject = projectData.filter((project) => {
    return project.tag.includes(tag);
  });

  return (
    <div className="">
      <h2 className="flex flex-col justify-center text-4xl items-center font-bold font-mono mt-4 mb-4 text-white">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-6">
        {filteredProject.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            imgUrl={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
