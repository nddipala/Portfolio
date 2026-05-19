import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          © 2026 Nagarjun Reddy Dudipala. All rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/nddipala"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/nagarjunreddydudipala183"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
