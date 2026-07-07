"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navLinks = [
    { name: 'about', href: '/about' },
    { name: 'work', href: '/work' },
    { name: 'contact', href: '/contact' },
  ];

  const fluidTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };
  const springTransition = { type: "spring", stiffness: 250, damping: 25 } as const;

  const overlayVariants = {
    hidden: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
    visible: { 
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: fluidTransition 
    },
    exit: { 
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const }
    }
  };

  const linkVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2 + i * 0.08,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }),
    exit: (i: number) => ({
      y: -60,
      opacity: 0,
      transition: {
        delay: i * 0.04,
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as const
      }
    })
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-brand-bg/85 backdrop-blur-md text-brand-text z-50 border-b border-brand-border transition-colors duration-500">
        <div className="max-w-8xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-12 lg:px-16 py-5 md:py-6">
          
          {/* Brand Logo & Interactive System */}
          <div className="flex items-center space-x-4 sm:space-x-6 relative z-50">
            {/* Modular Toggle Pin */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="group flex items-center justify-center focus:outline-none bg-transparent border-none p-0 cursor-pointer w-6 h-6"
              aria-label="Toggle Navigation Index"
            >
              <motion.div 
                className="w-2.5 h-2.5 bg-brand-text"
                animate={isOpen ? { rotate: 135, borderRadius: "50%", scale: 1.2 } : { rotate: 0, borderRadius: "0%", scale: 1 }}
                transition={fluidTransition}
              />
            </button>

            {/* Magnetic Home Interactive Anchor */}
            <Link href="/" onClick={() => setIsOpen(false)} className="no-underline">
              <motion.div 
                className="overflow-hidden relative h-7 flex flex-col justify-start items-start cursor-pointer group"
                whileHover={{ x: 4 }}
                transition={springTransition}
              >
                <motion.div
                  animate={isOpen ? { y: "-50%" } : { y: "0%" }}
                  transition={fluidTransition}
                  className="flex flex-col text-left"
                >
                  {/* Default State */}
                  <span className="font-semibold tracking-tight text-base sm:text-lg lg:text-xl text-brand-text h-7 flex items-center transition-colors duration-300 group-hover:text-neutral-500">
                    Huseyn Khalil
                    <motion.span 
                      initial={{ opacity: 0, x: -5 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="inline-block ml-1.5 text-xs text-brand-text font-mono font-normal opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      [home]
                    </motion.span>
                  </span>
                  {/* Opened Menu Index State */}
                  <span className="font-mono text-[10px] tracking-widest uppercase text-neutral-400 dark:text-neutral-500 h-7 flex items-center">
                    CLOSE // INDEX
                  </span>
                </motion.div>
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav 
            className="hidden md:flex items-center space-x-1 lg:space-x-2 relative"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {navLinks.map((link, idx) => (
              <Link 
                key={link.name} 
                href={link.href}
                onMouseEnter={() => setHoveredIndex(idx)}
                className="relative px-5 py-2 text-sm lg:text-base font-medium tracking-wide text-neutral-500 dark:text-neutral-400 hover:text-brand-text transition-colors duration-300 z-10"
              >
                <span className="relative z-20 uppercase sm:normal-case">{link.name}</span>
                {hoveredIndex === idx && (
                  <motion.span 
                    layoutId="navHoverBg"
                    className="absolute inset-0 bg-brand-card rounded-sm z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Right Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-end w-6 h-6 z-50 md:hidden focus:outline-none space-y-1.5 bg-transparent border-none p-0 cursor-pointer"
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 4, width: "24px" } : { rotate: 0, y: 0, width: "24px" }}
              transition={fluidTransition}
              className="h-[1.5px] bg-brand-text block"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -3.5, width: "24px" } : { rotate: 0, y: 0, width: "14px" }}
              transition={fluidTransition}
              className="h-[1.5px] bg-brand-text block"
            />
          </button>
        </div>
      </header>

      {/* Global Canvas Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-brand-bg z-40 flex flex-col justify-center px-6 sm:px-12 md:px-24 transition-colors duration-500"
          >
            <div className="max-w-4xl w-full mx-auto flex flex-col space-y-10 mt-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 font-mono border-b border-brand-border pb-2">// INTERACTIVE CORE PATHWAYS</p>
              
              {navLinks.map((link, index) => (
                <div key={link.name} className="overflow-hidden py-2">
                  <motion.div
                    custom={index}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group text-4xl sm:text-6xl md:text-7xl font-extralight tracking-tight text-brand-text flex items-center justify-between py-2 border-b border-transparent hover:border-brand-border transition-colors duration-500"
                    >
                      <span className="group-hover:translate-x-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                        {link.name}
                      </span>
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-brand-border flex items-center justify-center group-hover:bg-brand-text group-hover:text-brand-bg group-hover:border-brand-text transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shrink-0">
                        <FiArrowRight className="text-xl sm:text-2xl transition-transform duration-500 group-hover:rotate-0 -rotate-45" />
                      </div>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Overlay Alt Detay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute bottom-10 left-6 right-6 sm:left-12 sm:right-12 md:left-24 md:right-24 flex justify-between text-[10px] font-mono text-neutral-400 dark:text-neutral-500 tracking-widest border-t border-brand-border pt-4"
            >
              <span>BAKU // GLOBAL APPARATUS</span>
              <span>© 2026</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="pt-20 md:pt-24" />
    </>
  );
};

export default Header;