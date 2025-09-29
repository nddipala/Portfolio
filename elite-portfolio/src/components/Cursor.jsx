import { useEffect } from 'react'

export default function Cursor(){
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot = document.createElement('div')
    const outline = document.createElement('div')
    dot.className = 'cursor-dot text-teal-500 dark:text-teal-300'
    outline.className = 'cursor-outline text-teal-500 dark:text-teal-300'
    document.body.append(dot, outline)

    const move = (e) => {
      const { clientX, clientY } = e
      dot.style.left = `${clientX}px`
      dot.style.top = `${clientY}px`
      outline.style.left = `${clientX}px`
      outline.style.top = `${clientY}px`
    }

    const onEnter = () => { outline.style.transform = 'translate(-50%,-50%) scale(1.45)' }
    const onLeave = () => { outline.style.transform = 'translate(-50%,-50%) scale(1)' }

    document.addEventListener('mousemove', move)
    const interactive = Array.from(document.querySelectorAll('a,button,.magnet,[data-cursor="interactive"]'))
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', move)
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
      dot.remove()
      outline.remove()
    }
  }, [])

  return null
}
