import React, { useState, useEffect } from "react";
<ul className="flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
  <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
  <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
  <li><a href="#blog" className="hover:text-blue-600">Blog</a></li>
  <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
  

</ul>

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed top-0 w-full z-50">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-blue-600 dark:text-white">
          Nagarjun
        </a>
        <ul className="flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
          <li><a href="/blog" className="hover:text-blue-600">Blog</a></li>

        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 text-lg hover:text-blue-600 transition text-gray-700 dark:text-gray-300"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
