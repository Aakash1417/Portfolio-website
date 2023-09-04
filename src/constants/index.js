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
      "The maze generator project employs algorithms to generate a unique, unpredictable maze with intricate paths and dead ends each time.",
    tags: [
      {
        name: "JavaScript",
        color: "green-text",
      },
    ],
    image: css,
    source_code_link: "https://github.com/phant0mthief1417/A-maze",
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
    source_code_link: "https://github.com/phant0mthief1417/AsteroidGame",
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
      "Acquired a solid foundation in programming, algorithms, databases, and fostering strong theoretical foundations for real-world challenges.",
      "Worked on collaborative projects, web apps, real industry problem-solving, teamwork, project management.",
      "Gained expertise in working with relational database systems such as mySQL and msSQL, allowing for effective data management and retrieval.",
      "Recognized for exceptional academic performance, achieving Dean's List with a GPA of 3.9/4.0.",
    ],
  },
  {
    title: "Junior Software Intern",
    company_name: "Trinamix Inc.",
    icon: logo,
    iconBg: "yellow",
    date: "May 2023 - Aug 2023",
    points: [
      "Acquired comprehensive understanding of Oracle cloud principles encompassing SaaS, PaaS, and IaaS, along with proficiency in Oracle Integration Cloud.",
      "Developed a strong foundation in Fusion fundamentals and gained expertise in managing web services, both REST and SOAP.",
      "Engaged in hands-on tasks, including web service utilization, report generation from SQL databases, and efficient handling of Fusion web services.",
      "Contributed to various projects by actively participating in technical documentation efforts, showcasing dedication to enhancing the team's operational effectiveness.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Taifa Engineering LTD.",
    icon: logo,
    iconBg: "#ff7f7f",
    date: "Sep 2023 - Current",
    points: [
      "Collaborating with cross-functional teams to identify business challenges and opportunities. Developed and implemented software applications addressing specific operational needs, contributing to enhanced business processes.",
      "Engaged in the complete software development lifecycle, from requirements gathering to deployment and maintenance. Worked on projects spanning process automation, data analysis, and efficiency enhancement, ensuring seamless functionality.",
      "Demonstrated troubleshooting and debugging proficiency for existing software systems, promptly identifying and resolving issues. Continuously stayed abreast of industry best practices and emerging technologies.",
      "Gained comprehensive knowledge in the renewable energy space, including wind, solar, energy storage, and green energy projects, contributing to a holistic understanding of renewable energy strategies and design standards.",
    ],
  },
];

export { heroLinks, EXP, technologies, projects };
