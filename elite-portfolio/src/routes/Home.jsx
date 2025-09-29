import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import ProgressBar from '../components/ProgressBar'
import MagneticButton from '../components/MagneticButton'
import { projects } from '../lib/projects'
import { posts } from '../lib/posts'

const heroStats = [
  {
    label: 'Production launches',
    value: '18',
    note: 'Deployed full stack experiences across consumer and enterprise products.'
  },
  {
    label: 'Latency improvements',
    value: '30%',
    note: 'Average performance lift delivered on recent modernization work.'
  },
  {
    label: 'Toolbelt',
    value: 'Java | React | AWS | AI',
    note: 'Engineering with product instincts, data, and coaching.'
  }
]

const focusAreas = [
  {
    title: 'AI assisted experiences',
    description: 'Blend LLM reasoning with human centered flows so teams feel the benefit without the friction.'
  },
  {
    title: 'Platform reliability',
    description: 'Instrument services, design for failure, and ship observability by default so incidents are short and rare.'
  },
  {
    title: 'Product velocity',
    description: 'Iterate quickly with battle tested architecture, aligned rituals, and pragmatic automation.'
  }
]

const experienceItems = [
  {
    company: 'FedEx',
    role: 'Information Technology Intern',
    period: 'Jan 2025 - Present | Memphis, TN',
    highlights: [
      'Building logistics services with Spring Boot, Kafka, and AWS Lambda to keep package status near realtime.',
      'Partnered with UX to deliver dashboards in React that cut SLA breaches by surfacing risk by lane.',
      'Improved detection by piping metrics into Prometheus and correlating traces in OpenTelemetry.'
    ]
  },
  {
    company: 'University of Memphis - CAESER',
    role: 'Research Assistant',
    period: 'Sep 2023 - Dec 2024 | Memphis, TN',
    highlights: [
      'Automated geospatial data pipelines in Python and SQL Server, increasing throughput by eighty percent.',
      'Published responsive ArcGIS tools that gave city partners fresh visibility into infrastructure health.',
      'Designed a resilient PostgreSQL layout with indexing and aggregation for planning simulations.'
    ]
  },
  {
    company: 'Citi Bank (via TCS)',
    role: 'Full Stack Developer',
    period: 'May 2020 - Aug 2023 | Irving, TX',
    highlights: [
      'Modernized transaction processing with Spring Boot, gRPC, and GraphQL to improve reliability.',
      'Built onboarding dashboards in React and TypeScript that shortened customer activation by twenty percent.',
      'Introduced observability and CI/CD practices that moved deploy cadence from monthly to weekly.'
    ]
  },
  {
    company: 'Verizon Communications (via TCS)',
    role: 'Full Stack Developer',
    period: 'Jun 2018 - May 2020 | Basking Ridge, NJ',
    highlights: [
      'Delivered order management services in Java and Kafka that increased throughput by thirty percent.',
      'Led responsive Angular rewrites that improved engagement across devices for field teams.',
      'Refined PostgreSQL and Redis strategies to tighten reporting accuracy and reduce latency.'
    ]
  }
]

const workingStyle = [
  'Pragmatic system design',
  'Inclusive, high trust rituals',
  'Mentorship and pairing',
  'Healthy obsession with developer experience'
]

const featuredPostsCount = 3

export default function Home(){
  return (
    <main className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <ProgressBar />
      <Hero />
      <Focus />
      <Experience />
      <ProjectsHome />
      <About />
      <BlogTeasers />
    </main>
  )
}

