"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { skillsData, skilss } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const [isHover, setIsHover] = useState(false);
  const [dataIndex, setDataIndex] = useState(0);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>🎯 Specialized Skills</SectionHeading>
      {/* <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul> */}
      <div className="grid xl:grid-cols-5 md:grid-cols-4 grid-cols-4 xl:gap-10 md:gap-8 gap-7 items-center">
        {skilss.map((skill, index) => (
          <div key={index} className="relative mt-5 flex justify-center">
            <motion.div
              onMouseOver={() => {
                setIsHover(true);
                setDataIndex(index);
              }}
              onMouseOut={() => setIsHover(false)}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="relative flex justify-center z-30 md:w-[144px] w-[70px] md:h-[140px] h-[71px] rounded-md bg-white dark:bg-[#192D3E] md:p-5 p-3 shadow-[8px_8px_0_0_#000000] dark:shadow-[8px_8px_0_0_#334155] dark:hover:shadow-[15px_15px_0_0_#334155] hover:shadow-[15px_15px_0_0_#000000] transition-shadow"
            >
              <Image
                src={skill.imgUrl}
                alt="Bayu Maulana Ikhsan"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="md:w-16 w-6"
              />
              {/* <div
                className={`${
                  isHover &&
                  dataIndex === index &&
                  "cursor-pointer bg-[#68E3FF] blur-[20px] z-0 opacity-[0.2] absolute md:w-[144px] w-[85px] md:h-[114px] h-[55px] bottom-0"
                }`}
              /> */}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
