import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const jobs = [
  {
    company: "Aetna, a CVS Health Company",
    location: "Hartford County, CT · Remote",
    role: "Sr. Full Stack Java Developer",
    type: "Contract",
    period: "Jul 2025 – Present",
    color: "indigo",
    bullets: [
      "Developed Spring Boot microservices secured with Spring Security and JWT for real-time healthcare insurance enrollment, improving API response time by 75% and supporting 1M+ requests across member and policy workflows.",
      "Architected Kafka/Confluent event streams between microservices and mainframe backends, handling 5M+ eligibility and claims events per day with 99.99% availability and near-zero message loss.",
      "Implemented IBM MQ–based messaging for legacy integration paths, ensuring reliable, transactional delivery of policy and billing updates to mainframe systems.",
      "Built React-based operational dashboards for tracking insurance transactions, enrollment status, and error trends in real time — reducing support tickets by 25%.",
      "Integrated enterprise SSO via Ping Identity and OAuth2/OIDC flows across internal portals, improving user adoption and security compliance.",
      "Secured external APIs via Apigee and F5/Akamai edge policies (WAF, rate limiting, IP allowlists), cutting abusive traffic and improving external partner reliability.",
      "Created Grafana and Splunk observability views for 50+ KPIs, cutting incident triage time by 30% and improving visibility into cross-service dependencies via Kiali.",
      "Implemented CI/CD with GitHub Actions, JFrog, and Argo CD on Dockerized services running in GKE, increasing deployment frequency from monthly to several times per week without SLA violations.",
    ],
    tags: ["Spring Boot", "Kafka", "React", "GKE", "Apigee", "Grafana", "Splunk", "JWT", "IBM MQ"],
  },
  {
    company: "University of Memphis",
    location: "Memphis, TN",
    role: "Frontend Developer / Research Assistant",
    type: "Academic",
    period: "Sep 2023 – May 2024",
    color: "violet",
    bullets: [
      "Built React SPAs consuming ArcGIS and REST APIs, cutting the time to stand up new map-based analytics views from days to under 2 hours.",
      "Automated Python/SQL ETL pipelines into PostgreSQL/PostGIS, boosting data-processing throughput by 85% and eliminating manual update cycles.",
      "Reduced dashboard load and query times by 20% via spatial indexing, query tuning, and API payload optimization.",
      "Standardized reusable UI components in Confluence, cutting new-assistant onboarding time by 40%.",
    ],
    tags: ["React", "ArcGIS", "Python", "PostgreSQL", "PostGIS", "SQL"],
  },
  {
    company: "Citi Bank",
    location: "Hyderabad, Telangana, India · Hybrid",
    role: "Full Stack Developer",
    type: "Contract",
    period: "Aug 2021 – Aug 2023",
    color: "blue",
    bullets: [
      "Built Java 8/Spring Boot microservices for core digital banking features — account management, funds transfer, and statements — serving hundreds of thousands of daily users.",
      "Improved SQL Server query performance by 20% through Hibernate/JPA tuning and targeted indexing on high-volume transaction tables.",
      "Reduced UAT regression defects by 30% release-over-release by building CI pipelines with Jenkins, Maven, TestNG, and Selenium.",
      "Cut MongoDB audit-data retrieval times by 15% and lifted key components to Azure (Functions, Blob, App Service), improving elasticity during peak traffic.",
    ],
    tags: ["Java 8", "Spring Boot", "Angular", "React", "Azure", "MongoDB", "Jenkins", "Selenium"],
  },
  {
    company: "Elevance Health",
    location: "Hyderabad, Telangana, India · On-site",
    role: "Full Stack Developer",
    type: "Contract",
    period: "May 2019 – Aug 2021",
    color: "sky",
    bullets: [
      "Designed Java/Spring REST APIs for the Elevance Health platform, contributing to a 15% improvement in user satisfaction scores across clinical and member workflows.",
      "Reduced unplanned downtime by 10% by instrumenting Grafana dashboards and implementing proactive performance alerts on key services.",
      "Automated builds and deployments with Maven, Ansible, and Tomcat, shrinking release windows and eliminating manual deployment errors across all environments.",
    ],
    tags: ["Java", "Spring MVC", "REST APIs", "MySQL", "Maven", "Ansible", "Grafana", "HTML5"],
  },
];