function Hero(){
  return (
    <section className="relative pt-10 md:pt-16 lg:pt-20" id="home">
      <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
        <div className="space-y-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="eyebrow">Product minded engineer</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Shipping resilient software with design instincts and measurable impact.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-slate-600 dark:text-slate-300 sm:text-lg">
              I craft durable platforms and interfaces through curiosity, clear communication, and hands-on delivery. From AI assisted workflows to payments and logistics, I help teams move from idea to adoption fast.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary">View projects</a>
              <MagneticButton className="btn-outline" onClick={() => window.open('/resume.pdf', '_blank')}>
                Download resume
              </MagneticButton>
              <Link to="/contact" className="btn btn-ghost">Let&apos;s collaborate</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="card p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{stat.label}</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.note}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="surface-blur p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Currently solving</p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">Logistics insight and AI assisted coaching</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Right now: building realtime visibility at FedEx, and prototyping AI copilots that convert vision data into coaching for sports teams.
          </p>
          <div className="mt-6 grid gap-3">
            {workingStyle.map((trait) => (
              <div key={`hero-${trait}`} className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                <span className="inline-flex h-2 w-2 rounded-full bg-teal-400" />
                {trait}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Focus(){
  return (
    <section className="pt-20" id="focus">
      <SectionHeader kicker="Focus" title="What working together feels like" subtitle="Combining engineering, product, and storytelling so teams can scale with confidence." />
      <div className="grid gap-6 md:grid-cols-3">
        {focusAreas.map((area) => (
          <motion.div key={area.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-teal-500">{area.title}</p>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{area.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Experience(){
  return (
    <section id="experience" className="pt-20">
      <SectionHeader kicker="Experience" title="Building for impact" subtitle="Roles, outcomes, and the systems that made them possible." />
      <div className="relative space-y-6 before:absolute before:inset-x-[22px] before:top-0 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-teal-300/70 before:via-cyan-300/70 before:to-indigo-400/70 sm:before:left-[30px]">
        {experienceItems.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="relative ml-10 rounded-3xl border border-slate-200/70 bg-white/80 px-6 py-6 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/60 dark:shadow-glass sm:ml-16"
          >
            <div className="absolute left-[-42px] top-8 grid h-6 w-6 place-items-center rounded-full border border-teal-300 bg-white text-xs font-semibold text-teal-600 dark:border-teal-500/60 dark:bg-slate-900 dark:text-teal-300 sm:left-[-56px]">
              {index + 1}
            </div>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.role}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-300">{item.company}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">{item.period}</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {item.highlights.map((highlight) => (
                <li key={`${item.company}-${highlight}`} className="flex gap-3">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-teal-400" />
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

function ProjectsHome(){
  return (
    <section id="projects" className="pt-20">
      <SectionHeader kicker="Projects" title="Selected work" subtitle="Experiments, products, and platforms that show how I approach wide surface areas." />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <div className="mt-8">
        <Link to="/projects" className="btn btn-outline">Browse the full project archive</Link>
      </div>
    </section>
  )
}

function About(){
  return (
    <section id="about" className="pt-20">
      <SectionHeader kicker="About" title="Less buzzwords, more outcomes" subtitle="I enjoy connecting the dots between strategy, design, and code. Here is how that plays out day to day." />
      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
          <p>
            I am a builder who works shoulder to shoulder with design, product, and data partners. I invest in clarity, healthy feedback loops, and clean architecture so teams can sustain momentum.
          </p>
          <p>
            Outside of the office you will find me experimenting with computer vision for cricket coaching, mentoring peers through mock interviews, and sketching new interactions to make complex tools approachable.
          </p>
        </div>
        <div className="surface-blur p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Working style</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            {workingStyle.map((trait) => (
              <li key={`style-${trait}`} className="flex gap-3">
                <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-indigo-400" />
                <span>{trait}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function BlogTeasers(){
  const featured = posts.slice(0, featuredPostsCount)
  return (
    <section id="blog" className="pt-20 pb-24">
      <SectionHeader kicker="Writing" title="Recent thinking" subtitle="I document how I approach systems, developer experience, and AI assisted product work." />
      <div className="grid gap-4 md:grid-cols-3">
        {featured.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="card group flex h-full flex-col justify-between p-6 transition">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">{post.date}</p>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-teal-500 dark:text-white dark:group-hover:text-teal-300">{post.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{post.excerpt}</p>
            </div>
            <span className="mt-6 text-sm font-semibold text-teal-600 transition group-hover:translate-x-1 group-hover:text-teal-500 dark:text-teal-300">Read the article &rarr;</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
