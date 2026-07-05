export interface Project {
    id: string;
    title: string;
    desc: string;
    type: string;
    year: string;
    tags: string[];
    metrics: { label: string; value: string };
  }
  
  export const primaryProjects: Project[] = [
    {
      id: "course-management",
      title: "Course Management System",
      desc: "Enterprise educational management platform integrating automated tracking metrics, payment processing ledgers, and secure client role matrixing.",
      type: "Full Architecture",
      year: "2026",
      tags: ["Next.js", "TypeScript", "Zustand", "Tailwind"],
      metrics: { label: "Render Overhead", value: "< 14ms" }
    },
    {
      id: "internship-management",
      title: "Internship Tracking Registry",
      desc: "A secure cross-platform monitoring client built to manage internal student lifecycle assignments, featuring real-time data sync nodes.",
      type: "System Interface",
      year: "2026",
      tags: ["React.js", "Java Node", "Tailwind", "REST API"],
      metrics: { label: "Data Pipeline Sync", value: "Realtime" }
    }
  ];
  
  export const extraProjects: Project[] = [
    {
      id: "hardware-telemetry",
      title: "ECU Diagnostic Telemetry Node",
      desc: "Low-level diagnostic dashboard mapping interface designed to translate automotive engine control unit data signatures visually.",
      type: "Hardware Interface",
      year: "2026",
      tags: ["React", "TypeScript", "Tailwind CSS", "Canvas API"],
      metrics: { label: "Signal Latency", value: "0.2ms" }
    },
    {
      id: "custom-music-ui",
      title: "Reactive Audio Stream Layer",
      desc: "Dynamic front-end audio rendering node tracking reactive client-side buffer streams smoothly without frame degradation.",
      type: "UI Core Engine",
      year: "2025",
      tags: ["Next.js", "Framer Motion", "Web Audio API"],
      metrics: { label: "Frame Threshold", value: "60 FPS" }
    }
  ];