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
    color: "indigo",
  },
  {
    title: "Automated Geospatial Analytics Platform",
    context: "University of Memphis",
    description:
      "Python/SQL ETL pipelines and ArcGIS dashboards for large urban and infrastructure datasets, replacing manual GIS workflows with nightly scheduled jobs and automated QA checks. Enables non-technical users to run ad-hoc spatial queries via web maps.",
    tech: ["Python", "SQL", "ArcGIS Pro", "ArcPy", "PostgreSQL", "PostGIS"],
    github: "https://github.com/nddipala",
    highlights: ["Nightly automated ETL", "Self-serve spatial queries", "Multi-research-group adoption"],
    color: "violet",
  },
  {
    title: "Multithreaded Data Visualization Tool",
    context: "Academic / Personal",
    description:
      "A multithreaded Java/JavaFX application for interactive analysis of 1M+ row datasets, improving load and processing times by 30%. Features configurable charting, filtering, and layout persistence so analysts can save and share reusable exploration views.",
    tech: ["Java", "JavaFX", "JDBC", "MySQL", "Multithreading"],
    github: "https://github.com/nddipala",
    highlights: ["1M+ row dataset support", "30% faster processing", "Saveable chart layouts"],
    color: "blue",
  },
];

const colorMap = {
  indigo: {
    accent: "border-indigo-500",
    badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
    tag: "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300",
    dot: "bg-indigo-500",
    link: "text-indigo-600 hover:text-indigo-700 dark:text-indigo-400",
  },
  violet: {
    accent: "border-violet-500",
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    tag: "bg-violet-50 text-violet-600 dark:bg-violet-900/30 dark:text-violet-300",
    dot: "bg-violet-500",
    link: "text-violet-600 hover:text-violet-700 dark:text-violet-400",
  },
  blue: {
    accent: "border-blue-500",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    tag: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300",
    dot: "bg-blue-500",
    link: "text-blue-600 hover:text-blue-700 dark:text-blue-400",
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Work
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Selected Projects
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => {
            const c = colorMap[project.color];
            return (
              <motion.div
                key={index}
                className={`bg-white dark:bg-slate-900 rounded-2xl border-t-4 ${c.accent} border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
              >
                <div className="mb-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.badge}`}>
                    {project.context}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs px-2.5 py-0.5 rounded-md font-medium ${c.tag}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${c.link} transition-colors`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
