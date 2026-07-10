"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiTerminal, FiMail, FiArrowUpRight, FiCornerDownRight, FiCheckCircle, FiLoader, FiAlertCircle, FiClock } from 'react-icons/fi';

export default function ContactPage() {
  const premiumEase = [0.16, 1, 0.3, 1] as const;
  const formRef = useRef<HTMLFormElement>(null);
  
  // Dövlət və Saat üçün State
  const [bakuTime, setBakuTime] = useState<string>('');
  
  // Təkmilləşdirilmiş Form State
  const [selectedService, setSelectedService] = useState<string>('Frontend');
  const [selectedBudget, setSelectedBudget] = useState<string>('$1k - $3k');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Canlı Saat Mexanizmi (Baku Time GMT+4)
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Baku',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setBakuTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('loading');
    setErrorMessage('');

    const SERVICE_ID = 'service_zriilak';   
    const TEMPLATE_ID = 'template_5s8vr1k'; 
    const PUBLIC_KEY = '4t-D6iJX1NmF_u_Yv';   

    // 1. EmailJS vasitəsilə Mail göndərilməsi
    emailjs.sendForm(
      SERVICE_ID, 
      TEMPLATE_ID, 
      formRef.current, 
      PUBLIC_KEY
    )
    .then(async (result) => {
      console.log('EmailJS Success:', result.text);

      // 2. ARXA FONDA TELEGRAM ANLIQ BİLDİRİŞİ
      const TELEGRAM_TOKEN = "8775357091:AAHl04pN3HH2b3vhVvBG-mRj4Zid0iy2TrY";
      const TELEGRAM_CHAT_ID = "7253010203";

      // Telegram Markdown formatında qəşəng mesaj paketi
      const telegramMessage = encodeURIComponent(
`⚡ *NEW INBOUND REQUEST RECEIVED* ⚡

*■ CLIENT DETAILS*
• *Name:* ${formState.name}
• *Email:* ${formState.email}

*■ ARCHITECTURE SPECIFICATIONS*
• *Target Service:* ${selectedService}
• *Budget Range:* ${selectedBudget}

*■ PAYLOAD / MESSAGE*
\`\`\`text
${formState.message}
\`\`\`

_[ Connection Status: Secure // v4 Core Active ]_`
      );

      const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${telegramMessage}&parse_mode=Markdown`;

      try {
        // Brauzeri yönləndirmədən səssizcə Telegram-a POST atırıq
        await fetch(telegramApiUrl, { method: "POST" });
        console.log('Telegram Transmission Dispatched.');
      } catch (tgError) {
        console.error('Telegram API background error:', tgError);
      }

      // Əməliyyatlar uğurlu olanda formanı təmizləyirik
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    })
    .catch((err) => {
      const rawError = err?.text || err?.message || JSON.stringify(err) || 'Bilinməyən xəta';
      console.error('Dəqiq EmailJS Xətası:', rawError);
      setErrorMessage(rawError);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    });
  };

  return (
    <div className="w-full bg-brand-bg text-brand-text transition-colors duration-500 min-h-screen selection:bg-brand-text selection:text-brand-bg overflow-x-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-24 sm:py-36 md:py-48 lg:py-64 flex flex-col justify-center">
        
        {/* TOP SECTION: KIBER-MINIMALIST BAŞLIQ */}
        <div className="max-w-5xl space-y-8 mb-24 sm:mb-36 lg:mb-48">
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="flex items-center space-x-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 font-mono"
          >
            <FiTerminal className="animate-pulse text-emerald-500" />
            <span>// Request_Connection_Protocol</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-tight text-brand-text leading-[1.05] overflow-hidden">
            {"Let's start a project together or talk about web architecture.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-3 sm:mr-5"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: premiumEase, delay: i * 0.03 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* MAIN GRID CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 xl:gap-32 items-start border-t border-brand-border/60 pt-16 sm:pt-24 mb-24 sm:mb-40">
          
          {/* LEFT SIDE: CHANNELS & LIVE METRICS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="lg:col-span-5 space-y-12 lg:sticky lg:top-32"
          >
            {/* CANLI SAAT BLOKU */}
            <div className="space-y-4 border border-brand-border/60 bg-brand-card/10 p-6 rounded-sm backdrop-blur-md">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 flex items-center space-x-2">
                <FiClock className="text-emerald-500" /> <span>Node_Location_Metrics</span>
              </h3>
              <div className="flex items-baseline justify-between font-mono">
                <span className="text-sm text-neutral-400">Baku, AZ (GMT+4)</span>
                <span className="text-2xl font-light tracking-widest text-brand-text tabular-nums">
                  {bakuTime || "00:00:00"}
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 flex items-center space-x-2">
                <FiMail /> <span>01 // Direct Channels</span>
              </h2>
              <motion.div 
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3 }}
                className="space-y-2 border border-brand-border bg-brand-card/30 p-6 rounded-sm backdrop-blur-md hover:border-brand-text/50 transition-colors duration-300"
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-500 block animate-pulse">// Secure Mail Endpoint</span>
                <a 
                  href="mailto:mazegitt@gmail.com" 
                  className="text-lg sm:text-xl lg:text-2xl font-light hover:text-neutral-400 dark:hover:text-neutral-400 transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  <span>mazegitt@gmail.com</span>
                  <FiArrowUpRight className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>
              </motion.div>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 block">// Digital Footprints</span>
              <div className="flex flex-col space-y-3">
                {[
                  { name: "LinkedIn", url: "#" },
                  { name: "GitHub", url: "#" },
                  { name: "Twitter", url: "#" }
                ].map((link, idx) => (
                  <motion.a 
                    key={idx} 
                    href={link.url} 
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="text-sm font-mono tracking-wider text-neutral-400 hover:text-brand-text transition-all duration-300 flex items-center gap-2 group w-fit"
                  >
                    <FiCornerDownRight className="text-xs text-neutral-500 group-hover:text-brand-text transition-colors" />
                    <span>{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: INTERACTIVE FORM */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: premiumEase, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-12 sm:space-y-16">
              
              {/* INTERAKTIV XİDMƏT SEÇİMİ */}
              <div className="space-y-4">
                <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block">
                  01 // Select Service Architecture
                </label>
                <div className="flex flex-wrap gap-3">
                  {['Frontend', 'Web Architecture', 'Full Development', 'Consulting'].map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`px-5 py-2.5 text-xs font-mono rounded-full border transition-all duration-300 ${
                        selectedService === service 
                          ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' 
                          : 'border-brand-border/60 hover:border-neutral-400 text-neutral-400'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="selected_service" value={selectedService} />
              </div>

              {/* INPUT 1: NAME */}
              <div className="relative group border-b border-brand-border/80 focus-within:border-brand-text transition-colors duration-500 pb-4">
                <motion.label 
                  animate={{ x: formState.name ? 10 : 0, color: formState.name ? '#10b981' : '' }}
                  className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-2 transition-colors duration-300"
                >
                  02 // What's your name?
                </motion.label>
                <input 
                  type="text" 
                  name="user_name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="John Doe *" 
                  className="w-full bg-transparent border-none outline-none text-xl sm:text-2xl font-light placeholder:text-neutral-600 dark:placeholder:text-neutral-700 py-2 focus:ring-0"
                />
              </div>

              {/* INPUT 2: EMAIL */}
              <div className="relative group border-b border-brand-border/80 focus-within:border-brand-text transition-colors duration-500 pb-4">
                <motion.label 
                  animate={{ x: formState.email ? 10 : 0, color: formState.email ? '#10b981' : '' }}
                  className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-2 transition-colors duration-300"
                >
                  03 // What's your email address?
                </motion.label>
                <input 
                  type="email" 
                  name="user_email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="john@example.com *" 
                  className="w-full bg-transparent border-none outline-none text-xl sm:text-2xl font-light placeholder:text-neutral-600 dark:placeholder:text-neutral-700 py-2 focus:ring-0"
                />
              </div>

              {/* INTERAKTIV BÜDCƏ SEÇİMİ */}
              <div className="space-y-4">
                <label className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block">
                  04 // Estimated Project Budget
                </label>
                <div className="flex flex-wrap gap-3">
                  {['$1k - $3k', '$3k - $5k', '$5k - $10k', '$10k+'].map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => setSelectedBudget(budget)}
                      className={`px-5 py-2.5 text-xs font-mono rounded-full border transition-all duration-300 ${
                        selectedBudget === budget 
                          ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400' 
                          : 'border-brand-border/60 hover:border-neutral-400 text-neutral-400'
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="project_budget" value={selectedBudget} />
              </div>

              {/* INPUT 3: MESSAGE */}
              <div className="relative group border-b border-brand-border/80 focus-within:border-brand-text transition-colors duration-500 pb-4">
                <motion.label 
                  animate={{ x: formState.message ? 10 : 0, color: formState.message ? '#10b981' : '' }}
                  className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-2 transition-colors duration-300"
                >
                  05 // Your message or project details
                </motion.label>
                <textarea 
                  rows={4}
                  name="message"
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Hello, I want to build a platform..." 
                  className="w-full bg-transparent border-none outline-none text-xl sm:text-2xl font-light placeholder:text-neutral-600 dark:placeholder:text-neutral-700 py-2 resize-none focus:ring-0"
                />
              </div>

              {/* DYNAMIC SUBMIT BUTTON & ERROR STATE HANDLER */}
              <div className="pt-4 space-y-4">
                <button 
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className={`group relative flex items-center justify-center space-x-4 border px-10 py-5 text-[10px] sm:text-xs uppercase tracking-widest font-mono transition-all duration-500 rounded-sm w-full sm:w-auto overflow-hidden ${
                    status === 'success' 
                      ? 'border-emerald-500 bg-emerald-500 text-white' 
                      : status === 'error'
                      ? 'border-rose-500 bg-rose-500/10 text-rose-500'
                      : 'border-brand-border hover:border-brand-text hover:bg-brand-text hover:text-brand-bg cursor-pointer'
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {status === 'loading' && (
                      <motion.div key="loading" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <FiLoader className="animate-spin text-sm" />
                        <span>Transmitting...</span>
                      </motion.div>
                    )}
                    {status === 'success' && (
                      <motion.div key="success" className="flex items-center gap-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                        <FiCheckCircle className="text-sm text-white" />
                        <span>Protocol Transmitted</span>
                      </motion.div>
                    )}
                    {status === 'error' && (
                      <motion.div key="error" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <FiAlertCircle className="text-sm" />
                        <span>Transmission Failed</span>
                      </motion.div>
                    )}
                    {status === 'idle' && (
                      <motion.div key="idle" className="flex items-center gap-4">
                        <span>Transmit Protocol</span>
                        <FiArrowUpRight className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>

                {/* VIZUAL ERROR FEEDBACK BLOKU */}
                <AnimatePresence>
                  {status === 'error' && errorMessage && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-xs font-mono text-rose-500 bg-rose-500/5 border border-rose-500/20 p-4 rounded-sm"
                    >
                      <span className="font-semibold block uppercase mb-1">// Debug Link Info:</span>
                      {errorMessage}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </form>
          </motion.div>

        </div>

      </div>
    </div>
  );
}