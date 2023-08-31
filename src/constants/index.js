import { javascript, html, css, reactjs, tailwind, git, cpp } from "../assets";

import { python, sql, nodejs, github, linkedin, logo, matlab } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "Cpp",
    icon: cpp,
    fill: 60,
  },
  {
    name: "CSS",
    icon: css,
    fill: 60,
  },
  {
    name: "Git",
    icon: git,
    fill: 50,
  },
  {
    name: "HTML",
    icon: html,
    fill: 60,
  },
  {
    name: "JavaScript",
    icon: javascript,
    fill: 80,
  },
  {
    name: "Matlab",
    icon: matlab,
    fill: 40,
  },
  {
    name: "NodeJS",
    icon: nodejs,
    fill: 60,
  },
  {
    name: "Python",
    icon: python,
    fill: 70,
  },
  {
    name: "React",
    icon: reactjs,
    fill: 30,
  },
  {
    name: "SQL",
    icon: sql,
    fill: 60,
  },
  {
    name: "Tailwind",
    icon: tailwind,
    fill: 30,
  },
];

const projects = [
  {
    name: "A-maze",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe repellendus aperiam, ab maxime harum illo similique quas iusto consectetur inventore.",
    tags: [
      {
        name: "JavaScript",
        color: "green-text",
      },
    ],
    image: css,
    source_code_link: "",
  },
  {
    name: "Asteroid game",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe repellendus aperiam, ab maxime harum illo similique quas iusto consectetur inventore.",
    tags: [
      {
        name: "HTML",
        color: "orange-text",
      },
      {
        name: "CSS",
        color: "blue-text",
      },
      {
        name: "JavaScript",
        color: "green-text",
      },
    ],
    image: css,
    source_code_link: "",
  },
  {
    name: "To Do list",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe repellendus aperiam, ab maxime harum illo similique quas iusto consectetur inventore.",
    tags: [
      {
        name: "Python",
        color: "pink-text",
      },
    ],
    image: css,
    source_code_link: "",
  },
];

const heroLinks = [
  {
    src: github,
    alt: "github",
    link: "https://github.com/phant0mthief1417",
  },
  {
    src: linkedin,
    alt: "linkedin",
    link: "https://www.linkedin.com/in/aakashdurairaj/",
  },
];

const EXP = [
  {
    title: "Software Engineering Co-op",
    company_name: "UofA",
    icon: logo,
    iconBg: "green",
    date: "Sep 2021 - Current",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum assumenda amet nobis impedit eaque minima veniam quos tenetur? Natus nobis rem sunt maiores id?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum assumenda amet nobis impedit eaque minima veniam quos tenetur? Natus nobis rem sunt maiores id?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum assumenda amet nobis impedit eaque minima veniam quos tenetur? Natus nobis rem sunt maiores id?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum assumenda amet nobis impedit eaque minima veniam quos tenetur? Natus nobis rem sunt maiores id?",
    ],
  },
  {
    title: "Software Engineering Co-op",
    company_name: "Trinamix Inc.",
    icon: logo,
    iconBg: "yellow",
    date: "May 2023 - Aug 2023",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum assumenda amet nobis impedit eaque minima veniam quos tenetur? Natus nobis rem sunt maiores id?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum assumenda amet nobis impedit eaque minima veniam quos tenetur? Natus nobis rem sunt maiores id?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum assumenda amet nobis impedit eaque minima veniam quos tenetur? Natus nobis rem sunt maiores id?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum assumenda amet nobis impedit eaque minima veniam quos tenetur? Natus nobis rem sunt maiores id?",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Taifa Engineering LTD.",
    icon: logo,
    iconBg: "#ff7f7f",
    date: "Sep 2023 - Current",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum assumenda amet nobis impedit eaque minima veniam quos tenetur? Natus nobis rem sunt maiores id?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum assumenda amet nobis impedit eaque minima veniam quos tenetur? Natus nobis rem sunt maiores id?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum assumenda amet nobis impedit eaque minima veniam quos tenetur? Natus nobis rem sunt maiores id?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum assumenda amet nobis impedit eaque minima veniam quos tenetur? Natus nobis rem sunt maiores id?",
    ],
  },
];

export { heroLinks, EXP, technologies, projects };
