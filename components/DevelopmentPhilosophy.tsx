"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCpu, FiRotateCw } from 'react-icons/fi';

// Import data and types directly from the Mock layer
import { philosophyQuotes, Quote } from '@/Mock/quotes';

export const DevelopmentPhilosophy = () => {
  const [selectedQuotes, setSelectedQuotes] = useState<Quote[]>([]);
  
  // Explicit const declaration to resolve structural transition type matching
  const premiumEase = [0.16, 1, 0.3, 1] as const;

  const generateQuotes = () => {
    const shuffled = [...philosophyQuotes].sort(() => 0.5 - Math.random());
    setSelectedQuotes(shuffled.slice(0, 6));
  };

  useEffect(() => {
    generateQuotes();
  }, []);

  if (selectedQuotes.length === 0) return null;

  return (
    <section className="border-t border-neutral-200/60 bg-[#fcfaf6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-24 md:py-36">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-400 font-mono mb-2 sm:mb-4">
              // Core Ideology Engine
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-light tracking-tight">
              Development Philosophy
            </h2>
          </div>
          
          <button
            onClick={generateQuotes}
            className="group inline-flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-widest font-mono border border-neutral-300 px-4 py-2 hover:border-[#161616] transition-colors duration-300 mt-2 sm:mt-0 self-start sm:self-auto"
          >
            <FiRotateCw className="group-hover:rotate-180 transition-transform duration-500 ease-out" />
            <span>Re-Index Mindset</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          <AnimatePresence mode="wait">
            {selectedQuotes.map((quote, index) => (
              <motion.div
                key={quote.text}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ delay: index * 0.05, duration: 0.6, ease: premiumEase }}
                className="border-l border-neutral-300 pl-6 sm:pl-8 py-4 sm:py-6 flex flex-col justify-between min-h-45 hover:border-[#161616] transition-colors duration-500 bg-neutral-200/10 rounded-r-xs"
              >
                <div className="space-y-4">
                  <FiCpu className="text-sm text-neutral-400 font-light" />
                  <p className="text-sm sm:text-base text-[#161616] font-light italic leading-relaxed">
                    "{quote.text}"
                  </p>
                </div>
                
                <div className="pt-4 mt-auto">
                  <h4 className="text-xs font-medium tracking-tight text-[#161616]">
                    {quote.author}
                  </h4>
                  <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider mt-0.5">
                    {quote.context}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};