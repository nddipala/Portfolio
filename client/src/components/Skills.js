import React from "react";

const skills = [
  {
    name: "Java",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    level: 95,
  },
  {
    name: "Spring Boot",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    level: 90,
  },
  {
    name: "React",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: 90,
  },
  {
    name: "JavaScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: 88,
  },
  {
    name: "Node.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: 85,
  },
  {
    name: "MongoDB",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    level: 80,
  },
  {
    name: "Tailwind CSS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    level: 85,
  },
  {
    name: "AWS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    level: 75,
  },
];

const Skills = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-gray-800 dark:text-gray-200 text-3xl font-bold text-center mb-12">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="text-center group">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
              <div className="w-full h-2 bg-gray-300 rounded">
                <div
                  className="h-2 rounded bg-blue-600 transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
