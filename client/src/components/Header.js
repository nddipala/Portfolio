import React, { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "/#hero", id: "hero" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Projects", href: "/#projects", id: "projects" },
];

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", "experience", "skills", "projects"];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">N</span>
          agarjun
          <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">.</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`relative px-3 py-2 rounded-lg transition-colors duration-200 ${
                  activeSection === link.id
                    ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 000 14A7 7 0 0012 5z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          {/* Hire Me — desktop only */}
          <a
            href="/contact"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition shadow-sm shadow-indigo-200 dark:shadow-indigo-900"
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block h-0.5 w-5 bg-slate-700 dark:bg-slate-300 transition-all origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-5 bg-slate-700 dark:bg-slate-300 transition-all ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-slate-700 dark:bg-slate-300 transition-all origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`flex items-center px-3 py-2.5 rounded-lg transition-colors ${
                  activeSection === link.id
                    ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 font-semibold"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-800">
            <a
              href="/contact"
              className="flex items-center justify-center px-3 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition"
              onClick={() => setMenuOpen(false)}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
