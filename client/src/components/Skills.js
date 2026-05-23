import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    label: "Lang",
    accent: "#a78bfa",
    skills: ["Java 8/11/17", "JavaScript (ES6+)", "TypeScript", "Python", "SQL"],
  },
  {
    label: "Backend",
    accent: "#22d3ee",
    skills: ["Spring Boot", "Spring MVC", "Spring Security", "Spring Data JPA", "Hibernate", "Kafka", "IBM MQ", "JDBC", "Microservices"],
  },
  {
    label: "Frontend",
    accent: "#34d399",
    skills: ["React", "Angular", "HTML5", "CSS3", "Bootstrap", "jQuery", "AJAX"],
  },
  {
    label: "Cloud",
    accent: "#38bdf8",
    skills: ["GCP (GKE, GCE)", "Azure (Functions, Blob)", "AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Argo CD", "JFrog Artifactory"],
  },
  {
    label: "Database",
    accent: "#34d399",
    skills: ["PostgreSQL / PostGIS", "SQL Server", "Oracle", "MySQL", "MongoDB"],
  },
  {
    label: "Observability",
    accent: "#fb7185",
    skills: ["Prometheus", "Grafana", "Splunk", "Kiali", "Apigee", "Akamai / F5", "RESTful APIs", "GraphQL", "Swagger / OpenAPI", "JWT"],
  },
];

const tools = [
  "Git", "Bitbucket", "JIRA", "Confluence", "IntelliJ IDEA", "VS Code",
  "Maven", "Gradle", "Postman", "GitHub Copilot", "JUnit", "TestNG",
  "Selenium", "Mockito",
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6" style={{ background: "#08090e" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-3">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Technical Skills
          </h2>
          <p className="mt-3 text-sm text-white/35 font-mono max-w-md">
            The stack behind 7+ years of production systems — from JVM to the cloud edge.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.05]">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              className="p-6 flex flex-col gap-4"
              style={{ background: "#08090e" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              {/* Category label */}
              <div className="flex items-center gap-2">
                <div
                  className="w-1 h-4 rounded-full flex-shrink-0"
                  style={{ background: cat.accent }}
                />
                <span
                  className="text-[10px] font-mono font-semibold tracking-[0.18em] uppercase"
                  style={{ color: cat.accent }}
                >
                  {cat.label}
                </span>
              </div>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg border border-white/[0.07] text-white/50 bg-white/[0.03] hover:text-white/70 hover:border-white/[0.12] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools strip */}
        <motion.div
          className="mt-4 rounded-2xl border border-white/[0.05] p-6"
          style={{ background: "#08090e" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <p className="text-[10px] font-mono text-white/25 uppercase tracking-[0.2em] mb-4">
            Tools &amp; Collaboration
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono px-3 py-1.5 rounded-lg border border-white/[0.06] text-white/35 bg-white/[0.02] hover:text-white/55 hover:border-white/[0.1] transition-colors cursor-default"
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
