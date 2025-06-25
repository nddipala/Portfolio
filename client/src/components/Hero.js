import React from "react";
import ProfilePic from "../assets/profile.jpg";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 pt-24 md:pt-28 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* Text Section */}
      <div className="flex-1 md:pr-10 text-center md:text-left space-y-5">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Nagarjun Reddy Dudipala
        </h1>
        <p className="text-xl text-blue-600 dark:text-blue-400">
          Java Full Stack Developer | 5 Years of Experience
        </p>
        <p className="text-md text-gray-700 dark:text-gray-300 max-w-xl">
          I'm a Full Stack Java Developer with 5 years of experience — 3 years at TCS building enterprise-grade frontend applications and 2 years as a Research Assistant at CAESER driving data automation and geospatial platform development. I specialize in responsive UI design, API integration, and scalable backend services, with a strong foundation in Java, React, Spring Boot, and cloud-native tools.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md"
          >
            View Resume
          </a>
          <a
            href="#projects"
            className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition shadow-md"
          >
            View Projects
          </a>
        </div>

        {/* Contact Info */}
        <div className="mt-6 flex flex-wrap gap-6 text-gray-700 dark:text-gray-300 justify-center md:justify-start">
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>+1 (901) 462-6649</span>
          </div>
          <div className="flex items-center gap-2">
            <FaGithub />
            <a
              href="https://github.com/nddipala"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600"
            >
              github.com/nddipala
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaLinkedin />
            <a
              href="https://linkedin.com/in/nagarjunreddydudipala183"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Rectangular Image */}
      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <img
          src={ProfilePic}
          alt="Nagarjun Reddy Dudipala"
          className="w-[320px] h-[400px] object-cover rounded-2xl shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
