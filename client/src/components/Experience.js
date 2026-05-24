import React from "react";
import { motion } from "framer-motion";

const cases = [
  {
    badge: "Healthcare · Insurance",
    company: "Aetna, a CVS Health Company",
    role: "Sr. Full Stack Java Developer · Contract",
    when: "Jul 2025 – Present",
    accent: "#a78bfa",
    tags: ["Spring Boot", "Kafka", "React", "GKE", "Apigee", "Grafana", "IBM MQ"],
    lines: [
      "Architected Kafka / Confluent event streams handling 5M+ eligibility and claims events per day with 99.99% availability.",
      "Built Spring Boot microservices secured with JWT for real-time enrollment — improving API response time by 75% across 1M+ daily requests.",
      "Implemented IBM MQ messaging for legacy mainframe integration, ensuring transactional delivery of policy and billing updates.",
      "Created Grafana + Splunk observability views across 50+ KPIs, cutting incident triage time by 30%.",
      "Moved deployment cadence from monthly releases to multiple deploys per week via Argo CD + GitHub Actions on GKE.",
    ],
    metrics: [
      { val: "1M+", label: "API reqs / day" },
      { val: "5M+", label: "Kafka events / day" },
      { val: "99.99%", label: "Availability SLA" },
      { val: "−30%", label: "Triage time" },
    ],
  },
  {
    badge: "Academia · GIS Research",
    company: "University of Memphis",
    role: "Frontend Developer / Research Assistant · Academic",
    when: "Sep 2023 – May 2024",
    accent: "#22d3ee",
    tags: ["React", "ArcGIS", "Python", "PostgreSQL", "PostGIS", "SQL"],
    lines: [
      "Built React SPAs consuming ArcGIS and REST APIs — reducing setup time for map-based analytics from days to under 2 hours.",
      "Automated Python/SQL ETL pipelines into PostgreSQL/PostGIS, boosting data throughput by 85%.",
      "Reduced dashboard load and query times by 20% via spatial indexing and API payload optimization.",
      "Standardised reusable UI component library in Confluence, cutting new-assistant onboarding time by 40%.",
    ],
    metrics: [
      { val: "85%", label: "ETL throughput" },
      { val: "−20%", label: "Query latency" },
      { val: "−40%", label: "Onboarding time" },
    ],
  },
  {
    badge: "Banking · Digital",
    company: "Citi Bank",
    role: "Full Stack Developer · Contract",
    when: "Aug 2021 – Aug 2023",
    accent: "#34d399",
    tags: ["Java 8", "Spring Boot", "Angular", "React", "Azure", "MongoDB", "Jenkins"],
    lines: [
      "Built Java 8 / Spring Boot microservices for core digital banking — account management, transfers, statements — serving hundreds of thousands of daily users.",
      "Improved SQL Server query performance by 20% through Hibernate / JPA tuning and targeted indexing.",
      "Reduced UAT regression defects by 30% release-over-release via Jenkins + TestNG + Selenium CI pipelines.",
      "Lifted key components to Azure (Functions, Blob, App Service), improving elasticity during peak traffic.",
    ],
    metrics: [
      { val: "−20%", label: "Query time" },
      { val: "−30%", label: "UAT defects" },
      { val: "Azure", label: "Cloud migration" },
    ],
  },
  {
    badge: "Healthcare · Clinical",
    company: "Elevance Health",
    role: "Full Stack Developer · Contract",
    when: "May 2019 – Aug 2021",
    accent: "#fbbf24",
    tags: ["Java", "Spring MVC", "REST APIs", "MySQL", "Maven", "Ansible", "Grafana"],
    lines: [
      "Designed Java/Spring REST APIs contributing to a 15% improvement in user satisfaction scores across clinical and member workflows.",
      "Reduced unplanned downtime by 10% by instrumenting Grafana dashboards with proactive performance alerts.",
      "Automated builds and deployments with Maven + Ansible + Tomcat, eliminating manual deployment errors across all environments.",
    ],
    metrics: [
      { val: "+15%", label: "User satisfaction" },
      { val: "−10%", label: "Downtime" },
      { val: "Full CI", label: "Maven + Ansible" },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-ink-000">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-[10px] font-mono text-white/28 uppercase tracking-[0.2em] mb-3">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Professional Experience
          </h2>
          <p className="mt-3 text-sm text-white/35 font-mono max-w-md">
            7+ years across healthcare, banking, and research — building systems that scale.
          </p>
        </motion.div>

        <div className="space-y-5">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl border border-white/[0.06] overflow-hidden transition-colors duration-300 hover:border-white/[0.12]"
              style={{ background: "rgba(255,255,255,0.022)" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Accent top bar */}
              <div
                className="h-[2px] w-full"
                style={{ background: `linear-gradient(90deg, ${c.accent}, transparent)` }}
              />

              <div className="p-6 md:p-8">
                {/* Top: badge + when */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <span
                    className="text-[9px] font-mono font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider"
                    style={{
                      color: c.accent,
                      borderColor: `${c.accent}30`,
                      background: `${c.accent}10`,
                    }}
                  >
                    {c.badge}
                  </span>
                  <span className="text-[10px] font-mono text-white/30">{c.when}</span>
                </div>

                {/* Company + role */}
                <h3 className="text-xl font-bold text-white mb-1">{c.company}</h3>
                <p className="text-[11px] font-mono text-white/35 mb-5">{c.role}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-7">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-mono px-2.5 py-0.5 rounded-md border border-white/[0.07] text-white/35"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="md:flex gap-8">
                  {/* Bullets */}
                  <ul className="flex-1 space-y-3 mb-7 md:mb-0">
                    {c.lines.map((line, j) => (
                      <li key={j} className="flex gap-3 text-[13px] text-white/45 leading-relaxed font-mono">
                        <span
                          className="mt-[6px] w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: c.accent }}
                        />
                        {line}
                      </li>
                    ))}
                  </ul>

                  {/* Metrics */}
                  <div className="flex-shrink-0 flex flex-row md:flex-col flex-wrap gap-2 md:w-36">
                    {c.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="flex-1 min-w-[80px] md:min-w-0 rounded-xl border border-white/[0.07] p-3 text-center"
                        style={{ background: `${c.accent}08` }}
                      >
                        <p className="text-sm font-bold font-mono" style={{ color: c.accent }}>{m.val}</p>
                        <p className="text-[9px] font-mono text-white/28 mt-0.5 leading-tight">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
