import React from "react";
import { motion } from "framer-motion";

const adrs = [
  {
    id: "ADR-001",
    title: "Kafka over IBM MQ as primary event spine",
    body: "IBM MQ remained for legacy mainframe paths, but all new service-to-service communication was standardised on Apache Kafka / Confluent. The decision removed point-to-point coupling and gave us at-least-once delivery semantics, schema registry enforcement, and consumer-group replay — critical for audit trails in a regulated insurance environment.",
    tags: ["Kafka", "IBM MQ", "Event-Driven", "Confluent"],
    accent: "#a78bfa",
  },
  {
    id: "ADR-002",
    title: "Argo CD + GitHub Actions over monthly release trains",
    body: "Quarterly manual deployments created a 3-week stabilisation window after each release and blocked incremental feature delivery. Moving to GitOps (Argo CD) with GitHub Actions CI pipelines compressed the deploy cycle from monthly to several times per week. Rollback time dropped from hours to minutes via declarative manifests and automated smoke tests.",
    tags: ["Argo CD", "GitHub Actions", "GitOps", "GKE", "JFrog"],
    accent: "#22d3ee",
  },
  {
    id: "ADR-003",
    title: "Push observability to every service boundary",
    body: "Centralised monitoring at the load balancer gave us traffic counts but no visibility into inter-service latency or downstream degradation. Instrumenting each Spring Boot service with Prometheus metrics, Grafana dashboards, and Splunk log correlation at the seam between services reduced mean-time-to-detect from 45 minutes to under 8 minutes.",
    tags: ["Grafana", "Splunk", "Prometheus", "Kiali", "Istio"],
    accent: "#34d399",
  },
];

const ADRs = () => {
  return (
    <section id="decisions" className="py-24 px-6" style={{ background: "#07080d" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-[10px] font-mono text-white/28 uppercase tracking-[0.2em] mb-3">
            Decision Log
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Architecture Decision Records
          </h2>
          <p className="mt-3 text-sm text-white/35 font-mono max-w-md">
            The reasoning behind three calls that shaped how these systems work today.
          </p>
        </motion.div>

        <div className="space-y-4">
          {adrs.map((adr, i) => (
            <motion.div
              key={adr.id}
              className="group relative rounded-2xl border border-white/[0.06] overflow-hidden transition-all duration-300 hover:border-white/[0.12]"
              style={{ background: "rgba(255,255,255,0.022)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
            >
              {/* Accent left bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[2px]"
                style={{ background: `linear-gradient(to bottom, ${adr.accent}, transparent)` }}
              />

              <div className="px-7 py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {/* ADR ID badge */}
                    <span
                      className="inline-flex items-center text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-md mb-3 border"
                      style={{
                        color: adr.accent,
                        borderColor: `${adr.accent}30`,
                        background: `${adr.accent}10`,
                      }}
                    >
                      {adr.id}
                    </span>

                    <h3 className="text-[15px] font-semibold text-white leading-snug mb-3">
                      {adr.title}
                    </h3>

                    <p className="text-[13px] text-white/40 leading-relaxed font-mono mb-4">
                      {adr.body}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {adr.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-mono px-2 py-0.5 rounded-md border border-white/[0.07] text-white/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow icon */}
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center border border-white/[0.07] transition-all duration-200 group-hover:border-white/[0.18]"
                    style={{ color: "rgba(255,255,255,0.20)" }}
                  >
                    <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#22d3ee]" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "inherit" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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

export default ADRs;
