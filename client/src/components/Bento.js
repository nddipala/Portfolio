import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ── Kafka flow widget ───────────────────────────────────────────── */
function KafkaWidget() {
  const [dots, setDots] = useState([]);
  useEffect(() => {
    let id = 0;
    const interval = setInterval(() => {
      const lane = Math.floor(Math.random() * 3);
      setDots((prev) => [
        ...prev.slice(-12),
        { id: id++, lane, start: Date.now() },
      ]);
    }, 420);
    return () => clearInterval(interval);
  }, []);

  const lanes = [0, 1, 2];
  const colors = ["#a78bfa", "#22d3ee", "#34d399"];

  return (
    <div className="h-full flex flex-col justify-between p-5">
      <div>
        <p className="text-[9px] font-mono text-white/25 uppercase tracking-[0.18em] mb-1">Event Backbone</p>
        <p className="text-2xl font-bold font-mono text-white mb-0.5">5M+</p>
        <p className="text-[10px] font-mono text-white/35">Kafka events / day</p>
      </div>
      <div className="relative flex gap-2 mt-4" style={{ height: 88 }}>
        {lanes.map((lane) => (
          <div
            key={lane}
            className="flex-1 relative rounded-md overflow-hidden"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="absolute top-1 left-1/2 -translate-x-1/2 text-[8px] font-mono text-white/20">
              P{lane}
            </div>
            {dots
              .filter((d) => d.lane === lane)
              .map((d) => {
                const age = Date.now() - d.start;
                const pct = Math.min((age / 1200) * 100, 100);
                return (
                  <div
                    key={d.id}
                    className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                    style={{
                      background: colors[lane],
                      top: `${pct}%`,
                      opacity: 1 - pct / 100,
                      boxShadow: `0 0 6px ${colors[lane]}`,
                      transition: "top 0.1s linear",
                    }}
                  />
                );
              })}
          </div>
        ))}
      </div>
      <div className="flex gap-1.5 mt-3 flex-wrap">
        {["Confluent", "3 Partitions", "99.99% SLA"].map((t) => (
          <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded-md text-white/30 border border-white/[0.06]">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── K8s pods widget ─────────────────────────────────────────────── */
function K8sWidget() {
  const total = 32;
  const [pods, setPods] = useState(() =>
    Array.from({ length: total }, (_, i) => ({ id: i, state: "healthy" }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPods((prev) => {
        const next = [...prev];
        const idx = Math.floor(Math.random() * total);
        next[idx] = { ...next[idx], state: "restarting" };
        setTimeout(() => {
          setPods((p) => {
            const n2 = [...p];
            n2[idx] = { ...n2[idx], state: "healthy" };
            return n2;
          });
        }, 900);
        return next;
      });
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const colors = {
    healthy: "#34d399",
    restarting: "#fbbf24",
    error: "#fb7185",
  };

  return (
    <div className="h-full p-5 flex flex-col justify-between">
      <div>
        <p className="text-[9px] font-mono text-white/25 uppercase tracking-[0.18em] mb-1">GKE Cluster</p>
        <p className="text-2xl font-bold font-mono text-white mb-0.5">{total}</p>
        <p className="text-[10px] font-mono text-white/35">Active pods · self-healing</p>
      </div>
      <div className="grid mt-4" style={{ gridTemplateColumns: "repeat(8, 1fr)", gap: "4px" }}>
        {pods.map((pod) => (
          <div
            key={pod.id}
            className="rounded-sm aspect-square transition-all duration-300"
            style={{
              background: colors[pod.state],
              opacity: pod.state === "restarting" ? 0.6 : 0.75,
              boxShadow: pod.state === "restarting" ? `0 0 5px ${colors.restarting}` : "none",
            }}
            title={`Pod ${pod.id} — ${pod.state}`}
          />
        ))}
      </div>
      <div className="flex items-center gap-3 mt-3 text-[9px] font-mono text-white/30">
        {Object.entries(colors).map(([s, c]) => (
          <span key={s} className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-sm" style={{ background: c }} />
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── P99 latency histogram ───────────────────────────────────────── */
function LatencyWidget() {
  const gen = () => Array.from({ length: 10 }, () => Math.random() * 0.7 + 0.1);
  const [bars, setBars] = useState(gen);

  useEffect(() => {
    const t = setInterval(() => setBars(gen()), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="h-full p-5 flex flex-col justify-between">
      <div>
        <p className="text-[9px] font-mono text-white/25 uppercase tracking-[0.18em] mb-1">P99 Latency</p>
        <p className="text-2xl font-bold font-mono text-[#22d3ee] mb-0.5">42ms</p>
        <p className="text-[10px] font-mono text-white/35">API gateway · avg last 24h</p>
      </div>
      <div className="flex items-end gap-1 mt-4" style={{ height: 60 }}>
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm transition-all duration-700"
            style={{
              height: `${h * 100}%`,
              background: `linear-gradient(to top, #22d3ee, #a78bfa)`,
              opacity: 0.65,
            }}
          />
        ))}
      </div>
      <div className="flex justify-between text-[9px] font-mono text-white/20 mt-1">
        <span>0ms</span>
        <span>100ms</span>
      </div>
    </div>
  );
}

/* ── Daily request volume ────────────────────────────────────────── */
function ReqVolumeWidget() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const heights = [0.6, 0.75, 0.9, 0.82, 0.95, 0.55, 0.4];

  return (
    <div className="h-full p-5 flex flex-col justify-between">
      <div>
        <p className="text-[9px] font-mono text-white/25 uppercase tracking-[0.18em] mb-1">API Traffic</p>
        <p className="text-2xl font-bold font-mono text-white mb-0.5">1M+</p>
        <p className="text-[10px] font-mono text-white/35">Requests / day peak</p>
      </div>
      <div className="flex items-end gap-1.5 mt-4" style={{ height: 55 }}>
        {heights.map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t-sm"
              style={{
                height: `${h * 100}%`,
                background: i === 4 ? "#a78bfa" : "rgba(167,139,250,0.30)",
              }}
            />
            <span className="text-[8px] font-mono text-white/20">{days[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Deploy frequency heatmap ────────────────────────────────────── */
function DeployWidget() {
  const grid = Array.from({ length: 28 }, (_, i) => ({
    v: Math.random(),
    deploy: Math.random() > 0.72,
  }));

  return (
    <div className="h-full p-5 flex flex-col justify-between">
      <div>
        <p className="text-[9px] font-mono text-white/25 uppercase tracking-[0.18em] mb-1">Deploy Frequency</p>
        <p className="text-xl font-bold font-mono text-[#34d399] mb-0.5">Daily+</p>
        <p className="text-[10px] font-mono text-white/35">Monthly → several/week via Argo CD</p>
      </div>
      <div
        className="grid mt-3"
        style={{ gridTemplateColumns: "repeat(7, 1fr)", gap: "3px" }}
      >
        {grid.map((cell, i) => (
          <div
            key={i}
            className="aspect-square rounded-[2px]"
            style={{
              background: cell.deploy
                ? `rgba(52,211,153,${0.4 + cell.v * 0.5})`
                : `rgba(255,255,255,${0.04 + cell.v * 0.04})`,
              boxShadow: cell.deploy ? "0 0 4px rgba(52,211,153,0.4)" : "none",
            }}
          />
        ))}
      </div>
      <div className="flex items-center gap-2 mt-2 text-[9px] font-mono text-white/25">
        <span className="w-2 h-2 rounded-[2px] bg-[#34d399]/60" /> deploy
        <span className="w-2 h-2 rounded-[2px] bg-white/8 ml-2" /> no deploy
      </div>
    </div>
  );
}

/* ── Support tickets sparkline ───────────────────────────────────── */
function TicketsWidget() {
  const before = [38, 42, 45, 40, 43, 44, 41];
  const after = [32, 28, 26, 24, 22, 21, 20];
  const toPath = (arr, maxH) => {
    const w = 100 / (arr.length - 1);
    const max = Math.max(...arr);
    return arr
      .map((v, i) => `${i === 0 ? "M" : "L"} ${i * w} ${maxH - (v / max) * maxH}`)
      .join(" ");
  };
  return (
    <div className="h-full p-5 flex flex-col justify-between">
      <div>
        <p className="text-[9px] font-mono text-white/25 uppercase tracking-[0.18em] mb-1">Support Tickets</p>
        <p className="text-xl font-bold font-mono text-[#34d399] mb-0.5">−25%</p>
        <p className="text-[10px] font-mono text-white/35">React dashboards reduced tickets</p>
      </div>
      <svg viewBox="0 0 100 48" className="mt-3 w-full" preserveAspectRatio="none" style={{ height: 52 }}>
        <path d={toPath(before, 44)} fill="none" stroke="#fb7185" strokeWidth="1.5" opacity="0.5" />
        <path d={toPath(after, 44)} fill="none" stroke="#34d399" strokeWidth="1.5" />
      </svg>
      <div className="flex gap-3 mt-2 text-[9px] font-mono">
        <span className="text-[#fb7185]/70">— before</span>
        <span className="text-[#34d399]">— after</span>
      </div>
    </div>
  );
}

/* ── Triage time ─────────────────────────────────────────────────── */
function TriageWidget() {
  return (
    <div className="h-full p-5 flex flex-col justify-between">
      <div>
        <p className="text-[9px] font-mono text-white/25 uppercase tracking-[0.18em] mb-1">Incident Triage</p>
        <p className="text-xl font-bold font-mono text-[#fbbf24] mb-0.5">−30%</p>
        <p className="text-[10px] font-mono text-white/35">Via Grafana + Splunk KPIs</p>
      </div>
      <div className="flex gap-3 mt-4">
        {[
          { label: "Before", val: "42 min", color: "#fb7185" },
          { label: "After", val: "29 min", color: "#34d399" },
        ].map((c) => (
          <div
            key={c.label}
            className="flex-1 rounded-xl p-3 border"
            style={{
              border: `1px solid ${c.color}22`,
              background: `${c.color}0d`,
            }}
          >
            <p className="text-[9px] font-mono mb-1" style={{ color: `${c.color}90` }}>{c.label}</p>
            <p className="text-lg font-bold font-mono" style={{ color: c.color }}>{c.val}</p>
          </div>
        ))}
      </div>
      <p className="text-[9px] font-mono text-white/20 mt-3">50+ KPIs across 4 systems</p>
    </div>
  );
}

/* ── Root Bento ──────────────────────────────────────────────────── */
const Bento = () => {
  return (
    <section id="impact" className="py-24 px-6 bg-[#07080d]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-[10px] font-mono text-white/28 uppercase tracking-[0.2em] mb-3">Impact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Numbers that matter
          </h2>
          <p className="mt-3 text-sm text-white/35 font-mono max-w-md">
            Live metrics from 7+ years of production systems in healthcare and banking.
          </p>
        </motion.div>

        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "auto",
          }}
        >
          {/* Kafka — wide + tall */}
          <motion.div
            className="rounded-2xl border border-white/[0.06] overflow-hidden"
            style={{ gridColumn: "span 4", gridRow: "span 2", background: "rgba(255,255,255,0.022)", minHeight: 220 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <KafkaWidget />
          </motion.div>

          {/* K8s pods — wide + tall */}
          <motion.div
            className="rounded-2xl border border-white/[0.06] overflow-hidden"
            style={{ gridColumn: "span 4", gridRow: "span 2", background: "rgba(255,255,255,0.022)", minHeight: 220 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.07 }}
          >
            <K8sWidget />
          </motion.div>

          {/* P99 Latency */}
          <motion.div
            className="rounded-2xl border border-white/[0.06] overflow-hidden"
            style={{ gridColumn: "span 4", background: "rgba(255,255,255,0.022)", minHeight: 105 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
          >
            <LatencyWidget />
          </motion.div>

          {/* Deploy frequency */}
          <motion.div
            className="rounded-2xl border border-white/[0.06] overflow-hidden"
            style={{ gridColumn: "span 4", background: "rgba(255,255,255,0.022)", minHeight: 105 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DeployWidget />
          </motion.div>

          {/* Request volume */}
          <motion.div
            className="rounded-2xl border border-white/[0.06] overflow-hidden"
            style={{ gridColumn: "span 4", background: "rgba(255,255,255,0.022)", minHeight: 160 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.27 }}
          >
            <ReqVolumeWidget />
          </motion.div>

          {/* Support tickets sparkline */}
          <motion.div
            className="rounded-2xl border border-white/[0.06] overflow-hidden"
            style={{ gridColumn: "span 4", background: "rgba(255,255,255,0.022)", minHeight: 160 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.33 }}
          >
            <TicketsWidget />
          </motion.div>

          {/* Triage time */}
          <motion.div
            className="rounded-2xl border border-white/[0.06] overflow-hidden"
            style={{ gridColumn: "span 4", background: "rgba(255,255,255,0.022)", minHeight: 160 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.38 }}
          >
            <TriageWidget />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Bento;
