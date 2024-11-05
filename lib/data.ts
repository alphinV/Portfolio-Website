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
    title: "Graduated HighSchool",
    location: "Charlotte, NC",
    description:
      "I graduated HighSchool with a 4.3 GPA and as a Road To Hire Scholar.",
    icon: React.createElement(LuGraduationCap),
    date: " 2023",
  },
  {
    title: "Junior in College",
    location: "Charlotte, NC",
    description:
      "Computer Science major with a concentration in AI & Robotics.",
    icon: React.createElement(CgWorkAlt),
    date: " '23 - Present ",
  },
  {
    title: "Full-Stack Intern Developer & Professor Assistant",
    location: "Charlotte, NC",
    description:
      "Full-stack intern developer at StockTaker and a Professor assistant for Intro To Java class at UNC Charlotte.",
    icon: React.createElement(FaReact),
    date: " '24 Aug - Present ",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "A portfolio website build with all my current web development knowledge.",
    tags: ["React, TypeScript, Tailwind, Next.js"],
    imageUrl: corpcommentImg,
    githubUrl: "https://github.com/yourusername/portfolio-website"
  },
  {
    title: "Russian Roulette",
    description:
      "A simple game with random number generation.",
    tags: ["Java"],
    imageUrl: rmtdevImg,
    githubUrl: "https://github.com/alphinV/Russian.Roulette"
  },
  {
    title: "Food Ordering App",
    description:
      "A Basic food ordering app without UI. It has features like adding items to cart, removing items from cart and ordering.",
    tags: ["Java"],
    imageUrl: wordanalyticsImg,
    githubUrl: "https://github.com/alphinV/basicFoodOrderingSystem"
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
] as const;
