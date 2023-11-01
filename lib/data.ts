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
    title: "Sistem Informasi Logistik CGN",
    description:
      "The CGN Logistics Information System is a digital platform that integrates inventory management, inventory control, delivery monitoring, and logistics performance analysis to maximize the efficiency of CGN's logistics operations. The system also provides high security and an intuitive user interface.",
    screenshots: [
      "images/project/cekresi/1.png",
      "images/project/cekresi/3.png",
      "images/project/cekresi/4.png",
      "images/project/cekresi/2.png",
      "images/project/cekresi/6.png",
    ],
    image: "images/project/cekresi/1.png",
    tech: [
      "/images/icon/bootstrap.svg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
      "/images/icon/jquery-vertical.svg",
      "/images/icon/mysql.svg",
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "Inventory Management: Tracks, organizes, and optimizes stock levels for efficient resource allocation.",
      "Inventory Control: Empowers precise oversight with real-time updates on stock movements for accurate decision-making.",
      "Delivery Monitoring: Offers real-time visibility into logistics, enabling proactive responses to ensure timely deliveries.",
      "Performance Analysis: Utilizes powerful analytics to gain insights, identify improvements, and enhance operational efficiency.",
    ],
    languages: ["Laravel 10", "Bootstrap 5", "MYSQL 8.0", "Jquery"],
  },
  {
    title: "E-Commerce Ikan Me",
    description:
      "This website is an innovative platform designed to assist freshwater fishermen and fish farmers in the village of Berasan Mulya in marketing their products online. We are dedicated to supporting the local economy and the conservation of natural resources.",
    screenshots: [
      "images/project/ikanme/1.png",
      "images/project/ikanme/2.png",
      "images/project/ikanme/3.png",
      "images/project/ikanme/4.png",
      // "images/project/ikanme/5.png",
      "images/project/ikanme/6.png",
    ],
    image: "images/project/ikanme/1.png",
    tech: [
      "/images/icon/bootstrap.svg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
      "/images/icon/jquery-vertical.svg",
      "/images/icon/mysql.svg",
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "Online Marketplace: Provides a dedicated space for fishermen and fish farmers to create and manage their online stores, showcasing their products to a wider audience.",
      "Buy and Sell: Enables users to easily buy and sell freshwater products, fostering a vibrant online marketplace that connects local producers with consumers.",
      "Shipping and Delivery: Facilitates a streamlined shipping process, allowing sellers to arrange for the efficient and timely delivery of their products to customers.",
    ],
    languages: ["Laravel 9", "Bootstrap 5", "MYSQL 8.0", "Jquery"],
  },
  {
    title: "Match Schedule MPL Indonesia",
    description:
      "This website is a demonstration of a clone that imitates the appearance and features of the official MPL Indonesia website. It provides information similar to the actual MPL Indonesia website, including match schedules, team listings, and standings.",
    screenshots: [
      "images/project/mpl/2.png",
      "images/project/mpl/3.png",
      "images/project/mpl/4.png",
      "images/project/mpl/5.png",
    ],
    image: "images/project/mpl/1.png",
    tech: [
      "/images/icon/next-js.svg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      "/images/icon/framer-motion.svg",
    ],
    demoUrl: "https://mpl-id.vercel.app/",
    githubUrl: "https://github.com/Bayumaul/mpl-id-next",
    features: [
      "Match Schedules: Provides information about the schedule of matches in the MPL Indonesia league.",
      "Team Listings: Displays a list of teams participating in the MPL Indonesia league.",
      "Standings: Shows the current standings of the teams in the league, indicating their performance.",
      "Past Match Results: Displays the results and summaries of previous matches in the MPL Indonesia league.",
    ],
    languages: ["Next JS 13", "Tailwind CSS 3", "Framer Motion", "Typescript"],
  },
  {
    title: "SIAKAD SDN Tegalrandu",
    description:
      "This is a web-based application about creating report students, crud kelas, crud mata pelajaran, crud siswa, crud nilai students to report with kurikulum 2013",
    screenshots: [
      "images/project/siakad/2.png",
      "images/project/siakad/3.png",
      "images/project/siakad/4.png",
      "images/project/siakad/5.png",
      "images/project/siakad/7.png",
    ],
    image: "images/project/siakad/1.png",
    tech: [
      "/images/icon/bootstrap.svg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
      "/images/icon/jquery-vertical.svg",
      "/images/icon/mysql.svg",
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "Create, Read, Update and Delete Data Kelas, Siswa, and Mata Pelajaran.",
      "Create, Read, Update and Delete Data Nilai Siswa.",
      "Create, Read, Update and Delete Data User to Access App.",
      "If you add teacher data, it will Automatically Send an Email.",
      "You can add data with Multiple Row or Import from File Excel.",
      "Students can print their own report cards so parents can see student learning progress.",
      "Show Data Development of Student Grades With Charts.",
    ],
    languages: ["Laravel 8", "Bootstrap 4", "MYSQL 5.3", "Jquery"],
  },
  {
    title: "Wartafeno",
    description:
      "Wartafeno is a website that is used to convey news from the LPMT Fenomena of UNY, this website was made using wordpress and elementor and mysql database.",
    screenshots: [
      "images/project/wartefeno/2.png",
      "images/project/wartefeno/3.png",
      "images/project/wartefeno/4.png",
      "images/project/wartefeno/5.png",
    ],
    image: "images/project/wartefeno/1.png",
    tech: [
      "https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/Elementor_icon.svg",
      "/images/icon/mysql.svg",
    ],
    demoUrl: "https://wartafeno.com/",
    githubUrl: null,
    features: [
      "Redesign with new theme and design.",
      "Fixed some bug searching.",
      "Add Dark Mode.",
      "Added an author page to see which authors have written any articles.",
    ],
    languages: ["Wordpress", "MYSQL", "Elementor"],
  },
  {
    title: "HR-TOOLS",
    description:
      "This is HR TOOLS which is used to manage employee data, starting from personal data, employee performance appraisal work to the attendance system.",
    image: "images/project/hr-tools/1.png",
    screenshots: [
      "images/project/hr-tools/2.png",
      "images/project/hr-tools/3.png",
      "images/project/hr-tools/4.png",
      "images/project/hr-tools/5.png",
      "images/project/hr-tools/6.png",
    ],
    tech: [
      "/images/icon/bootstrap.svg",
      "/images/icon/leaflet.svg",
      "/images/icon/codeigniter.svg",
      "/images/icon/jquery-vertical.svg",
      "/images/icon/mysql.svg",
    ],
    demoUrl: null,
    githubUrl: null,
    features: [
      "Fixed Bug Create, Read, Update and Delete Data Employee, Siswa, and Mata Pelajaran.",
      "Create, Read, Update and Delete Employee Recruitment.",
      "Create, Read, Update and Delete Data Employee Performance appraisal.",
      "Create, Read, Update and Delete Data Employee attendance using a location with a leaflet.",
    ],
    languages: ["Codeigniter 3", "Bootstrap 3", "MYSQL 5.3", "Jquery"],
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
