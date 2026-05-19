export default function SectionHeader({ kicker, title, subtitle, accent }){
  return (
    <div className="mb-12 max-w-3xl">
      {kicker && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.45em] text-teal-500 dark:text-teal-400">
          {kicker}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {accent ? (
          <>
            {title.split(accent)[0]}
            <span className="text-gradient">{accent}</span>
            {title.split(accent)[1]}
          </>
        ) : title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-500 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  )
}
