import { javascript, html, css, reactjs, git, cpp } from "../assets";
import {
  python,
  sql,
  nodejs,
  github,
  linkedin,
  chatbotimg,
  matlab,
} from "../assets";
import { ToDoimg, Asteroidimg, Ualberta, TaifaEng, Trinamix } from "../assets";
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
];

const projects = [
  {
    name: "Engg-bot",
    description:
      "Engg-bot is your virtual engineering companion. It's your go-to for instant answers, guidance, and support in all things engineering, from complex problems to career advice.",
    tags: [
      {
        name: "React",
        color: "orange-text",
      },
      {
        name: "OpenAI",
        color: "blue-text",
      },
      {
        name: "JavaScript",
        color: "green-text",
      },
    ],
    image: chatbotimg,
    source_code_link: "https://github.com/Aakash1417/Engg-bot",
  },
  {
    name: "To Do list",
    description:
      "A user-friendly to-do app built with Django and SQLite for efficient task management, offering a seamless experience for organizing and prioritizing tasks.",
    tags: [
      {
        name: "Python",
        color: "pink-text",
      },
      {
        name: "Django",
        color: "green-text",
      },
    ],
    image: ToDoimg,
    source_code_link: "https://github.com/Aakash1417/ToDoList",
  },
  {
    name: "Asteroid game",
    description:
      "Embark on an asteroid adventure with unpredictable, randomly moving space rocks! Test your reflexes, navigate the chaos, and conquer the cosmos in this thrilling gaming project.",
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
    image: Asteroidimg,
    source_code_link: "https://github.com/Aakash1417/AsteroidGame",
  },
];

const heroLinks = [
  {
    src: github,
    alt: "github",
    link: "https://github.com/Aakash1417",
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
    icon: Ualberta,
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
    icon: Trinamix,
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
    icon: TaifaEng,
    iconBg: "#ff7f7f",
    date: "Sep 2023 - Current",
    points: [
      "Collaborating with cross-functional teams to identify business challenges and opportunities. Developed and implemented software applications addressing specific operational needs, contributing to enhanced business processes.",
      "Engaged in the complete software development lifecycle, from requirements gathering to deployment and maintenance. Worked on projects spanning process automation, data analysis, and efficiency enhancement, ensuring seamless functionality.",
      "Demonstrated troubleshooting and debugging proficiency for existing software systems, promptly identifying and resolving issues. Continuously stayed abreast of industry best practices and emerging technologies.",
    ],
  },
];

export { heroLinks, EXP, technologies, projects };
