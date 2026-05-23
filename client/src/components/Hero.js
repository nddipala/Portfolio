import React from "react";
import { motion } from "framer-motion";
import ProfilePic from "../assets/profile.jpg";

const stats = [
  { value: "7+", label: "Years Exp." },
  { value: "4", label: "Companies" },
  { value: "80%", label: "API Boost" },
  { value: "5M+", label: "Daily Events" },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/20 pt-20"
    >
      {/* Ambient gradient orbs */}
      <div className="absolute top-24 right-1/3 w-96 h-96 bg-indigo-300/25 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 left-1/4 w-80 h-80 bg-violet-300/20 dark:bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyan-200/15 dark:bg-cyan-700/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          {/* ── Left: text ── */}
          <motion.div
            className="flex-1 text-center md:text-left space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Status pill */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 mx-auto md:mx-0"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                Open to new opportunities
              </span>
            </motion.div>

            <div>
              <motion.p
                className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Sr. Full Stack Java Developer
              </motion.p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
                Nagarjun Reddy
                <br />
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-500 bg-clip-text text-transparent">
                  Dudipala
                </span>
              </h1>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-xl">
              7+ years building high-availability systems in healthcare insurance and banking.
              Cloud-native microservices, event-driven backends, React/Angular frontends —
              improving API performance by up to{" "}
              <span className="font-bold text-indigo-600 dark:text-indigo-400">80%</span>{" "}
              and supporting millions of daily transactions.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3 pt-1">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-center backdrop-blur-sm shadow-sm"
                >
                  <p className="text-xl font-extrabold bg-gradient-to-br from-indigo-600 to-violet-600 bg-clip-text text-transparent leading-none">
                    {s.value}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-1">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white rounded-xl font-semibold transition shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </motion.a>
              <motion.a
                href="/#projects"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
              </motion.a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5 justify-center md:justify-start pt-1">
              <a
                href="https://github.com/nddipala"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/nagarjunreddydudipala183"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:nddipala@memphis.edu"
                aria-label="Send email"
                className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </div>
          </motion.div>

          {/* ── Right: photo ── */}
          <motion.div
            className="flex-shrink-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="relative mt-8">
              {/* Gradient ring glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 opacity-80 blur-sm" />
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400" />
              <img
                src={ProfilePic}
                alt="Nagarjun Reddy Dudipala — Sr. Full Stack Java Developer"
                className="relative w-64 h-80 md:w-72 md:h-96 object-cover rounded-3xl border-4 border-white dark:border-slate-900"
              />
              {/* Available badge */}
              <motion.div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2 shadow-xl flex items-center gap-2"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-bold text-slate-900 dark:text-white">
                  Available for Work
                </span>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll hint */}
        <motion.div
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-slate-400 dark:text-slate-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <span className="text-[10px] font-semibold tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 border-2 border-slate-300 dark:border-slate-700 rounded-full flex justify-center pt-1.5">
            <motion.div
              className="w-1 h-2 bg-indigo-400 dark:bg-indigo-500 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
