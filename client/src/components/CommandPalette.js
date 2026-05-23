import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allCommands = [
  {
    group: "Navigate",
    items: [
      { label: "About", sub: "Jump to hero section", type: "scroll", target: "hero" },
      { label: "Experience", sub: "Professional work history", type: "scroll", target: "experience" },
      { label: "Skills", sub: "Full technical stack", type: "scroll", target: "skills" },
      { label: "Projects", sub: "Selected projects", type: "scroll", target: "projects" },
      { label: "Contact", sub: "Get in touch", type: "route", target: "/contact" },
    ],
  },
  {
    group: "Actions",
    items: [
      { label: "Download Resume", sub: "/resume.pdf", type: "external", target: "/resume.pdf", blank: true },
      { label: "Send Email", sub: "nddipala@memphis.edu", type: "external", target: "mailto:nddipala@memphis.edu" },
    ],
  },
  {
    group: "Links",
    items: [
      { label: "GitHub", sub: "github.com/nddipala", type: "external", target: "https://github.com/nddipala", blank: true },
      { label: "LinkedIn", sub: "Nagarjun Reddy Dudipala", type: "external", target: "https://linkedin.com/in/nagarjunreddydudipala183", blank: true },
    ],
  },
];

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const handleOpen = () => setOpen((o) => !o);
    window.addEventListener("keydown", handleKey);
    window.addEventListener("open-command-palette", handleOpen);
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("open-command-palette", handleOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setSelectedIdx(0);
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [open]);

  useEffect(() => {
    setSelectedIdx(0);
  }, [query]);

  const flatItems = allCommands.flatMap((g) => g.items);

  const filtered = query.trim()
    ? flatItems.filter(
        (item) =>
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          item.sub.toLowerCase().includes(query.toLowerCase())
      )
    : flatItems;

  const displayGroups = query.trim()
    ? [{ group: "Results", items: filtered }]
    : allCommands;

  const runCommand = (item) => {
    setOpen(false);
    if (item.type === "scroll") {
      const el = document.getElementById(item.target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = `/#${item.target}`;
      }
    } else if (item.type === "route") {
      window.location.href = item.target;
    } else {
      if (item.blank) window.open(item.target, "_blank", "noopener,noreferrer");
      else window.location.href = item.target;
    }
  };

  const handleNavKey = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIdx((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      if (filtered[selectedIdx]) runCommand(filtered[selectedIdx]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[9000]"
            style={{ background: "rgba(0,0,0,0.72)", backdropFilter: "blur(10px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <motion.div
            className="fixed top-[18%] left-1/2 z-[9001] w-full max-w-[540px] -translate-x-1/2 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(10,12,17,0.98)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(167,139,250,0.08)",
            }}
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top gradient strip */}
            <div className="h-[1px] bg-gradient-to-r from-brand-violet via-brand-cyan to-brand-violet" />

            {/* Search row */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.06]">
              <svg className="w-4 h-4 text-white/25 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleNavKey}
                placeholder="Search commands…"
                className="flex-1 bg-transparent text-white/85 placeholder-white/20 text-sm font-mono focus:outline-none"
              />
              <kbd className="text-[10px] font-mono text-white/20 border border-white/[0.1] px-1.5 py-0.5 rounded flex-shrink-0">
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-72 overflow-y-auto py-2">
              {filtered.length === 0 ? (
                <p className="px-4 py-10 text-center text-xs font-mono text-white/20">
                  No results for "{query}"
                </p>
              ) : (
                (() => {
                  let gIdx = 0;
                  return displayGroups.map((group) => {
                    const groupItems = query.trim()
                      ? group.items
                      : group.items;
                    if (groupItems.length === 0) return null;
                    return (
                      <div key={group.group}>
                        <p className="px-4 pt-3 pb-1 text-[10px] font-mono text-white/22 uppercase tracking-[0.18em]">
                          {group.group}
                        </p>
                        {groupItems.map((item) => {
                          const idx = gIdx++;
                          const isSelected = idx === selectedIdx;
                          return (
                            <button
                              key={item.label}
                              className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all duration-100 outline-none"
                              style={{
                                background: isSelected ? "rgba(167,139,250,0.1)" : "transparent",
                                borderLeft: isSelected ? "2px solid rgba(167,139,250,0.6)" : "2px solid transparent",
                              }}
                              onClick={() => runCommand(item)}
                              onMouseEnter={() => setSelectedIdx(idx)}
                            >
                              <div
                                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-[12px] transition-colors"
                                style={{
                                  background: isSelected ? "rgba(167,139,250,0.2)" : "rgba(255,255,255,0.04)",
                                  color: isSelected ? "#a78bfa" : "rgba(255,255,255,0.25)",
                                  border: "1px solid rgba(255,255,255,0.07)",
                                }}
                              >
                                {item.type === "external" && item.blank ? "↗" : "→"}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p
                                  className="text-sm font-medium transition-colors"
                                  style={{ color: isSelected ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.55)" }}
                                >
                                  {item.label}
                                </p>
                                <p className="text-[11px] font-mono text-white/25 truncate">{item.sub}</p>
                              </div>
                              {isSelected && (
                                <kbd className="text-[10px] font-mono text-white/22 border border-white/[0.1] px-1.5 py-0.5 rounded flex-shrink-0">
                                  ↵
                                </kbd>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    );
                  });
                })()
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 border-t border-white/[0.05] flex items-center gap-5 text-[10px] font-mono text-white/18">
              <span>
                <kbd className="border border-white/[0.1] px-1 py-0.5 rounded mr-1">↑↓</kbd>
                navigate
              </span>
              <span>
                <kbd className="border border-white/[0.1] px-1 py-0.5 rounded mr-1">↵</kbd>
                select
              </span>
              <span>
                <kbd className="border border-white/[0.1] px-1 py-0.5 rounded mr-1">esc</kbd>
                close
              </span>
              <span className="ml-auto text-white/15">⌘K</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
