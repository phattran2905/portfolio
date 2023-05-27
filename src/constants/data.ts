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
  Phone: "778-585-9476",
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
const skills = {};
const projects = {};

export default {
  navLinks,
  info,
  about,
  workExperience,
  education,
  skills,
  projects,
};
