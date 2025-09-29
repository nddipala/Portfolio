import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { posts } from '../lib/posts'

export default function BlogPost(){
  const { slug } = useParams()
  const post = posts.find((item) => item.slug === slug)

  const contentNodes = useMemo(() => {
    if (!post) return []
    const lines = post.content.split('\n')
    const nodes = []
    let listBuffer = []

    const flushList = () => {
      if (!listBuffer.length) return
      nodes.push(
        <ul key={`list-${nodes.length}`} className="pl-5 text-sm text-slate-600 dark:text-slate-300">
          {listBuffer.map((item, itemIndex) => (
            <li key={`bullet-${nodes.length}-${itemIndex}`} className="list-disc">
              {item}
            </li>
          ))}
        </ul>
      )
      listBuffer = []
    }

    lines.forEach((line, index) => {
      const trimmed = line.trim()
      if (!trimmed){
        flushList()
        return
      }
      if (trimmed.startsWith('# ')){
        return
      }
      if (trimmed.startsWith('## ')){
        flushList()
        nodes.push(
          <h2 key={`h2-${index}`} className="text-xl font-semibold text-slate-900 dark:text-white">
            {trimmed.replace('## ', '')}
          </h2>
        )
        return
      }
      if (trimmed.startsWith('- ')){
        listBuffer.push(trimmed.replace('- ', ''))
        return
      }
      flushList()
      nodes.push(
        <p key={`p-${index}`} className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {trimmed}
        </p>
      )
    })

    flushList()
    return nodes
  }, [post])

  if (!post) {
    return (
      <main className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-24 pt-20">
        <p className="text-sm text-slate-600 dark:text-slate-300">Post not found.</p>
      </main>
    )
  }

  return (
    <main className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-24 pt-10 md:pt-16 lg:pt-20">
      <Link to="/blog" className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 transition hover:text-teal-500 dark:text-slate-400 dark:hover:text-teal-300">
        Back to writing
      </Link>
      <article className="mt-4 space-y-6">
        <header className="surface-blur p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{post.date}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{post.title}</h1>
        </header>
        <div className="space-y-4">
          {contentNodes.length ? contentNodes : (
            <p className="text-sm text-slate-600 dark:text-slate-300">
              This post is coming soon.
            </p>
          )}
        </div>
      </article>
    </main>
  )
}
