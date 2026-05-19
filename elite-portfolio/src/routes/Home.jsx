import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Download, Mail } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import ProgressBar from '../components/ProgressBar'
import MagneticButton from '../components/MagneticButton'
import { projects } from '../lib/projects'
import { posts } from '../lib/posts'

/* ── Data ───────────────────────────────────────────────────── */

const heroStats = [
  { value: '6+', label: 'Years of experience', note: 'Across fintech, logistics, and research.' },
  { value: '18+', label: 'Production launches', note: 'Full-stack products from concept to live.' },
  { value: '30%', label: 'Avg latency improvement', note: 'Delivered on recent modernization work.' },
]

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Angular', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    skills: ['Spring Boot', 'FastAPI', 'Node.js', 'GraphQL', 'gRPC', 'Kafka'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Terraform', 'CI/CD', 'Kubernetes', 'Prometheus'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'Redis', 'MongoDB', 'Athena', 'SQL Server'],
  },
  {
    category: 'AI / ML',
    skills: ['LLM APIs', 'MediaPipe', 'OpenCV', 'LangChain', 'OpenTelemetry'],
  },
]

const experienceItems = [
  {
    company: 'FedEx',
    role: 'Software Engineer Intern',
    period: 'Jan 2025 – Present',
    location: 'Memphis, TN',
    highlights: [
      'Building logistics microservices with Spring Boot, Kafka, and AWS Lambda for near-real-time package visibility.',
      'Partnered with UX to ship React dashboards that reduced SLA breaches by surfacing risk-by-lane at a glance.',
      'Piped service metrics into Prometheus and correlated distributed traces in OpenTelemetry to shrink MTTR.',
    ],
  },
  {
    company: 'University of Memphis — CAESER',
    role: 'Research Software Engineer',
    period: 'Sep 2023 – Dec 2024',
    location: 'Memphis, TN',
    highlights: [
      'Automated geospatial ETL pipelines in Python and SQL Server, increasing data throughput by 80%.',
      'Published ArcGIS web tools that gave city planning partners live infrastructure health visibility.',
      'Designed a resilient PostgreSQL schema with indexing strategies optimized for simulation workloads.',
    ],
  },
  {
    company: 'Citi Bank (via TCS)',
    role: 'Full Stack Developer',
    period: 'May 2020 – Aug 2023',
    location: 'Irving, TX',
    highlights: [
      'Modernized core transaction processing with Spring Boot, gRPC, and GraphQL; improved reliability SLAs.',
      'Built customer onboarding dashboards in React + TypeScript that shortened activation time by 20%.',
      'Introduced observability practices and GitOps CI/CD that moved deploy cadence from monthly to weekly.',
    ],
  },
  {
    company: 'Verizon Communications (via TCS)',
    role: 'Full Stack Developer',
    period: 'Jun 2018 – May 2020',
    location: 'Basking Ridge, NJ',
    highlights: [
      'Delivered order management services in Java and Kafka that increased order throughput by 30%.',
      'Led Angular rewrites for field-team tooling, improving cross-device engagement significantly.',
      'Tuned PostgreSQL query plans and Redis caching strategies to cut reporting latency by 40%.',
    ],
  },
]

const companyColors = {
  FedEx: 'from-violet-400 to-indigo-500',
  'University of Memphis — CAESER': 'from-sky-400 to-cyan-500',
  'Citi Bank (via TCS)': 'from-blue-400 to-blue-600',
  'Verizon Communications (via TCS)': 'from-red-400 to-orange-500',
}

const workingTraits = [
  'Pragmatic system design',
  'Inclusive, high-trust rituals',
  'Mentorship & pair programming',
  'Obsessive about developer experience',
]

/* ── Page ───────────────────────────────────────────────────── */

export default function Home(){
  return (
    <main className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <ProgressBar />
      <Hero />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <ProjectsHome />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <BlogTeasers />
    </main>
  )
}

/* ── Hero ───────────────────────────────────────────────────── */

