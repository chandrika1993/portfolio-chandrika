
import { Experience, Project, Education, SkillCategory } from './types';

export const personalInfo = {
  name: "Chandrika Mohan",
  title: "Team Leader • Full Stack Developer",
  location: "Saarbrücken, Germany",
  profileImage: "profile.jpeg", 
  cvUrl: "Chandrika_Mohan_CV.pdf",
  email: "chandrikamohan@rocketmail.com",
  github: "https://github.com/chandrika1993",
  linkedin: "https://www.linkedin.com/in/chandrikamohan/",
  summary: "Highly accomplished Senior Fullstack Engineer (6+ years) and Team Lead specializing in AI-driven automation and autonomous workflow systems. Proven track record in developing LLM-integrated features and scalable backend architectures. Expert in TypeScript, Node.js, and Google Cloud Platform, with a focus on building high-reliability systems through Test-Driven Development. Native-equivalent English proficiency and currently based in Germany"
};

export const experiences: Experience[] = [
  {
    role: "Engineering Team Lead (Full Stack)",
    company: "MONA AI GMBH",
    location: "Saarbrücken, Germany",
    period: "Sept 2023 - Aug 2025",
    responsibilities: [
      "Architected and deployed AI-native features, including LLM-generated job offers and automated candidate management workflows, increasing candidate pipeline velocity by 3x during the screening phase",
      "Built multi-lingual communication modules using AI APIs, extending German content to English, French, and Italian, supporting 3 new international markets",
      "Led and drove sprint execution by setting priorities and unblocking tasks, for a team of 5 developers",
      "Collaborated with product owners and backend developers to deliver key features like AI-generated job offers and automated workflows, focusing on user-centric UI/UX, while maintaining WCAG standards and quality with unit and integration e2e tests"
    ],
    techStack: ["Ionic", "TypeScript", "Vue.js", "Angular", "Capacitor", "Cordova", "NgRx", "Node.js", "Express.js", "Chart.js", "Firestore", "Google Firebase", "Xcode", "Android Studio", "Cloud Functions", "GCP", "i18n", "Playwright", "Jest", "Figma", "JIRA", "Confluence", "Sentry"]
  },
  {
    role: "Full Stack Developer (Working Student)",
    company: "NEOCOSMO GMBH",
    location: "Saarbrücken, Germany",
    period: "Apr 2021 - Dec 2022",
    responsibilities: [
      "Directed frontend development and UX optimization for two key company products, the 'PIIPE' platform and the 'ZKE Bürger App', ensuring responsive design across mobile and web interfaces",
      "Engineered 'fresh software modules' and customized existing components within the application architecture, streamlining data flow between frontend interfaces and backend APIs",
      "Integrated Cloud Services, Firebase, and APIs to enhance application functionality and performance",
      "Executed technical integration of cloud services (Firebase) and conducted rigorous cross-platform testing for both Android and iOS builds to ensure stability prior to release"
    ],
    techStack: ["Ionic", "Angular", "TypeScript", "APIs", "HTML5", "CSS/ SCSS", "Git", "Confluence", "Android Studio", "Xcode", "Capacitor", "Cordova", "NgRx", "SQL", "Playwright", "Jest", "Firebase", "Google Cloud"]
  },
  {
    role: "Senior Analyst: Full Stack Developer",
    company: "CAPGEMINI PRIVATE LIMITED | SINGAPORE POWER SERVICES",
    location: "Mumbai, India",
    period: "Jan 2017 - Sept 2019",
    responsibilities: [
      "Developed high-performance Java RESTful microservices designed to handle peak transaction loads, serving as the efficient backend data layer for the AngularJS application",
      "Impled Two-Factor Authentication using Gemalto SafeNet Token, ensuring 100% compliance with security mandates",
      "Automated document (PDF/Excel) generation with iText, reducing creation time by 75% and saving 25+ man-hours weekly",
      "Integrated Sonar and enforced JUnit testing standards, cutting technical debt and resolving critical bugs within SLAs",
      "Designed and deployed AOP-based event logging to monitor critical application workflows, providing real-time insights used to optimize code paths and reduce latency by 200ms",
      "Fortified public-facing endpoints against automated bot attacks by integrating 'Google reCAPTCHA v2' with backend verification"
    ],
    techStack: ["Java", "AngularJS", "Spring Boot", "Rest APIs", "Microservices", "SQL Server", "AWS", "HTML5", "CSS", "JavaScript", "Git", "Maven", "JUnit"]
  }
];

