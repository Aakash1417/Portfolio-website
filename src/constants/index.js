import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  cpp,
  matlab,
  python,
  sql,
  github,
  linkedin,
  logo
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
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
    fill: 70,
  },
  {
    name: "Matlab",
    icon: matlab,
    fill: 60,
  },
  {
    name: "Python",
    icon: python,
    fill: 60,
  },
  {
    name: "HTML",
    icon: html,
    fill: 70,
  },
  {
    name: "CSS",
    icon: css,
    fill: 60,
  },
  {
    name: "JavaScript",
    icon: javascript,
    fill: 60,
  },
  {
    name: "React",
    icon: reactjs,
    fill: 30,
  },
  {
    name: "Tailwind",
    icon: tailwind,
    fill: 30,
  },
  {
    name: "SQL",
    icon: sql,
    fill: 60,
  },
  {
    name: "Git",
    icon: git,
    fill: 50,
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

export { heroLinks, EXP, technologies };
