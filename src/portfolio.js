import auresLogo from "./assets/img/icons/common/aures.png";
import FivLogo from "./assets/img/icons/common/five.png";
import itesLogo from "./assets/img/icons/common/iteslab.png";

export const greetings = {
  name: "Mekki saber",
  title: "Hi all, I'm Saber",
  description:
    "A passionate Full Stack Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs  and some other cool libraries and frameworks",
  resumeLink:
    "https://drive.google.com/file/d/109I0uqF_RO7woEJVZdq-0brc3j6a5QX6/view?usp=sharing",
};

export const openSource = {
  githubUserName: "saber-mekki",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/saber.mekki",
  instagram: "https://www.instagram.com/mekkisaber",
  twitter: "https://twitter.com/saber-mekki",
  github: "https://github.com/saber-mekki",
  linkedin: "https://www.linkedin.com/in/mekki-saber/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    "⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks",
    "⚡ Integration of third party services such as Firebase/ AWS",
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "logos:flutter",
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "vscode-icons:file-type-swift",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "logos:python",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "logos:docker-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "60",
  },
];

export const educationInfo = [
  {
    schoolName: "Faculty of Sciences of Tunis",
    subHeader: "Engineering degree",
    duration: "September 2016 - April 2019",
    desc: "Engineering cycle in embedded systems electronics",
    descBullets: [],
  },
  {
    schoolName: "Faculty of Sciences of Monastir",
    subHeader: "Preparatory cycle",
    duration: "September 2013 - April 2016",
    desc: "Preparatory cycle: physics-chemistry ",
    descBullets: [],
  },
  {
    schoolName: "Menchia High School",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2012 - April 2013",
    desc: "",
    descBullets: [],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "AURES Technologies",
    companylogo: auresLogo,
    date: "oct 2020 – Present",
    desc: "the aures group has decided to migrate its management application developed in Windev to a Responsive Full Web application. Within a team of 5 people,I was in charge of the frontend part.",
    descBullets: [
      "Technical environment: Reactjs, Ts, Js, Git, Swr, Redux, Scrum",
    ],
  },
  {
    role: "Web Developer",
    company: "FivePoints The Talent Pool",
    companylogo: FivLogo,
    date: "May 2019 – Jun 2020",
    desc: "Design and Realization of a Web application for online project management.",

    descBullets: ["Technical environment: Reactjs, ReactStrap, Nodejs, Redux"],
  },
  {
    role: "Software Engineer Intern",
    company: "ItesLab",
    companylogo: itesLogo,
    date: "fev 2019 – JUI 2019",
    desc: "Design and implementation of an IoT platform for object monitoring",
  },
];

export const projects = [
  {
    name: "Creation of web sites in Freelance",
    desc: "Realization of many websites for Craftsmen.Technical environment: Reactjs, Api Rest, Progressive Web App, nodejs.",
  },
  {
    name: "Creation of the registration platform for daycare centers",
    desc: "Technical environment: Reactjs, Nodejs, Reactstrap, git, TS, JS, Trello, scrum ,Redux,Rest,swr, Responsive designe",
  },
  {
    name: "Development of a website for project management based on the Agile Scrum method.",
    desc: "Technical environment: Angular ,BootStrap, Spring Boot",
  },
  {
    name: "Creation of online sales sites (Frontend & Backend)",
    desc: "Technical environment: Angular 8, spring boot.",
    link: {
      name: "Kathya",
      url: "www.kathya.tn",
    },
  },
];
