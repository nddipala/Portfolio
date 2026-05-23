import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "/#hero", id: "hero" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Contact", href: "/contact", id: "contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/home";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;
    const ids = ["hero", "experience", "skills", "projects"];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [isHome]);

  const isLinkActive = (link) => {
    if (link.id === "contact") return location.pathname === "/contact";
    return isHome && active === link.id;
  };

  const openCommandPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(6,7,11,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand mark */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-violet to-brand-cyan flex items-center justify-center shadow-lg shadow-brand-violet/20 flex-shrink-0">
            <span className="text-white font-bold text-sm font-mono">N</span>
          </div>
          <span className="text-white/80 font-mono text-sm tracking-tight group-hover:text-white transition-colors">
            nagarjun<span className="text-brand-violet">.</span>dev
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link);
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-4 py-2 text-[11px] font-mono tracking-[0.12em] uppercase transition-colors duration-200 rounded-lg ${
                  isActive ? "text-white" : "text-white/35 hover:text-white/70"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-white/[0.07] border border-white/[0.1]"
                    transition={{ type: "spring", bounce: 0.18, duration: 0.45 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right: ⌘K + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={openCommandPalette}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.08] text-white/28 text-[10px] font-mono hover:border-white/[0.16] hover:text-white/50 transition-all duration-200 cursor-pointer select-none"
            aria-label="Open command palette"
          >
            <span className="text-white/40">⌘K</span>
            <span>search</span>
          </button>
          <a
            href="/contact"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-brand-violet to-brand-cyan text-white text-[11px] font-mono font-medium tracking-[0.1em] uppercase hover:opacity-90 transition-opacity shadow-lg shadow-brand-violet/20"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`w-4 h-px bg-white/70 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`w-4 h-px bg-white/70 transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`w-4 h-px bg-white/70 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/[0.06] px-5 py-4 flex flex-col gap-1"
            style={{ background: "rgba(6,7,11,0.97)", backdropFilter: "blur(20px)" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 px-4 rounded-lg text-[11px] font-mono tracking-[0.12em] uppercase transition-colors ${
                  isLinkActive(link)
                    ? "text-white bg-white/[0.07] border border-white/[0.1]"
                    : "text-white/40 hover:text-white/70 hover:bg-white/[0.04]"
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setMenuOpen(false); openCommandPalette(); }}
              className="mt-1 py-3 px-4 rounded-lg text-[11px] font-mono text-white/30 border border-white/[0.06] hover:border-white/[0.12] transition-colors text-left"
            >
              ⌘K Search commands
            </button>
            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 py-3 text-center rounded-lg bg-gradient-to-r from-brand-violet to-brand-cyan text-white text-[11px] font-mono font-medium tracking-[0.1em] uppercase"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
