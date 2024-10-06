// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Mayank",
  middleName: "",
  lastName: "Kilhor",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/mayank-kilhor/",
    },
    {
      image: "fa-github",
      url: "https://github.com/MayankKilhor",
    },
    {
      image: "fa-hackerrank",
      url: "https://www.hackerrank.com/mayankkilhor",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/mayank.kilhor.7",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/who_is_mk_/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/me.jpg"),
  imageSize: 375,
  message:
    "My name is Mayank Kilhor. I’m a graduate of 2022 from Vellore Institute of Technology with a degree in Computer Science Engineering with specialization in Information Security. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. I have proven ability to collaborate with cross-functional teams, solve complex problems,and deliver high-quality software solutions.",
  resume: "https://drive.google.com/file/d/1-jTcF-ha7kcE4QGcFzvB_d8MtG3zJ4Gk/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "MayankKilhor", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["InvPOS","PSAS","Indian-Budget-2020","Book-Recom"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/me.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/me.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"450",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 90 },
    { name: "Debugging", value: 75 },
    { name: "Data Structures", value: 90 },
    { name: "JavaScript", value: 60 },
    { name: "Python", value: 75 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 85 },
    { name: "DevSecOps", value: 55 },
  ],
  softSkills: [
    { name: "Problem Solving", value: 90 },
    { name: "OOPS", value: 85 },
    { name: "Threat & Vulnerability Testing", value: 75 },
    { name: "Collaboration", value: 90 },
    { name: "Goal-Oriented", value: 80 },
    { name: "Database Management System", value: 75 },
    { name: "Data Mining", value: 70 },
    { name: "Communication", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for challenging role in a reputable organization to utilize my technical and management skills by working diligently towards the growth of the organization as wells as to enchance my knowledge about new and emerging trends in the IT sector! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "mayankkilhor@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Development Engineer - 1 ',// Here Add Company Name
      companyname:'[24]7.ai',
      url:'https://www.linkedin.com/company/24-7-ai/',
      companylogo:'',
      date: 'Jan 2022 – Nov 2022',
      desc: 'Developed and deployed state-of-the-art security testing automation tools into CI/CD pipelines, resulting in a significant       reduction in time and effort required for security testing.Conducted comprehensive risk assessments and proactively monitored client organization systems for vulnerabilities, ensuring maximum protection against cyber threats.Leveraged cutting-edge technology and tools to analyze and solve complex client problems, delivering efficient and effective solutions.',
    },
    {
      role: 'Software Developer Intern',// Here Add Company Name
      companyname:'IoTAGI',
      url:'https://www.linkedin.com/company/iotagi/',
      companylogo: '',
      date: 'Jul 2021 – Aug 2021',
      desc: 'Spearheaded the development of a high-quality website using ReactJs and other frameworks, resulting in a seamless user experience and increased customer engagement. Coordinated with cross-functional teams to streamline the development process and optimize the website performance. Troubleshot and resolved any issues that arose during development, implementing innovative solutions to revitalize the project and ensure timely delivery. ',
    },
    {
      role: 'Software Engineer Intern',// Here Add Company Name
      companyname:'SmartInternz',
      url:'https://www.linkedin.com/company/smartinternz/',
      companylogo:'',
      date: 'Jun 2021 – Jul 2021',
      desc: 'Completed SmartInternz Artificial Intelligence externship program by IBM, gaining practical skills and theoretical knowledge in the field. Successfully applied the skills and knowledge gained to real-world projects and scenarios.Grateful for the opportunity to work with the Smartbridge team and SmartInternz, and for the positive experience and feedback received. ',
    },
    {
      role: 'Web Developer Intern',
      companyname:'House of Babas',
      url:'https://www.linkedin.com/company/houseofbabas/',
      companylogo: '',
      date: 'Nov 2020 – Mar 2021',
      desc: ' Redesigned and developed an online shopping website using ReactJs and other frameworks, resulting in a 30% increase in sales revenue due to the improved user experience and faster website loading speed. Enhanced the overall user experience, resulting in increased customer satisfaction and retention. Utilized technical expertise to optimize website performance and ensure seamless functionality, improving the website usability and functionality. ',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
