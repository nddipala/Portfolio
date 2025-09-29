export default function Marquee({ items = [] }){
  return (
    <div className="mt-8 overflow-hidden">
      <div className="flex gap-6 animate-marquee will-change-transform" style={{ width: '200%' }}>
        {[0,1].map(loop => (
          <div key={loop} className="flex gap-3 pr-6">
            {items.map((t, i) => (
              <span key={t + i + loop} className="tag">{t}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
