import React from "react";

const projects = [
  {
    title: "Excel File Analyzer",
    description:
      "A cloud-based data visualization tool that lets users upload Excel files, generate charts, and share them using AWS services.",
    tech: ["AWS EC2", "Lambda", "S3", "SNS", "Node.js"],
    github: "https://github.com/nddipala/excel-analyzer",
    demo: "#",
  },
  {
    title: "Nomads Haven – Caravan Sales Web App",
    description:
      "A full-stack Ruby on Rails application for users to browse, filter, and purchase caravans with backend logic and RESTful APIs.",
    tech: ["Ruby on Rails", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/nddipala/nomads-haven",
    demo: "#",
  },
  {
    title: "Multithreaded Java Data Viz Tool",
    description:
      "JavaFX-based desktop app for data visualization with multithreaded processing and JDBC integration for large datasets.",
    tech: ["Java", "JavaFX", "JDBC", "MySQL"],
    github: "https://github.com/nddipala/java-data-visualizer",
    demo: "#",
  },
  {
    title: "ArcGIS Spatial Analysis",
    description:
      "A GIS-powered platform for analyzing land-use patterns in Memphis with ArcPy automation and interactive map visualization.",
    tech: ["Python", "ArcGIS Pro", "ArcPy", "Power BI"],
    github: "https://github.com/nddipala/gis-urban-analysis",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-gray-800 dark:text-gray-200 text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-600">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-sm bg-blue-100 text-blue-700 rounded-full dark:bg-blue-800 dark:text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                >
                  GitHub
                </a>
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 border border-gray-800 dark:border-white text-gray-800 dark:text-white rounded hover:bg-gray-800 hover:text-white transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
