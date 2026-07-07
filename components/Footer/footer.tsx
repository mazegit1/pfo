"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowUp, FiActivity, FiArrowUpRight } from 'react-icons/fi';

export const Footer = () => {
  const premiumEase = [0.16, 1, 0.3, 1] as const;

  const quickLinks = [
    { name: 'Index // Home', href: '/' },
    { name: 'Profile // About', href: '/about' },
    { name: 'Repository // Work', href: '/work' },
    { name: 'Interface // Contact', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/mazegit1' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/huseyn-khalil-7022262bb/' },
    { name: 'Resume', href: '/resume.pdf' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-brand-border bg-brand-bg text-brand-text relative overflow-hidden transition-colors duration-500">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pt-16 sm:pt-24 pb-12">
        
        {/* Üst Hissə */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-brand-border opacity-95">
          
          <div className="md:col-span-6 space-y-6">
            <div className="flex items-center space-x-2.5 text-[10px] uppercase tracking-[0.25em] text-neutral-400 dark:text-neutral-500 font-mono">
              <FiActivity className="text-emerald-500 animate-pulse text-xs" />
              <span>// PIPELINE_STATUS: SECURE_STABLE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-brand-text max-w-md leading-tight">
              Building lightweight, high-performance web spaces.
            </h2>
          </div>

          {/* Naviqasiya Linkləri */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-mono">// NAVIGATION INDEX</p>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href === '/' ? (
                    <button
                      onClick={() => window.location.href = '/'}
                      className="group flex items-center space-x-1 text-xs lg:text-sm text-neutral-500 hover:text-brand-text font-medium transition-colors duration-300 bg-transparent border-none p-0 cursor-pointer text-left"
                    >
                      <span className="w-0 h-px bg-brand-text transition-all duration-300 group-hover:w-2 group-hover:mr-1.5" />
                      <span>{link.name}</span>
                    </button>
                  ) : (
                    <Link 
                      href={link.href}
                      className="group flex items-center space-x-1 text-xs lg:text-sm text-neutral-500 hover:text-brand-text font-medium transition-colors duration-300"
                    >
                      <span className="w-0 h-px bg-brand-text transition-all duration-300 group-hover:w-2 group-hover:mr-1.5" />
                      <span>{link.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Sosial Şəbəkələr */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-mono">// EXTERNAL NODES</p>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center space-x-1 text-xs lg:text-sm text-neutral-500 hover:text-brand-text font-medium transition-colors duration-300"
                  >
                    <span>{link.name}</span>
                    <FiArrowUpRight className="text-[10px] text-neutral-400 group-hover:text-brand-text group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Alt Hissə */}
        <div className="pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-xs font-mono text-neutral-400 dark:text-neutral-500">
            <span className="tracking-wide">BAKU, AZERBAIJAN</span>
            <span className="hidden sm:inline text-neutral-300 dark:text-neutral-800">|</span>
            <span className="tracking-wide">© 2026 // ALL RIGHT RESERVED</span>
          </div>

          {/* Scroll Top Düyməsi */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="group flex items-center space-x-3 border border-brand-border px-5 py-3 text-[10px] uppercase tracking-widest font-mono hover:border-brand-text hover:bg-brand-text hover:text-brand-bg transition-all duration-500 w-full sm:w-auto justify-center rounded-sm cursor-pointer"
          >
            <span>Execute Scroll Top</span>
            <div className="relative overflow-hidden h-3 w-3">
              <FiArrowUp className="text-neutral-400 group-hover:text-brand-bg absolute transition-transform duration-500 transform group-hover:-translate-y-4" />
              <FiArrowUp className="text-neutral-400 group-hover:text-brand-bg absolute transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0" />
            </div>
          </motion.button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;