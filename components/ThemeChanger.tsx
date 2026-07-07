"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

interface ThemeChangerProps {
  isMenuOpen?: boolean; // Header menyusu açıq olanda true ötürüləcək
}

const ThemeChanger: React.FC<ThemeChangerProps> = ({ isMenuOpen = false }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  // SSR-dən qaynaqlanan hidrasiya (hydration) xətalarının qarşısını almaq üçün
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      // Sistem üstünlük verdiyi rejimi yoxlayırıq
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = systemPrefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.classList.toggle('dark', systemPrefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {/* Əgər header/menyu açıqdırsa, düymə tamamilə unmount olunub gizlənir */}
      {!isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-999 sm:bottom-8 sm:right-8"
        >
          <button
            onClick={toggleTheme}
            aria-label="Toggle System Matrix Color Rejection"
            className="group relative flex h-12 w-12 items-center justify-center border border-brand-border bg-brand-card text-brand-text rounded-full shadow-sm hover:border-brand-text transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-md"
          >
            {/* Hover zamanı arxa fona gələn incə dairə effekti */}
            <div className="absolute inset-0 -z-10 bg-brand-text scale-0 rounded-full group-hover:scale-100 transition-transform duration-500 origin-center" />

            <AnimatePresence mode="wait">
              {theme === 'light' ? (
                <motion.div
                  key="light-icon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="group-hover:text-brand-bg transition-colors duration-300"
                >
                  <FiMoon className="text-base sm:text-lg" />
                </motion.div>
              ) : (
                <motion.div
                  key="dark-icon"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="group-hover:text-brand-bg transition-colors duration-300"
                >
                  <FiSun className="text-base sm:text-lg" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThemeChanger;