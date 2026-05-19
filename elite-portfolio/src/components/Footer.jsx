import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'

const navLinks = [
  { label: 'Projects', href: '/projects', internal: true },
  { label: 'Writing', href: '/blog', internal: true },
  { label: 'Contact', href: '/contact', internal: true },
  { label: 'Resume', href: '/resume.pdf', internal: false },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/nddipala', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nagarjunreddydudipala183', icon: Linkedin },
  { label: 'Email', href: 'mailto:nagarjun.dudipala@gmail.com', icon: Mail },
]

export default function Footer(){
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 dark:shadow-glass">

          {/* CTA band */}
          <div className="border-b border-slate-200/70 px-8 py-10 dark:border-white/10 md:flex md:items-center md:justify-between">
            <div className="max-w-lg">
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-teal-500 dark:text-teal-400">Let&apos;s work together</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Have a project in mind?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                I partner with teams to design, build, and ship resilient products. Whether you&apos;re exploring a new idea or scaling an existing platform, I&apos;d love to talk.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 md:mt-0 md:flex-col md:items-end">
              <a
                href="mailto:nagarjun.dudipala@gmail.com"
                className="btn btn-primary"
              >
                <Mail size={14} />
                Start a conversation
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <FileText size={14} />
                Download resume
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col gap-5 px-8 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 via-cyan-400 to-indigo-500 text-[11px] font-bold text-slate-900">
                ND
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                &copy; {year} Nagarjun Dudipala
              </span>
            </div>

            <nav className="flex flex-wrap items-center gap-4">
              {navLinks.map((link) =>
                link.internal ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-sm text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    {link.label}
                  </a>
                )
              )}

              <div className="h-4 w-px bg-slate-200/80 dark:bg-white/10" />

              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-slate-400 transition hover:text-slate-700 dark:text-slate-500 dark:hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
