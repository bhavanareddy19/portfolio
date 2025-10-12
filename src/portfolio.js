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
    "I turn messy data into simple answers with machine learning and clear charts"
  ),
  // Use this direct download format instead
  resumeLink: "https://github.com/bhavanareddy19/portfolio/blob/main/Bhavana_Vippala_Resume%20(1).pdf",
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
    emoji("⚡ Build end-to-end data pipelines and dashboards (SQL/BI, cohorts, funnels)"),
    emoji("⚡ Design, evaluate, and deploy ML & NLP systems (LLMs/RAG, clustering, forecasting)"),
    emoji("⚡ Develop responsive web apps and APIs with React, Flask/Django, and Node")
  ],
  softwareSkills: [
    { skillName: "Python",       fontAwesomeClassname: "fab fa-python" },
    { skillName: "R",            fontAwesomeClassname: "fab fa-r-project" },
    { skillName: "PyTorch",      fontAwesomeClassname: "fas fa-robot" },
    { skillName: "TensorFlow",   fontAwesomeClassname: "fas fa-brain" },
    { skillName: "scikit-learn", fontAwesomeClassname: "fas fa-project-diagram" },
    { skillName: "XGBoost",      fontAwesomeClassname: "fas fa-chart-line" },
    { skillName: "SQL",          fontAwesomeClassname: "fas fa-database" },
    { skillName: "Spark",        fontAwesomeClassname: "fas fa-bolt" },
    { skillName: "Databricks",   fontAwesomeClassname: "fas fa-cloud" },
    { skillName: "MLflow",       fontAwesomeClassname: "fas fa-vial" },
    { skillName: "Tableau",      fontAwesomeClassname: "fas fa-chart-bar" },
    { skillName: "Power BI",     fontAwesomeClassname: "fas fa-chart-pie" },
    { skillName: "React",        fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js",      fontAwesomeClassname: "fab fa-node" },
    { skillName: "Git",          fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "AWS",          fontAwesomeClassname: "fab fa-aws" },
    { skillName: "GCP",          fontAwesomeClassname: "fab fa-google" },
    { skillName: "Supabase",     fontAwesomeClassname: "fas fa-database" }
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
      subHeader: "M.S. – Data Science (CGPA 3.88/4)",
      duration: "2024 – 2026",
      descBullets: [
        "Graduate coursework in machine learning, big-data systems, and statistical inference"
      ]
    },
    {
      schoolName: "CMR College of Engineering & Technology",
      logo: require("./assets/images/image.png"),
      subHeader: "B.Tech – Computer Science (CGPA 8.3/10)",
      duration: "2020 – 2024",
      descBullets: [
        "Distinction across algorithms, data structures, databases, OS, and networks"
      ]
    }
  ]
};

/* ───────────── Tech Stack ───────── */
export const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Data Science / ML / NLP", progressPercentage: "90%" },
    { Stack: "Data Engineering / Analytics", progressPercentage: "85%" },
    { Stack: "Full-stack Web & APIs", progressPercentage: "75%" }
  ],
  displayCodersrank: false
};

/* ───────────── Work Experience ──── */
export const workExperiences = {
  display: true,
  experience: [
    {
      role: "AI/ML Software Engineer Intern",
      company: "PM Accelerator",
      companylogo: require("./assets/images/pmaccelerator.png"),
      date: "May 2025 – Present",
      desc: "Shipped data pipelines, LLM performance analytics, and clustering-driven insights.",
      descBullets: [
        "Built Databricks (Spark/Delta) pipelines for 10k+ docs/mo; cut time-to-insight by 35%.",
        "Defined product KPIs (DAU/WAU, cohorts, funnels) and delivered weekly SQL/BI dashboards.",
        "Analyzed LLM p50/p95 latency and token spend; −40% p95 and −25% cost.",
        "Ran text analytics (MiniLM, DBSCAN/K-Means, BART) to cluster feedback and rank drivers."
      ]
    },
    {
      role: "Python Developer",
      company: "Swecha Organization",
      companylogo: require("./assets/images/swecha.png"),
      date: "May 2022 – May 2023",
      desc: "Real-time bus tracking and ETA predictions at city scale.",
      descBullets: [
        "Built GPS data pipeline for 200+ buses; improved ETA accuracy by 25%.",
        "Delivered ops analytics (on-time rate, route efficiency, stop demand) with SQL/plots.",
        "Collaborated with a cross-functional team of 4 to ship real-time commuter insights."
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
      projectName: "Virtual Vogue: Deep Learning for Realistic Fashion Try-On",
      projectDesc:
        "Outperformed PRGAN/CAGAN/CRN on 2,032 pairs (SSIM +5–8%, IoU +5–17 pp, IS 3.22); per-segment metrics and ablations guided model tuning; real-time inference on AWS.",
      footerLink: [] // add links when public
    },
    {
      projectName: "EchoLab — Feedback→Hypothesis Analytics",
      projectDesc:
        "Ticket→insight pipeline (Supabase/Postgres + embeddings + hybrid DBSCAN/K-Means + BART) delivering <48-hr hypotheses, 3–5× throughput; exports test-ready cards to GrowthBook/Jira.",
      footerLink: []
    },
    {
      projectName: "PLATE-TO-HEALTH: Global Nutrition Analytics",
      projectDesc:
        "BigQuery/Vertex AI forecasting and KPI dashboards across regions/demographics; strong held-out performance (R²=1.000, MAE=30.5, RMSE=25.0).",
      footerLink: []
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
      title: "Full Stack Data Science & AI",
      subtitle: "Naresh i Technologies — 2023",
      imageAlt: "Certification",
      footerLink: [] // add certificate link when hosted
    },
    {
      image: require("./assets/images/ij.jpeg"),
      title: "Research Publications",
      subtitle: "Medical AI and sentiment-analysis studies",
      imageAlt: "Research",
      footerLink: [
        { name: "Neonatal Cardiac Arrest — IJRASET59408", url: "" },
        { name: "Public Opinion Detection — IJRAR280114", url: "" }
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
  title: "Resume",
  subtitle: "Feel free to download my resume",
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
