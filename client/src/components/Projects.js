import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Healthcare Provider Mapping Portal",
    context: "Personal / Academic",
    description:
      "A provider-network portal using React, Node.js/Express, PostgreSQL/PostGIS, and ArcGIS Online to visualize providers, members, and access-to-care gaps for thousands of network records. Implements drive-time and proximity analysis highlighting underserved regions.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "PostGIS", "ArcGIS Online"],
    github: "https://github.com/nddipala",
    highlights: ["Drive-time & proximity analysis", "Provider network gap visualization", "PostGIS spatial queries"],
    accent: "#a78bfa",
    featured: true,
  },
  {
    title: "Automated Geospatial Analytics Platform",
    context: "University of Memphis",
    description:
      "Python/SQL ETL pipelines and ArcGIS dashboards for large urban and infrastructure datasets, replacing manual GIS workflows with nightly scheduled jobs and automated QA checks. Enables non-technical users to run ad-hoc spatial queries via web maps.",
    tech: ["Python", "SQL", "ArcGIS Pro", "ArcPy", "PostgreSQL", "PostGIS"],
    github: "https://github.com/nddipala",
    highlights: ["Nightly automated ETL", "Self-serve spatial queries", "Multi-research-group adoption"],
    accent: "#22d3ee",
    featured: false,
  },
  {
    title: "Multithreaded Data Visualization Tool",
    context: "Academic / Personal",
    description:
      "A multithreaded Java/JavaFX application for interactive analysis of 1M+ row datasets, improving load and processing times by 30%. Features configurable charting, filtering, and layout persistence so analysts can save and share reusable exploration views.",
    tech: ["Java", "JavaFX", "JDBC", "MySQL", "Multithreading"],
    github: "https://github.com/nddipala",
    highlights: ["1M+ row dataset support", "30% faster processing", "Saveable chart layouts"],
    accent: "#34d399",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 bg-ink-000 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-3">
              Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Selected Projects
            </h2>
          </div>
          <a
            href="https://github.com/nddipala"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] font-mono text-white/35 hover:text-white/65 transition-colors group flex-shrink-0"
          >
            View all on GitHub
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl border border-white/[0.07] overflow-hidden flex flex-col group cursor-default"
              style={{
                background: "rgba(255,255,255,0.02)",
                transition: "all 0.3s ease",
              }}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, borderColor: `${project.accent}30` }}
            >
              {/* Accent top strip */}
              <div
                className="h-[2px] w-full"
                style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
              />

              {/* Big project number */}
              <span
                className="absolute top-5 right-5 text-6xl font-black font-mono leading-none select-none pointer-events-none"
                style={{ color: `${project.accent}12` }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="p-6 flex flex-col flex-1">
                {/* Context + featured badge */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span
                    className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border"
                    style={{
                      color: project.accent,
                      borderColor: `${project.accent}35`,
                      background: `${project.accent}10`,
                    }}
                  >
                    {project.context}
                  </span>
                  {project.featured && (
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-brand-amber/10 text-brand-amber border border-brand-amber/25">
                      ★ Featured
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white mb-3 leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm text-white/40 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-[11px] text-white/40 font-mono">
                      <span
                        className="w-3.5 h-3.5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                        style={{ background: `${project.accent}20`, color: project.accent }}
                      >
                        <svg className="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md border border-white/[0.07] text-white/30 bg-white/[0.03]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] font-mono transition-colors group/link"
                  style={{ color: `${project.accent}80` }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = project.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = `${project.accent}80`)}
                >
                  <svg className="w-4 h-4 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
