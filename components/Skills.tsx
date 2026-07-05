"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCpu, FiSearch, FiSliders, FiCheckCircle, FiActivity } from 'react-icons/fi';

interface SkillItem {
  name: string;
  level: 'Expert' | 'Advanced' | 'Fluent';
  detail: string;
}

interface SkillCategory {
  id: string;
  name: string;
  systemCode: string;
  items: SkillItem[];
}

export const TechnicalMatrix = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<string>('all');

  // Exact custom ease transition for a premium, non-robotic feel
  const premiumEase = [0.16, 1, 0.3, 1] as const;

  // Real data structure optimized for a Front-End Specialist
  const skillCategories: SkillCategory[] = [
    {
      id: "core",
      name: "Core Frameworks & UI Layers",
      systemCode: "SYS.001 // CLIENT_CORE",
      items: [
        { name: "React.js", level: "Expert", detail: "Hooks, Context, Fiber architecture optimization" },
        { name: "Next.js", level: "Expert", detail: "App Router, SSR/SSG tuning, middleware layout" },
        { name: "TypeScript", level: "Expert", detail: "Strict typing, generics, utility mapping strategies" },
        { name: "Tailwind CSS", level: "Expert", detail: "Fluid layouts, arbitrary design token generation" },
        { name: "Framer Motion", level: "Advanced", detail: "Physics layout animations, layoutId transitions" },
        { name: "JavaScript (ES6+)", level: "Expert", detail: "Event loop management, memory optimizations" }
      ]
    },
    {
      id: "architecture",
      name: "State, Architecture & Processing",
      systemCode: "SYS.002 // DATA_ORCH",
      items: [
        { name: "Zustand", level: "Expert", detail: "Atomic global state mapping, transient updates" },
        { name: "Redux Toolkit", level: "Advanced", detail: "Slices, custom middleware pipelines, RTK Query" },
        { name: "React Query / TanStack", level: "Expert", detail: "Stale-while-revalidate caching, mutations" },
        { name: "Node.js", level: "Advanced", detail: "RESTful endpoints, asynchronous task threads" },
        { name: "RESTful APIs", level: "Expert", detail: "Payload reduction, data contract mapping" },
        { name: "Axios Interceptors", level: "Expert", detail: "Token rotation, global error dispatchers" }
      ]
    },
    {
      id: "infrastructure",
      name: "Tooling, Engineering & Deployment",
      systemCode: "SYS.003 // DEV_OPS",
      items: [
        { name: "Git & GitHub", level: "Expert", detail: "Branch structures, cherry-pick rebasing, hooks" },
        { name: "Vite / Webpack", level: "Advanced", detail: "Bundle inspection, lazy loading partitioning" },
        { name: "npm / pnpm", level: "Expert", detail: "Lockfile resolution, monorepo workspaces" },
        { name: "Component Libraries", level: "Expert", detail: "Radix UI, Shadcn UI headless setups" },
        { name: "CI/CD Pipelines", level: "Advanced", detail: "Automated Vercel checks, GitHub actions" },
        { name: "Performance Audits", level: "Expert", detail: "Lighthouse core web vitals, bundle optimization" }
      ]
    }
  ];

  // Logic: Filters out matching tags dynamically based on input and active sub-category
  const filteredCategories = useMemo(() => {
    return skillCategories
      .map(category => {
        if (activeTab !== 'all' && category.id !== activeTab) {
          return { ...category, items: [] };
        }
        const items = category.items.filter(item =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.detail.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return { ...category, items };
      })
      .filter(category => category.items.length > 0);
  }, [searchQuery, activeTab]);

  return (
    <section className="border-t border-neutral-200/60 bg-[#fcfaf6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-36">
        
        {/* Header Block with System Metadata details */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono mb-2 sm:mb-4">
              <FiActivity className="text-[#161616] animate-pulse" />
              <span>// Operational Capability Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight text-[#161616]">
              Technical Archetype
            </h2>
          </div>

          {/* Real-time Searching and Filtering controls panel */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <div className="relative flex-1 sm:w-64">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 text-sm" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Query technology or ecosystem..."
                className="w-full pl-9 pr-4 py-2.5 text-xs font-mono bg-neutral-200/20 border border-neutral-300 rounded-sm focus:outline-none focus:border-[#161616] transition-colors placeholder-neutral-400 text-[#161616]"
              />
            </div>
            
            <div className="flex border border-neutral-300 rounded-sm p-0.5 bg-neutral-200/10 overflow-x-auto whitespace-nowrap scrollbar-none">
              {['all', 'core', 'architecture', 'infrastructure'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 text-[10px] uppercase font-mono tracking-wider rounded-xs transition-all ${
                    activeTab === tab
                      ? 'bg-[#161616] text-[#fcfaf6]'
                      : 'text-neutral-500 hover:text-[#161616]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Bento Style Matrix Layout */}
        <motion.div 
          layout 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, catIndex) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: premiumEase, delay: catIndex * 0.05 }}
                className="group border-l border-neutral-300 pl-6 sm:pl-8 py-2 flex flex-col hover:border-[#161616] transition-colors duration-500"
              >
                {/* Section System Header Tag */}
                <div className="mb-6">
                  <span className="block text-[9px] font-mono text-neutral-400 tracking-widest mb-1">
                    {category.systemCode}
                  </span>
                  <h3 className="text-sm font-medium text-[#161616] tracking-tight">
                    {category.name}
                  </h3>
                </div>

                {/* Micro-interaction Tag Stack */}
                <div className="flex flex-col gap-3">
                  {category.items.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      layout
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.03 }}
                      className="relative overflow-hidden group/item flex items-start justify-between p-3 border border-neutral-200 bg-neutral-200/10 hover:bg-[#161616] transition-all duration-300 rounded-sm group-hover:border-neutral-300/60"
                    >
                      <div className="pr-4 z-10">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-medium text-[#161616] group-hover/item:text-[#fcfaf6] transition-colors duration-200">
                            {skill.name}
                          </span>
                          <span className="text-[9px] font-mono px-1.5 py-0.2 bg-neutral-200 text-neutral-500 group-hover/item:bg-neutral-800 group-hover/item:text-neutral-400 rounded-xs transition-colors duration-200">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-400 group-hover/item:text-neutral-300 mt-1 font-light leading-snug transition-colors duration-200">
                          {skill.detail}
                        </p>
                      </div>
                      
                      <div className="pt-0.5 text-neutral-300 group-hover/item:text-[#fcfaf6] transition-colors duration-200 z-10">
                        <FiCheckCircle className="text-xs" />
                      </div>

                      {/* Micro background overlay decoration */}
                      <div className="absolute right-0 bottom-0 translate-x-3 translate-y-3 opacity-5 group-hover/item:opacity-10 text-neutral-400 group-hover/item:text-white pointer-events-none transition-all duration-300">
                        <FiCpu className="text-6xl" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fallback state when queries return empty collections */}
        {filteredCategories.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 border border-dashed border-neutral-300 rounded-sm bg-neutral-200/10"
          >
            <FiCpu className="mx-auto text-xl text-neutral-400 mb-2 animate-bounce" />
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              No architectural match for current index string.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};