import React from "react";
import { motion } from "framer-motion";
import ProfilePic from "../assets/profile.jpg";

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "4", label: "Companies" },
  { value: "80%", label: "API Performance Boost" },
  { value: "5M+", label: "Daily Events Handled" },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 pt-20"
    >
      <div className="max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          {/* Text */}
          <motion.div
            className="flex-1 text-center md:text-left space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <motion.p
                className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Sr. Full Stack Java Developer
              </motion.p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Nagarjun Reddy
                <br />
                <span className="text-indigo-600">Dudipala</span>
              </h1>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-xl">
              7+ years building high-availability systems in healthcare insurance and banking.
              I architect cloud-native microservices, event-driven backends, and React/Angular
              frontends — improving API performance by up to <strong className="text-indigo-600">80%</strong> and
              supporting millions of daily transactions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {stats.map((s) => (
                <div key={s.label} className="text-center md:text-left">
                  <p className="text-2xl font-bold text-indigo-600">{s.value}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200 dark:shadow-indigo-900"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </motion.a>
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
              </motion.a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6 justify-center md:justify-start text-slate-500 dark:text-slate-400 pt-2">
              <a
                href="https://github.com/nddipala"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                github.com/nddipala
              </a>
              <a
                href="https://linkedin.com/in/nagarjunreddydudipala183"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <span className="flex items-center gap-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (901) 462-6649
              </span>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="flex-shrink-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-indigo-600 rotate-3 scale-105 opacity-20 dark:opacity-30" />
              <img
                src={ProfilePic}
                alt="Nagarjun Reddy Dudipala"
                className="relative w-64 h-80 md:w-72 md:h-96 object-cover rounded-3xl shadow-2xl border-4 border-white dark:border-slate-800"
              />
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg">
                Available for Work
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
