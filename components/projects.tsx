"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import BurstBload2 from "./burst-bload-2";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section id="projects" ref={ref} className="scroll-mt-28 mb-28">
      <div className="flex justify-center">
        <SectionHeading>🚀 Projects</SectionHeading>
        <BurstBload2 />
        <p>
          I've worked on a variety of projects, ranging from small MVPs to
          full-scale applications, also developed a wide array of features and
          functionalities in projects.
        </p>
      </div>
      {/* <div>
        <h1 className="text-center w-[min(100%,38rem)]">
          I am pleased to present my portfolio to you. In this portfolio, you
          will find a collection of works that reflect my dedication,
          creativity, and skills in the field I specialize in. I hope this
          portfolio can provide a comprehensive overview of my abilities and
          potential.
        </h1>
      </div> */}
      <div className="flex">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
