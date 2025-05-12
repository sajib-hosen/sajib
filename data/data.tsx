import { PROJECT_IMG } from "@/constent";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";

export const projects_data = [
  {
    name: "Buy Port",
    img_url: PROJECT_IMG.first,
    description: "E-Commerce websites for multiple creators",
    tags: ["Next.js", "Nest.js", "sslcommerz", "Mongo DB"],
    project_url: "https://clone-of.vercel.app",
  },
  {
    name: "Halal Grocery Shop",
    img_url: PROJECT_IMG.first,
    description: "E-commerce to manage a grocery shop",
    tags: ["React.js", "express.js", "Mongo DB", "firebase"],
    project_url: "https://illustrious-semolina-241bb3.netlify.app/",
  },
  {
    name: "BCS Joyjatra",
    img_url: PROJECT_IMG.first,
    description: "BCS Joyjatra is a online learning platform",
    tags: ["React.js", "express.js", "Mongo DB", "firebase"],
    project_url: "https://illustrious-semolina-241bb3.netlify.app/",
  },
  {
    name: "Wholesale Point",
    img_url: PROJECT_IMG.secant,
    description: "Store management web application",
    tags: ["React.js", "express.js", "Mongo DB", "firebase"],
    project_url: "https://coruscating-faun-e0a53f.netlify.app/",
  },
  {
    name: "Adverlo",
    img_url: PROJECT_IMG.third,
    description: "This is a demo business website",
    tags: ["React.js", "gsap"],
    project_url: "https://neon-tanuki-376c60.netlify.app/",
  },
];

export const skills_data = [
  {
    title: "Programming Languages & Frameworks",
    skills: [
      "JavaScript (ES6+), TypeScript, HTML5, CSS3, Sass",
      "Next.js, React, NestJS, Node.js, Express, Tailwindcss",
    ],
  },
  {
    title: "Backend & Databases",
    skills: ["REST APIs", "PostgreSQL, MongoDB, TypeORM"],
  },
  {
    title: "Payment Gateway",
    skills: ["sslcommerz, stripe"],
  },
  {
    title: "Performance Optimization",
    skills: ["Lighthouse, bundle-analyzer"],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Git, GitHub, Docker, AWS (EC2, S3, SNS, SES, CDN), Vercel",
      "CI/CD (GitHub Actions), Postman, Swagger",
    ],
  },
  {
    title: "Testing",
    skills: ["Jest"],
  },
  {
    title: "Soft Skills",
    skills: [
      "Remote collaboration, Clear communication, Agile/Scrum",
      "Code quality, Attention to detail",
    ],
  },
];

export const social_links_data = [
  {
    title: "Facebook",
    link: "https://www.facebook.com/share/1BeUqtt9iF/?mibextid=qi2Omg",
    icon: <Facebook />,
  },
  {
    title: "GitHub",
    link: "https://github.com/sajib-hosen",
    icon: <Github />,
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/sajib-hosen-815a29218/",
    icon: <Linkedin />,
  },
  {
    title: "E-mail",
    link: "mailto:sajib.201h@gmail.com",
    icon: <Mail />,
  },
];
