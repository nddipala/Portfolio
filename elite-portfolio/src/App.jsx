import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './routes/Home'
import Projects from './routes/Projects'
import Blog from './routes/Blog'
import BlogPost from './routes/BlogPost'
import Contact from './routes/Contact'
import Cursor from './components/Cursor'

function Background(){
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* subtle dot grid */}
      <div className="absolute inset-0 bg-grid-slate opacity-[0.35]" />
      {/* radial colour wash */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 15% 25%, rgba(14,165,233,0.3), transparent 50%), radial-gradient(ellipse at 85% 5%, rgba(129,140,248,0.3), transparent 45%), radial-gradient(ellipse at 50% 85%, rgba(45,212,191,0.2), transparent 50%)'
        }}
      />
      {/* large glow orbs */}
      <div className="absolute top-[-20%] left-[10%] h-[500px] w-[500px] rounded-full bg-teal-400/20 blur-[200px]" />
      <div className="absolute bottom-[-15%] right-[5%] h-[550px] w-[550px] rounded-full bg-indigo-500/20 blur-[220px]" />
      <div className="absolute top-[40%] right-[30%] h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[160px]" />
    </div>
  )
}

export default function App(){
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [dark])

  const themeClass = dark ? 'bg-[#050816] text-slate-100' : 'bg-slate-50 text-slate-900'

  return (
    <div className={'relative min-h-screen overflow-x-hidden ' + themeClass + ' selection:bg-teal-300/40'}>
      <Background />
      <Cursor />
      <Nav dark={dark} setDark={setDark} />
      <div className="relative z-10 pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}
