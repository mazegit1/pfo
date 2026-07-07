"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCpu, FiSearch, FiCheckCircle, FiActivity, FiChevronDown, FiChevronUp } from 'react-icons/fi';

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
  
  // Track open state per categorical layout card block
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const premiumEase = [0.16, 1, 0.3, 1] as const;

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

  const toggleCategoryExpand = (id: string) => {
    setExpandedCategories(prev => ({ ...prev, [id]: !prev[id] }));
  };

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
    <section className="border-t border-brand-border bg-brand-bg text-brand-text relative overflow-hidden transition-colors duration-500">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-24 md:py-36 lg:py-44">
        
        {/* Info & Filter Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-24 gap-8">
          <div>
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-500 font-mono mb-2 sm:mb-4">
              <FiActivity className="text-brand-text animate-pulse" />
              <span>// Operational Capability Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-brand-text">
              Technical Archetype
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <div className="relative flex-1 sm:w-72 lg:w-80">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 text-sm" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Query technology or ecosystem..."
                className="w-full pl-9 pr-4 py-2.5 text-xs font-mono bg-brand-card border border-brand-border rounded-sm focus:outline-none focus:border-brand-text transition-colors placeholder-neutral-400 text-brand-text"
              />
            </div>
            
            <div className="flex border border-brand-border rounded-sm p-0.5 bg-brand-card overflow-x-auto whitespace-nowrap scrollbar-none">
              {['all', 'core', 'architecture', 'infrastructure'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setExpandedCategories({});
                  }}
                  className={`px-3 py-1.5 text-[10px] uppercase font-mono tracking-wider rounded-xs transition-all cursor-pointer ${
                    activeTab === tab
                      ? 'bg-brand-text text-brand-bg'
                      : 'text-neutral-400 hover:text-brand-text'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Distribution */}
        <motion.div 
          layout="position" 
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-6 lg:gap-12 xl:gap-16 items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, catIndex) => {
              const isExpanded = !!expandedCategories[category.id];
              const visibleItems = category.items;

              return (
                <motion.div
                  key={category.id}
                  layout="position"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: premiumEase, delay: catIndex * 0.05 }}
                  className="group border-l border-brand-border pl-4 sm:pl-6 md:pl-8 py-2 flex flex-col hover:border-brand-text transition-colors duration-500"
                >
                  <div className="mb-6 lg:mb-8">
                    <span className="block text-[9px] font-mono text-neutral-400 dark:text-neutral-500 tracking-widest mb-1">
                      {category.systemCode}
                    </span>
                    <h3 className="text-sm lg:text-base font-medium text-brand-text tracking-tight">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills Display List Wrapper */}
                  <motion.div layout="position" className="flex flex-col gap-3 lg:gap-4">
                    <AnimatePresence initial={false}>
                      {visibleItems.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          layout="position"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4, ease: premiumEase, delay: index * 0.02 }}
                          className={`relative overflow-hidden group/item flex items-start justify-between p-3.5 border border-brand-border bg-brand-card hover:bg-brand-text transition-all duration-300 rounded-sm ${
                            !isExpanded && index >= 3 ? 'hidden md:flex' : 'flex'
                          }`}
                        >
                          <div className="pr-4 z-10">
                            <div className="flex items-center space-x-2">
                              <span className="text-xs lg:text-sm font-medium text-brand-text group-hover/item:text-brand-bg transition-colors duration-200">
                                {skill.name}
                              </span>
                              <span className="text-[9px] font-mono px-1.5 py-0.2 bg-brand-bg border border-brand-border text-neutral-500 group-hover/item:bg-brand-bg/10 group-hover/item:text-brand-bg rounded-xs transition-colors duration-200">
                                {skill.level}
                              </span>
                            </div>
                            <p className="text-[11px] lg:text-xs text-neutral-400 dark:text-neutral-500 group-hover/item:text-brand-bg/80 mt-1 font-light leading-snug transition-colors duration-200">
                              {skill.detail}
                            </p>
                          </div>
                          
                          <div className="pt-0.5 text-neutral-300 dark:text-neutral-600 group-hover/item:text-brand-bg transition-colors duration-200 z-10">
                            <FiCheckCircle className="text-xs lg:text-sm" />
                          </div>

                          <div className="absolute right-0 bottom-0 translate-x-3 translate-y-3 opacity-5 group-hover/item:opacity-10 text-neutral-400 dark:text-neutral-600 group-hover/item:text-brand-bg pointer-events-none transition-all duration-300">
                            <FiCpu className="text-6xl lg:text-7xl" />
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>

                  {/* See All Button for Phones */}
                  <motion.button
                    layout="position"
                    onClick={() => toggleCategoryExpand(category.id)}
                    className="mt-4 w-full md:hidden flex items-center justify-center space-x-2 py-2.5 border border-dashed border-brand-border hover:border-brand-text rounded-sm text-[10px] font-mono tracking-wider uppercase text-neutral-500 hover:text-brand-text bg-transparent transition-all cursor-pointer"
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{isExpanded ? "Collapse View" : `See All (${category.items.length})`}</span>
                    {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                  </motion.button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 border border-dashed border-brand-border rounded-sm bg-brand-card"
          >
            <FiCpu className="mx-auto text-xl text-neutral-400 dark:text-neutral-500 mb-2 animate-bounce" />
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
              No architectural match for current index string.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};