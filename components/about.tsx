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
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently a {" "}
        <span className="font-medium">Junior</span>, completing my Bachelors at {" "}
        <span className="font-medium">UNC Charlotte</span>.{" "}
        My major is Computer Science with a Concentration in <span className="underline">AI & Robotics.</span> My goal is to become a full-stack developer. I know
        {" "}
        <span className="font-medium">
          Java, Python, JavaScript, C, React
        </span>
        . I am also familiar with TypeScript and TailwindCSS. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">internship</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and also photography. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about how to create food of {" "}
        <span className="font-medium">different cuisine</span>.
      </p>
    </motion.section>
  );
}
