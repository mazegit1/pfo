"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiLayers, FiTerminal, FiRadio } from 'react-icons/fi';
import { primaryProjects, extraProjects, Project } from '@/Mock/projects';

export const ProjShowcase = () => {
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const premiumEase = [0.16, 1, 0.3, 1] as const;

  const renderInteractiveBlueprint = (id: string) => {
    switch (id) {
      case "course-management":
        return (
          <div className="w-full h-full border border-brand-border rounded p-4 bg-brand-bg/90 flex flex-col justify-between group-hover:border-brand-text/40 transition-colors duration-500">
            <div className="flex justify-between items-center border-b border-brand-border pb-2 font-mono text-[9px] text-neutral-400">
              <span>SYS_LEDGER // ACTIVE</span>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="space-y-2 py-2">
              <div className="h-2 w-3/4 bg-brand-border rounded group-hover:bg-neutral-300 dark:group-hover:bg-neutral-700 transition-colors" />
              <div className="h-2 w-1/2 bg-brand-border/40 rounded" />
              <div className="grid grid-cols-3 gap-1 pt-2">
                <div className="h-6 bg-brand-card rounded-sm border border-brand-border" />
                <div className="h-6 bg-brand-card rounded-sm border border-brand-border" />
                <div className="h-6 bg-brand-text rounded-sm flex items-center justify-center text-[8px] text-brand-bg font-mono transition-colors">OK</div>
              </div>
            </div>
            <div className="h-7 w-full bg-brand-card border border-brand-border rounded-xs flex items-center px-2 font-mono text-[8px] text-neutral-400">
              $ npm run performance-audit --secure
            </div>
          </div>
        );

      case "internship-management":
        return (
          <div className="w-full h-full border border-brand-border rounded p-4 bg-brand-bg/90 flex flex-col justify-between group-hover:border-brand-text/40 transition-colors duration-500">
            <div className="flex space-x-1.5">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`h-10 w-1/3 border border-brand-border rounded p-1.5 flex flex-col justify-between transition-all duration-500 ${i === 3 ? 'bg-brand-text text-brand-bg' : 'bg-brand-card'}`}>
                  <div className={`h-1 w-4 rounded ${i === 3 ? 'bg-brand-bg/40' : 'bg-brand-border'}`} />
                  <div className={`h-1.5 w-8 rounded ${i === 3 ? 'bg-brand-bg' : 'bg-neutral-300 dark:bg-neutral-700'}`} />
                </div>
              ))}
            </div>
            <div className="flex items-end space-x-1 h-12 pt-2">
              {[40, 75, 90, 55, 30, 65, 80, 45].map((height, idx) => (
                <motion.div
                  key={idx}
                  className={`w-full rounded-t-xs ${idx % 3 === 0 ? 'bg-brand-text' : 'bg-brand-border'}`}
                  initial={{ height: "10%" }}
                  whileInView={{ height: `${height}%` }}
                  transition={{ duration: 1.2, ease: premiumEase }}
                />
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="w-12 h-px bg-brand-border group-hover:w-24 transition-all duration-700 ease-out flex items-center justify-center relative">
            <FiLayers className="text-neutral-400 absolute opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
          </div>
        );
    }
  };

  const renderProjectCard = (proj: Project, index: number, isExtra = false) => (
    <motion.div
      key={proj.id}
      initial={isExtra ? { opacity: 0, y: 30 } : undefined}
      animate={isExtra ? { opacity: 1, y: 0 } : undefined}
      transition={{ delay: index * 0.08, duration: 0.6, ease: premiumEase }}
      className="group block space-y-5 cursor-pointer text-brand-text"
    >
      <div className="aspect-16/10 w-full bg-brand-card border border-brand-border flex items-center justify-center relative overflow-hidden p-6 sm:p-10 hover:border-brand-text/60 hover:bg-neutral-200/5 dark:hover:bg-neutral-800/5 transition-all duration-500 rounded-sm">
        <div className="w-full h-full transition-transform duration-700 group-hover:scale-[1.015]">
          {renderInteractiveBlueprint(proj.id)}
        </div>
        
        <div className="absolute top-3 right-3 font-mono text-[8px] uppercase tracking-wider text-neutral-400 bg-brand-card border border-brand-border px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xs">
          {proj.metrics.label}: {proj.metrics.value}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div className="space-y-2 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-medium text-lg sm:text-xl lg:text-2xl tracking-tight text-brand-text">
              {proj.title}
            </h3>
            <span className="text-[9px] font-mono border border-brand-border bg-brand-card text-neutral-500 px-1.5 py-0.2 rounded-xs">
              {proj.year}
            </span>
          </div>
          <p className="text-xs sm:text-sm lg:text-base text-neutral-400 dark:text-neutral-500 font-light leading-relaxed">
            {proj.desc}
          </p>
          
          <div className="flex flex-wrap gap-1.5 pt-1">
            {proj.tags.map((tag) => (
              <span key={tag} className="text-[10px] lg:text-xs font-mono text-neutral-500 dark:text-neutral-400 bg-brand-card px-2 py-0.5 rounded-xs border border-brand-border/40 group-hover:bg-brand-text group-hover:text-brand-bg group-hover:border-brand-text transition-colors duration-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <span className="text-[9px] font-mono uppercase tracking-widest border border-brand-border text-neutral-400 px-2.5 py-1 shrink-0 rounded-xs bg-brand-bg transition-colors">
          {proj.type}
        </span>
      </div>
    </motion.div>
  );

  return (
    <section className="border-t border-brand-border bg-brand-bg text-brand-text transition-colors duration-500">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-24 md:py-36 lg:py-44">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-24 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono mb-2 sm:mb-4">
              <FiTerminal className="text-brand-text" />
              <span>// Built Architectures</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-brand-text">
              Engineering Portfolio
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          {primaryProjects.map((proj, idx) => renderProjectCard(proj, idx))}
        </div>

        <AnimatePresence>
          {showMoreProjects && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.7, ease: premiumEase }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 pt-12 sm:pt-16 border-t border-brand-border mt-12 sm:mt-16">
                {extraProjects.map((proj, idx) => renderProjectCard(proj, idx, true))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-16 sm:mt-20 lg:mt-28 flex justify-center">
          {!showMoreProjects ? (
            <button 
              onClick={() => setShowMoreProjects(true)}
              className="group flex items-center space-x-3 border border-brand-border px-8 py-4 text-[10px] sm:text-xs uppercase tracking-widest font-mono hover:border-brand-text hover:bg-brand-text hover:text-brand-bg transition-all duration-500 w-full sm:w-auto justify-center rounded-sm cursor-pointer"
            >
              <FiRadio className="animate-pulse text-neutral-400 group-hover:text-brand-bg" />
              <span>De-Restrict Index Matrix</span>
              <span className="text-neutral-400 group-hover:text-neutral-300 dark:group-hover:text-neutral-500 font-light font-sans ml-1">(+2)</span>
            </button>
          ) : (
            <Link 
              href="/work"
              className="group flex items-center space-x-3 bg-brand-text text-brand-bg px-8 py-4 text-[10px] sm:text-xs uppercase tracking-widest font-mono hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-300 w-full sm:w-auto justify-center rounded-sm"
            >
              <span>Initialize Full Repository Link</span>
              <FiArrowRight className="group-hover:translate-x-1.5 transition-transform duration-500" />
            </Link>
          )}
        </div>

      </div>
    </section>
  );
};