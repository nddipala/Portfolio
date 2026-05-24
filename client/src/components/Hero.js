import React from "react";
import { motion } from "framer-motion";
import ProfilePic from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-20">

          {/* Left: text */}
          <div className="flex-1 min-w-0">
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-3 mb-9"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#34d399]/30 bg-[#34d399]/08 text-[#34d399] text-[11px] font-mono tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse flex-shrink-0" />
                Available to join a new team · Remote-first
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="mb-9 leading-[1.0] tracking-tight"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)", fontWeight: 700 }}
            >
              <span className="block text-white">Engineering</span>
              <span
                className="block italic font-serif bg-gradient-to-r from-[#a78bfa] via-[#22d3ee] to-[#a78bfa] bg-clip-text text-transparent"
                style={{ backgroundSize: "200% 100%" }}
              >
                production&#8209;grade
              </span>
              <span className="block text-white">systems for</span>
              <span className="block" style={{ color: "rgba(245,247,251,0.22)" }}>regulated industries.</span>
            </motion.h1>

            {/* Meta row */}
            <motion.div
              className="grid grid-cols-3 gap-6 mb-11 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              {[
                { label: "Base", value: "Memphis → Remote" },
                { label: "Experience", value: "7+ years" },
                { label: "Currently", value: "Aetna · CVS" },
              ].map((m) => (
                <div key={m.label}>
                  <p className="text-[9px] font-mono text-white/25 uppercase tracking-[0.2em] mb-1">{m.label}</p>
                  <p className="text-[12px] font-mono text-white/65">{m.value}</p>
                </div>
              ))}
            </motion.div>

            {/* Stack line */}
            <motion.div
              className="flex flex-wrap gap-x-5 gap-y-2 mb-11 text-[11px] font-mono text-white/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.32 }}
            >
              <span className="flex items-center gap-1.5">
                <span className="text-[#a78bfa]">▸</span> Java · Spring Boot · Kafka · IBM MQ
              </span>
              <span className="hidden sm:block text-white/12">·</span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#22d3ee]">▸</span> React · GKE · Terraform · Argo CD
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white text-[#06070b] text-sm font-semibold hover:bg-white/90 transition-all duration-200 shadow-xl shadow-white/8"
              >
                Download Resume
                <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
              <a
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-white/10 text-white/65 text-sm font-semibold hover:bg-white/[0.06] hover:border-white/20 hover:text-white transition-all duration-200"
              >
                Let's build together
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-command-palette"))}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/[0.07] text-white/28 text-[11px] font-mono hover:border-white/[0.15] hover:text-white/50 transition-all duration-200"
                aria-label="Open command palette"
              >
                <span>⌘K</span>
                <span>Quick nav</span>
              </button>
            </motion.div>
          </div>

          {/* Right: portrait (desktop only) */}
          <motion.div
            className="hidden lg:block flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.12 }}
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#a78bfa] via-[#22d3ee] to-[#34d399] opacity-50 blur-md" />
              <img
                src={ProfilePic}
                alt="Nagarjun Reddy Dudipala — Sr. Full Stack Java Developer"
                className="relative w-72 h-[390px] object-cover rounded-3xl border border-white/10"
              />
              {/* Caption pill */}
              <div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2 text-xs font-mono text-white/65"
                style={{ background: "rgba(6,7,11,0.92)", backdropFilter: "blur(16px)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
                Available for Work
              </div>
              {/* Tech tag top-left */}
              <div
                className="absolute -top-4 -left-6 px-3 py-1.5 rounded-lg border border-[#a78bfa]/25 text-[10px] font-mono text-[#a78bfa]"
                style={{ background: "rgba(167,139,250,0.10)", backdropFilter: "blur(12px)" }}
              >
                Spring Boot · Kafka
              </div>
              {/* Tech tag right */}
              <div
                className="absolute top-1/3 -right-6 px-3 py-1.5 rounded-lg border border-[#22d3ee]/25 text-[10px] font-mono text-[#22d3ee]"
                style={{ background: "rgba(34,211,238,0.10)", backdropFilter: "blur(12px)" }}
              >
                GKE · Terraform
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Marquee ticker */}
      <motion.div
        className="relative overflow-hidden border-t py-4 mt-6"
        style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.008)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.75 }}
      >
        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {[
            "Aetna · CVS Health", "Citi Bank", "Elevance Health", "Univ. of Memphis",
            "Spring Boot", "Apache Kafka", "Google Kubernetes", "React",
            "PostgreSQL / PostGIS", "AWS", "Azure", "GCP", "Microservices",
            "Java 17", "Terraform", "Argo CD", "GitHub Actions", "Grafana", "Splunk", "Docker",
            "Aetna · CVS Health", "Citi Bank", "Elevance Health", "Univ. of Memphis",
            "Spring Boot", "Apache Kafka", "Google Kubernetes", "React",
            "PostgreSQL / PostGIS", "AWS", "Azure", "GCP", "Microservices",
            "Java 17", "Terraform", "Argo CD", "GitHub Actions", "Grafana", "Splunk", "Docker",
          ].map((item, i) => (
            <span
              key={i}
              className="flex-shrink-0 text-[10px] font-mono text-white/18 uppercase tracking-[0.16em]"
              style={{ padding: "0 2.5rem" }}
            >
              {item}
              <span className="ml-[2.5rem] text-white/8">·</span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
