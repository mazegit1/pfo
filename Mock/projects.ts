// /Mock/projects.ts

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
  image?: string; 
}

export const primaryProjects: Project[] = [
  {
    id: "maze-notes",
    title: "Maze Notes Ecosystem",
    desc: "Cyber-minimalist productivity platform built for fast note capture, keyboard-driven structural logs, and zero latency.",
    year: "2026",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    type: "Frontend",
    metrics: { label: "IO_SPEED", value: "0.2ms" },
    image: "/images/notes.png"
  },
  {
    id: "maze-movio",
    title: "Maze Movio Platform",
    desc: "Immersive cinematic explorer optimized with heavy client-side state transitions, asynchronous search filters, and media pre-caching.",
    year: "2025",
    tags: ["React.js", "Next.js", "Tailwind CSS", "TMDB API"],
    type: "Frontend",
    metrics: { label: "CACHE", value: "HIT" },
    image: "/images/mazemovio.png"
  }
];

export const extraProjects: Project[] = [
  {
    id: "gleamy-showcase",
    title: "Gleamy Core UI Showcase",
    desc: "Polished interface hub demonstrating advanced animation mechanics, clean state pipelines, and high-density performance screens.",
    year: "2025",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    type: "Frontend",
    metrics: { label: "FPS", value: "120" },
    image: "/images/gleamy.png"
  },
  {
    id: "fake-db-dashboard",
    title: "Asynchronous Database Engine Environment",
    desc: "An operational sandbox implementing mock relational database setups, live CRUD hooks, and low-latency state mutations.",
    year: "2026",
    tags: ["React.js", "JSON Server", "REST API", "Axios"],
    type: "Full Development",
    metrics: { label: "MUTATE", value: "ASYNC" }
  }
];