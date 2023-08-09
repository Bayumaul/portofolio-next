"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>👨‍💻 About Me</SectionHeading>
      <p>
        Hello, I'm Bayu! I am dedicated to continuously expanding my knowledge
        and skills in{" "}
        <span className="font-medium">fullstack web development </span> while
        also learning about new technologies. I am proficient in developing web
        applications, creating APIs, and striving to deliver high-quality code.
      </p>
    </motion.section>
  );
}
