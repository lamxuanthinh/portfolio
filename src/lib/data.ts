import { Link, ProjectInfo } from "./types";

export const links: Link[] = [
  {
    nameEng: "Home",
    hash: "#home",
  },
  {
    nameEng: "About",
    hash: "#about",
  },
  {
     nameEng: "Projects",
     hash: "#projects",
   },
  {
    nameEng: "Skills",
    hash: "#skills",
  },
  {
    nameEng: "Contact",
    hash: "#contact",
  },
];

export const projectsData: ProjectInfo[] = [
  {
    title: "Wetoon",
    description: "An AI-driven platform that brings stories to life, turning ideas into captivating comics with intelligent storytelling and stunning visuals.",
    tags: ["NodeJS", "Next.js", "Python", "Django", "PostgreSQL"],
    imageUrl: "/wetoon.png",
    links: ["https://wetoon.ai"],
  },
  {
    title: "Shift Happens",
    description: "Work shift management and recruitment platform",
    tags: ["Nodejs", "React", "Nestjs", "PostgreSQL", "Microservices"],
    imageUrl: "/shifthappens.png",
    links: ["https://shifthappens.app" , 'https://play.google.com/store/apps/details?id=app.shifthappens', 'https://apps.apple.com/us/app/shift-happens/id6740257662'],
  },
  {
    title: "Rail changer",
    description: "Platform for monitoring and managing the railway system",
    tags: ["Nodejs", "React", "Nestjs", "PostgreSQL", "Microservices"],
    imageUrl: "/rail-changer.png",
    links: ["https://apps.apple.com/vn/app/railchangeruk/id6503674554", "https://play.google.com/store/apps/details?id=com.fapp.triller&hl=en"],
  },
  {
    title: "Dong Ho Chi Thanh",
    description: "An e-commerce website for selling luxury and stylish watches with premium designs and exclusive collections.",
    tags: ["Nodejs", "Next.js", "Expressjs", "MongoDB"],
    imageUrl: "/donghochithanh.png",
    links: ["https://donghochithanh.com"],
  },
];

export const skillsData = [
  "NodeJS",
  "JavaScript",
  "TypeScript",
  "React",
  "NextJS",
  "NestJS",
  "Expressjs",
  "Python",
  "Django",
  "Tailwind",
  "Prisma",
  "TypeORM",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kubernetes"
];
