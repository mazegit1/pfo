"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiLayers, FiTerminal, FiRadio, FiActivity } from 'react-icons/fi';
import { primaryProjects, extraProjects, Project } from '@/Mock/projects';

export const ProjShowcase = () => {
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const premiumEase = [0.16, 1, 0.3, 1] as const;

  // Renders dynamic custom interactive blueprints based on project type
  const renderInteractiveBlueprint = (id: string) => {
    switch (id) {
      case "course-management":
        return (
          <div className="w-full h-full border border-neutral-200/60 rounded p-4 bg-[#fcfaf6]/90 flex flex-col justify-between group-hover:border-neutral-400/80 transition-colors duration-500">
            <div className="flex justify-between items-center border-b border-neutral-200/40 pb-2 font-mono text-[9px] text-neutral-400">
              <span>SYS_LEDGER // ACTIVE</span>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="space-y-2 py-2">
              <div className="h-2 w-3/4 bg-neutral-200/80 rounded group-hover:bg-neutral-300 transition-colors" />
              <div className="h-2 w-1/2 bg-neutral-200/40 rounded" />
              <div className="grid grid-cols-3 gap-1 pt-2">
                <div className="h-6 bg-neutral-200/20 rounded-sm border border-neutral-200/40" />
                <div className="h-6 bg-neutral-200/20 rounded-sm border border-neutral-200/40" />
                <div className="h-6 bg-[#161616] rounded-sm flex items-center justify-center text-[8px] text-white font-mono">OK</div>
              </div>
            </div>
            <div className="h-7 w-full bg-neutral-100 border border-neutral-200 rounded-xs flex items-center px-2 font-mono text-[8px] text-neutral-400">
              $ npm run performance-audit --secure
            </div>
          </div>
        );

      case "internship-management":
        return (
          <div className="w-full h-full border border-neutral-200/60 rounded p-4 bg-[#fcfaf6]/90 flex flex-col justify-between group-hover:border-neutral-400/80 transition-colors duration-500">
            <div className="flex space-x-1.5">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`h-10 w-1/3 border border-neutral-200/60 rounded p-1.5 flex flex-col justify-between transition-all duration-500 ${i === 3 ? 'bg-[#161616] text-white' : 'bg-neutral-200/10'}`}>
                  <div className={`h-1 w-4 rounded ${i === 3 ? 'bg-neutral-700' : 'bg-neutral-300'}`} />
                  <div className={`h-1.5 w-8 rounded ${i === 3 ? 'bg-white' : 'bg-neutral-200'}`} />
                </div>
              ))}
            </div>
            <div className="flex items-end space-x-1 h-12 pt-2">
              {[40, 75, 90, 55, 30, 65, 80, 45].map((height, idx) => (
                <motion.div
                  key={idx}
                  className={`w-full rounded-t-xs ${idx % 3 === 0 ? 'bg-[#161616]' : 'bg-neutral-200'}`}
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
          <div className="w-12 h-px bg-neutral-300 group-hover:w-24 transition-all duration-700 ease-out flex items-center justify-center relative">
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
      className="group block space-y-5 cursor-pointer"
    >
      {/* Interactive Canvas/Frame Blueprint */}
      <div className="aspect-16/10 w-full bg-neutral-200/20 border border-neutral-200/40 flex items-center justify-center relative overflow-hidden p-6 sm:p-10 group-hover:border-neutral-400 hover:bg-neutral-200/30 transition-all duration-500 rounded-sm">
        <div className="w-full h-full transition-transform duration-700 group-hover:scale-[1.015]">
          {renderInteractiveBlueprint(proj.id)}
        </div>
        
        {/* Absolute telemetry token badge on hover */}
        <div className="absolute top-3 right-3 font-mono text-[8px] uppercase tracking-wider text-neutral-400 bg-neutral-100 border border-neutral-200 px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xs">
          {proj.metrics.label}: {proj.metrics.value}
        </div>
      </div>

      {/* Title block and system parameters description stack */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div className="space-y-2 max-w-xl">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-medium text-lg sm:text-xl tracking-tight text-[#161616]">
              {proj.title}
            </h3>
            <span className="text-[9px] font-mono border border-neutral-200 bg-neutral-200/20 text-neutral-500 px-1.5 py-0.2 rounded-xs">
              {proj.year}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
            {proj.desc}
          </p>
          
          {/* Component Micro-Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {proj.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-mono text-neutral-500 bg-neutral-200/40 px-2 py-0.5 rounded-xs group-hover:bg-[#161616] group-hover:text-[#fcfaf6] transition-colors duration-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <span className="text-[9px] font-mono uppercase tracking-widest border border-neutral-300 text-neutral-400 px-2.5 py-1 shrink-0 rounded-xs bg-[#fcfaf6]">
          {proj.type}
        </span>
      </div>
    </motion.div>
  );

  return (
    <section className="border-t border-neutral-200/60 bg-[#fcfaf6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-36">
        
        {/* Title Engine Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono mb-2 sm:mb-4">
              <FiTerminal className="text-[#161616]" />
              <span>// Built Architectures</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-[#161616]">
              Engineering Portfolio
            </h2>
          </div>
        </div>

        {/* Primary Stack Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {primaryProjects.map((proj, idx) => renderProjectCard(proj, idx))}
        </div>

        {/* Nested Smooth Progressive Reveal Layer */}
        <AnimatePresence>
          {showMoreProjects && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.7, ease: premiumEase }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pt-12 sm:pt-16 border-t border-neutral-200/60 mt-12 sm:mt-16">
                {extraProjects.map((proj, idx) => renderProjectCard(proj, idx, true))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Toggle Engine Trigger */}
        <div className="mt-16 sm:mt-20 flex justify-center">
          {!showMoreProjects ? (
            <button 
              onClick={() => setShowMoreProjects(true)}
              className="group flex items-center space-x-3 border border-neutral-300 px-8 py-4 text-[10px] sm:text-xs uppercase tracking-widest font-mono hover:border-[#161616] hover:bg-[#161616] hover:text-white transition-all duration-500 w-full sm:w-auto justify-center rounded-sm"
            >
              <FiRadio className="animate-pulse text-neutral-400 group-hover:text-white" />
              <span>De-Restrict Index Matrix</span>
              <span className="text-neutral-400 group-hover:text-neutral-300 font-light font-sans ml-1">(+2)</span>
            </button>
          ) : (
            <Link 
              href="/work"
              className="group flex items-center space-x-3 bg-[#161616] text-[#fcfaf6] px-8 py-4 text-[10px] sm:text-xs uppercase tracking-widest font-mono hover:bg-neutral-800 transition-all duration-300 w-full sm:w-auto justify-center rounded-sm"
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