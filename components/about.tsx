"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
// import { useSectionInView } from "@/lib/hooks";

export default function About() {
  // const { ref, inView } = useInView();
  // const { setActiveSection } = useActiveSectionContext();
  // if (inView) {
  //   setActiveSection("About");
  // }
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      // ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        {/* After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. */}
        I am a graduate of AMIKOM Yogyakarta University majoring in Information
        Systems. I have the ability to program using{" "}
        <span className="font-medium">
          PHP, Javascript, Jquery, Laravel,Codeigneter, MYSQL, and git.
        </span>
        Have good analytical and communication skills and be able to work
        individually or in a team. I have internship experience as Back End
        Developer at PT Zeniora Edukasi for 3 months and Web Programmer at PT
        Time Excelindo for 6 months. I have work experience as a Software
        Engineer at PT Mandala Dwi Pantara Proteksi for 1 year.
      </p>

      {/* <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
    </motion.section>
  );
}
function useSectionInView(arg0: string): { ref: any } {
  throw new Error("Function not implemented.");
}
