import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../lib/projects'

export default function Projects(){
  return (
    <main className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-24">

      {/* page header */}
      <section className="pt-10 md:pt-16 lg:pt-20">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.45em] text-teal-500 dark:text-teal-400">
            The Work
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Projects &amp; case studies
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-500 dark:text-slate-400 sm:text-lg">
            Every project here reflects a real problem, a deliberate architecture decision, and lessons I carry into the next build. From AI-assisted coaching tools to serverless cost platforms — each one taught me something.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/nddipala"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              View GitHub profile <ArrowUpRight size={14} />
            </a>
            <Link to="/contact" className="btn btn-ghost">
              Discuss a project
            </Link>
          </div>
        </div>
      </section>

      {/* grid */}
      <section className="mt-16">
        <SectionHeader
          kicker="All projects"
          title="Selected builds"
          subtitle="End-to-end work that shows how I approach hard problems."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} {...project} idx={idx} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-14 rounded-3xl border border-slate-200/70 bg-white/80 px-8 py-8 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-teal-500 dark:text-teal-400">Want more?</p>
        <p className="mt-2 text-base font-medium text-slate-900 dark:text-white">
          Looking for something specific?
        </p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          I can share deeper cuts — code architecture, metrics, or a walkthrough of any build. Just reach out.
        </p>
        <Link to="/contact" className="btn btn-primary mt-5">
          Get in touch <ArrowUpRight size={14} />
        </Link>
      </div>
    </main>
  )
}
