import type { Project, SkillGroup, SocialLink } from "@/types";

export const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

export const heroContent = {
  tagline: "Computer Science Student • Full-Stack Developer",
  bio: "I enjoy building modern web applications, learning new technologies, and turning ideas into projects. I'm constantly exploring better ways to create clean, responsive, and user-friendly experiences.",
};

export const aboutContent = {
  title: "About Me",
  paragraphs: [
    "I'm a Computer Science student who enjoys learning by building real projects. Recently, I've been exploring modern web development, creating responsive applications, and understanding how frontend and backend technologies come together to build complete products.",
    "I like breaking down complex problems, experimenting with new tools, and improving my skills one project at a time. Every project teaches me something new, and I'm always looking for opportunities to grow as a developer.",
    "When I'm not coding, you'll usually find me exploring new technologies, reading developer blogs, or refining ideas for my next project.",
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "Neon", "SQLite"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "npm"],
  },
];

export const projects: Project[] = [
  {
    title: "Project 1",
    description: "More details coming soon.",
    tech: [],
  },
  {
    title: "Project 2",
    description: "More details coming soon.",
    tech: [],
  },
  {
    title: "Project 3",
    description: "More details coming soon.",
    tech: [],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Akshay6601" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akshay-tiwari-964a32262/" },
  { label: "Email", href: "mailto:akkitiw@gmail.com" },
  { label: "Portfolio", href: "/" },
];

export const resumeUrl = "";
