import { useState } from 'react'

export default function Contact(){
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('')

  const isEmpty = (key) => !values[key]?.trim()

  const onSubmit = (event) => {
    event.preventDefault()
    const invalid = ['name', 'email', 'message'].filter(isEmpty)
    if (invalid.length) {
      setTouched({ name: true, email: true, message: true })
      setStatus('Please fill every required field before sending.')
      return
    }
    setStatus('Thanks for reaching out. I will respond soon.')
    setValues({ name: '', email: '', message: '' })
    setTouched({})
  }

  return (
    <main className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-24 pt-10 md:pt-16 lg:pt-20">
      <section className="surface-blur p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Let&apos;s talk</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Tell me about the problem you are solving.
        </h1>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 sm:text-base">
          Share a few sentences about your team, timeline, and what success looks like. I read every message and reply within two business days.
        </p>
      </section>

      <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <form onSubmit={onSubmit} className="card flex flex-col gap-5 p-6">
          <Field
            label="Name"
            value={values.name}
            onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
            onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
            placeholder="Your full name"
            error={touched.name && isEmpty('name')}
          />
          <Field
            label="Email"
            type="email"
            value={values.email}
            onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            placeholder="you@example.com"
            error={touched.email && isEmpty('email')}
          />
          <Field
            label="Message"
            as="textarea"
            rows={6}
            value={values.message}
            onChange={(event) => setValues((prev) => ({ ...prev, message: event.target.value }))}
            onBlur={() => setTouched((prev) => ({ ...prev, message: true }))}
            placeholder="Describe your project, challenge, or idea..."
            error={touched.message && isEmpty('message')}
          />
          {status && <p className="text-xs text-teal-600 dark:text-teal-300">{status}</p>}
          <div className="flex flex-wrap items-center gap-3">
            <button type="submit" className="btn btn-primary">Send message</button>
            <span className="text-xs text-slate-500 dark:text-slate-400">No automation here. Your note goes straight to my inbox.</span>
          </div>
        </form>
        <aside className="card flex flex-col gap-4 p-6 text-sm text-slate-600 dark:text-slate-300">
          <h2 className="text-base font-semibold text-slate-900 dark:text-white">Prefer direct?</h2>
          <a href="mailto:nagarjun.dudipala@gmail.com" className="text-teal-600 transition hover:text-teal-500 dark:text-teal-300">nagarjun.dudipala@gmail.com</a>
          <div className="space-y-3 text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            <p>LinkedIn</p>
            <a href="https://www.linkedin.com/in/nagarjunreddydudipala183" target="_blank" rel="noreferrer" className="normal-case text-slate-600 transition hover:text-teal-500 dark:text-slate-300 dark:hover:text-teal-300">linkedin.com/in/nagarjunreddydudipala183</a>
          </div>
          <div className="space-y-3 text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            <p>GitHub</p>
            <a href="https://github.com/nddipala" target="_blank" rel="noreferrer" className="normal-case text-slate-600 transition hover:text-teal-500 dark:text-slate-300 dark:hover:text-teal-300">github.com/nddipala</a>
          </div>
        </aside>
      </section>
    </main>
  )
}

function Field({ label, as = 'input', error, className = '', ...props }){
  const Element = as
  return (
    <label className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
      <span className="font-semibold text-slate-900 dark:text-white">{label}</span>
      <Element
        className={`rounded-2xl border bg-white/80 px-4 py-3 text-sm text-slate-900 shadow-inner shadow-slate-900/5 transition focus:ring-2 focus:ring-teal-400 focus:outline-none dark:border-white/15 dark:bg-white/10 dark:text-white ${error ? 'border-red-500/70 focus:ring-red-400' : ''} ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500">Required field</span>}
    </label>
  )
}
