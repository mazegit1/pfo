"use client";

import React, { useState } from 'react';
// import Link from 'next/link'; // [UNUSED] Managed inside modular components now
import { motion } from 'framer-motion'; // Removed AnimatePresence as it's not used in this core layout wrapper
import { FiArrowRight, FiGlobe, FiTerminal } from 'react-icons/fi';
// [UNUSED ICONS] These icons are now abstracted away into your isolated component blocks
// import { FiLayers, FiCpu, FiGitBranch } from 'react-icons/fi'; 

import { DevelopmentPhilosophy } from '@/components/DevelopmentPhilosophy';
import { TechnicalMatrix } from '@/components/Skills';
import { ProjShowcase } from '@/components/ProjShowcase';

const HomePage = () => {
  // [UNUSED] State handles are now managed locally inside ProjShowcase
  // const [showMoreProjects, setShowMoreProjects] = useState(false);

  const premiumEase = [0.16, 1, 0.3, 1] as const;

  const heroContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const heroLine = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: premiumEase } }
  };

  /* ==========================================
     UNUSED ARCHIVED DATA NODES 
     (Abstracted to /Mock/ assets)
     ==========================================
  const extraProjects = [
    { 
      title: "Google Play Store Showcase", 
      desc: "An application marketplace display matrix built entirely from scratch, optimizing asset delivery pipelines.", 
      year: "Production" 
    },
    { 
      title: "Automated Scripting Utilities", 
      desc: "Custom Python automation architectures designed for continuous scripting cycles and data handling.", 
      year: "Engine" 
    }
  ];

  const skillCategories = [
    { name: "Frontend Core", items: ["Next.js", "React.js", "TypeScript", "JavaScript", "Tailwind CSS", "SASS", "HTML5/CSS"] },
    { name: "Backend Ecosystem", items: ["Node.js", "Express.js", "MongoDB", "Postman API"] },
    { name: "Expansion & Automation", items: ["C# (Enterprise)", "Python"] }
  ];
  ========================================== */

  return (
    <div className="w-full bg-[#fcfaf6] text-[#161616] min-h-screen selection:bg-[#161616] selection:text-[#fcfaf6] overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-24 pb-16 sm:pt-32 sm:pb-24 md:pt-48 md:pb-36 flex flex-col justify-center min-h-[calc(100vh-4rem)] relative overflow-hidden">
        <div className="absolute top-20 right-10 w-px h-32 bg-linear-to-b from-neutral-300/40 to-transparent hidden md:block" />
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={heroContainer}
          className="max-w-5xl space-y-8 sm:space-y-12"
        >
          <div className="space-y-2 sm:space-y-4">
            <div className="overflow-hidden">
              <motion.h1 variants={heroLine} className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-tight sm:leading-[0.95]">
                Huseyn Khalil
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 variants={heroLine} className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-tight sm:leading-[0.95] flex items-center gap-3 sm:gap-4 flex-wrap">
                Front-end Specialist <span className="font-mono text-[10px] sm:text-xs tracking-widest uppercase border border-[#161616] px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-normal inline-block mt-1 sm:mt-0">Baku</span>
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 variants={heroLine} className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-tight sm:leading-[0.95] text-neutral-400">
                & Back-end Developer.
              </motion.h1>
            </div>
          </div>

          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.8, ease: premiumEase } } }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 items-start md:items-end"
          >
            <p className="text-sm sm:text-base md:text-lg text-neutral-500 font-light leading-relaxed md:col-span-7">
              Dedicated to translating complex architectural challenges into elegant, maintainable code. Specializing in high-performance UIs with <strong className="text-[#161616] font-medium">Next.js</strong>, <strong className="text-[#161616] font-medium">TypeScript</strong>, and fluid <strong className="text-[#161616] font-medium">Node.js</strong> backend environments.
            </p>
            <div className="md:col-span-5 flex md:justify-end">
              <a 
                href="mailto:mazegitt@gmail.com"
                className="group relative inline-flex items-center space-x-4 bg-[#161616] text-[#fcfaf6] px-6 sm:px-8 py-3.5 sm:py-4 text-[10px] sm:text-xs uppercase tracking-widest font-medium hover:bg-neutral-800 transition-colors duration-300 w-full sm:w-auto justify-center sm:justify-start"
              >
                <span>Initiate Connection</span>
                <FiArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* DYNAMIC ENGINEERING PORTFOLIO SHOWCASE */}
      <ProjShowcase/>

      {/* CORE TECHNICAL MATRIX MODULE */}
      <TechnicalMatrix/>

      {/* METHODOLOGY PILLARS */}
      <DevelopmentPhilosophy/>

      {/* GEOGRAPHIC & INTERACTION SECTION */}
      <section className="border-t border-neutral-200/60 bg-[#fcfaf6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-44">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-200/60 border border-neutral-200/60 p-4 sm:p-8 md:p-0">
            
            <div className="pb-8 pt-4 md:py-24 md:px-12 lg:px-16 relative overflow-hidden group">
              <div className="absolute inset-0 bg-neutral-200/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0 hidden md:block" />
              
              <div className="relative z-10 block space-y-6 sm:space-y-8">
                <p className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                  <FiGlobe /> // Global Coordinates
                </p>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-light tracking-tight">
                    Baku, Azerbaijan
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-sm">
                    Operating globally. Multi-lingual pipeline tracking with fluency in Azerbaijani, English, Russian, and Turkish.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 pb-4 md:py-24 md:px-12 lg:px-16 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-neutral-200/20 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0 hidden md:block" />
              
              <a href="mailto:mazegitt@gmail.com" className="relative z-10 block space-y-6 sm:space-y-8">
                <p className="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-2">
                  <FiTerminal /> // Intended Collaboration
                </p>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl sm:text-2xl md:text-4xl font-light tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    mazegitt@gmail.com
                  </h3>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-300 flex items-center justify-center -rotate-45 md:group-hover:rotate-0 md:group-hover:bg-[#161616] md:group-hover:text-[#fcfaf6] md:group-hover:border-[#161616] transition-all duration-500 shrink-0">
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