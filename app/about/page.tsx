"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiTerminal, FiAward, FiCode, FiArrowUpRight, FiLayers, FiGitBranch, FiTarget } from 'react-icons/fi';

interface TimelineItem {
  year: string;
  role: string;
  company: string;
  desc: string;
}

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export default function AboutPage() {
  const premiumEase = [0.16, 1, 0.3, 1] as const;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const timelineY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const timeline: TimelineItem[] = [
    {
      year: "2024 — Present",
      role: "Front-End Web Developer",
      company: "Safavy",
      desc: "React.js və Next.js arxitekturası üzərində irimiqyaslı platformaların interfeyslərinin sıfırdan qurulması, performans optimizasiyası (Lighthouse Core Web Vitals) və qabaqcıl dövlət/biznes idarəetmə sistemlərinin UI mühəndisliyi."
    },
    {
      year: "2023 — 2024",
      role: "Front-End Developer",
      company: "High Result Academy",
      desc: "Tədris və idarəetmə sistemlərinin interfeys dizaynlarının interaktiv və adaptiv şəkildə kodlaşdırılması, qlobal state və API inteqrasiyalarının (Zustand, React Query) optimizasiyası."
    }
  ];

  const stats: StatItem[] = [
    { icon: <FiLayers />, value: "20+", label: "Completed Platforms" },
    { icon: <FiGitBranch />, value: "3+", label: "Years Engineering" },
    { icon: <FiTarget />, value: "99%", label: "Lighthouse Speed" }
  ];

  return (
    <div className="w-full bg-brand-bg text-brand-text transition-colors duration-500 min-h-screen selection:bg-brand-text selection:text-brand-bg overflow-x-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-24 sm:py-36 md:py-48 lg:py-64 flex flex-col justify-center">
        
        <div className="max-w-5xl space-y-8 mb-28 sm:mb-40 lg:mb-56">
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 font-mono"
          >
            <FiTerminal className="animate-pulse" />
            <span>// Root_Identity_Matrix</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-tight text-brand-text leading-[1.05] overflow-hidden">
            {"Huseyn Khalil — Dedicated Front-End Developer & UI Engineer based in Baku.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-3 sm:mr-5"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: premiumEase, delay: i * 0.03 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 xl:gap-32 items-start border-t border-brand-border/60 pt-16 sm:pt-24 mb-24 sm:mb-40 relative">
          
          <div className="lg:col-span-5 space-y-10 sm:space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: premiumEase }}
              className="space-y-6 sm:space-y-8"
            >
              <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 flex items-center space-x-2">
                <FiCode /> <span>01 // Biography</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-400 dark:text-neutral-400 font-light leading-relaxed">
                Mən interaktiv, yüksək performanslı və estetik rəqəmsal məhsullar hazırlayan Front-End tərtibatçısıyam. İş prosesimdə yalnız kod yazmaqla kifayətlənmir, həm də layihələrin performans auditi, təmiz kod arxitekturası və istifadəçi təcrübəsini ən üst səviyyəyə çatdırmağa fokuslanıram.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-400 dark:text-neutral-400 font-light leading-relaxed">
                Əsas ixtisasım React.js, Next.js və TypeScript ekosistemidir. Lakin arxa fon proqramlaşdırma və skript dillərinə olan marağım mənə genişmiqyaslı layihələrdə data mübadiləsini və arxitekturanı tam dərk etməyə imkan verir.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: premiumEase, delay: 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="border border-brand-border bg-brand-card p-6 sm:p-8 rounded-sm space-y-4 shadow-sm backdrop-blur-sm cursor-default"
            >
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block">// Current Execution Context</span>
              <p className="text-xs sm:text-sm font-light text-brand-text leading-relaxed">
                Hazırda Next.js App Router, monorepo idarəetmə sistemləri və Framer Motion ilə premium mikro-interaksiyaların optimizasiyası üzərində araşdırmalarımı davam etdirirəm.
              </p>
            </motion.div>
          </div>

          {/* RIGHT SIDE: SKROL ETDİKCƏ YUXARI SÜZÜLƏN KONTENT */}
          <motion.div 
            style={{ y: typeof window !== 'undefined' && window.innerWidth >= 1024 ? timelineY : 0 }}
            className="lg:col-span-7 space-y-20 sm:space-y-28"
          >
            <div className="space-y-6">
              <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 flex items-center space-x-2">
                <FiAward /> <span>02 // Experience Ledger</span>
              </h2>
            </div>

            <div className="relative border-l border-brand-border pl-6 sm:pl-10 space-y-16 sm:space-y-24">
              {timeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: premiumEase, delay: idx * 0.15 }}
                  className="relative group space-y-3"
                >
                  <motion.div 
                    whileInView={{ scale: [1, 1.4, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="absolute -left-[33px] sm:-left-[47px] top-1.5 h-4 w-4 rounded-full bg-brand-bg border-2 border-brand-border group-hover:border-brand-text transition-colors duration-300" 
                  />
                  
                  <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block">
                    {item.year}
                  </span>
                  
                  <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-brand-text">
                      {item.role}
                    </h3>
                    <span className="text-xs sm:text-sm text-neutral-400 dark:text-neutral-500 font-light italic">
                      @ {item.company}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-400 dark:text-neutral-500 font-light leading-relaxed pt-2">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: premiumEase, delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="border border-brand-border bg-brand-card p-6 rounded-sm flex flex-col justify-between min-h-36 hover:border-brand-text transition-colors duration-300"
                >
                  <div className="text-neutral-400 dark:text-neutral-500 text-lg">
                    {stat.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-mono tracking-tight text-brand-text font-medium">
                      {stat.value}
                    </h4>
                    <p className="text-[10px] sm:text-xs font-mono uppercase text-neutral-400 tracking-wider mt-1">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: premiumEase }}
              className="pt-4"
            >
              <a 
                href="/resume.pdf" 
                download
                className="group inline-flex items-center space-x-4 border border-brand-border px-8 py-4 text-[10px] sm:text-xs uppercase tracking-widest font-mono hover:border-brand-text hover:bg-brand-text hover:text-brand-bg transition-all duration-500 rounded-sm cursor-pointer w-full sm:w-auto justify-center"
              >
                <span>Request & Download Full CV</span>
                <FiArrowUpRight className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </div>
  );
}