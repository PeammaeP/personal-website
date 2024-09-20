"use client";

import Image from "next/image";
import TabComponent from "./TabComponent";
import { useState, useTransition } from "react";

const TAB_DATA = [
  {
    tabName: "Skills",
    statusName: "Skills",
    description: (
      <div className="pl-2">
        <ul>
          <li className="text-bold mt-2">C</li>
          <li className="text-bold mt-2">C++</li>
          <li className="text-bold mt-2">Java</li>
          <li className="text-bold mt-2">JavaScript</li>
          <li className="text-bold mt-2">TypeScript</li>
        </ul>
      </div>
    ),
  },
  {
    tabName: "Projects",
    statusName: "Projects",
    description: (
      <div className="pl-2">
        <ul>
          <li className="text-bold mt-2">
            Building Siriraj Hospital Chatbot Competition
          </li>
          <li className="text-bold mt-2"> TEDxMahidolU Website</li>
          <li className="text-bold mt-2">Java GUI Game : Propositum Game</li>
          <li className="text-bold mt-2">
            Building Pipeline & ELT Online Transaction Data{" "}
          </li>
        </ul>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (statusName: string) => {
    startTransition(() => {
      setTab(statusName);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-10 items-center py-8 px-4 xl:gap-16 sm:py-16">
        <Image
          src="/images/tedx.png"
          alt="tedxmahidolu"
          width={700}
          height={700}
          className="h-full object-cover hover:-translate-y-3"
        />
        <div className="text-white font-mono">
          <h1 className="text-4xl mb-4 mt-4 font-bold">About Me</h1>
          <p className="font-mono text-base">
            I{"'"}m currently studying in Computer Engineering , Mahidol
            University. I{"'"}m fascinated by how machine learning can analyze
            data and solve complex problems. I have experienced in Data
            Engineering Project with Apache Spark , Apache Airflow , Google
            Cloud Services and Website Developing Project with TypeScript ,
            NestJS and Database MongoDB
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabComponent
              selectedTab={() => handleTabChange("Skills")}
              isActive={tab === "Skills"}
              tabName="Skills"
            />
            <TabComponent
              selectedTab={() => handleTabChange("Projects")}
              isActive={tab === "Projects"}
              tabName="Projects"
            />
          </div>
          <div className="mt-4">
            {TAB_DATA.find((value) => value.tabName === tab)?.description}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
