export const projects = [
  {
    title: 'Cricket Stance Detector',
    tags: ['React', 'FastAPI', 'MediaPipe', 'Docker', 'Python'],
    desc: 'Real-time cricket coaching tool that analyzes batting stance from uploaded video clips. Leverages MediaPipe pose estimation to detect posture faults, then returns annotated video with timestamped coaching tips — reducing form errors by surfacing objective feedback.',
    link: 'https://github.com/nddipala/cricket-stance-detector',
    highlight: true,
    impact: 'Pose fault detection on 15+ body keypoints'
  },
  {
    title: 'JobTrackr',
    tags: ['Next.js', 'PostgreSQL', 'LLM', 'TypeScript', 'Prisma'],
    desc: 'AI-powered job application tracker that scores resume-to-JD alignment via LLM analysis, sends smart follow-up reminders, and auto-generates personalized outreach templates — turning the job hunt into a structured, data-driven process.',
    link: 'https://github.com/nddipala/jobtrackr',
    impact: '3x faster application pipeline management'
  },
  {
    title: 'FinOps Cost Lens',
    tags: ['AWS', 'Lambda', 'Athena', 'React', 'Terraform'],
    desc: 'Serverless cost-visibility platform for multi-account AWS organizations. Queries Cost Explorer via Athena, surfaces anomalies with configurable thresholds, and delivers Slack/email alerts — giving engineering teams ownership over cloud spend.',
    link: 'https://github.com/nddipala/finops-cost-lens',
    impact: 'Real-time anomaly detection across AWS accounts'
  }
]
