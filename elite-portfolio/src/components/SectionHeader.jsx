export default function SectionHeader({ kicker, title, subtitle }){
  return (
    <div className="mb-10 max-w-3xl">
      {kicker && (
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-teal-500 dark:text-teal-300">
          {kicker}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  )
}
