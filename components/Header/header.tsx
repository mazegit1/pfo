"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'about', href: '/about' },
    { name: 'work', href: '/work' },
    { name: 'contact', href: '/contact' },
  ];

  // Adding "as const" fixes the number[] vs tuple mismatch
  const fluidTransition = { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const };

  const overlayVariants = {
    hidden: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
    visible: { 
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: fluidTransition 
    },
    exit: { 
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      transition: { duration: 0.6, ease: [0.7, 0, 0.84, 0] as const }
    }
  };

  const linkVariants = {
    hidden: { y: 70, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.15 + i * 0.08,
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }),
    exit: (i: number) => ({
      y: 30,
      opacity: 0,
      transition: {
        delay: i * 0.04,
        duration: 0.4,
        ease: [0.7, 0, 0.84, 0] as const
      }
    })
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white text-black z-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6 md:px-10">
          
          <div className="relative z-50">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="group flex items-center space-x-3 focus:outline-none"
            >
              <motion.div 
                className="w-3 h-3 bg-black"
                animate={isOpen ? { rotate: 180, borderRadius: "50%" } : { rotate: 0, borderRadius: "0%" }}
                transition={fluidTransition}
              />
              <Link href="/" className="font-semibold tracking-tight text-xl">
                Huseyn Khalil
              </Link>
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="group relative py-1 text-sm font-medium tracking-wide text-neutral-500 hover:text-black transition-colors duration-300"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-black transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-end w-6 h-6 z-50 md:hidden focus:outline-none space-y-2"
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 5, width: "24px" } : { rotate: 0, y: 0, width: "24px" }}
              transition={fluidTransition}
              className="h-[1.5px] bg-black block"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -4.5, width: "24px" } : { rotate: 0, y: 0, width: "16px" }}
              transition={fluidTransition}
              className="h-[1.5px] bg-black block"
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-white z-40 flex flex-col justify-center px-8 md:hidden"
          >
            <div className="flex flex-col space-y-8 mt-12">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-mono">Navigation</p>
              
              {navLinks.map((link, index) => (
                <div key={link.name} className="overflow-hidden">
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
                      className="group text-5xl font-light tracking-tight text-black flex items-center justify-between border-b border-neutral-100 py-4"
                    >
                      <span>{link.name}</span>
                      <motion.div
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <FiArrowRight className="text-3xl text-black" />
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4, ...fluidTransition }}
              className="absolute bottom-12 left-8 right-8 flex justify-between text-xs font-mono text-neutral-400"
            >
              <span>BAKU, AZ</span>
              <span>© 2026</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Handled Tailwind IntelliSense suggestions for spacing scale variables */}
      <div className="h-18.25 md:h-21.25" />
    </>
  );
};

export default Header;