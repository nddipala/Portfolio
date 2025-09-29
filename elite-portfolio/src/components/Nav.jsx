import { useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Sun, Moon, Github, Linkedin, Menu, X } from 'lucide-react'

const itemClass = 'relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-slate-900/10 hover:text-slate-900 dark:hover:bg-white/10 dark:hover:text-white'

export default function Nav({ dark, setDark }){
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const items = useMemo(() => [
    { to: '/#experience', label: 'Experience', hash: true },
    { to: '/projects', label: 'Projects' },
    { to: '/#about', label: 'About', hash: true },
    { to: '/blog', label: 'Writing' },
  ], [])

  const scrollToId = (hash) => {
    const id = hash.replace('#', '')
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleHashNav = (to) => {
    if (!to.includes('#')) return
    if (pathname !== '/') {
      navigate(to)
      window.setTimeout(() => scrollToId(to.split('#')[1]), 160)
    } else {
      scrollToId(to.split('#')[1])
    }
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 flex items-center justify-between rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-white/15 dark:bg-white/10">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 via-cyan-400 to-indigo-500 text-xs font-bold uppercase tracking-tight text-slate-900 shadow-lg">ND</span>
            <span className="hidden text-sm font-semibold tracking-tight sm:inline">Nagarjun Dudipala</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {items.map((item) => (
              item.hash ? (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleHashNav(item.to)}
                  className={`${itemClass} text-slate-600 dark:text-slate-300`}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`${itemClass} ${pathname === item.to ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
            <Link to="/contact" className="btn btn-outline ml-2" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <button
              type="button"
              aria-label="Toggle theme"
              className="btn btn-ghost ml-2 h-11 w-11 rounded-full"
              onClick={() => setDark((prev) => !prev)}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="https://github.com/nddipala"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost ml-1 h-11 w-11 rounded-full"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/nagarjunreddydudipala183"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost ml-1 h-11 w-11 rounded-full"
            >
              <Linkedin size={18} />
            </a>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              aria-label="Toggle theme"
              className="btn btn-ghost h-11 w-11 rounded-full"
              onClick={() => setDark((prev) => !prev)}
            >
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              type="button"
              aria-label="Toggle menu"
              className="btn btn-outline h-11 w-11 rounded-full"
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-3 rounded-3xl border border-slate-200/80 bg-white/90 p-4 shadow-lg shadow-slate-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60">
            <div className="flex flex-col gap-2">
              {items.map((item) => (
                item.hash ? (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleHashNav(item.to)}
                    className="rounded-2xl px-4 py-3 text-left text-base font-semibold text-slate-600 transition hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-white/10"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-600 transition hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <Link
                to="/contact"
                className="btn btn-primary w-full justify-center"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
              <div className="flex items-center justify-center gap-3 pt-3">
                <a href="https://github.com/nddipala" target="_blank" rel="noreferrer" className="btn btn-ghost h-11 w-11">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/nagarjunreddydudipala183" target="_blank" rel="noreferrer" className="btn btn-ghost h-11 w-11">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