function Hero(){
  return (
    <section className="relative pt-10 md:pt-16 lg:pt-20" id="home">
      <div className="grid gap-16 lg:grid-cols-[1fr,auto] lg:items-start">

        {/* Left col */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            {/* availability badge */}
            <div className="status-available mb-6 w-fit">
              <span className="status-dot" />
              Open to new opportunities
            </div>

            {/* headline */}
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-[4rem] lg:leading-[1.1]">
              Building software that{' '}
              <span className="text-gradient">ships and scales.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              I&apos;m <strong className="font-semibold text-slate-900 dark:text-white">Nagarjun Dudipala</strong> — a full-stack engineer who bridges systems thinking and user empathy. I've shipped resilient platforms across fintech, logistics, and AI-assisted products, always with a bias for clarity and measurable outcomes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary">
                View my work <ArrowUpRight size={15} />
              </a>
              <MagneticButton
                className="btn-outline"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download size={15} />
                Download resume
              </MagneticButton>
              <a href="mailto:nagarjun.dudipala@gmail.com" className="btn btn-ghost">
                <Mail size={15} />
                Get in touch
              </a>
            </div>
          </motion.div>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.55 }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="card p-5">
                <p className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-teal-500 dark:text-teal-400">{stat.label}</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{stat.note}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right col — identity card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="surface-blur w-full max-w-xs p-7 lg:sticky lg:top-28"
        >
          {/* avatar */}
          <div className="mb-5 flex items-center gap-4">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 via-cyan-400 to-indigo-500 text-xl font-bold text-slate-900 shadow-lg">
              ND
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Nagarjun Dudipala</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Full-Stack Engineer</p>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <p className="font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 text-xs">Currently</p>
            <p className="text-slate-700 dark:text-slate-200">
              Engineering @ FedEx — real-time logistics + AI coaching tools
            </p>
          </div>

          <div className="mt-6 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Working style</p>
            <ul className="mt-3 space-y-2">
              {workingTraits.map((trait) => (
                <li key={trait} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <span className="inline-flex h-2 w-2 flex-none rounded-full bg-teal-400" />
                  {trait}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Skills ─────────────────────────────────────────────────── */

function Skills(){
  return (
    <section id="skills" className="scroll-mt-24">
      <SectionHeader
        kicker="Tech Stack"
        title="Tools I work with"
        subtitle="A curated set of technologies I reach for when building production systems."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.06 }}
            className="card p-6"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-teal-500 dark:text-teal-400">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ── Experience ─────────────────────────────────────────────── */

function Experience(){
  return (
    <section id="experience" className="scroll-mt-24">
      <SectionHeader
        kicker="Experience"
        title="Where I've built"
        subtitle="A track record across enterprise fintech, logistics, and applied research — always shipping, always measuring."
      />
      <div className="relative space-y-5 before:absolute before:left-[22px] before:top-2 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-teal-400/80 before:via-cyan-400/60 before:to-indigo-400/50 sm:before:left-[30px]">
        {experienceItems.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 }}
            className="relative ml-12 rounded-3xl border border-slate-200/70 bg-white/80 px-7 py-6 shadow-md backdrop-blur-xl transition-all duration-300 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/60 sm:ml-16"
          >
            {/* timeline node */}
            <div className={`absolute left-[-40px] top-7 grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br ${companyColors[item.company] ?? 'from-slate-400 to-slate-600'} text-[10px] font-bold text-white shadow-md sm:left-[-54px]`}>
              {index + 1}
            </div>

            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">{item.role}</h3>
                <p className="mt-0.5 text-sm font-medium text-teal-600 dark:text-teal-400">{item.company}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{item.period}</p>
                <p className="text-xs text-slate-400 dark:text-slate-500">{item.location}</p>
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              {item.highlights.map((highlight) => (
                <li key={`${item.company}-${highlight.slice(0, 20)}`} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <span className="mt-1.5 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-teal-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

/* ── Projects ───────────────────────────────────────────────── */

function ProjectsHome(){
  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeader
        kicker="Projects"
        title="Selected work"
        subtitle="End-to-end builds that reflect how I approach real problems — from architecture to deployment."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} {...project} idx={idx} />
        ))}
      </div>
      <div className="mt-8 flex items-center gap-4">
        <Link to="/projects" className="btn btn-outline">
          Browse all projects <ArrowUpRight size={14} />
        </Link>
      </div>
    </section>
  )
}

/* ── About ──────────────────────────────────────────────────── */

function About(){
  return (
    <section id="about" className="scroll-mt-24">
      <SectionHeader
        kicker="About"
        title="A bit about me"
        subtitle="Engineer by craft, product thinker by habit."
      />
      <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
          <p>
            I&apos;m a full-stack engineer with a Masters in Computer Science from the University of Memphis. My career has spanned two Fortune 500 companies through Tata Consultancy Services, a geospatial research lab, and now a logistics giant — each role deepening my conviction that <strong className="text-slate-900 dark:text-white">good software is invisible to the user and obvious to the operator</strong>.
          </p>
          <p>
            I gravitate toward the intersection of distributed systems and developer experience. I care about building things that are easy to reason about, observable by default, and built to change — not just built to work on launch day.
          </p>
          <p>
            Outside engineering, you&apos;ll find me experimenting with computer vision for cricket coaching, running mock interviews to help peers break into tech, and obsessing over how to make complex systems approachable for everyone on the team.
          </p>
        </div>

        <div className="space-y-5">
          <div className="surface-blur p-6">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Education</p>
            <div className="mt-4 space-y-3">
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">M.S. Computer Science</p>
                <p className="text-sm text-teal-600 dark:text-teal-400">University of Memphis</p>
                <p className="text-xs text-slate-400 dark:text-slate-500">2023 – 2025</p>
              </div>
              <div className="h-px bg-slate-200/70 dark:bg-white/10" />
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">B.E. Computer Science</p>
                <p className="text-sm text-teal-600 dark:text-teal-400">Osmania University</p>
                <p className="text-xs text-slate-400 dark:text-slate-500">2014 – 2018</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Blog teasers ───────────────────────────────────────────── */

function BlogTeasers(){
  const featured = posts.slice(0, 3)
  return (
    <section id="blog" className="scroll-mt-24 pb-24">
      <SectionHeader
        kicker="Writing"
        title="Recent thinking"
        subtitle="Notes on systems, developer experience, and building AI-assisted products."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {featured.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="card group flex h-full flex-col justify-between p-6"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">{post.date}</p>
              <h3 className="mt-3 text-base font-semibold leading-snug text-slate-900 transition-colors group-hover:text-teal-600 dark:text-white dark:group-hover:text-teal-300">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{post.excerpt}</p>
            </div>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 transition-all group-hover:gap-2.5 dark:text-teal-300">
              Read article <ArrowUpRight size={13} />
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Link to="/blog" className="btn btn-outline">
          Read all articles <ArrowUpRight size={14} />
        </Link>
      </div>
    </section>
  )
}
