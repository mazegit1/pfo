
export interface Project {
  id: string;
  title: string;
  desc: string;
  year: string;
  tags: string[];
  type: string;
  metrics: {
    label: string;
    value: string;
  };
  image: string;
  link: string;
}

export const primaryProjects: Project[] = [
  {
    id: "safavy-front",
    title: "Safavy Platform Integration",
    desc: "Engineered responsive UI modules and clean state architecture for modern educational products, focusing on usability, scalable components, and seamless user interactions.",
    year: "2026",
    tags: ["React.js", "JavaScript", "Tailwind CSS", "Redux"],
    type: "Education Platform",
    metrics: {
      label: "Core Focus",
      value: "Frontend Architecture",
    },
    image: "/works/safavy.png",
    link: "https://safavy.org/",
  },
  {
    id: "high-result-academy",
    title: "High Result Academy System",
    desc: "A modern educational platform built with modular components and optimized rendering, delivering scalable student interaction interfaces and a responsive learning experience.",
    year: "2026",
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind"],
    type: "Educational Website",
    metrics: {
      label: "Core Focus",
      value: "Scalable UI",
    },
    image: "/works/hra.png",
    link: "https://hra.edu.az/",
  },
];

export const extraProjects: Project[] = [
  {
    id: "outdoora",
    title: "Outdoora Adventure Matrix",
    desc: "An immersive travel-focused interface featuring intricate media grids, smooth micro-interactions, and responsive layouts designed to deliver an engaging adventure discovery experience.",
    year: "2026",
    tags: ["React.js", "Tailwind CSS", "Framer Motion"],
    type: "Travel Platform",
    metrics: {
      label: "Core Focus",
      value: "Interactive Experience",
    },
    image: "/works/outdoora.png",
    link: "https://outdoora.netlify.app/",
  },
  {
    id: "maze-movio",
    title: "Maze Movio Platform",
    desc: "An immersive cinematic discovery platform featuring asynchronous movie search, dynamic filtering, and smooth interface transitions powered by movie database integration.",
    year: "2026",
    tags: ["React.js", "Next.js", "Tailwind CSS", "TMDB API"],
    type: "Movie Discovery Platform",
    metrics: {
      label: "Core Focus",
      value: "API Integration",
    },
    image: "/works/mazemovio.png",
    link: "https://maze-movio.vercel.app/",
  },
];
