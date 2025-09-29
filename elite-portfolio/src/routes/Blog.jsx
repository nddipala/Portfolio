import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import { posts } from '../lib/posts'

export default function Blog(){
  return (
    <main className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-24">
      <section className="pt-10 md:pt-16 lg:pt-20">
        <div className="surface-blur p-8 text-slate-600 dark:text-slate-300">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Writing log</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            A build log for resilient software and thoughtful product craft.
          </h1>
          <p className="mt-4 text-sm sm:text-base">
            Essays and notes on engineering leadership, architecture tradeoffs, AI assisted experiences, and the rituals that keep teams shipping. Expect plenty of diagrams, benchmarks, and grounded takeaways.
          </p>
        </div>
      </section>

      <section className="pt-16">
        <SectionHeader kicker="Articles" title="Browse the archive" subtitle="Long form breakdowns and field notes from recent projects." />
        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="card group flex flex-col gap-3 p-6 transition hover:border-teal-300/60 hover:shadow-xl hover:shadow-teal-500/10"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{post.date}</p>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-500">Read</span>
              </div>
              <h2 className="text-xl font-semibold text-slate-900 transition group-hover:text-teal-500 dark:text-white dark:group-hover:text-teal-300">
                {post.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
