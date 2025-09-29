import { motion } from 'framer-motion'

export default function ProjectCard({ title, tags, desc, link, highlight }){
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-glass ${highlight ? 'ring-2 ring-teal-300/40' : ''}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 via-cyan-400/20 to-indigo-500/20" />
      </div>
      <div className="relative flex flex-col gap-4">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
          <span>{highlight ? 'Featured' : 'Case study'}</span>
          <span>Live</span>
        </div>
        <h3 className="text-xl font-semibold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-teal-500 dark:text-white dark:group-hover:text-teal-300">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {desc}
        </p>
        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <span className="relative mt-6 inline-flex items-center text-sm font-semibold text-teal-600 transition group-hover:translate-x-1 group-hover:text-teal-500 dark:text-teal-300">
        Explore project &rarr;
      </span>
    </motion.a>
  )
}
