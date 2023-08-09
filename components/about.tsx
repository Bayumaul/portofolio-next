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
        I am website developer with 2 years of experience in website
        development, using Laravel for developing a website and web
        applications.I am a graduate of AMIKOM Yogyakarta University majoring in
        Information Systems. I have the ability to program using{" "}
        <span className="font-medium">
          Scrum, Bootstrap, Tailwind, Jquery, PHP, laravel, Codeigniter, MYSQL,
          and Git.
        </span>{" "}
        Have good analytical and communication skills and be able to work
        individually or in a team.
      </p>
    </motion.section>
  );
}
