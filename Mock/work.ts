export interface ProjectItem {
    id: string;
    title: string;
    category: "Frontend" | "Architecture" | "Full Development" | "E-Commerce" | "Utilities";
    iconType: "layers" | "activity" | "code" | "cpu" | "terminal";
    tech: string[];
    description: string;
    link: string;
    imageUrl: string;
  }
  
  export const projectsData: ProjectItem[] = [
    {
      id: "course-management",
      title: "Full Course Management System",
      category: "Architecture",
      iconType: "layers",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      description: "Automated institutional architecture with advanced access roles, modular tracking, and automated business logic flow.",
      link: "https://adminpanel-mazegit.vercel.app/",
      imageUrl: "/works/adminpanel.png"
    },
    {
      id: "safavy-front",
      title: "Safavy Platform Integration",
      category: "Frontend",
      iconType: "cpu",
      tech: ["React.js", "JavaScript", "Tailwind CSS", "Redux"],
      description: "Engineered responsive UI modules and clean state architecture for specialized modern educational products.",
      link: "https://safavy.org/",
      imageUrl: "/works/safavy.png"
    },
    {
      id: "high-result-academy",
      title: "High Result Academy System",
      category: "Frontend",
      iconType: "terminal",
      tech: ["React.js", "Next.js", "TypeScript", "Tailwind"],
      description: "Optimized pre-rendering algorithms and modular components for scalable student interaction interfaces.",
      link: "https://hra.edu.az/",
      imageUrl: "/works/hra.png"
    },
  
    {
      id: "maze-notes",
      title: "Maze Notes Ecosystem",
      category: "Frontend",
      iconType: "code",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      description: "Cyber-minimalist productivity platform built for fast note capture, keyboard-driven structural logs, and zero latency.",
      link: "https://notes-mazegit.vercel.app/",
      imageUrl: "/works/notes.png"
    },
    {
      id: "maze-movio",
      title: "Maze Movio Platform",
      category: "Frontend",
      iconType: "cpu",
      tech: ["React.js", "Next.js", "Tailwind CSS", "TMDB API"],
      description: "Immersive cinematic explorer optimized with heavy client-side state transitions, asynchronous search filters, and media pre-caching.",
      link: "https://maze-movio.vercel.app/",
      imageUrl: "/works/mazemovio.png"
    },
    {
      id: "gleamy-showcase",
      title: "Gleamy Core UI Showcase",
      category: "Frontend",
      iconType: "terminal",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      description: "Polished interface hub demonstrating advanced animation mechanics, clean state pipelines, and high-density performance screens.",
      link: "https://gleamy-xi.vercel.app/",
      imageUrl: "/works/gleamy.png"
    },
    {
      id: "fake-db-dashboard",
      title: "Asynchronous Database Engine Environment",
      category: "Full Development",
      iconType: "layers",
      tech: ["React.js", "JSON Server", "REST API", "Axios"],
      description: "An operational sandbox implementing mock relational database setups, live CRUD hooks, and low-latency state mutations.",
      link: "https://fake-db.netlify.app/",
      imageUrl: "/works/fakedb.png"
    },
    {
      id: "stardust-calculator",
      title: "Stardust Algorithmic Calculator",
      category: "Utilities",
      iconType: "terminal",
      tech: ["JavaScript", "HTML5", "CSS3", "Math Core"],
      description: "High-precision computational tool executing compound equations, tracking mathematical input syntax, and operating instant UI state redraws.",
      link: "https://eloquent-stardust-6524f8.netlify.app/",
      imageUrl: "/works/calculator.png"
    },
  
    {
      id: "ecobazar",
      title: "EcoBazar React Marketplace",
      category: "E-Commerce",
      iconType: "activity",
      tech: ["React.js", "Context API", "Tailwind CSS", "Formik"],
      description: "Full-scale storefront featuring reactive cart logic, item queries, multi-parameter catalog filtering, and robust checkout validation fields.",
      link: "https://ecobazar-react.netlify.app/",
      imageUrl: "/works/ecobazar.png"
    },
    {
      id: "nikem-shop",
      title: "Nikem Performance Apparel Hub",
      category: "E-Commerce",
      iconType: "code",
      tech: ["React.js", "TypeScript", "SCSS Modules", "Redux Toolkit"],
      description: "High-performance sportswear interface focused on fluid layout animations, product variations, and optimized asset delivery.",
      link: "https://nikem.netlify.app/",
      imageUrl: "/works/nike.png"
    },
    {
      id: "elit-optimal",
      title: "Elit Optimal Commercial Interface",
      category: "E-Commerce",
      iconType: "layers",
      tech: ["React.js", "Tailwind CSS", "Framer Motion"],
      description: "Corporate e-commerce platform offering smooth customer onboarding routes, reactive inventories, and highly modular layout sheets.",
      link: "https://elit-optimal.netlify.app/",
      imageUrl: "/works/elitoptimal.png"
    },
  
    {
      id: "squareupm",
      title: "SquareUp Strategic Platform",
      category: "Frontend",
      iconType: "cpu",
      tech: ["React.js", "TypeScript", "Tailwind CSS"],
      description: "Premium SaaS dashboard layout featuring responsive data cards, interactive UI parameters, and pixel-perfect design translation.",
      link: "https://squareupm.netlify.app/",
      imageUrl: "/works/squareup.png"
    },
    {
      id: "leaderm",
      title: "LeaderM Digital Ecosystem",
      category: "Frontend",
      iconType: "code",
      tech: ["HTML5", "SCSS", "JavaScript", "GSAP"],
      description: "Corporate brand interface optimizing scroll trigger dynamics, fluid grid elements, and asynchronous content presentation layers.",
      link: "https://leaderm.netlify.app/",
      imageUrl: "/works/liderservice.png"
    },
    {
      id: "outdoora",
      title: "Outdoora Adventure Matrix",
      category: "Frontend",
      iconType: "activity",
      tech: ["React.js", "Tailwind CSS", "Framer Motion"],
      description: "Immersive layout featuring intricate media grids, micro-interactions, and a highly responsive structural footprint for modern travel systems.",
      link: "https://outdoora.netlify.app/",
      imageUrl: "/works/outdoora.png"
    },
    {
      id: "solvem",
      title: "Solvem Engineering Environment",
      category: "Frontend",
      iconType: "terminal",
      tech: ["React.js", "TypeScript", "Tailwind CSS"],
      description: "Minimalist landing framework crafted for tech-centric agency ecosystems, prioritizing structural speed and clean accessibility trees.",
      link: "https://solvem.netlify.app/",
      imageUrl: "/works/solvem.png"
    },
    {
      id: "finsweet-layout",
      title: "Finsweet Strategic Architecture",
      category: "Architecture",
      iconType: "layers",
      tech: ["React.js", "SCSS", "BEM Methodology"],
      description: "Component-driven layout build translating rich mockups into semantic, highly maintainable, scalable web architecture.",
      link: "https://finsweet-mazegit.netlify.app/",
      imageUrl: "/works/finsweet.png"
    }
  ];
  
  export const categories = ["All", "Frontend", "Architecture", "Full Development", "E-Commerce", "Utilities"] as const;