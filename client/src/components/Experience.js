import React from "react";

const Experience = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>

        {/* Research Assistant - GIS */}
        <div className="border-l-4 border-blue-600 pl-6 relative mb-10">
          <div className="absolute -left-3 top-2 w-4 h-4 bg-blue-600 rounded-full"></div>
          <h3 className="text-xl font-semibold">Research Assistant, CAESER</h3>
          <p className="text-sm text-gray-500">University of Memphis · Oct 2023 – Present</p>
          <ul className="mt-3 list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Engineered automated geospatial data pipelines using Python and SQL, enhancing data processing throughput by 85%.</li>
            <li>Developed ArcGIS-integrated dashboards and backend APIs to support urban planning and infrastructure monitoring.</li>
            <li>Architected PostgreSQL-backed systems for spatial simulations, achieving 99.9% data availability across departments.</li>
            <li>Enabled GIS-driven city planning initiatives by integrating large-scale spatial datasets into interactive web tools.</li>
            <li>Collaborated cross-functionally with civil, environmental, and software teams to align spatial intelligence with actionable infrastructure insights.</li>
          </ul>
        </div>

        {/* TCS UI Developer */}
        <div className="border-l-4 border-blue-600 pl-6 relative">
          <div className="absolute -left-3 top-2 w-4 h-4 bg-blue-600 rounded-full"></div>
          <h3 className="text-xl font-semibold">Software Developer</h3>
          <p className="text-sm text-gray-500">Tata Consultancy Services · Oct 2020 – Aug 2023</p>
          <ul className="mt-3 list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Led development of responsive and accessible UIs for high-volume financial platforms using React.js, JavaScript, and SASS.</li>
            <li>Integrated real-time APIs (REST & GraphQL) and improved dynamic content performance by 30% using AJAX optimization.</li>
            <li>Redesigned legacy codebase into modular, component-driven architecture, increasing maintainability by 45%.</li>
            <li>Implemented WCAG 2.1-compliant UI features and conducted accessibility testing using JAWS, TalkBack, and Lighthouse tools.</li>
            <li>Enhanced frontend-backend sync with microservices, ensuring 99.9% UI uptime and seamless data rendering under load.</li>
            <li>Worked directly with product and UX teams to design and deliver scalable, pixel-perfect web solutions for enterprise clients like Verizon.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
