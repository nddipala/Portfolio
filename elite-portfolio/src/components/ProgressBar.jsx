import { useScroll, useSpring, motion } from 'framer-motion'

export default function ProgressBar(){
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.3 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-500"
    />
  )
}
