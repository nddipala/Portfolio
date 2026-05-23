import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Job Opportunity",
    desc: "Hiring for a Java / Full Stack role?",
    accent: "#a78bfa",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m1.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    label: "Project Idea",
    desc: "Have a project you'd like to discuss?",
    accent: "#22d3ee",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    label: "Just Connect",
    desc: "Want to network or say hello?",
    accent: "#34d399",
  },
];

const inputClass =
  "w-full px-4 py-3 rounded-xl text-sm text-white/80 font-mono placeholder-white/20 focus:outline-none transition-all duration-200";

const inputStyle = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
};

const inputFocusStyle = {
  borderColor: "rgba(167,139,250,0.5)",
  background: "rgba(255,255,255,0.06)",
};

const FocusInput = ({ as: Tag = "input", ...props }) => {
  const [focused, setFocused] = useState(false);
  return (
    <Tag
      {...props}
      className={inputClass}
      style={{ ...inputStyle, ...(focused ? inputFocusStyle : {}) }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
};

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_d9x1wzr", "template_tao1iao", form.current, "ccJEH5OcOGYtXPm7_")
      .then(
        () => { setDone(true); setLoading(false); form.current.reset(); },
        (error) => { console.error("EmailJS Error:", error.text); setLoading(false); }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-ink-000 pt-28 pb-20 px-6"
    >
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-brand-violet/6 blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-brand-cyan/6 blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Back */}
        <motion.a
          href="/"
          className="inline-flex items-center gap-2 text-[11px] font-mono text-white/30 hover:text-white/60 transition-colors mb-12 group"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <svg className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to portfolio
        </motion.a>

        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* Left: intro */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-4">
              Get In Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              Let's Work
              <br />
              <span className="italic font-serif bg-gradient-to-r from-brand-violet to-brand-cyan bg-clip-text text-transparent">
                Together.
              </span>
            </h1>
            <p className="text-sm text-white/38 font-mono leading-relaxed mb-10 max-w-sm">
              Whether it's a job opportunity, a project to discuss, or just a
              professional hello — fill in the details and I'll get back to you
              promptly.
            </p>

            {/* Reason cards */}
            <div className="space-y-2.5 mb-10">
              {reasons.map((r) => (
                <div
                  key={r.label}
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] transition-colors hover:border-white/[0.1]"
                  style={{ background: "rgba(255,255,255,0.025)" }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/[0.07]"
                    style={{ color: r.accent, background: `${r.accent}14` }}
                  >
                    {r.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/70">{r.label}</p>
                    <p className="text-[11px] font-mono text-white/28">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct links */}
            <div className="space-y-3">
              <a
                href="mailto:nddipala@memphis.edu"
                className="flex items-center gap-2.5 text-[11px] font-mono text-white/30 hover:text-brand-cyan transition-colors group"
              >
                <svg className="w-3.5 h-3.5 group-hover:text-brand-cyan transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                nddipala@memphis.edu
              </a>
              <a
                href="https://linkedin.com/in/nagarjunreddydudipala183"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-[11px] font-mono text-white/30 hover:text-brand-violet transition-colors group"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                linkedin.com/in/nagarjunreddydudipala183
              </a>
              <span className="flex items-center gap-2.5 text-[11px] font-mono text-white/25">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (901) 462-6649
              </span>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            {done ? (
              <div
                className="rounded-2xl border border-white/[0.07] p-12 text-center"
                style={{ background: "rgba(255,255,255,0.025)" }}
              >
                <div
                  className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-5 border border-brand-green/30"
                  style={{ background: "rgba(52,211,153,0.12)" }}
                >
                  <svg className="w-7 h-7 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-sm font-mono text-white/35 mb-6">
                  Thanks for reaching out. I'll get back to you shortly.
                </p>
                <button
                  onClick={() => setDone(false)}
                  className="text-[11px] font-mono text-brand-violet hover:text-brand-cyan transition-colors"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form
                ref={form}
                onSubmit={sendEmail}
                className="rounded-2xl border border-white/[0.07] p-8 space-y-5"
                style={{ background: "rgba(255,255,255,0.025)" }}
              >
                <div>
                  <label className="block text-[10px] font-mono text-white/30 uppercase tracking-[0.15em] mb-2">
                    Your Name
                  </label>
                  <FocusInput
                    type="text"
                    name="user_name"
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-white/30 uppercase tracking-[0.15em] mb-2">
                    Email Address
                  </label>
                  <FocusInput
                    type="email"
                    name="user_email"
                    placeholder="john@company.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-white/30 uppercase tracking-[0.15em] mb-2">
                    What's This About?
                  </label>
                  <FocusInput
                    as="select"
                    name="subject"
                  >
                    <option value="Job Opportunity" style={{ background: "#0e1117" }}>Job Opportunity</option>
                    <option value="Project Discussion" style={{ background: "#0e1117" }}>Project Discussion</option>
                    <option value="Networking" style={{ background: "#0e1117" }}>Just Connecting</option>
                    <option value="Other" style={{ background: "#0e1117" }}>Other</option>
                  </FocusInput>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-white/30 uppercase tracking-[0.15em] mb-2">
                    Message
                  </label>
                  <FocusInput
                    as="textarea"
                    name="message"
                    rows={5}
                    placeholder="Tell me about the role, project, or just say hi…"
                    required
                    style={{ ...inputStyle, resize: "none" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl text-white text-sm font-mono font-semibold flex items-center justify-center gap-2 transition-opacity disabled:opacity-40"
                  style={{ background: "linear-gradient(135deg, #a78bfa, #22d3ee)" }}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
