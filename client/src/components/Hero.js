import React from "react";
import { motion } from "framer-motion";
import ProfilePic from "../assets/profile.jpg";

const marqueeItems = [
  "Aetna · CVS Health",
  "Citi Bank",
  "Elevance Health",
  "Univ. of Memphis",
  "Spring Boot",
  "Apache Kafka",
  "Google Kubernetes",
  "React",
  "PostgreSQL / PostGIS",
  "AWS",
  "Azure",
  "GCP",
  "Microservices",
  "Java 17",
  "Terraform",
  "Argo CD",
  "GitHub Actions",
  "Grafana",
  "Splunk",
  "Docker",
];

const stats = [
  { value: "7+", label: "Years Production", color: "text-brand-cyan" },
  { value: "1M+", label: "API Reqs / Day", color: "text-brand-violet" },
  { value: "5M+", label: "Kafka Events / Day", color: "text-brand-green" },
  { value: "99.99%", label: "Availability SLA", color: "text-brand-amber" },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-ink-000"
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-violet/8 blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-cyan/8 blur-[140px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-10 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16">

          {/* Left: typography */}
          <div className="flex-1 min-w-0">
            {/* Status pill + avatar */}
            <motion.div
              className="flex items-center gap-4 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={ProfilePic}
                alt="Nagarjun Reddy Dudipala"
                className="w-11 h-11 rounded-full object-cover ring-2 ring-brand-violet/40 flex-shrink-0"
              />
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-[11px] font-mono tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse flex-shrink-0" />
                Available · Open to Opportunities
              </span>
            </motion.div>

            {/* Giant headline */}
            <motion.h1
              className="mb-10 leading-[1.02] tracking-tight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              style={{ fontSize: "clamp(2.6rem, 6.5vw, 6.2rem)", fontWeight: 700 }}
            >
              <span className="block text-white">Engineering</span>
              <span
                className="block italic font-serif bg-gradient-to-r from-brand-violet via-brand-cyan to-brand-violet bg-clip-text text-transparent"
                style={{ backgroundSize: "200% 100%" }}
              >
                production&#8209;grade
              </span>
              <span className="block text-white">systems for</span>
              <span className="block text-white/30">regulated industries.</span>
            </motion.h1>

            {/* Meta row */}
            <motion.div
              className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-10 text-[11px] font-mono text-white/35"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.28 }}
            >
              <span className="flex items-center gap-1.5">
                <span className="text-brand-cyan">▸</span>
                Java · Spring Boot · Kafka · IBM MQ
              </span>
              <span className="hidden sm:block text-white/15">·</span>
              <span className="flex items-center gap-1.5">
                <span className="text-brand-violet">▸</span>
                React · GKE · Terraform · Argo CD
              </span>
              <span className="hidden sm:block text-white/15">·</span>
              <span className="flex items-center gap-1.5">
                <span className="text-brand-green">▸</span>
                Hartford → Memphis → Remote
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 mb-14"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38 }}
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white text-ink-000 text-sm font-semibold hover:bg-white/90 transition-all duration-200 shadow-xl shadow-white/10"
              >
                Resume
                <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <a
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-white/10 text-white/70 text-sm font-semibold hover:bg-white/[0.06] hover:border-white/20 hover:text-white transition-all duration-200"
              >
                Let's build together
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>

            {/* Stats bento */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-4 backdrop-blur-sm hover:border-white/[0.12] transition-colors"
                >
                  <p className={`text-2xl font-bold font-mono mb-1 ${stat.color}`}>
                    {stat.value}
                  </p>
                  <p className="text-[10px] text-white/35 font-mono uppercase tracking-widest leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: photo (desktop only) */}
          <motion.div
            className="hidden lg:block flex-shrink-0"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-brand-violet via-brand-cyan to-brand-green opacity-60 blur-sm" />
              <img
                src={ProfilePic}
                alt="Nagarjun Reddy Dudipala — Sr. Full Stack Java Developer"
                className="relative w-72 h-[380px] object-cover rounded-3xl border border-white/10"
              />
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2 text-xs font-mono text-white/70"
                style={{ background: "rgba(14,17,23,0.9)", backdropFilter: "blur(12px)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                Available for Work
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Marquee ticker */}
      <motion.div
        className="relative overflow-hidden border-t border-white/[0.05] py-4 mt-4"
        style={{ background: "rgba(255,255,255,0.01)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex-shrink-0 text-[10px] font-mono text-white/20 uppercase tracking-[0.15em]"
              style={{ padding: "0 2.5rem" }}
            >
              {item}
              <span className="ml-[2.5rem] text-white/10">·</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
