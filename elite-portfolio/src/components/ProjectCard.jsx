import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function ProjectCard({ title, tags, desc, link, highlight, impact }, idx){
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (idx ?? 0) * 0.08 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white/80 p-7 shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:bg-slate-900/60 dark:shadow-glass ${
        highlight
          ? 'border-teal-300/50 ring-1 ring-teal-300/30 dark:border-teal-500/30 dark:ring-teal-500/20'
          : 'border-slate-200/70 dark:border-white/10'
      }`}
    >
      {/* hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 via-cyan-400/5 to-indigo-500/10" />
      </div>

      {/* top row */}
      <div className="relative mb-5 flex items-center justify-between">
        <span className={`text-[10px] font-bold uppercase tracking-[0.35em] ${highlight ? 'text-teal-500 dark:text-teal-300' : 'text-slate-400 dark:text-slate-500'}`}>
          {highlight ? '★ Featured' : 'Project'}
        </span>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-[11px] font-semibold text-slate-600 transition hover:border-teal-300/60 hover:text-teal-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-teal-300"
          onClick={e => e.stopPropagation()}
        >
          <Github size={11} />
          GitHub
        </a>
      </div>

      {/* title */}
      <h3 className="relative text-xl font-semibold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-300">
        {title}
      </h3>

      {/* description */}
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {desc}
      </p>

      {/* impact badge */}
      {impact && (
        <div className="relative mt-4 flex items-center gap-2 rounded-2xl border border-teal-200/60 bg-teal-50/60 px-3 py-2 text-xs font-medium text-teal-700 dark:border-teal-500/20 dark:bg-teal-500/10 dark:text-teal-300">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal-500" />
          {impact}
        </div>
      )}

      {/* tags */}
      <div className="relative mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200/70 bg-slate-50/80 px-3 py-1 text-[11px] font-semibold text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* footer link */}
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 transition-all group-hover:gap-3 dark:text-teal-300"
      >
        View project <ExternalLink size={13} />
      </a>
    </motion.div>
  )
}
