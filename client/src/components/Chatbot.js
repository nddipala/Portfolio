import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DAILY_LIMIT = 30;
const STORAGE_KEY = "nj_chat_usage";

const SYSTEM_PROMPT = `You are Nagarjun's personal portfolio assistant. Your ONLY job is to answer questions about Nagarjun — his skills, experience, projects, education, achievements, and how to contact him.

STRICT RULES:
1. Only answer questions directly related to Nagarjun's profile, career, skills, projects, and background.
2. If asked anything unrelated (general coding help, world events, opinions, jokes, other people), respond: "I'm here to tell you about Nagarjun only. Feel free to ask about his skills, projects, or experience!"
3. Never make up information. If you don't know a specific detail, say: "I don't have that specific detail — you can reach Nagarjun directly via the Contact page."
4. Keep responses concise, friendly, and professional.
5. Always refer to Nagarjun in third person.
6. Never discuss your own model, training, or architecture.

NAGARJUN'S PROFILE:

Name: Nagarjun Reddy Dudipala
Title: Sr. Full Stack Java Developer
Location: Memphis, TN, USA
Phone: +1 (901) 462-6649
Email: nddipala@memphis.edu
GitHub: github.com/nddipala
LinkedIn: linkedin.com/in/nagarjunreddydudipala183
Experience: 7+ years

PROFESSIONAL SUMMARY:
Sr. Full Stack Java Developer with 7+ years of experience building high-availability systems in healthcare insurance and banking. Architect and delivers cloud-native microservices, event-driven backends, and React/Angular frontends using Java/Spring Boot, Kafka, and modern JavaScript. Known for improving API performance by up to 80%, supporting millions of transactions daily, and accelerating delivery with GCP (GKE), Azure, Docker, Kubernetes, Prometheus, Grafana, Splunk, and CI/CD automation.

EDUCATION:
- M.S., Computer Science — University of Memphis, Memphis, TN (May 2025)
- B.E., Electronics & Instrumentation (Jul 2020)

TECHNICAL SKILLS:
- Programming: Java 8/11/17, JavaScript (ES6+), TypeScript, Python, SQL
- Java Frameworks: Spring Boot, Spring MVC, Spring Security, Spring Data JPA, Hibernate, Kafka, IBM MQ, JDBC, Microservices
- Frontend: React, Angular, HTML5, CSS3, Bootstrap, jQuery, AJAX
- Databases: PostgreSQL/PostGIS, SQL Server, Oracle, MySQL, MongoDB
- Cloud: GCP (GKE, GCE, Cloud Storage), Azure (Functions, SQL DB, Blob, App Service), AWS (EC2, S3, Lambda, DynamoDB, API Gateway)
- DevOps: Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, GitLab CI, Argo CD, JFrog Artifactory, Ansible, Tomcat
- Monitoring: Prometheus, Grafana, ELK-style logging, Splunk, Kiali
- Testing: JUnit, TestNG, Selenium, Mockito, Postman
- API/Edge: Apigee, Akamai, F5 BIG-IP, RESTful APIs, SOAP, GraphQL, Swagger/OpenAPI, JWT
- Tools: Git, Bitbucket, JIRA, Confluence, IntelliJ IDEA, VS Code, Maven, Gradle, GitHub Copilot

PROFESSIONAL EXPERIENCE:

1. Aetna, a CVS Health Company — Hartford County, CT (Remote)
   Role: Sr. Full Stack Java Developer (Contract)
   Period: July 2025 – Present
   Key achievements:
   - Improved API response time by 75%, supporting 1M+ requests across member and policy workflows
   - Architected Kafka/Confluent event streams handling 5M+ eligibility and claims events per day with 99.99% availability
   - Implemented IBM MQ messaging for reliable legacy mainframe integration
   - Built React operational dashboards reducing support tickets by 25%
   - Integrated Ping Identity OAuth2/OIDC SSO across internal portals
   - Secured APIs via Apigee and F5/Akamai edge policies
   - Created Grafana/Splunk observability for 50+ KPIs, cutting incident triage time by 30%
   - Implemented CI/CD with GitHub Actions, JFrog, Argo CD on GKE — increased deployment frequency from monthly to several times per week

2. University of Memphis — Memphis, TN
   Role: Frontend Developer / Research Assistant
   Period: Sep 2023 – May 2024
   Key achievements:
   - Cut time to stand up map-based analytics views from days to under 2 hours using React + ArcGIS
   - Boosted ETL data-processing throughput by 85% with Python/SQL pipelines into PostgreSQL/PostGIS
   - Reduced dashboard load times by 20% via spatial indexing and query optimization
   - Cut new-assistant onboarding time by 40% through standardized UI components and Confluence docs

3. Citi Bank — Hyderabad, India (Hybrid)
   Role: Full Stack Developer (Contract)
   Period: Aug 2021 – Aug 2023
   Key achievements:
   - Built Java 8/Spring Boot microservices for digital banking (account management, funds transfer, statements) serving hundreds of thousands of daily users
   - Improved SQL Server query performance by 20% via Hibernate/JPA tuning and targeted indexing
   - Reduced UAT regression defects by 30% release-over-release with Jenkins/Maven/TestNG/Selenium CI pipelines
   - Cut MongoDB audit-data retrieval times by 15% and lifted key components to Azure

4. Elevance Health — Hyderabad, India (On-site)
   Role: Full Stack Developer (Contract)
   Period: May 2019 – Aug 2021
   Key achievements:
   - Designed Java/Spring REST APIs contributing to a 15% improvement in user satisfaction scores
   - Reduced unplanned downtime by 10% with Grafana dashboards and proactive performance alerts
   - Automated deployments with Maven, Ansible, and Tomcat, eliminating manual release errors

SELECTED PROJECTS:

1. Healthcare Provider Mapping Portal (Personal/Academic)
   - React, Node.js/Express, PostgreSQL/PostGIS, ArcGIS Online
   - Visualizes providers, members, and access-to-care gaps for thousands of network records
   - Implements drive-time and proximity analysis highlighting underserved regions

2. Automated Geospatial Analytics Platform (University of Memphis)
   - Python, SQL, ArcGIS Pro, ArcPy, PostgreSQL/PostGIS
   - Replaced manual GIS workflows with nightly ETL jobs and automated QA checks
   - Enables non-technical users to run ad-hoc spatial queries via web maps

3. Multithreaded Data Visualization Tool (Academic/Personal)
   - Java, JavaFX, JDBC, MySQL
   - Handles 1M+ row datasets with 30% faster processing via multithreading
   - Features configurable charting, filtering, and saveable layout persistence

You may greet users warmly and guide them to ask about Nagarjun's work.`;

