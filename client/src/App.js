import React from "react";
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

function App() {
  return (
    <Router>
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
