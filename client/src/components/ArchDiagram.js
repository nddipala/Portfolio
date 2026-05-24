import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    label: "01 · Client",
    desc: "Browser or mobile app initiates HTTPS requests through edge infrastructure.",
  },
  {
    label: "02 · Edge Stack",
    desc: "WAF, rate limiting, and API Gateway enforce security policies before traffic reaches services.",
  },
  {
    label: "03 · Service Mesh",
    desc: "Four Spring Boot microservices communicate via Istio service mesh, with IBM MQ for legacy integration.",
  },
  {
    label: "04 · Event Backbone",
    desc: "Kafka event streams decouple services — 5M+ eligibility and claims events flow through Confluent daily.",
  },
  {
    label: "05 · Data & Observability",
    desc: "Polyglot persistence (PostgreSQL, MongoDB, SQL Server) with Grafana + Splunk dashboards on every seam.",
  },
];

/* Node component */
function Node({ x, y, label, sub, color, visible }) {
  return (
    <g
      transform={`translate(${x},${y})`}
      style={{ opacity: visible ? 1 : 0.1, transition: "opacity 0.5s ease" }}
    >
      <rect x={-52} y={-18} width={104} height={36} rx={7} fill={`${color}18`} stroke={color} strokeWidth="1" />
      <text textAnchor="middle" y={-4} fill={color} fontSize={9} fontFamily="JetBrains Mono, monospace" fontWeight="600">
        {label}
      </text>
      {sub && (
        <text textAnchor="middle" y={10} fill={`${color}70`} fontSize={7.5} fontFamily="JetBrains Mono, monospace">
          {sub}
        </text>
      )}
    </g>
  );
}

/* Arrow */
function Arrow({ x1, y1, x2, y2, color, visible }) {
  return (
    <line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={color}
      strokeWidth="1"
      strokeDasharray="4 3"
      opacity={visible ? 0.45 : 0.05}
      style={{ transition: "opacity 0.45s ease" }}
    />
  );
}

const ArchDiagram = () => {
  const sectionRef = useRef(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const sectionH = el.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(scrolled / sectionH, 1);
      setStep(Math.min(Math.floor(progress * STEPS.length), STEPS.length - 1));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const show = (s) => step >= s;

  return (
    <section
      ref={sectionRef}
      id="architecture"
      style={{ position: "relative", height: "450vh" }}
    >
      <div className="arch-sticky">
        <div className="max-w-6xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12">

          {/* SVG diagram */}
          <div className="flex-1 w-full">
            <motion.div
              className="relative rounded-2xl border border-white/[0.06] overflow-hidden"
              style={{ background: "rgba(7,8,13,0.92)", backdropFilter: "blur(12px)" }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#fb7185]/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#34d399]/70" />
                <span className="ml-3 text-[10px] font-mono text-white/25">nrd-system-architecture.svg</span>
              </div>

              <svg viewBox="0 0 520 320" className="w-full" style={{ maxHeight: 360 }}>
                {/* ── Step 0: Client ── */}
                <Node x={260} y={38} label="Browser / Mobile" sub="HTTPS" color="#a78bfa" visible={show(0)} />

                {/* ── Step 1: Edge ── */}
                <Arrow x1={260} y1={56} x2={260} y2={75} color="#a78bfa" visible={show(1)} />
                <g style={{ opacity: show(1) ? 1 : 0.05, transition: "opacity 0.5s" }}>
                  <rect x={60} y={75} width={400} height={68} rx={8} fill="rgba(167,139,250,0.04)" stroke="rgba(167,139,250,0.20)" strokeWidth="1" />
                  <text x={80} y={91} fill="#a78bfa" fontSize={8} fontFamily="JetBrains Mono,monospace" opacity={0.55}>Edge Stack</text>
                  <Node x={140} y={112} label="WAF / Akamai" sub="F5 · IP rules" color="#a78bfa" visible={show(1)} />
                  <Node x={260} y={112} label="API Gateway" sub="Apigee" color="#a78bfa" visible={show(1)} />
                  <Node x={380} y={112} label="SSO / OIDC" sub="Ping Identity" color="#a78bfa" visible={show(1)} />
                  <line x1={190} y1={112} x2={210} y2={112} stroke="#a78bfa" strokeWidth="1" opacity="0.25" />
                  <line x1={310} y1={112} x2={330} y2={112} stroke="#a78bfa" strokeWidth="1" opacity="0.25" />
                </g>

                {/* ── Step 2: Services ── */}
                <Arrow x1={260} y1={143} x2={260} y2={162} color="#22d3ee" visible={show(2)} />
                <g style={{ opacity: show(2) ? 1 : 0.05, transition: "opacity 0.5s" }}>
                  <rect x={60} y={162} width={400} height={68} rx={8} fill="rgba(34,211,238,0.04)" stroke="rgba(34,211,238,0.18)" strokeWidth="1" />
                  <text x={80} y={177} fill="#22d3ee" fontSize={8} fontFamily="JetBrains Mono,monospace" opacity={0.55}>Service Mesh (Istio · GKE)</text>
                  <Node x={120} y={198} label="Enrollment" sub="Spring Boot" color="#22d3ee" visible={show(2)} />
                  <Node x={220} y={198} label="Claims" sub="Spring Boot" color="#22d3ee" visible={show(2)} />
                  <Node x={320} y={198} label="Policy" sub="Spring Boot" color="#22d3ee" visible={show(2)} />
                  <Node x={420} y={198} label="IBM MQ" sub="Legacy bridge" color="#fbbf24" visible={show(2)} />
                </g>

                {/* ── Step 3: Kafka ── */}
                <Arrow x1={260} y1={230} x2={260} y2={248} color="#34d399" visible={show(3)} />
                <g style={{ opacity: show(3) ? 1 : 0.05, transition: "opacity 0.5s" }}>
                  <rect x={80} y={248} width={360} height={34} rx={7} fill="rgba(52,211,153,0.06)" stroke="rgba(52,211,153,0.22)" strokeWidth="1" />
                  <text x={260} y={268} textAnchor="middle" fill="#34d399" fontSize={9} fontFamily="JetBrains Mono,monospace" fontWeight="600">Apache Kafka · Confluent · 5M events/day</text>
                </g>

                {/* ── Step 4: Data + Observability ── */}
                <Arrow x1={260} y1={282} x2={260} y2={298} color="#fb7185" visible={show(4)} />
                <g style={{ opacity: show(4) ? 1 : 0.05, transition: "opacity 0.5s" }}>
                  <Node x={160} y={308} label="PostgreSQL" sub="+ SQL Server" color="#60a5fa" visible={show(4)} />
                  <Node x={280} y={308} label="MongoDB" sub="Audit + cache" color="#60a5fa" visible={show(4)} />
                  <Node x={400} y={308} label="Grafana + Splunk" sub="50+ KPIs" color="#fb7185" visible={show(4)} />
                </g>
              </svg>
            </motion.div>
          </div>

          {/* Step description panel */}
          <div className="lg:w-72 flex-shrink-0 space-y-3">
            <p className="text-[10px] font-mono text-white/28 uppercase tracking-[0.2em] mb-5">
              System Architecture
            </p>
            {STEPS.map((s, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border transition-all duration-400"
                style={{
                  background: step === i ? "rgba(167,139,250,0.07)" : "rgba(255,255,255,0.02)",
                  borderColor: step === i ? "rgba(167,139,250,0.30)" : "rgba(255,255,255,0.05)",
                }}
              >
                <p className="text-[10px] font-mono font-semibold text-[#a78bfa] mb-1">{s.label}</p>
                <p className="text-[11px] font-mono text-white/40 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchDiagram;
