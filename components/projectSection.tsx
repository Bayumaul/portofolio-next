"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import BurstBload2 from "./burst-bload-2";
import { useSectionInView } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLink, FaArrowDown } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import SectionHeading from "./section-heading";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
}

const ProjectSection: React.FC = () => {
  const { ref } = useSectionInView("Projects", 0.5);
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
  });
  const [showAllProjects, setShowAllProjects] = useState(false);

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  const displayedProjects = showAllProjects
    ? projectsData
    : projectsData.slice(0, 4);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="py-12 px-10 scroll-mt-28 mb-28"
      ref={ref}
      style={{ padding: "0 8%" }}
    >
      <div ref={sectionRef} className="container mx-auto">
        <div className="flex justify-center mb-2">
          <SectionHeading>🚀 Projects</SectionHeading>
          <BurstBload2 />
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-[#192D3E] text-black  border-white dark:border-[#192D3E] border-solid border-8 rounded-xl shadow-lg hover:shadow-xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-49 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4 text-justify">
                  {project.description}
                </p>
                <div className="flex justify-between items-end">
                  <div className="flex space-x-2">
                    {project.tech.map((tech, techIndex) => (
                      <img
                        key={techIndex}
                        src={tech}
                        alt={`Tech ${techIndex}`}
                        className="h-6 "
                      />
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-600 dark:text-gray-200 hover:underline text-xl`}
                      >
                        <BiLinkExternal />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-600 dark:text-gray-200 dark:hover:text-gray-100 hover:text-gray-700 text-xl`}
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* {!showAllProjects && (
          <div className="flex justify-center mt-10">
            <button
              onClick={toggleShowAllProjects}
              className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
            >
              Load More
              <FaArrowDown className="text-xs opacity-70 transition-all" />{" "}
            </button>
          </div>
        )} */}
      </div>
    </motion.section>
  );
};

export default ProjectSection;
