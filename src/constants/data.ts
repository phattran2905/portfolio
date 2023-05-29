import images from "./images";

const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "portfolio", title: "Portfolio" },
  { id: "contact", title: "Contact" },
];

const info = {
  Email: "phat.tran2905@gmail.com",
  GitHub: "https://github.com/phattran2905",
  LinkedIn: "https://www.linkedin.com/in/phat-tran-413a171b5/",
  Phone: "(+1) 778-585-9476",
  Location: "Canada",
};

const about = {};
const workExperience = [
  {
    company: "Pi Solution",
    timeline: "March 2021 - September 2021",
    position: "Javascript Developer",
    subtitle: "Short-term Contract",
    description:
      "A visual designer designs for a variety of platforms, which may include internet and intranet sites, games, movies and wearables in short, they create a concepts",
  },
];
const education = [
  {
    school: "Saigon University",
    timeline: "2014 - 2019",
    degreeName: "Bachelor of Engineering",
    major: "Information Technology",
    gpa: "GPA: 3.0/4.0",
    logo: images.sguLogo,
  },
  {
    school: "Cambridge",
    timeline: "2020",
    degreeName: "Certificate",
    major: "IELTS",
    gpa: "Overall of 6.5 (L: 7.0, R: 6.5, S: 6.0, W: 6.0)",
    logo: images.camLogo,
  },
  {
    school: "North Island College",
    timeline: "2021 - 2023",
    degreeName: "Post-graduate Diploma",
    major: "Web and Mobile Application Development",
    gpa: "GPA: 4.13/4.33",
    logo: images.nicLogo,
  },
];
const skills = [
  {
    name: "HTML",
    logo: images.htmlLogo,
  },
  {
    name: "CSS",
    logo: images.cssLogo,
  },
  {
    name: "SASS",
    logo: images.sassLogo,
  },
  {
    name: "Javascript",
    logo: images.javascriptLogo,
  },
  {
    name: "Typescript",
    logo: images.typescriptLogo,
  },
  {
    name: "React",
    logo: images.reactLogo,
  },
  {
    name: "NodeJS",
    logo: images.nodeJSLogo,
  },
  {
    name: "ExpressJS",
    logo: images.expressJsLogo,
  },
  {
    name: "MongoDB",
    logo: images.mongoDbLogo,
  },
  {
    name: "React Native",
    logo: images.reactNativeLogo,
  },
  {
    name: "Redux",
    logo: images.reduxLogo,
  },
  {
    name: "TailwindCSS",
    logo: images.tailwindcssLogo,
  },
  {
    name: "Git",
    logo: images.gitLogo,
  },
  {
    name: "Postgresql",
    logo: images.postgresqlLogo,
  },
  {
    name: "Prisma ORM",
    logo: images.prismaLogo,
  },
  {
    name: "PHP",
    logo: images.phpLogo,
  },
  {
    name: "MySQL",
    logo: images.mySQLLogo,
  },
  {
    name: "WordPress",
    logo: images.wordPressLogo,
  },
  {
    name: "Photoshop",
    logo: images.photoshopLogo,
  },
  {
    name: "Adobe XD",
    logo: images.adobeXdLogo,
  },
  {
    name: "Figma",
    logo: images.figmaLogo,
  },
  {
    name: "Kotlin",
    logo: images.kotlinLogo,
  },
  {
    name: "C++",
    logo: images.cPPLogo,
  },
  {
    name: "Solidity",
    logo: images.solidityLogo,
  },
];

const projects = [
  {
    name: "Monster Land",
    imgSrc: images.learningWebDev,
    description: "A web-based game",
    techStackImages: [
      images.expressJsLogo,
      images.reactLogo,
      images.mongoDbLogo,
      images.expressJsLogo,
      images.reduxLogo,
      images.tailwindcssLogo,
    ],
    demoUrl: "",
    githubUrl: "",
  },
  {
    name: "Mint RoboPunkNFT",
    imgSrc: images.learningWebDev,
    description: "A web-based game",
    techStackImages: [
      images.expressJsLogo,
      images.reactLogo,
      images.mongoDbLogo,
      images.expressJsLogo,
      images.reduxLogo,
      images.tailwindcssLogo,
    ],
    demoUrl: "",
    githubUrl: "",
  },
  {
    name: "Wallee",
    imgSrc: images.learningWebDev,
    description: "A web-based game",
    techStackImages: [
      images.expressJsLogo,
      images.reactLogo,
      images.mongoDbLogo,
      images.expressJsLogo,
      images.reduxLogo,
      images.tailwindcssLogo,
    ],
    demoUrl: "",
    githubUrl: "",
  },
  {
    name: "Fitness Landing Page",
    imgSrc: images.learningWebDev,
    description: "A web-based game",
    techStackImages: [
      images.expressJsLogo,
      images.reactLogo,
      images.mongoDbLogo,
      images.expressJsLogo,
      images.reduxLogo,
      images.tailwindcssLogo,
    ],
    demoUrl: "",
    githubUrl: "",
  },
  {
    name: "Bank Landing Page",
    imgSrc: images.learningWebDev,
    description: "A web-based game",
    techStackImages: [
      images.expressJsLogo,
      images.reactLogo,
      images.mongoDbLogo,
      images.expressJsLogo,
      images.reduxLogo,
      images.tailwindcssLogo,
    ],
    demoUrl: "",
    githubUrl: "",
  },
  {
    name: "Fine Dinning Landing Page",
    imgSrc: images.learningWebDev,
    description: "A web-based game",
    techStackImages: [
      images.expressJsLogo,
      images.reactLogo,
      images.mongoDbLogo,
      images.expressJsLogo,
      images.reduxLogo,
      images.tailwindcssLogo,
    ],
    demoUrl: "",
    githubUrl: "",
  },
  {
    name: "GPT3 Landing Page",
    imgSrc: images.learningWebDev,
    description: "A web-based game",
    techStackImages: [
      images.expressJsLogo,
      images.reactLogo,
      images.mongoDbLogo,
      images.expressJsLogo,
      images.reduxLogo,
      images.tailwindcssLogo,
    ],
    demoUrl: "",
    githubUrl: "",
  },
  {
    name: "Tree and Shrubs",
    imgSrc: images.learningWebDev,
    description: "A web-based game",
    techStackImages: [
      images.expressJsLogo,
      images.reactLogo,
      images.mongoDbLogo,
      images.expressJsLogo,
      images.reduxLogo,
      images.tailwindcssLogo,
    ],
    demoUrl: "",
    githubUrl: "",
  },
  {
    name: "Comox Valley Lifeline Society",
    imgSrc: images.learningWebDev,
    description: "A web-based game",
    techStackImages: [
      images.expressJsLogo,
      images.reactLogo,
      images.mongoDbLogo,
      images.expressJsLogo,
      images.reduxLogo,
      images.tailwindcssLogo,
    ],
    demoUrl: "",
    githubUrl: "",
  },
];

export default {
  navLinks,
  info,
  about,
  workExperience,
  education,
  skills,
  projects,
};