export const projects: Project[] = [
  {
    title: "Academic Portfolio Website",
    subtitle: "Academic Website for a Doctoral Researcher",
    period: "Sept 2025 - Oct 2025",
    description: "Developed a comprehensive academic portfolio website highlighting research, publications, CV, and professional projects. Focused on a clean, modern interface with intuitive navigation and responsive design for accessibility across devices. Optimized SEO to increase search visibility while integrating analytics and performance improvements.",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    links: [{ name: "Live Site", url: "https://divbhardwaj.com" }, { name: "Git Hub Repository", url: "https://github.com/chandrika1993/Academic-Portfolio-Website"}],
    techStack: ["Ionic", "Angular", "TypeScript", "HTML5", "CSS/ SCSS", "NodeJS", "Firebase", "Google Search Console"]
  },
  {
    title: "Master Thesis Web Platforms",
    subtitle: "Usability of Risk-Based Authentication Factors",
    period: "Jan 2023 - May 2023",
    description: "Directed end-to-end design, implementation, and deployment of two distinct scalable web platforms (e.g., social network, content streaming), showcasing full-stack expertise. Applied robust client-side logic, secure data handling, and API development for comprehensive system functionality, leveraging Google Firebase for hosting.",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    links: [{ name: "Streaming Site", url: "https://stream-me.firebaseapp.com" }, { name: "Social Network", url: "https://socialnetworkforfriends.firebaseapp.com/login" }],
    techStack: ["Angular", "Ionic", "TypeScript", "HTML5", "CSS/ SCSS", "NodeJS", "Firebase", "Google Console", "GitLab"]
  },
  {
    title: "Friend Management System",
    subtitle: "Personalized Social Network in Java and deployed on PCF",
    period: "Jan 2023 - May 2023",
    description: "Individual contributor to the project by developing end-to-end solutions for building a personalized social network. Built features like add a friend, unfriend, and block. Deployed on PCF Cloud Foundry.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    links: [{ name: "Git Hub Repository", url: "https://github.com/chandrika1993/FriendManagementSystem" }],
    techStack: ["Java", "Spring Boot", "MySQL", "PCF Cloud Foundry", "JUnit"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: ["Angular", "Ionic", "React", "Express.js", "Node.js", "HTML5", "CSS | SCSS", "JavaScript", "TypeScript", "Capacitor", "Cordova", "NgRx" , "Figma" , "WCAG", "i18n", "Responsive Design" , "Tailwind"],
  },
  {
    category: "AI & Automation",
    skills: ["LLM API Integration", "DeepL", "OpenAI", "Claude", "Gemini", "Synthesia", "Workflow Automation"]
  },
  {
    category: "Backend & Databases",
    skills: ["Java (J2EE)", "Spring Boot", "Microservices", "Hibernate", "Sonar", "MVC", "Maven", "REST | RESTful API", "MySQL", "SQL Server", "Firestore"]
  },
  {
    category: "Cloud & Testing",
    skills: ["AWS", "GCP", "Pivotal Cloud Foundry", "Firebase", "CI/CD", "JUnit", "Mockito", "E2E Tests (Playwright)", "Jest"]
  }
];

export const education: Education[] = [
  {
    degree: "Master of Science - Media Informatics",
    institution: "Universität des Saarlandes",
    location: "Saarbrücken, Germany",
    period: "Oct 2019 - Jul 2023",
    grade: "Final Grade: 1.7",
    thesis: {
      title: "Contextual Evaluation of Risk-Based Re-Authentication Factors",
      grade: "Thesis Grade: 1.0"
    }
  },
  {
    degree: "Bachelor of Science - Computer Science",
    institution: "Dr. APJ Abdul Kalam Technical University",
    location: "India",
    period: "Aug 2015 - Jun 2019",
    details: "Graduated with distinction"
  }
];
