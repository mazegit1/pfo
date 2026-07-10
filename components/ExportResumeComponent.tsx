"use client";

import React, { useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumeDocument } from './ResumeDocument';
import { FiCpu } from 'react-icons/fi';

const ExportResumeComponent = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full min-h-screen bg-[#fcfaf6] flex items-center justify-center font-mono text-xs text-neutral-400">
        Mounting Binary Layer...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#fcfaf6] flex flex-col items-center justify-center p-6">
      <div className="border border-neutral-300 p-8 max-w-md w-full bg-neutral-200/10 rounded-sm text-center space-y-6">
        <FiCpu className="mx-auto text-3xl text-neutral-400 animate-pulse" />
        <div className="space-y-2">
          <h2 className="text-xl font-light text-[#161616]">Compile Binary Asset</h2>
          <p className="text-xs font-mono text-neutral-400">// target: generated/resume.pdf</p>
        </div>

        <PDFDownloadLink document={<ResumeDocument />} fileName="huseyn_khalil_resume.pdf">
          {({ loading }) => (
            <button className="w-full bg-[#161616] text-[#fcfaf6] px-5 py-3 text-xs font-mono uppercase tracking-widest hover:bg-neutral-800 transition-colors rounded-sm cursor-pointer">
              {loading ? 'Processing Document...' : 'Execute Export Sequence'}
            </button>
          )}
        </PDFDownloadLink>

        <div className="pt-2 border-t border-neutral-200">
          <a href="/resume.pdf" download className="text-[10px] font-mono text-neutral-400 hover:text-neutral-600 underline block">
            // or fetch raw static public/resume.pdf
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExportResumeComponent;