"use client";

import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumeDocument } from '@/components/ResumeDocument';
import { FiCpu } from 'react-icons/fi';

const ExportResume = () => {
  return (
    <div className="w-full min-h-screen bg-[#fcfaf6] flex flex-col items-center justify-center p-6">
      <div className="border border-neutral-300 p-8 max-w-md w-full bg-neutral-200/10 rounded-sm text-center space-y-6">
        <FiCpu className="mx-auto text-3xl text-neutral-400 animate-pulse" />
        <div className="space-y-2">
          <h2 className="text-xl font-light text-[#161616]">Compile Binary Asset</h2>
          <p className="text-xs font-mono text-neutral-400">// target: public/resume.pdf</p>
        </div>

        <PDFDownloadLink document={<ResumeDocument />} fileName="resume.pdf">
          {/* @ts-ignore */}
          {({ loading }) => (
            <button className="w-full bg-[#161616] text-[#fcfaf6] px-5 py-3 text-xs font-mono uppercase tracking-widest hover:bg-neutral-800 transition-colors rounded-sm">
              {loading ? 'Processing Document...' : 'Execute Export Sequence'}
            </button>
          )}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default ExportResume;