import images from "./images";

const navLinks = [
  { id: "home", title: "Home" },
  // { id: "services", title: "Services" },
  { id: "work-experience", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

const info = {
  Email: "phat.tran2905@gmail.com",
  GitHub: "https://github.com/phattran2905",
  LinkedIn: "https://www.linkedin.com/in/phat-tran-413a171b5/",
  Phone: "(+1) 778-585-9476",
  Location: "Canada",
};

const about = {
  occupation: "Web developer",
  biography:
    "I have a strong desire to utilize technology in a way that benefits individuals and enhances their lives.",
  // biography:
  //   "I have a strong desire to utilize technology in a way that benefits individuals and enhances their lives. I am constantly on the lookout for opportunities to grow and develop personally.",
};

const workExperience = [
  {
    company: "Ogilvy Vietnam",
    timeline: "March - June 2018",
    timelineLength: "4 months",
    position: "PHP Developer",
    subtitle: "Internship",
    description: [
      "Engineered an API back-end system using Symfony 3 for a lucky draw campaign, allowing 300+ users to participate in the event.",
      "Maintained and managed legacy projects using Drupal.",
    ],
  },
  {
    company: "YRB Solutions",
    timeline: "October 2019 - March 2020",
    timelineLength: "6 months",
    position: "Web Developer",
    subtitle: "Internship",
    description: [
      "Developed and maintained websites using WordPress for local businesses and marketing campaigns.",
      "Converted UI designs from PhotoShop and Figma to web components using ReactJS.",
    ],
  },
  {
    company: "Pi Solution",
    timeline: "March - August 2021",
    timelineLength: "6 months",
    position: "Javascript Developer",
    subtitle: "Contract",
    description: [
      "Developed a web-based tool using ReactJS that automatically makes 30+ cryptocurrency transactions per minute, enabling the finance team to focus on other high-priority tasks.",
      "Engineered 4 Express REST API systems automatically make cryptocurrency transactions to balance the market price, preventing anonymous withdrawals before the deadline.",
      "Ideated and developed an observation bot on Telegram to inspect the market and back-end systems, keeping everybody informed seamlessly.",
    ],
  },
];
const education = [
  {
    school: "North Island College",
    timeline: "2021 - 2023",
    timelineLength: null,
    degreeName: "Post-graduate Diploma",
    major: "Web and Mobile Application Development",
    description: ["GPA: 4.13/4.33"],
    logo: images.nicLogo,
  },
  {
    school: "IDP Education",
    timeline: "2020",
    timelineLength: null,
    degreeName: "English Certificate",
    major: "IELTS Academic",
    description: ["Overall of 6.5"],
    logo: images.camLogo,
  },
  {
    school: "Saigon University",
    timeline: "2014 - 2019",
    timelineLength: null,
    degreeName: "Bachelor of Engineering",
    major: "Information Technology",
    description: ["GPA: 2.8/4.0"],
    logo: images.sguLogo,
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
    imgSrc: images.monsterLandMockup,
    description:
      "A web game about collecting monsters and nurturing them to conquer challenges",
    techStackImages: [
      { name: "React", img: images.reactLogo },
      { name: "ExpressJs", img: images.expressJsLogo },
      { name: "MongoDB", img: images.mongoDbLogo },
      { name: "Redux", img: images.reduxLogo },
      { name: "NodeJs", img: images.nodeJSLogo },
      { name: "TailwindCSS", img: images.tailwindcssLogo },
      { name: "AdobeXD", img: images.adobeXdLogo },
    ],
    demoUrl: "https://monster-land.netlify.app/",
    githubUrl: "https://github.com/phattran2905/monster-land",
  },
  {
    name: "Wallee",
    imgSrc: images.walleeMockup,
    description:
      "A mobile application for scanning QR codes to identify Student ID cards and tickets.",
    techStackImages: [
      { name: "React Native", img: images.reactNativeLogo },
      { name: "Redux", img: images.reduxLogo },
      { name: "Javascript", img: images.javascriptLogo },
      { name: "AdobeXD", img: images.adobeXdLogo },
    ],
    demoUrl: "https://shorturl.at/lsZ08",
    githubUrl:
      "https://github.com/nic-dgl214-wi23/dgl214-semester-project-phattran2905",
  },
  {
    name: "Fitness",
    imgSrc: images.fitnessMockup,
    description: "A landing page for a fitness center.",
    techStackImages: [
      { name: "Typescript", img: images.typescriptLogo },
      { name: "React", img: images.reactLogo },
      { name: "TailwindCSS", img: images.tailwindcssLogo },
    ],
    demoUrl: "https://fitness-phattran.netlify.app/",
    githubUrl: "https://github.com/phattran2905/fitness-website",
  },
  {
    name: "HooBank",
    imgSrc: images.bankMockup,
    description: "A landing page introducing services for a bank.",
    techStackImages: [
      { name: "Typescript", img: images.typescriptLogo },
      { name: "React", img: images.reactLogo },
      { name: "TailwindCSS", img: images.tailwindcssLogo },
    ],
    demoUrl: "https://bank-phattran.netlify.app/",
    githubUrl: "https://github.com/phattran2905/modern-bank-landing-page",
  },
  {
    name: "Fine Dining",
    imgSrc: images.fineDiningMockup,
    description: "A landing page for a fine dining restaurant.",
    techStackImages: [
      { name: "Typescript", img: images.typescriptLogo },
      { name: "React", img: images.reactLogo },
      { name: "TailwindCSS", img: images.tailwindcssLogo },
    ],
    demoUrl: "https://fine-dinning-phattran.netlify.app/",
    githubUrl: "https://github.com/phattran2905/fine-dining-landing-page",
  },
  {
    name: "GPT3",
    imgSrc: images.gpt3Mockup,
    description: "A landing page introducing a technology company.",
    techStackImages: [
      { name: "Typescript", img: images.typescriptLogo },
      { name: "React", img: images.reactLogo },
      { name: "TailwindCSS", img: images.tailwindcssLogo },
    ],
    demoUrl: "https://gpt3-phattran.netlify.app/",
    githubUrl: "https://github.com/phattran2905/gpt3-landing-page",
  },
  {
    name: "Mint RoboPunkNFT",
    imgSrc: images.mintRobopunkMockup,
    description:
      "A web application for minting NFT assets on the Sepolia network.",
    techStackImages: [
      { name: "Typescript", img: images.typescriptLogo },
      { name: "React", img: images.reactLogo },
      { name: "TailwindCSS", img: images.tailwindcssLogo },
      { name: "Solidity", img: images.solidityLogo },
    ],
    demoUrl: "https://robopunks-nft-mint.netlify.app/",
    githubUrl: "https://github.com/phattran2905/web3-mint-website",
  },
  {
    name: "Tree and Shrubs",
    imgSrc: images.treeAndShrubsMockup,
    description: "A website for a local business selling tree and shrubs.",
    techStackImages: [
      { name: "HTML", img: images.htmlLogo },
      { name: "CSS", img: images.cssLogo },
      { name: "AdobeXD", img: images.adobeXdLogo },
    ],
    demoUrl: "https://nic-dgl103-f21-dlu.github.io/websiteproject-ducphattran/",
    githubUrl:
      "https://github.com/nic-dgl103-f21-dlu/websiteproject-ducphattran",
  },
  // {
  //   name: "Comox Valley Lifeline Society",
  //   imgSrc: images.browser3d,
  //   description: "A redesigned version of a local non-profit organization.",
  //   techStackImages: [
  //     { name: "WordPress", img: images.wordPressLogo },
  //     { name: "AdobeXD", img: images.adobeXdLogo },
  //   ],
  //   demoUrl: "",
  //   githubUrl: "",
  // },
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
