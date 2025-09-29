import { useRef } from 'react'

export default function MagneticButton({ className='', children, ...props }){
  const ref = useRef(null)
  const enter = e => {
    const el = ref.current; if(!el) return
    const rect = el.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width/2)
    const dy = e.clientY - (rect.top + rect.height/2)
    el.style.transform = `translate(${dx*0.15}px, ${dy*0.15}px)`
  }
  const leave = () => { if(ref.current) ref.current.style.transform = 'translate(0,0)' }
  return (
    <button
      ref={ref}
      onMouseMove={enter}
      onMouseLeave={leave}
      className={`btn magnet ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