const RATE_LIMIT_MESSAGE =
  "Nagarjun is busy on a production issue right now and I've hit my daily limit. Please come back later! If it's important, drop a message on the Contacts page — Nagarjun will check and get back to you. 🙂";

function getUsage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { date: today(), count: 0 };
    const parsed = JSON.parse(raw);
    if (parsed.date !== today()) return { date: today(), count: 0 };
    return parsed;
  } catch {
    return { date: today(), count: 0 };
  }
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function incrementUsage() {
  const usage = getUsage();
  usage.count += 1;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
  return usage.count;
}

const WELCOME = {
  role: "assistant",
  content:
    "👋 Hi! I'm Nagarjun's portfolio assistant. Ask me anything about his skills, experience, projects, or how to get in touch!",
};

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const usage = getUsage();
    if (usage.count >= DAILY_LIMIT) {
      setMessages((prev) => [
        ...prev,
        { role: "user", content: text },
        { role: "assistant", content: RATE_LIMIT_MESSAGE },
      ]);
      setInput("");
      return;
    }

    const userMsg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const history = messages
        .filter((m) => m.role !== "assistant" || m.content !== WELCOME.content)
        .map((m) => ({
          role: m.role === "assistant" ? "assistant" : "user",
          content: m.content,
        }));

      history.push({ role: "user", content: text });

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: SYSTEM_PROMPT,
          messages: history,
        }),
      });

      const data = await res.json();

      if (res.status === 429 || data?.type === "quota_exceeded") {
        setMessages((prev) => [...prev, { role: "assistant", content: RATE_LIMIT_MESSAGE }]);
        setLoading(false);
        return;
      }

      if (!res.ok) throw new Error(data.error || "API error");

      const reply =
        data.reply ||
        "Sorry, I couldn't generate a response. Please try again.";

      incrementUsage();
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Something went wrong on my end. Please try again in a moment!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 right-5 z-50 w-[350px] max-w-[calc(100vw-2rem)] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col overflow-hidden"
            style={{ height: "480px" }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="bg-indigo-600 px-4 py-3 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-sm font-bold">
                  N
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-none">
                    Nagarjun's Assistant
                  </p>
                  <p className="text-indigo-200 text-xs mt-0.5">
                    Ask me anything about Nagarjun
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition p-1"
                aria-label="Close chat"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 text-sm">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "bg-indigo-600 text-white rounded-br-sm"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t border-slate-200 dark:border-slate-700 flex gap-2 flex-shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about Nagarjun…"
                className="flex-1 px-3 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white transition flex-shrink-0"
                aria-label="Send"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl shadow-indigo-300 dark:shadow-indigo-900 flex items-center justify-center transition-colors"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Open chat assistant"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg
              key="close"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default Chatbot;
