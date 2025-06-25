import React from "react";
import Hero from "./components/Hero";

import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Header from "./components/Header";
import Contact  from "./components/Contact";
function App() {
  return (
    <div className="font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <Header />
      
      <Hero />
    
      <Experience />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
