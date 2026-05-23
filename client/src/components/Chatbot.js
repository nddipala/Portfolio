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
   Role: Sr. Full Stack Java Developer (Contract) | July 2025 – Present
   - Improved API response time by 75%, supporting 1M+ requests across member and policy workflows
   - Architected Kafka/Confluent event streams handling 5M+ eligibility and claims events per day with 99.99% availability
   - Implemented IBM MQ messaging for reliable legacy mainframe integration
   - Built React operational dashboards reducing support tickets by 25%
   - Integrated Ping Identity OAuth2/OIDC SSO across internal portals
   - Secured APIs via Apigee and F5/Akamai edge policies
   - Created Grafana/Splunk observability for 50+ KPIs, cutting incident triage time by 30%
   - CI/CD with GitHub Actions, JFrog, Argo CD on GKE — deployments from monthly to several times per week

2. University of Memphis — Memphis, TN
   Role: Frontend Developer / Research Assistant | Sep 2023 – May 2024
   - Cut time to stand up map-based analytics views from days to under 2 hours (React + ArcGIS)
   - Boosted ETL throughput by 85% with Python/SQL pipelines into PostgreSQL/PostGIS
   - Reduced dashboard load times by 20% via spatial indexing and query optimization
   - Cut new-assistant onboarding time by 40% via standardized UI components

3. Citi Bank — Hyderabad, India
   Role: Full Stack Developer (Contract) | Aug 2021 – Aug 2023
   - Built Java 8/Spring Boot microservices for digital banking (hundreds of thousands of daily users)
   - Improved SQL Server query performance by 20% via Hibernate/JPA tuning
   - Reduced UAT regression defects by 30% with Jenkins/Maven/TestNG/Selenium CI pipelines
   - Cut MongoDB audit-data retrieval times by 15%, lifted key components to Azure

4. Elevance Health — Hyderabad, India
   Role: Full Stack Developer (Contract) | May 2019 – Aug 2021
   - Designed Java/Spring REST APIs contributing to 15% improvement in user satisfaction
   - Reduced unplanned downtime by 10% with Grafana dashboards and proactive alerts
   - Automated deployments with Maven, Ansible, and Tomcat

SELECTED PROJECTS:
1. Healthcare Provider Mapping Portal — React, Node.js, PostgreSQL/PostGIS, ArcGIS Online
2. Automated Geospatial Analytics Platform — Python, SQL, ArcGIS Pro, PostgreSQL/PostGIS
3. Multithreaded Data Visualization Tool — Java, JavaFX, JDBC, MySQL

You may greet users warmly and guide them to ask about Nagarjun's work.`;

const RATE_LIMIT_MESSAGE =
  "Nagarjun is busy on a production issue right now and I've hit my daily limit. Please come back later! If it's urgent, use the Contact page — Nagarjun will get back to you. 🙂";

function today() {
  return new Date().toISOString().slice(0, 10);
}

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

function incrementUsage() {
  const usage = getUsage();
  usage.count += 1;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
  return usage.count;
}

const WELCOME = {
  role: "assistant",
  content: "👋 Hi! I'm Nagarjun's portfolio assistant. Ask me anything about his skills, experience, projects, or how to get in touch!",
};

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const show = setTimeout(() => setShowTooltip(true), 3000);
    const hide = setTimeout(() => setShowTooltip(false), 8000);
    return () => { clearTimeout(show); clearTimeout(hide); };
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200);
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

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    setLoading(true);

    try {
      const history = messages
        .filter((m) => m.role !== "assistant" || m.content !== WELCOME.content)
        .map((m) => ({ role: m.role === "assistant" ? "assistant" : "user", content: m.content }));
      history.push({ role: "user", content: text });

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ system: SYSTEM_PROMPT, messages: history }),
      });

      const data = await res.json();

      if (res.status === 429 || data?.type === "quota_exceeded") {
        setMessages((prev) => [...prev, { role: "assistant", content: RATE_LIMIT_MESSAGE }]);
        setLoading(false);
        return;
      }

      if (!res.ok) throw new Error(data.error || "API error");

      incrementUsage();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply || "Sorry, try again in a moment!" }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Something went wrong. Please try again in a moment!" },
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
            className="fixed bottom-24 right-5 z-[800] w-[360px] max-w-[calc(100vw-1.5rem)] rounded-2xl flex flex-col overflow-hidden"
            style={{
              height: 480,
              background: "rgba(6,7,11,0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.09)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(167,139,250,0.08)",
            }}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Gradient top strip */}
            <div className="h-[2px] flex-shrink-0 bg-gradient-to-r from-brand-violet to-brand-cyan" />

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 flex-shrink-0 border-b border-white/[0.06]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-violet to-brand-cyan flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs font-mono">N</span>
                </div>
                <div>
                  <p className="text-white/90 text-sm font-semibold leading-none">Nagarjun's Assistant</p>
                  <p className="text-white/30 text-[10px] font-mono mt-0.5">Ask me anything</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 flex items-center justify-center rounded-lg border border-white/[0.07] text-white/35 hover:text-white/65 hover:border-white/[0.14] transition-all"
                aria-label="Close chat"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 text-sm">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[84%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "bg-gradient-to-br from-brand-violet to-brand-cyan text-white rounded-br-sm"
                        : "text-white/60 rounded-bl-sm"
                    }`}
                    style={
                      msg.role !== "user"
                        ? { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }
                        : {}
                    }
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div
                    className="px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5 items-center"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    {[0, 140, 280].map((delay) => (
                      <span
                        key={delay}
                        className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce"
                        style={{ animationDelay: `${delay}ms` }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div
              className="px-3 py-3 flex gap-2 flex-shrink-0 border-t border-white/[0.06]"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about Nagarjun…"
                className="flex-1 px-3 py-2 text-sm rounded-xl text-white/80 placeholder-white/22 font-mono focus:outline-none transition"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="w-9 h-9 flex items-center justify-center rounded-xl text-white flex-shrink-0 disabled:opacity-25 transition-opacity"
                style={{ background: "linear-gradient(135deg, #a78bfa, #22d3ee)" }}
                aria-label="Send message"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB + tooltip */}
      <div className="fixed bottom-6 right-6 z-[800] flex flex-col items-end gap-3">
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && !open && (
            <motion.div
              className="relative px-4 py-2.5 rounded-xl text-[11px] font-mono text-white/75 whitespace-nowrap pointer-events-none"
              style={{
                background: "rgba(10,12,17,0.97)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
              }}
              initial={{ opacity: 0, y: 8, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.94 }}
              transition={{ duration: 0.18 }}
            >
              Want to know more about Nagarjun?
              <span
                className="absolute -bottom-1.5 right-6 w-3 h-3 rotate-45"
                style={{ background: "rgba(10,12,17,0.97)", borderRight: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)" }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* FAB */}
        <motion.button
          onClick={() => { setOpen((o) => !o); setShowTooltip(false); }}
          onMouseEnter={() => { if (!open) setShowTooltip(true); }}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative w-14 h-14 rounded-full text-white flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)",
            boxShadow: "0 8px 28px rgba(167,139,250,0.4), 0 2px 8px rgba(0,0,0,0.3)",
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Open chat — Want to know more about Nagarjun?"
        >
          {!open && (
            <span
              className="absolute inset-0 rounded-full animate-ping opacity-20 pointer-events-none"
              style={{ background: "linear-gradient(135deg, #a78bfa, #22d3ee)" }}
            />
          )}

          <AnimatePresence mode="wait">
            {open ? (
              <motion.svg
                key="close"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.svg
                key="chat"
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
      </div>
    </>
  );
};

export default Chatbot;
