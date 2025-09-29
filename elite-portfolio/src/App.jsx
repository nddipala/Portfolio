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
      <div
        className="absolute inset-0 opacity-50 mix-blend-screen"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(14,165,233,0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(129,140,248,0.25), transparent 40%), radial-gradient(circle at 50% 80%, rgba(45,212,191,0.25), transparent 45%)'
        }}
      />
      <div className="absolute inset-0 bg-grid-slate opacity-40" />
      <div className="absolute top-[-30%] left-[18%] h-[360px] w-[360px] rounded-full bg-teal-400/35 blur-[170px]" />
      <div className="absolute bottom-[-25%] right-[12%] h-[420px] w-[420px] rounded-full bg-indigo-500/30 blur-[180px]" />
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
