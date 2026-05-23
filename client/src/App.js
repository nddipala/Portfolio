import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const total = scrollHeight - clientHeight;
      setProgress(total > 0 ? (scrollTop / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "2px",
        width: `${progress}%`,
        background: "linear-gradient(90deg, #a78bfa, #22d3ee)",
        zIndex: 9998,
        transition: "width 80ms linear",
        pointerEvents: "none",
      }}
    />
  );
}

function App() {
  return (
    <Router>
      <ScrollProgress />
      <Header />
      <Chatbot />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Experience />
              <Skills />
              <Projects />
              <Footer />
            </>
          }
        />
        <Route path="/home" element={<Hero />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
