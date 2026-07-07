"use client";

import React from 'react';
import { motion } from 'framer-motion'; 
import { FiArrowRight, FiGlobe, FiTerminal } from 'react-icons/fi';

import { DevelopmentPhilosophy } from '@/components/DevelopmentPhilosophy';
import { TechnicalMatrix } from '@/components/Skills';
import { ProjShowcase } from '@/components/ProjShowcase';
import Link from 'next/link';

const HomePage = () => {
  const premiumEase = [0.16, 1, 0.3, 1] as const;

  const heroContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const heroLine = {
    hidden: { y: "110%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.1, ease: premiumEase } }
  };

  return (
    <div className="w-full bg-brand-bg text-brand-text min-h-screen selection:bg-brand-text selection:text-brand-bg overflow-x-hidden transition-colors duration-500">
      
      {/* Hero Section */}
      <section className="max-w-8xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-44 md:pb-28 lg:pt-48 lg:pb-36 flex flex-col justify-center min-h-[calc(100vh-4rem)] relative overflow-hidden">
        {/* Sağ tərəfdəki incə şaquli xətt */}
        <div className="absolute top-20 right-16 w-px h-32 bg-linear-to-b from-brand-border to-transparent hidden lg:block" />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={heroContainer}
          className="max-w-7xl w-full space-y-10 sm:space-y-12 lg:space-y-16"
        >
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="overflow-hidden py-1">
              <motion.h1 variants={heroLine} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight tracking-tight leading-none group cursor-default">
                Huseyn <span className="relative inline-block transition-transform duration-500 hover:translate-x-2">Khalil</span>
              </motion.h1>
            </div>
            
            <div className="overflow-hidden py-1">
              <motion.h1 variants={heroLine} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-tight leading-none flex items-center gap-3 sm:gap-4 lg:gap-6 flex-wrap group cursor-default">
                <span className="relative inline-block text-brand-text opacity-90 transition-opacity duration-300 hover:opacity-100">
                  Front-end Specialist
                </span>
                <span className="font-mono text-[9px] sm:text-xs tracking-widest uppercase border border-brand-border hover:border-brand-text px-3 py-1 rounded-full font-normal inline-block transition-colors duration-300">
                  Baku
                </span>
              </motion.h1>
            </div>

            <div className="overflow-hidden py-1">
              <motion.h1 variants={heroLine} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold tracking-tight leading-none text-neutral-400/80 dark:text-neutral-500/70 hover:text-neutral-500/90 dark:hover:text-neutral-400 transition-colors duration-500 cursor-default">
                & Systems Builder.
              </motion.h1>
            </div>
          </div>

          <motion.div 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 1, ease: premiumEase } } }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pt-6 items-start md:items-end"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-500 dark:text-neutral-400 font-light leading-relaxed md:col-span-7 max-w-2xl">
              Dedicated to translating complex architectural challenges into elegant, maintainable code. Specializing in high-performance interfaces with <strong className="text-brand-text font-medium border-b border-brand-border pb-0.5">Next.js</strong>, <strong className="text-brand-text font-medium border-b border-brand-border pb-0.5">TypeScript</strong>, and clean full-stack environments.
            </p>
            
            <div className="md:col-span-5 flex md:justify-end w-full">
              <Link 
                href="/contact"
                className="group relative inline-flex items-center space-x-4 bg-brand-text text-brand-bg px-6 sm:px-8 py-4 text-xs sm:text-sm uppercase tracking-widest font-medium overflow-hidden rounded-xs w-full sm:w-auto justify-center transition-colors"
              >
                {/* Hover effekti arxa fon korlanmasın deyə dark-a uyğunlaşdırıldı */}
                <div className="absolute inset-0 w-full h-full bg-neutral-800 dark:bg-neutral-200 opacity-20 dark:opacity-10 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                <span className="relative z-10">Initiate Connection</span>
                <FiArrowRight className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Komponent Vitrinləri */}
      <ProjShowcase/>
      <TechnicalMatrix/>
      <DevelopmentPhilosophy/>

      {/* Footer Info Cards */}
      <section className="border-t border-brand-border bg-brand-bg transition-colors duration-500">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-24 md:py-32 lg:py-40">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-brand-border border border-brand-border rounded-xs overflow-hidden">
            
            {/* Location Box */}
            <div className="pb-8 pt-6 md:py-20 md:px-12 lg:px-16 relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-card translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              
              <div className="relative z-10 block space-y-6 sm:space-y-8">
                <p className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                  <FiGlobe className="text-emerald-500" /> // Global Coordinates
                </p>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tight">
                    Baku, Azerbaijan
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-neutral-400 dark:text-neutral-500 font-light max-w-sm leading-relaxed">
                    Operating globally. Multi-lingual pipeline tracking with fluency in Azerbaijani, English, Russian, and Turkish.
                  </p>
                </div>
              </div>
            </div>

            {/* Mail Box */}
            <div className="pt-8 pb-6 md:py-20 md:px-12 lg:px-16 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-brand-card translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              
              <a href="mailto:mazegitt@gmail.com" className="relative z-10 block space-y-6 sm:space-y-8">
                <p className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                  <FiTerminal className="text-brand-text" /> // Intended Collaboration
                </p>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight group-hover:translate-x-2 transition-transform duration-500 breakdown-all">
                    mazegitt@gmail.com
                  </h3>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-brand-border flex items-center justify-center -rotate-45 md:group-hover:rotate-0 md:group-hover:bg-brand-text md:group-hover:text-brand-bg md:group-hover:border-brand-text transition-all duration-500 shrink-0">
                    <FiArrowRight className="text-base sm:text-lg" />
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;