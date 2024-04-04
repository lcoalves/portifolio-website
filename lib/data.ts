import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Game developer",
    location: "Marília, SP",
    description:
      "I graduated after 1,5 years of studying. I immediately found a job as a business analyst.",
    icon: React.createElement(LuGraduationCap),
    date: "2014 - 2015",
  },
  {
    title: "Business Analyst",
    location: "Marília, SP",
    description: "I worked as a business analyst for 2 years.",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2018",
  },
  {
    title: "Computer Science",
    location: "Marília, SP",
    description:
      "I graduated after 4 years of studying. I also upskilled my mathematical, development and negotiation skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2019",
  },
  {
    title: "Full stack Developer",
    location: "Marília, SP",
    description:
      "I worked as a full stack developer more than 2 years. I take to production my first application, upskilled my frontend and backend skills.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2021",
  },
  {
    title: "Senior software lead",
    location: "Campinas, SP",
    description:
      "I worked as a senior software leader for 1 year. I upskilled my leadership skills, leading many developers so far.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Software architect",
    location: "Campinas, SP",
    description:
      "Now I work as a software architect. I upskilled my architectural skills.",
    icon: React.createElement(FaReact),
    date: "2022 - now",
  },
  {
    title: "Solutions architect",
    location: "São Paulo, SP",
    description:
      "I graduated after 1,5 years of studying. I also upskilled my architectural, organization and negotiation skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Wait a moment",
    description: "Comingo soon...",
    tags: ["React", "Next.js", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  // {
  //   title: "CorpComment",
  //   description:
  //     "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
  //   tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
  //   imageUrl: corpcommentImg,
  // },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Flutter",
  "Java",
  ".NET",
  "Git",
  "Rest",
  "GraphQL",
  "SQL",
  "NoSQL",
  "Micro services",
  "Micro frontends",
  "Piramyd tests",
  "Unit tests",
  "Integration tests",
  "E2E tests",
] as const;
