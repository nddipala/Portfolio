import React from "react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="border-t border-white/[0.05] pt-16 pb-10 px-6"
      style={{ background: "#08090e" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 pb-10 mb-8 border-b border-white/[0.05]">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-violet to-brand-cyan flex items-center justify-center">
                <span className="text-white font-bold text-xs font-mono">N</span>
              </div>
              <span className="text-white/70 font-mono text-sm tracking-tight">
                nagarjun<span className="text-brand-violet">.</span>dev
              </span>
            </div>
            <p className="text-xs font-mono text-white/25 leading-relaxed">
              Sr. Full Stack Java Developer · Memphis, TN
              <br />
              Building high-availability systems since 2019.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://github.com/nddipala"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-white/30 hover:text-white/70 hover:border-white/[0.15] transition-all"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/nagarjunreddydudipala183"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-white/30 hover:text-white/70 hover:border-white/[0.15] transition-all"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:nddipala@memphis.edu"
                aria-label="Email"
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-white/30 hover:text-white/70 hover:border-white/[0.15] transition-all"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="flex gap-16">
            <div>
              <p className="text-[10px] font-mono text-white/25 uppercase tracking-[0.2em] mb-4">
                Navigate
              </p>
              <ul className="space-y-3">
                {[
                  { label: "About", href: "/#hero" },
                  { label: "Experience", href: "/#experience" },
                  { label: "Skills", href: "/#skills" },
                  { label: "Projects", href: "/#projects" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-xs font-mono text-white/30 hover:text-white/65 transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-mono text-white/25 uppercase tracking-[0.2em] mb-4">
                Contact
              </p>
              <ul className="space-y-3">
                <li>
                  <a href="/contact" className="text-xs font-mono text-white/30 hover:text-white/65 transition-colors">
                    Get in Touch
                  </a>
                </li>
                <li>
                  <a href="/resume.pdf" target="_blank" rel="noreferrer" className="text-xs font-mono text-white/30 hover:text-white/65 transition-colors">
                    Download Resume
                  </a>
                </li>
                <li>
                  <a href="mailto:nddipala@memphis.edu" className="text-xs font-mono text-white/30 hover:text-white/65 transition-colors">
                    nddipala@memphis.edu
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono text-white/20">
            © 2026 Nagarjun Reddy Dudipala. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-[10px] font-mono text-white/25 hover:text-white/55 transition-colors group"
            aria-label="Back to top"
          >
            Back to top
            <span className="w-5 h-5 flex items-center justify-center rounded-full border border-white/[0.08] group-hover:border-white/[0.18] transition-colors">
              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
