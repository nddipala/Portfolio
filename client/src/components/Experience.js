import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const jobs = [
  {
    company: "Aetna, a CVS Health Company",
    location: "Hartford County, CT · Remote",
    role: "Sr. Full Stack Java Developer",
    type: "Contract",
    period: "Jul 2025 – Present",
    accent: "#a78bfa",
    bullets: [
      "Developed Spring Boot microservices secured with Spring Security and JWT for real-time healthcare insurance enrollment, improving API response time by 75% and supporting 1M+ requests across member and policy workflows.",
      "Architected Kafka/Confluent event streams between microservices and mainframe backends, handling 5M+ eligibility and claims events per day with 99.99% availability and near-zero message loss.",
      "Implemented IBM MQ–based messaging for legacy integration paths, ensuring reliable, transactional delivery of policy and billing updates to mainframe systems.",
      "Built React-based operational dashboards for tracking insurance transactions, enrollment status, and error trends in real time — reducing support tickets by 25%.",
      "Integrated enterprise SSO via Ping Identity and OAuth2/OIDC flows across internal portals, improving user adoption and security compliance.",
      "Secured external APIs via Apigee and F5/Akamai edge policies (WAF, rate limiting, IP allowlists), cutting abusive traffic and improving external partner reliability.",
      "Created Grafana and Splunk observability views for 50+ KPIs, cutting incident triage time by 30% and improving visibility into cross-service dependencies via Kiali.",
      "Implemented CI/CD with GitHub Actions, JFrog, and Argo CD on Dockerized services running in GKE, increasing deployment frequency from monthly to several times per week without SLA violations.",
    ],
    tags: ["Spring Boot", "Kafka", "React", "GKE", "Apigee", "Grafana", "Splunk", "JWT", "IBM MQ"],
  },
  {
    company: "University of Memphis",
    location: "Memphis, TN",
    role: "Frontend Developer / Research Assistant",
    type: "Academic",
    period: "Sep 2023 – May 2024",
    accent: "#22d3ee",
    bullets: [
      "Built React SPAs consuming ArcGIS and REST APIs, cutting the time to stand up new map-based analytics views from days to under 2 hours.",
      "Automated Python/SQL ETL pipelines into PostgreSQL/PostGIS, boosting data-processing throughput by 85% and eliminating manual update cycles.",
      "Reduced dashboard load and query times by 20% via spatial indexing, query tuning, and API payload optimization.",
      "Standardized reusable UI components in Confluence, cutting new-assistant onboarding time by 40%.",
    ],
    tags: ["React", "ArcGIS", "Python", "PostgreSQL", "PostGIS", "SQL"],
  },
  {
    company: "Citi Bank",
    location: "Hyderabad, Telangana, India · Hybrid",
    role: "Full Stack Developer",
    type: "Contract",
    period: "Aug 2021 – Aug 2023",
    accent: "#34d399",
    bullets: [
      "Built Java 8/Spring Boot microservices for core digital banking features — account management, funds transfer, and statements — serving hundreds of thousands of daily users.",
      "Improved SQL Server query performance by 20% through Hibernate/JPA tuning and targeted indexing on high-volume transaction tables.",
      "Reduced UAT regression defects by 30% release-over-release by building CI pipelines with Jenkins, Maven, TestNG, and Selenium.",
      "Cut MongoDB audit-data retrieval times by 15% and lifted key components to Azure (Functions, Blob, App Service), improving elasticity during peak traffic.",
    ],
    tags: ["Java 8", "Spring Boot", "Angular", "React", "Azure", "MongoDB", "Jenkins", "Selenium"],
  },
  {
    company: "Elevance Health",
    location: "Hyderabad, Telangana, India · On-site",
    role: "Full Stack Developer",
    type: "Contract",
    period: "May 2019 – Aug 2021",
    accent: "#fbbf24",
    bullets: [
      "Designed Java/Spring REST APIs for the Elevance Health platform, contributing to a 15% improvement in user satisfaction scores across clinical and member workflows.",
      "Reduced unplanned downtime by 10% by instrumenting Grafana dashboards and implementing proactive performance alerts on key services.",
      "Automated builds and deployments with Maven, Ansible, and Tomcat, shrinking release windows and eliminating manual deployment errors across all environments.",
    ],
    tags: ["Java", "Spring MVC", "REST APIs", "MySQL", "Maven", "Ansible", "Grafana", "HTML5"],
  },
];

const Experience = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="experience" className="py-28 bg-ink-000 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-3">
            Career
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Professional Experience
          </h2>
          <p className="mt-3 text-sm text-white/35 font-mono max-w-md">
            7+ years across healthcare, banking, and research — building systems that scale.
          </p>
        </motion.div>

        <div className="space-y-3">
          {jobs.map((job, index) => {
            const isOpen = expanded === index;
            const total = jobs.length;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-white/[0.07] overflow-hidden transition-all duration-300"
                style={{
                  background: isOpen ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.015)",
                  boxShadow: isOpen ? `0 0 0 1px ${job.accent}22` : "none",
                }}
              >
                {/* Accent top strip */}
                <div
                  className="h-[2px] w-full transition-all duration-300"
                  style={{
                    background: isOpen
                      ? `linear-gradient(90deg, ${job.accent}, transparent)`
                      : "rgba(255,255,255,0.05)",
                  }}
                />

                {/* Clickable header */}
                <button
                  className="w-full text-left px-6 pt-5 pb-5 focus:outline-none"
                  onClick={() => setExpanded(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      {/* Counter */}
                      <p className="text-[10px] font-mono text-white/20 mb-2 tracking-widest">
                        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-base font-bold text-white leading-snug">
                          {job.role}
                        </h3>
                        <span
                          className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border"
                          style={{
                            color: job.accent,
                            borderColor: `${job.accent}40`,
                            background: `${job.accent}12`,
                          }}
                        >
                          {job.type}
                        </span>
                      </div>

                      <p className="text-sm font-semibold text-white/60 mb-1">{job.company}</p>
                      <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-white/25">
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span style={{ color: job.accent }}>{job.period}</span>
                      </div>
                    </div>

                    {/* Chevron */}
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 transition-transform duration-300 border border-white/[0.07]"
                      style={{
                        background: isOpen ? `${job.accent}15` : "rgba(255,255,255,0.04)",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg className="w-3.5 h-3.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-md border border-white/[0.07] text-white/35 bg-white/[0.03]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </button>

                {/* Expandable bullets */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        className="px-6 pb-6 pt-3 border-t border-white/[0.05]"
                      >
                        <ul className="space-y-3">
                          {job.bullets.map((b, i) => (
                            <li key={i} className="flex gap-3 text-sm text-white/50 leading-relaxed">
                              <span
                                className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                                style={{ background: job.accent }}
                              />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
