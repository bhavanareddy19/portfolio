import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

/* ───────────── Splash ───────────── */
export const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

/* ───────────── Illustration ─────── */
export const illustration = { animated: true };

/* ───────────── Greeting ─────────── */
export const greeting = {
  username: "Bhavana Vippala",
  title: "Hi all, I'm Bhavana",
  subTitle: emoji(
    "I turn messy data into simple answers with machine-learning and clear charts"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1i5GGVS4kDqt3tZTdOWLz8VTGyMw-Xw0L/view?usp=sharing",
  displayGreeting: true
};

/* ───────────── Social Links ─────── */
export const socialMediaLinks = {
  github: "https://github.com/bhavanareddy19",
  linkedin: "https://www.linkedin.com/in/bhavanareddy19",
  gmail: "bhvi9697@colorado.edu",
  medium: "https://medium.com/@v.bhavanareddy19",
  display: true
};

/* ───────────── Skills ───────────── */
export const skillsSection = {
  title: "What I do",
  subTitle: "DATA SCIENCE • MACHINE LEARNING • FULL-STACK DEVELOPMENT",
  skills: [
    emoji("⚡ Build end-to-end data pipelines and dashboards"),
    emoji("⚡ Design & deploy classification / regression models"),
    emoji("⚡ Develop responsive web apps with React & Node")
  ],
  softwareSkills: [
    { skillName: "Python",     fontAwesomeClassname: "fab fa-python" },
    { skillName: "R",          fontAwesomeClassname: "fab fa-r-project" },
    { skillName: "TensorFlow", fontAwesomeClassname: "fas fa-brain" },
    { skillName: "PyTorch",    fontAwesomeClassname: "fas fa-robot" },
    { skillName: "SQL",        fontAwesomeClassname: "fas fa-database" },
    { skillName: "Tableau",    fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "ReactJS",    fontAwesomeClassname: "fab fa-react" },
    { skillName: "NodeJS",     fontAwesomeClassname: "fab fa-node" },
    { skillName: "Git",        fontAwesomeClassname: "fab fa-git-alt" }
  ],
  display: true
};

/* ───────────── Education ────────── */
export const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Colorado Boulder",
      logo: require("./assets/images/images.jpeg"),
      subHeader: "M.S. – Data Science (CGPA 4/4)",
      duration: "2024 – 2026",
      descBullets: [
        "Graduate coursework in machine learning, big-data systems and statistical inference"
      ]
    },
    {
      schoolName: "CMR College of Engineering & Technology",
      logo: require("./assets/images/cmr.jpeg"),
      subHeader: "B.Tech – Computer Science (CGPA 8.3/10)",
      duration: "2020 – 2024",
      descBullets: [
        "Graduated with distinction across algorithms, data structures, databases, OS and networks"
      ]
    }
  ]
};

/* ───────────── Tech Stack ───────── */
export const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Data Science / ML", progressPercentage: "90%" },
    { Stack: "Full-stack Web",    progressPercentage: "70%" },
    { Stack: "Programming",       progressPercentage: "80%" }
  ],
  displayCodersrank: false
};

/* ───────────── Work Experience ──── */
export const workExperiences = {
  display: true,
  experience: [
    {
      role: "Python Developer Intern",
      company: "Swecha Organization",
      companylogo: require("./assets/images/swecha.png"),
      date: "May 2022 – Jul 2022",
      desc: "Built and deployed a city-scale real-time bus-tracking platform.",
      descBullets: [
        "Developed a Python service that predicts bus arrival times and streams live locations",
        "Implemented advanced geolocation logic, boosting ETA accuracy by 25%",
        "Integrated continuous GPS feeds for 200+ buses and collaborated with a 4-member team"
      ]
    }
  ]
};

/* ───────────── OSS / GitHub ─────── */
export const openSource = { showGithubProfile: "true", display: true };

/* ───────────── Projects ─────────── */
export const bigProjects = {
  title: "Key Projects",
  subtitle: "ML applications with real-world impact",
  projects: [
    {
      projectName: "Neonatal Cardiac-Arrest Prediction",
      projectDesc:
        "Bagging & DNN models boosted early-detection rates by 40% across five hospitals.",
      footerLink: [{ name: "Paper", url: "" }]
    },
    {
      projectName: "Real-time Face-Mask Detection",
      projectDesc:
        "TensorFlow & OpenCV pipeline hit 95% accuracy over 10k images; deployed to 80+ facilities.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/bhavanareddy19/face-mask-detector" }
      ]
    }
  ],
  display: true
};

/* ───────────── Achievements ─────── */
export const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Highlights of my journey so far",
  achievementsCards: [
    {
      image: require("./assets/images/nt.png"),
      title: "Full-Stack Data Science & AI",
      subtitle: "Certification – Naresh i Technologies, 2023",
      imageAlt: "Certification",
      footerLink: [{ name: "Certificate", url: "" }]
    },
    {
      image: require("./assets/images/ij.jpeg"),
      title: "Research Publications",
      subtitle: "Medical AI and sentiment-analysis research",
      imageAlt: "Research",
      footerLink: [
        { name: "Neonatal Cardiac Arrest – IJRASET 59408", url: "" },
        { name: "Public Opinion Detection – IJRAR 280114", url: "" }
      ]
    }
  ],
  display: true
};

/* ───────────── Blogs ────────────── */
export const blogSection = {
  title: "Blogs",
  subtitle: "From calculus to stats—I make the math make sense.",
  displayMediumBlogs: "false",
  blogs: [],
  display: true
};

/* ───────────── Optional Sections ── */
export const talkSection    = { display: false };
export const podcastSection = { display: false };

/* ───────────── Resume ⬇️ ────────── */
export const resumeSection = {
  title:   "Resume",
  subtitle:"Feel free to download my resume",
  display: true
};

/* ───────────── Contact ──────────── */
export const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just say hi—my inbox is open.",
  number: "+1 (303) 521-8141",
  email_address: "bhvi9697@colorado.edu"
};

/* ───────────── Twitter (disabled) ─ */
export const twitterDetails = { userName: "", display: false };

/* ───────────── Footer Flag ──────── */
export const isHireable = true;

