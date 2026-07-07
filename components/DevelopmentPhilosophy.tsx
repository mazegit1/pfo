"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCpu, FiRotateCw, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { philosophyQuotes, Quote } from '@/Mock/quotes';

export const DevelopmentPhilosophy = () => {
  const [selectedQuotes, setSelectedQuotes] = useState<Quote[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const premiumEase = [0.16, 1, 0.3, 1] as const;

  const generateQuotes = () => {
    const shuffled = [...philosophyQuotes].sort(() => 0.5 - Math.random());
    setSelectedQuotes(shuffled.slice(0, 6));
    setIsExpanded(false); // Yeni mövzular gələndə expander-i sıfırla
  };

  useEffect(() => {
    generateQuotes();
  }, []);

  if (selectedQuotes.length === 0) return null;

  return (
    <section className="border-t border-brand-border bg-brand-bg text-brand-text transition-colors duration-500">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-24 md:py-36 lg:py-44">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 lg:mb-24 gap-4">
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-500 font-mono mb-2 sm:mb-4">
              // Core Ideology Engine
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-brand-text">
              Development Philosophy
            </h2>
          </div>
          
          <button
            onClick={generateQuotes}
            className="group inline-flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-widest font-mono border border-brand-border px-5 py-2.5 hover:border-brand-text hover:bg-brand-text hover:text-brand-bg transition-all duration-300 mt-2 sm:mt-0 self-start sm:self-auto rounded-sm cursor-pointer"
          >
            <FiRotateCw className="group-hover:rotate-180 transition-transform duration-500 text-neutral-400 group-hover:text-brand-bg" />
            <span>Re-Index Mindset</span>
          </button>
        </div>

        {/* Grid Container */}
        <motion.div 
          layout="position"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-10 xl:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {selectedQuotes.map((quote, index) => (
              <motion.div
                key={quote.text}
                layout="position"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ delay: index * 0.05, duration: 0.6, ease: premiumEase }}
                className={`border-l border-brand-border/80 pl-6 sm:pl-8 py-5 sm:py-8 flex flex-col justify-between min-h-48 hover:border-brand-text transition-colors duration-500 bg-brand-card rounded-r-xs ${
                  isExpanded 
                    ? 'flex' 
                    : index >= 3 ? 'hidden lg:flex' : index >= 4 ? 'hidden md:flex' : 'flex'
                }`}
              >
                <div className="space-y-4">
                  <FiCpu className="text-sm lg:text-base text-neutral-400 dark:text-neutral-500 font-light" />
                  <p className="text-sm sm:text-base lg:text-lg text-brand-text font-light italic leading-relaxed">
                    "{quote.text}"
                  </p>
                </div>
                
                <div className="pt-6 mt-auto">
                  <h4 className="text-xs lg:text-sm font-medium tracking-tight text-brand-text">
                    {quote.author}
                  </h4>
                  <p className="text-[10px] lg:text-xs font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mt-0.5">
                    {quote.context}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Global Expand Button */}
        <motion.div layout="position" className="mt-8 lg:hidden">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-center space-x-2 py-3 border border-dashed border-brand-border hover:border-brand-text rounded-sm text-[10px] font-mono tracking-wider uppercase text-neutral-500 hover:text-brand-text bg-transparent transition-all cursor-pointer"
          >
            <span>{isExpanded ? "Collapse Matrix" : "See All Philosophy"}</span>
            {isExpanded ? <FiChevronUp className="text-xs" /> : <FiChevronDown className="text-xs" />}
          </button>
        </motion.div>

      </div>
    </section>
  );
};