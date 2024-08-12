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
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        Hey there, I'm Akshita Gajengi. Numbers tell stories, and I'm here to
        translate them. I'm passionate about
        <span className="font-medium italic underline">
          {" "}
          SQL, Python, Power BI, and Tableau
        </span>
        , and I'm currently pursuing a
        <span className="font-medium"> Master's</span> in
        <span className="font-medium"> Business Analytics</span> at
        <span className="font-medium"> Northeastern University</span> to back
        it up!
      </p>
      <p className="mb-3">
        Whether boosting hotel bookings by 25% or optimizing marketing ROI, I
        love seeing how data can make a real-world impact. From crunching
        numbers in SQL to crafting eye-catching visualizations in Power BI, I'm
        all about making sense of the data puzzle.
      </p>
      <p className="mb-3">
        When I'm not deep in datasets, you might catch me
        <span className="italic"> commentating on women's soccer</span> or
        <span className="italic">
          {" "}
          brainstorming the next big marketing strategy for a music festival
        </span>
        .
      </p>
      <p>
        Want to chat about how we can use data to shake things up in your
        industry? <br />
        <a href="#contact" className="underline italic">
          Let's grab a virtual coffee and geek out over some analytics!
        </a>
      </p>
    </motion.section>
  );
}
