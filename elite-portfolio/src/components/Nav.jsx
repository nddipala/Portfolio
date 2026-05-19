import { useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Sun, Moon, Github, Linkedin, Menu, X } from 'lucide-react'

export default function Nav({ dark, setDark }){
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const items = useMemo(() => [
    { to: '/#experience', label: 'Experience', hash: true },
    { to: '/#skills', label: 'Skills', hash: true },
    { to: '/projects', label: 'Projects' },
    { to: '/#about', label: 'About', hash: true },
    { to: '/blog', label: 'Writing' },
  ], [])

  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleHashNav = (to) => {
    if (!to.includes('#')) return
    const hash = to.split('#')[1]
    if (pathname !== '/') {
      navigate(to)
      window.setTimeout(() => scrollToId(hash), 160)
    } else {
      scrollToId(hash)
    }
    setOpen(false)
  }

  const linkClass = (to) => {
    const active = pathname === to
    return `relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
      active
        ? 'text-slate-900 dark:text-white'
        : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
    }`
  }

  const hashClass = 'relative rounded-full px-4 py-2 text-sm font-medium text-slate-500 transition-all duration-200 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-full border border-slate-200/80 bg-white/85 px-4 py-2 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
          <Link to="/" className="flex items-center gap-3 flex-shrink-0" onClick={() => setOpen(false)}>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 via-cyan-400 to-indigo-500 text-xs font-bold tracking-tight text-slate-900 shadow-md">
              ND
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-slate-900 dark:text-white sm:inline">
              Nagarjun Dudipala
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {items.map((item) =>
              item.hash ? (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleHashNav(item.to)}
                  className={hashClass}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  className={linkClass(item.to)}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                  {pathname === item.to && (
                    <span className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-teal-500" />
                  )}
                </Link>
              )
            )}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 md:flex">
            <a
              href="https://github.com/nddipala"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="btn btn-ghost h-9 w-9 rounded-full p-0"
            >
              <Github size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/nagarjunreddydudipala183"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="btn btn-ghost h-9 w-9 rounded-full p-0"
            >
              <Linkedin size={17} />
            </a>
            <button
              type="button"
              aria-label="Toggle theme"
              className="btn btn-ghost h-9 w-9 rounded-full p-0"
              onClick={() => setDark((prev) => !prev)}
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <Link to="/contact" className="btn btn-primary ml-1 px-4 py-2 text-xs" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              aria-label="Toggle theme"
              className="btn btn-ghost h-9 w-9 rounded-full p-0"
              onClick={() => setDark((prev) => !prev)}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              aria-label="Toggle menu"
              className="btn btn-outline h-9 w-9 rounded-full p-0"
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="mt-2 rounded-3xl border border-slate-200/80 bg-white/95 p-4 shadow-xl shadow-slate-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80">
            <div className="flex flex-col gap-1">
              {items.map((item) =>
                item.hash ? (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleHashNav(item.to)}
                    className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-100/70 dark:text-slate-200 dark:hover:bg-white/10"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100/70 dark:text-slate-200 dark:hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                to="/contact"
                className="btn btn-primary mt-2 w-full justify-center"
                onClick={() => setOpen(false)}
              >
                Get in touch
              </Link>
              <div className="mt-2 flex items-center justify-center gap-3 border-t border-slate-200/60 pt-3 dark:border-white/10">
                <a href="https://github.com/nddipala" target="_blank" rel="noreferrer" className="btn btn-ghost h-9 w-9 rounded-full p-0">
                  <Github size={17} />
                </a>
                <a href="https://www.linkedin.com/in/nagarjunreddydudipala183" target="_blank" rel="noreferrer" className="btn btn-ghost h-9 w-9 rounded-full p-0">
                  <Linkedin size={17} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
