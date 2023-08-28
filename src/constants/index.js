import { github, linkedin, logo } from "../assets";

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

const education = [
  {
    title: "Software Engineering Co-op",
    company_name: "UofA",
    icon: logo,
    iconBg: "green",
    date: "2021 - Current",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum assumenda amet nobis impedit eaque minima veniam quos tenetur? Natus nobis rem sunt maiores id?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum assumenda amet nobis impedit eaque minima veniam quos tenetur? Natus nobis rem sunt maiores id?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum assumenda amet nobis impedit eaque minima veniam quos tenetur? Natus nobis rem sunt maiores id?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum assumenda amet nobis impedit eaque minima veniam quos tenetur? Natus nobis rem sunt maiores id?",
    ],
  },
];

export { heroLinks, education };
