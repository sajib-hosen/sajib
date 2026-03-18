import { BANKS, PAYMENT_GATEWAY, PROJECT_IMG } from "@/constent";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";

export const projects_data = [
  {
    name: "EduAyna",
    img_url: PROJECT_IMG.eduayna,
    description: "Education management system (SaaS)",
    tags: ["Next.js", "Nest.js", "Postgres", "Drizzle-ORM", "Bank API"],
    project_url: "https://flynest.net/",
  },
  {
    name: "Avatown",
    img_url: PROJECT_IMG.avatown,
    description: "E-Commerce websites for multiple creators",
    tags: ["Next.js", "Nest.js", "stripe", "Mongo DB"],
    project_url: "https://goavatown.com/en",
  },

  {
    name: "Buy Port",
    img_url: PROJECT_IMG.buyport,
    description: "E-Commerce websites for multiple creators",
    tags: ["Next.js", "Nest.js", "sslcommerz", "Mongo DB"],
    project_url: "https://clone-of.vercel.app",
  },
  {
    name: "The Solar System",
    img_url: PROJECT_IMG.first,
    description:
      "A 3D interactive model of the Solar System built with Next.js and Three.js. Explore planets, moons, and orbits in real-time.",
    tags: ["Next.js", "Three.js", "React.js", "Tailwindcss"],
    project_url: "https://soler-system-pzeh.vercel.app/",
  },
];

export const skills_data = [
  {
    title: "Languages & Frameworks",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Next.js",
      "React",
      "NestJS",
      "Node.js",
      "Express",
      "Tailwindcss",
      "Flutter",
    ],
  },
  {
    title: "Backend & Databases",
    skills: ["REST APIs", "PostgreSQL", "MongoDB", "TypeORM", "Drizzle-ORM"],
  },
  {
    title: "Payment Gateway",
    skills: ["sslcommerz", "stripe", ...PAYMENT_GATEWAY, ...BANKS],
  },
  {
    title: "Performance Optimization",
    skills: ["Lighthouse", "bundle-analyzer", "API Optimization"],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "AWS",
      "Vercel",
      "CI/CD",
      "Postman",
      "Swagger",
      "Hostinger",
    ],
  },
  {
    title: "Testing",
    skills: ["Jest"],
  },
  {
    title: "Soft Skills",
    skills: [
      "Remote collaboration",
      "Clear communication",
      "Agile/Scrum",
      "Code quality",
      "Attention to detail",
    ],
  },
];

export const social_links_data = [
  {
    title: "E-mail",
    link: "mailto:sajib.201h@gmail.com",
    icon: <Mail />,
    short_url: "sajib.201h@gmail.com",
  },
  {
    title: "GitHub",
    link: "https://github.com/sajib-hosen",
    icon: <Github />,
    short_url: "@sajib-hosen",
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/sajib-hosen-815a29218/",
    icon: <Linkedin />,
    short_url: "@sajib-hosen-815a29218",
  },

  {
    title: "Facebook",
    link: "https://www.facebook.com/share/1BeUqtt9iF/?mibextid=qi2Omg",
    icon: <Facebook />,
    short_url: "@sajib.hosen.142",
  },
];