const colorMap = {
  indigo: {
    strip: "bg-indigo-500",
    dot: "bg-indigo-500",
    border: "border-indigo-200 dark:border-indigo-800",
    badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
    tag: "bg-indigo-50 text-indigo-600 border-indigo-200 dark:bg-indigo-900/20 dark:text-indigo-300 dark:border-indigo-800",
    bullet: "bg-indigo-500",
  },
  violet: {
    strip: "bg-violet-500",
    dot: "bg-violet-500",
    border: "border-violet-200 dark:border-violet-800",
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    tag: "bg-violet-50 text-violet-600 border-violet-200 dark:bg-violet-900/20 dark:text-violet-300 dark:border-violet-800",
    bullet: "bg-violet-500",
  },
  blue: {
    strip: "bg-blue-500",
    dot: "bg-blue-500",
    border: "border-blue-200 dark:border-blue-800",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    tag: "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800",
    bullet: "bg-blue-500",
  },
  sky: {
    strip: "bg-sky-500",
    dot: "bg-sky-500",
    border: "border-sky-200 dark:border-sky-800",
    badge: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300",
    tag: "bg-sky-50 text-sky-600 border-sky-200 dark:bg-sky-900/20 dark:text-sky-300 dark:border-sky-800",
    bullet: "bg-sky-500",
  },
};

const Experience = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-950 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">
            Career
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-sm mx-auto text-sm leading-relaxed">
            7+ years across healthcare, banking, and research — building systems that scale.
          </p>
        </motion.div>

        <div className="relative">
          {/* Gradient timeline line */}
          <div className="absolute left-5 top-4 bottom-4 w-px bg-gradient-to-b from-indigo-400 via-slate-300 to-transparent dark:from-indigo-700 dark:via-slate-700 hidden md:block" />

          <div className="space-y-4">
            {jobs.map((job, index) => {
              const c = colorMap[job.color];
              const isOpen = expanded === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative md:pl-16"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-3 top-6 w-4 h-4 rounded-full ${c.dot} ring-4 ring-white dark:ring-slate-950 shadow hidden md:flex items-center justify-center z-10`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  <div
                    className={`bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-shadow duration-300 ${
                      isOpen ? "shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50" : "shadow-sm hover:shadow-md"
                    }`}
                  >
                    {/* Color strip — always visible */}
                    <div className={`h-1 w-full ${c.strip}`} />

                    {/* Clickable header */}
                    <button
                      className="w-full text-left p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-inset"
                      onClick={() => setExpanded(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div className="space-y-1 flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-base font-bold text-slate-900 dark:text-white">
                              {job.role}
                            </h3>
                            <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${c.badge}`}>
                              {job.type}
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                            {job.company}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-500 flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {job.location}
                          </p>
                        </div>
                        <div className="flex items-center gap-2.5 flex-shrink-0">
                          <span className={`text-xs font-semibold px-3 py-1 rounded-lg ${c.badge}`}>
                            {job.period}
                          </span>
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-xs px-2.5 py-0.5 rounded-md border font-medium ${c.tag}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </button>

                    {/* Expandable bullets — AnimatePresence fixes the height animation */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          style={{ overflow: "hidden" }}
                        >
                          <div className={`px-6 pb-6 pt-3 border-t-2 ${c.border}`}>
                            <ul className="space-y-3">
                              {job.bullets.map((b, i) => (
                                <li
                                  key={i}
                                  className="flex gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                                >
                                  <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.bullet}`} />
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
