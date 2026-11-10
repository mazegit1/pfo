
"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { FiTerminal, FiCpu, FiLayers, FiActivity, FiCode } from 'react-icons/fi';
import { projectsData, categories, ProjectItem } from '@/Mock/work';

const premiumEase = [0.16, 1, 0.3, 1] as const;

const getProjectIcon = (type: ProjectItem['iconType']) => {
  switch (type) {
    case 'layers': return <FiLayers />;
    case 'activity': return <FiActivity />;
    case 'code': return <FiCode />;
    case 'cpu': return <FiCpu />;
    case 'terminal': return <FiTerminal />;
    default: return <FiCode />;
  }
};

function ProjectCard({ project, idx }: { project: ProjectItem; idx: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const bgX = useTransform(x, [-0.5, 0.5], [-15, 15]);
  const bgY = useTransform(y, [-0.5, 0.5], [-15, 15]);

  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  const isExternal = project.link.startsWith('http');
  const isLocked = project.link === "#";

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    x.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    y.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={cardRef}
      href={isLocked ? undefined : project.link}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-disabled={isLocked}
      onClick={isLocked ? (e) => e.preventDefault() : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, scale: 0.94, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, ease: premiumEase, delay: idx * 0.03 }}
      className={`group relative border border-brand-border/40 bg-brand-card/5 rounded-sm backdrop-blur-xl flex flex-col justify-between min-h-[380px] sm:min-h-[420px] will-change-transform overflow-hidden isolation-auto no-underline ${
        isLocked ? "cursor-default" : "cursor-pointer"
      }`}
    >
      <motion.div
        style={{ x: bgX, y: bgY, translateZ: "-10px" }}
        className="absolute inset-0 z-0 pointer-events-none w-full h-full will-change-transform"
      >
        <Image
          src={project.imageUrl}
          alt={`${project.title} preview`}
          fill
          className="object-cover object-center opacity-[0.15] saturate-0 blur-[6px] transition-all duration-700 ease-premium group-hover:opacity-40 group-hover:saturate-100 group-hover:blur-sm group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={70}
        />

        <div className="absolute inset-0 bg-brand-bg/60 z-10" />
      </motion.div>

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500 z-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.rect
          width="100%"
          height="100%"
          fill="none"
          stroke="#10b981"
          strokeWidth="1.5"
          initial={{ pathLength: 0, strokeDasharray: "20 100" }}
          whileHover={{ pathLength: 1, strokeDasharray: "150 20" }}
          transition={{ duration: 1.2, ease: premiumEase }}
        />
      </svg>

      <div
        style={{ transform: "translateZ(40px)" }}
        className="relative p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-6 z-20"
      >
        <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-neutral-500">
          <span className="flex items-center gap-2 bg-brand-border/20 px-2.5 py-1 rounded-sm border border-brand-border/40 text-neutral-400 group-hover:text-emerald-400 group-hover:border-emerald-500/20 transition-colors">
            {getProjectIcon(project.iconType)}
            {project.category}
          </span>

          <span className="group-hover:text-neutral-300 transition-colors">
            [ SYS_{String(idx + 1).padStart(2, '0')} ]
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-brand-text group-hover:text-emerald-400 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-xs sm:text-sm text-neutral-400 font-mono leading-relaxed max-w-xl group-hover:text-neutral-300 transition-colors bg-brand-bg/20 backdrop-blur-sm p-3 rounded-sm border border-brand-border/10">
          {project.description}
        </p>
      </div>

      <div
        style={{ transform: "translateZ(60px)" }}
        className="relative pt-8 border-t border-brand-border/20 mx-6 sm:mx-8 lg:mx-10 mb-6 sm:mb-8 lg:mb-10 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 z-20"
      >
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.tech.map((t) => (
            <motion.span
              key={t}
              whileHover={{ y: -4, scale: 1.05, color: '#34d399' }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-[9px] sm:text-[10px] font-mono bg-brand-border/10 text-neutral-400 px-2.5 py-1 rounded-sm border border-brand-border/30 cursor-default backdrop-blur-sm"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <div className="w-full bg-brand-bg text-brand-text min-h-screen selection:bg-brand-text selection:text-brand-bg overflow-x-hidden perspective-[1200px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-20 sm:py-32 lg:py-48 flex flex-col justify-center">

        <div className="w-full space-y-6 sm:space-y-8 mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-neutral-400 font-mono"
          >
            <FiTerminal className="animate-pulse text-emerald-500" />
            <span>// Production_Archive_Log</span>
          </motion.div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-brand-text leading-[1.1] overflow-hidden max-w-5xl">
            {"Selected engineering solutions and modular builds.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-3 sm:mr-4 lg:mr-5"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: premiumEase, delay: i * 0.02 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>

        <div className="flex flex-wrap gap-2.5 sm:gap-3 border-b border-brand-border/20 pb-6 mb-12 sm:mb-20 w-full">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="relative px-5 py-2 text-xs font-mono transition-colors duration-300 z-10"
                style={{ color: isActive ? '#34d399' : '#a3a3a3' }}
              >
                <span className="relative z-20">{category}</span>

                {isActive && (
                  <motion.span
                    layoutId="activeFilterBgStrata"
                    className="absolute inset-0 bg-emerald-500/10 border border-emerald-500/40 rounded-full z-10"
                    transition={{ type: "spring", stiffness: 420, damping: 28 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 w-full isolation-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                idx={idx}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
