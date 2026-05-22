import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: "indigo",
    skills: ["Java 8/11/17", "JavaScript (ES6+)", "TypeScript", "Python", "SQL"],
  },
  {
    title: "Java & Backend Frameworks",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    color: "blue",
    skills: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "Hibernate", "Kafka", "IBM MQ", "JDBC", "Microservices"],
  },
  {
    title: "Frontend",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "violet",
    skills: ["React", "Angular", "HTML5", "CSS3", "Bootstrap", "jQuery", "AJAX"],
  },
  {
    title: "Cloud & DevOps",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    color: "sky",
    skills: ["GCP (GKE, GCE)", "Azure (Functions, Blob)", "AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Argo CD", "JFrog Artifactory"],
  },
  {
    title: "Databases",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    color: "emerald",
    skills: ["PostgreSQL / PostGIS", "SQL Server", "Oracle", "MySQL", "MongoDB"],
  },
  {
    title: "Monitoring & API",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "rose",
    skills: ["Prometheus", "Grafana", "Splunk", "Kiali", "Apigee", "Akamai / F5 BIG-IP", "RESTful APIs", "SOAP", "GraphQL", "Swagger / OpenAPI", "JWT"],
  },
];

const colorMap = {
  indigo: {
    bg: "bg-indigo-50 dark:bg-indigo-950/30",
    border: "border-indigo-200 dark:border-indigo-800",
    icon: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400",
    title: "text-indigo-700 dark:text-indigo-300",
    tag: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
  },
  blue: {
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
    icon: "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400",
    title: "text-blue-700 dark:text-blue-300",
    tag: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  },
  violet: {
    bg: "bg-violet-50 dark:bg-violet-950/30",
    border: "border-violet-200 dark:border-violet-800",
    icon: "bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-violet-400",
    title: "text-violet-700 dark:text-violet-300",
    tag: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  },
  sky: {
    bg: "bg-sky-50 dark:bg-sky-950/30",
    border: "border-sky-200 dark:border-sky-800",
    icon: "bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400",
    title: "text-sky-700 dark:text-sky-300",
    tag: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
  },
  emerald: {
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    border: "border-emerald-200 dark:border-emerald-800",
    icon: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400",
    title: "text-emerald-700 dark:text-emerald-300",
    tag: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  },
  rose: {
    bg: "bg-rose-50 dark:bg-rose-950/30",
    border: "border-rose-200 dark:border-rose-800",
    icon: "bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-400",
    title: "text-rose-700 dark:text-rose-300",
    tag: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, index) => {
            const c = colorMap[cat.color];
            return (
              <motion.div
                key={index}
                className={`rounded-2xl border p-6 ${c.bg} ${c.border}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${c.icon}`}>
                    {cat.icon}
                  </div>
                  <h3 className={`font-bold text-sm ${c.title}`}>{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-3 py-1 rounded-full font-medium ${c.tag}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom tools strip */}
        <motion.div
          className="mt-10 p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">
            Tools & Collaboration
          </p>
          <div className="flex flex-wrap gap-2">
            {["Git", "Bitbucket", "JIRA", "Confluence", "IntelliJ IDEA", "VS Code", "Maven", "Gradle", "Postman", "GitHub Copilot", "JUnit", "TestNG", "Selenium", "Mockito"].map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
