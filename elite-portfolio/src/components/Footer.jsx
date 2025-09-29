const links = [
  { label: 'Resume', href: '/resume.pdf' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' }
]

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="mt-24 pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/80 bg-white/85 px-6 py-10 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 dark:shadow-glass">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Let&apos;s build</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">Ready when you are.</h3>
              <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-300">
                I partner with teams to design, build, and ship resilient products. If you&apos;re exploring new ideas or scaling an existing platform, I&apos;d love to chat.
              </p>
            </div>
            <a href="mailto:nagarjun.dudipala@gmail.com" className="btn btn-primary">
              Start a conversation
            </a>
          </div>
          <div className="mt-10 flex flex-col gap-4 border-t border-slate-200/70 pt-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <div>
              Copyright (c) {year} Nagarjun Dudipala. Built with React, Vite, and Tailwind.
            </div>
            <nav className="flex flex-wrap gap-4">
              {links.map((link) => (
                <a key={link.label} href={link.href} className="transition hover:text-slate-900 dark:hover:text-white">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
