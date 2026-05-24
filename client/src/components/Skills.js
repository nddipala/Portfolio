import React from "react";
import { motion } from "framer-motion";

const stacks = [
  {
    id: "jvm",
    label: "JVM Core",
    accent: "#a78bfa",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: ["Java 17 / 11 / 8", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "JDBC", "Maven", "Gradle"],
  },
  {
    id: "events",
    label: "Event-Driven",
    accent: "#22d3ee",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    skills: ["Apache Kafka", "Confluent", "IBM MQ", "Event Sourcing", "Schema Registry", "Consumer Groups"],
  },
  {
    id: "cloud",
    label: "Cloud",
    accent: "#60a5fa",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    skills: ["GCP · GKE · GCE", "Azure Functions · Blob", "AWS EC2 · S3 · Lambda", "Terraform", "Docker", "Kubernetes"],
  },
  {
    id: "platform",
    label: "Platform / DevOps",
    accent: "#34d399",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    skills: ["GitHub Actions", "Argo CD · GitOps", "Jenkins", "JFrog Artifactory", "Helm", "Ansible"],
  },
  {
    id: "frontend",
    label: "Frontend / Product",
    accent: "#fbbf24",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: ["React · Hooks · Router", "TypeScript", "Angular", "HTML5 / CSS3", "Bootstrap", "ArcGIS JS API"],
  },
  {
    id: "data",
    label: "Data / Persistence",
    accent: "#fb7185",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    skills: ["PostgreSQL · PostGIS", "SQL Server · Oracle", "MySQL", "MongoDB", "Spatial indexing", "Query tuning"],
  },
  {
    id: "edge",
    label: "Edge / API Gateway",
    accent: "#a78bfa",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    skills: ["Apigee", "Akamai / F5 WAF", "Rate limiting", "OAuth2 / OIDC", "Ping Identity SSO", "JWT"],
  },
  {
    id: "obs",
    label: "Observability",
    accent: "#34d399",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    skills: ["Prometheus", "Grafana", "Splunk", "Kiali", "Istio service mesh", "OpenAPI / Swagger"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6" style={{ background: "#07080d" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-[10px] font-mono text-white/28 uppercase tracking-[0.2em] mb-3">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Technical Stack
          </h2>
          <p className="mt-3 text-sm text-white/35 font-mono max-w-md">
            The stack behind 7+ years of production systems — from JVM to the cloud edge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {stacks.map((s, i) => (
            <motion.div
              key={s.id}
              className="rounded-2xl border border-white/[0.06] p-5 hover:border-white/[0.12] transition-colors duration-300 group"
              style={{ background: "rgba(255,255,255,0.022)" }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.055 }}
            >
              {/* Icon + label */}
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/[0.07] transition-colors duration-300"
                  style={{ color: s.accent, background: `${s.accent}12` }}
                >
                  {s.icon}
                </div>
                <span
                  className="text-[10px] font-mono font-semibold uppercase tracking-[0.12em]"
                  style={{ color: s.accent }}
                >
                  {s.label}
                </span>
              </div>

              {/* Skills list */}
              <ul className="space-y-1.5">
                {s.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-[11px] font-mono text-white/42 flex items-center gap-2 hover:text-white/65 transition-colors cursor-default"
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: `${s.accent}60` }}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
