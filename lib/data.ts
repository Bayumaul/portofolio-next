import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wartafenoImg from "@/public/images/project/wartefeno/1.png";
import siakadImg from "@/public/images/project/siakad/1.png";
import amikomImg from "@/public/images/project/amikom/1.png";
import hrtoolsImg from "@/public/images/project/hr-tools/1.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const experiencesData = [
  {
    title: "Web Programmer",
    location: "BKAD Kabupaten Sleman",
    description:
      "Developing and overcoming user problems of Sistem Informasi Keuangan Daerah (SIKD) and Sistem Pengajuan Surat Rekening (SPSR) related to applicable policies of Sleman including, troubleshooting, disaster recovery planning & execution.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - Present",
  },
  {
    title: "Software Engineer",
    location: "PT Mandala Dwipantara Proteksi",
    description:
      "Developing and overcoming user problems of NRE-CORE related to applicable policies of PT. Reasuransi Nasional Indonesia including, troubleshooting, disaster recovery planning & execution.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2022 - Des 2022",
  },
  {
    title: "Programmer with Kampus Merdeka",
    location: "PT. Time Excelindo",
    description:
      "Develop features in HR TOOLS, including: fixing bugs, developing attendance with shifts and distances, applying for leave and overtime permits, and developing employee assessments",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2021 - Feb 2022",
  },
  {
    title: "Internship Back End Developer",
    location: "PT Zeniora Edukasi Teknologi",
    description:
      "Contribute to the development, fixing bugs, discussion about the new fiture in website.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2021 - Sep 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Ikan Me",
    description:
      "This website is an innovative platform designed to assist freshwater fishermen and fish farmers in the village of Berasan Mulya in marketing their products online. We are dedicated to supporting the local economy and the conservation of natural resources.",
    screenshots: ["images/project/siakad/1.png", "images/project/siakad/2.png"],
    image: "images/project/ikanme/1.png",
    tech: [
      "/images/icon/bootstrap.svg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
      "/images/icon/jquery-vertical.svg",
      "/images/icon/mysql.svg",
    ],
    demoUrl: "https://demo.gaspol.dev/",
    githubUrl: null,
  },
  {
    title: "Match Schedule MPL Indonesia",
    description:
      "This website is a demonstration of a clone that imitates the appearance and features of the official MPL Indonesia website. It provides information similar to the actual MPL Indonesia website, including match schedules, team listings, and standings.",
    screenshots: ["images/project/siakad/1.png", "images/project/siakad/2.png"],
    image: "images/project/mpl/1.png",
    tech: [
      "/images/icon/next-js.svg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      "/images/icon/framer-motion.svg",
    ],
    demoUrl: "https://mpl-id.vercel.app/",
    githubUrl: "https://github.com/Bayumaul/mpl-id-next",
  },
  {
    title: "SIAKAD SDN Tegalrandu",
    description:
      "This is a web-based application about creating report students, crud kelas, crud mata pelajaran, crud siswa, crud nilai students to report with kurikulum 2013",
    screenshots: ["images/project/siakad/1.png", "images/project/siakad/2.png"],
    image: "images/project/siakad/1.png",
    tech: [
      "/images/icon/bootstrap.svg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
      "/images/icon/jquery-vertical.svg",
      "/images/icon/mysql.svg",
    ],
    demoUrl: null,
    githubUrl: null,
  },
  {
    title: "Wartafeno",
    description:
      "Wartafeno is a website that is used to convey news from the LPMT Fenomena of UNY, this website was made using wordpress and elementor and mysql database.",
    screenshots: ["images/project/siakad/1.png", "images/project/siakad/2.png"],
    image: "images/project/wartefeno/1.png",
    tech: [
      "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/Elementor_icon.svg",
      "/images/icon/mysql.svg",
    ],
    demoUrl: "https://wartafeno.com/",
    githubUrl: null,
  },
  {
    title: "HR-TOOLS",
    description:
      "This is HR TOOLS which is used to manage employee data, starting from personal data, employee performance appraisal work to the attendance system.",
    image: "images/project/hr-tools/1.png",
    screenshots: ["images/project/siakad/1.png", "images/project/siakad/2.png"],
    tech: [
      "/images/icon/bootstrap.svg",
      "/images/icon/leaflet.svg",
      "/images/icon/codeigniter.svg",
      "/images/icon/jquery-vertical.svg",
      "/images/icon/mysql.svg",
    ],
    demoUrl: null,
    githubUrl: null,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "JavaScript",
  "TypeScript",
  "Tailwind",
  "Bootstrap",
  "Codeigneter",
  "Laravel",
  "React",
  "MYSQL",
  "Git",
  // "Framer Motion",
] as const;

export const skilss = [
  {
    id: 2,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    id: 3,
    imgUrl: "/images/icon/bootstrap.svg",
  },
  {
    id: 8,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
  },
  {
    id: 4,
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
  },
  {
    id: 5,
    imgUrl: "/images/icon/codeigniter.svg",
  },
  {
    id: 7,
    imgUrl: "/images/icon/mysql.svg",
  },

  {
    id: 9,
    imgUrl: "/images/icon/typescript.svg",
  },
  {
    id: 10,
    imgUrl: "/images/icon/javascript.svg",
  },
  {
    id: 1,
    imgUrl: "/images/icon/jquery-vertical.svg",
  },
  {
    id: 6,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  // {
  //   id: 10,
  //   imgUrl:
  //     "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
  // },
] as const;
