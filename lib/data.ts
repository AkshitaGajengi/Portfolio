import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
SiTypescript;
import {
  SiTailwindcss,
  SiPrisma,
  SiMongodb,
  SiRedux,
  SiExpress,
  SiMysql,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiBlockchaindotcom,
  SiCivicrm,
  SiPowerbi,
  SiTableau,
  SiJira,
  SiMicrosoftexcel,
  SiMicrosoftvisio,
  SiGoogleanalytics,

} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
//@ts-ignore
import basket from "@/public/basket.jpg";
//@ts-ignore
import Crude_oil from "@/public/Crude_oil.jpg";
//@ts-ignore
import Healthcare from "@/public/Healthcare.jpg";
//@ts-ignore
import netflix from "@/public/netflix.jpg";
import { color } from "framer-motion";
export const skillsDataMap = [
  { text: "CRM", icon: React.createElement(SiCivicrm), color: "#3178c6" },
  { text: "Microsoft Excel", icon: React.createElement(SiMicrosoftexcel), color: "#3178c6" },
  { text: "JIRA", icon: React.createElement(SiJira), color: "#3178c6" },
  { text: "Google Analytics", icon: React.createElement(SiGoogleanalytics), color: "#3178c6" },
  { text: "Microsoft Visio", icon: React.createElement(SiMicrosoftvisio), color: "#3178c6" },
  { text: "HTML", icon: React.createElement(FaHtml5), color: "#e34c26" },
  { text: "CSS", icon: React.createElement(FaCss3Alt), color: "#264de4" },
  { text: "Tableau", icon: React.createElement(SiTableau), color: "#4479a1" },
  { text: "Git", icon: React.createElement(FaGitAlt), color: "#f34f29" },
  { text: "PowerBI", icon: React.createElement(SiPowerbi), color: "#4479a1" },
  { text: "SQL", icon: React.createElement(SiMysql), color: "#4479a1" },
  { text: "Python", icon: React.createElement(FaPython), color: "#3776ab" },
];
export const skills = Object.fromEntries(
  skillsDataMap.map((skill) => [skill.text.toLowerCase(), skill])
);
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
    title: "Marketing Strategist",
    company: "Kreative Keeda Entertainment",
    location: "Mumbai",
    description:
      "Boosted event attendance by 30% through data-driven marketing strategies and SEO optimization. Managed social media for top musical acts, increasing follower engagement by 40% and leveraging analytics for targeted campaign improvements",
    icon: React.createElement(LuGraduationCap),
    date: "06/2021 - 12/2021",
  },
  {
    title: "Business Analyst",
    company: "ConceptNext Media",
    location: "Mumbai",
    description:
      "Elevated guest engagement by 30% and online bookings by 25% through in-depth data analysis of marketing campaigns. Constructed Power BI dashboards to visualize KPIs, leading to a 15% increase in marketing ROI and significant improvements in online reputation management.",
    icon: React.createElement(LuGraduationCap),
    date: "08/2022 - 06/2023",
  },
  {
    title: "Graduate Teaching Assistant",
    company: "D'Amore-McKim School of Business at Northeastern University",
    location: "Bostan,MA",
    description: `Instructed and supported students in MKTG6234 Marketing Analytics, focusing on data analysis and case study interpretation using Enginius software.
`,
    icon: React.createElement(CgWorkAlt),
    date: "05/2024 - *",
  }
] as const;

export const projectsData = [
  {
    title: "The Impact of Affordable Care Act on Health Insurance Coverage",
    description:
      "This comprehensive analysis examines the significant changes in health insurance coverage from 2010 to 2016 roles of Medicaid and Medicare.",
    tags: [
      skills["powerbi"],
      skills["python"],
      skills["sql"],
    ],
    imageUrl: Healthcare,
    link: "https://github.com/akshita0810/-The-Impact-of-Affordable-Care-Act-on-Health-Insurance-Coverage-in-USA/",
  },
  {
    title: "Netflix in the Indian Market",
    description:
      "Examined Netflix's strategic positioning in India using Enginius Platform, identifying key consumer segments through survey research.",
    tags: [
      skills["powerbi"],
      skills["tableau"],
      skills["python"],
      skills["sql"],
      skills["crm"]
    ],
    imageUrl: netflix,
    link: "https://github.com/akshita0810/Netflix-in-the-Indian-OTT-Market/",
  },
  {
    title: "Statistical Exploration of the NBA",
    description:
      "Analyzed NBA player performance and salary data from 2000-2024 to develop a data-driven strategy for optimizing player investments.",
    tags: [
      skills["powerbi"],
      skills["tableau"],
      skills["python"],
      skills["sql"],
    ],
    imageUrl: basket,
    link: "https://github.com/akshita0810/Statistical-Exploration-of-the-NBA/",
  },
  {
    title: "Crude oil vs Airfare price",
    description:
      "Correlation Analysis of Airfare Price Dynamics in Relation to Crude Oil Price Fluctuations Investigated the relationship between crude oil price fluctuations and airfare .",
    tags: [
      skills["powerbi"],
      skills["tableau"],
      skills["python"],
      skills["sql"],
    ],
    imageUrl: Crude_oil,
    link: "https://github.com/akshita0810/Correlation-Analysis-of-Airfare-Price-Dynamics-in-Relation-to-Crude-Oil-Price-Fluctuations/",
  }
] as const;

export const descriptionData = `Hi there! I'm Akshita 👋
Numbers tell stories, and I'm here to translate them. As a Business Analytics grad student at Northeastern, I'm on a mission to turn data into decisions that matter.
Whether I'm boosting hotel bookings by 25% or optimizing marketing ROI, I love seeing how data can make a real-world impact. From crunching numbers in SQL to crafting eye-catching visualizations in Power BI, I'm all about making sense of the data puzzle.
When I'm not deep in datasets, you might catch me commentating on women's soccer or brainstorming the next big marketing strategy for a music festival.
Want to chat about how we can use data to shake things up in your industry? Let's grab a virtual coffee and geek out over some analytics!`