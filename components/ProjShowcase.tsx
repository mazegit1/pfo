
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiTerminal, FiRadio } from "react-icons/fi";
import { primaryProjects, extraProjects, Project } from "@/Mock/projects";

const premiumEase = [0.16, 1, 0.3, 1] as const;

interface ProjectCardProps {
  proj: Project;
  index: number;
  isExtra?: boolean;
}

const ProjectCard = ({
  proj,
  index,
  isExtra = false,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={isExtra ? { opacity: 0, y: 30 } : undefined}
      animate={isExtra ? { opacity: 1, y: 0 } : undefined}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: premiumEase,
      }}
      className="group block space-y-5 text-brand-text"
    >
      <Link
        href="/work"
        aria-label={`View ${proj.title} project`}
        className="block"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm border border-brand-border bg-brand-card transition-all duration-500 group-hover:border-brand-text/60">
         <Image
  src={proj.image}
  alt={`${proj.title} preview`}
  fill
  priority={!isExtra && index < 2}
  sizes="(max-width: 768px) 100vw, 50vw"
  quality={85}
  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
/>

          <div className="pointer-events-none absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/5" />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />

          <div className="pointer-events-none absolute inset-0 border border-white/0 transition-colors duration-500 group-hover:border-white/20" />

          <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-2 rounded-xs border border-white/10 bg-black/50 px-2 py-1 font-mono text-[8px] uppercase tracking-wider text-white/80 backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            LIVE_PREVIEW
          </div>

          <div className="pointer-events-none absolute right-3 top-3 rounded-xs border border-white/10 bg-black/60 px-2 py-1 font-mono text-[8px] uppercase tracking-wider text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
            {proj.metrics.label}: {proj.metrics.value}
          </div>

          <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex translate-y-3 items-center justify-between opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="font-mono text-[9px] uppercase tracking-widest text-white/90">
              {proj.title}
            </span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
              <FiArrowRight size={14} />
            </span>
          </div>
        </div>
      </Link>

      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row">
        <div className="max-w-2xl space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-medium tracking-tight text-brand-text sm:text-xl lg:text-2xl">
              {proj.title}
            </h3>

            <span className="rounded-xs border border-brand-border bg-brand-card px-1.5 py-0.5 font-mono text-[9px] text-neutral-500">
              {proj.year}
            </span>
          </div>

          <p className="text-xs font-light leading-relaxed text-neutral-400 dark:text-neutral-500 sm:text-sm lg:text-base">
            {proj.desc}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {proj.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-xs border border-brand-border/40 bg-brand-card px-2 py-0.5 font-mono text-[10px] text-neutral-500 transition-colors duration-300 group-hover:border-brand-text group-hover:bg-brand-text group-hover:text-brand-bg dark:text-neutral-400 lg:text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <span className="shrink-0 rounded-xs border border-brand-border bg-brand-bg px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-neutral-400">
          {proj.type}
        </span>
      </div>
    </motion.div>
  );
};

export const ProjShowcase = () => {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  return (
    <section className="border-t border-brand-border bg-brand-bg text-brand-text transition-colors duration-500">
      <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-24 md:px-12 md:py-36 lg:px-16 lg:py-44">
        <div className="mb-16 flex flex-col justify-between gap-4 md:mb-24 md:flex-row md:items-end">
          <div>
            <div className="mb-2 flex items-center space-x-2 font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-400 sm:mb-4 sm:text-xs">
              <FiTerminal className="text-brand-text" />
              <span>// Built Architectures</span>
            </div>

            <h2 className="text-3xl font-light tracking-tight text-brand-text sm:text-4xl md:text-6xl lg:text-7xl">
              Engineering Portfolio
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {primaryProjects.map((proj, idx) => (
            <ProjectCard key={proj.id} proj={proj} index={idx} />
          ))}
        </div>

        <AnimatePresence initial={false}>
          {showMoreProjects && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.7, ease: premiumEase }}
              className="overflow-hidden"
            >
              <div className="mt-12 grid grid-cols-1 gap-12 border-t border-brand-border pt-12 sm:mt-16 sm:pt-16 lg:grid-cols-2 lg:gap-16 xl:gap-20">
                {extraProjects.map((proj, idx) => (
                  <ProjectCard
                    key={proj.id}
                    proj={proj}
                    index={idx}
                    isExtra
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-16 flex justify-center sm:mt-20 lg:mt-28">
          {!showMoreProjects ? (
            <button
              type="button"
              onClick={() => setShowMoreProjects(true)}
              aria-expanded={showMoreProjects}
              className="group flex w-full cursor-pointer items-center justify-center space-x-3 rounded-sm border border-brand-border px-8 py-4 font-mono text-[10px] uppercase tracking-widest transition-all duration-500 hover:border-brand-text hover:bg-brand-text hover:text-brand-bg sm:w-auto sm:text-xs"
            >
              <FiRadio className="animate-pulse text-neutral-400 group-hover:text-brand-bg" />

              <span>De-Restrict Index Matrix</span>

              <span className="ml-1 font-sans font-light text-neutral-400 group-hover:text-neutral-300 dark:group-hover:text-neutral-500">
                (+{extraProjects.length})
              </span>
            </button>
          ) : (
            <Link
              href="/work"
              className="group flex w-full items-center justify-center space-x-3 rounded-sm bg-brand-text px-8 py-4 font-mono text-[10px] uppercase tracking-widest text-brand-bg transition-all duration-300 hover:bg-neutral-800 dark:hover:bg-neutral-200 sm:w-auto sm:text-xs"
            >
              <span>Initialize Full Repository Link</span>

              <FiArrowRight className="transition-transform duration-500 group-hover:translate-x-1.5" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
