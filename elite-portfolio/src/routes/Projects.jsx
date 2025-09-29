import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../lib/projects'

export default function Projects(){
  return (
    <main className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-24">
      <section className="pt-10 md:pt-16 lg:pt-20">
        <div className="surface-blur p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">The work</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Shipping resilient products from proof of concept to production.
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            These projects span AI assisted workflows, platforms that scale to millions of requests, and design systems that keep teams aligned. Each story hides tradeoffs, experiments, and the lessons I now bring to new teams.
          </p>
        </div>
      </section>

      <section className="pt-16">
        <SectionHeader kicker="Projects" title="Every build teaches something" subtitle="Explore the projects that best show my approach to discovery, engineering, and iteration." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className="mt-10 rounded-3xl border border-slate-200/70 bg-white/80 p-6 text-sm text-slate-600 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-300">
          Looking for something specific? Let me know what you are planning and I can share deeper cuts, code samples, or metrics.
        </div>
      </section>
    </main>
  )
}
