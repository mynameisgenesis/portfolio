import './Experience.css'

const jobs = [
  {
    company: 'Consulting Services Group LLC',
    role: 'FullStack Software Developer',
    period: 'Sep 2024 – Feb 2026',
    icon: '💼',
    color: 'var(--hot-pink)',
    bullets: [
      'Designed user-friendly interfaces using HTML, CSS, JavaScript, React, Python, and PHP',
      'Built ADB-driven automation pipelines in a Python/NiceGUI interface for Android device provisioning',
      'Self-directed end-to-end project execution: sprint scheduling, backlog prioritization & tracking',
      'Provisioned and deployed applications using Docker and Kubernetes',
      'Incorporated security best practices and wrote clear technical documentation',
    ],
  },
  {
    company: 'Quantum Research International',
    role: 'Lead FullStack Software Developer',
    period: 'May 2021 – Aug 2024',
    icon: '🛰️',
    color: 'var(--lilac)',
    bullets: [
      'Led Flutter-based satellite communication app enabling real-time video chat via modem config & TCP',
      'Co-built 18 Vue.js + React micro-apps forming a mission planning monolith using Astro UXDS',
      'Built and managed secure environments with Docker, Kubernetes, and OpenShift with CI/CD pipelines',
      'Automated email provisioning with Python GUI, reducing setup effort significantly',
      'Implemented Agile Scrum with JIRA, delivering bi-weekly releases that cut defect turnaround time',
    ],
  },
  {
    company: 'Centauri / KBR',
    role: 'FullStack Software Developer',
    period: 'Dec 2019 – May 2021',
    icon: '🌐',
    color: 'var(--mint)',
    bullets: [
      'Built customized web apps using React, React Native, Vue.js, Vuex, and Angular',
      'Led TDD adoption and maintained a comprehensive QA automation test suite',
      'Championed object-oriented design in C# projects, reducing code duplication',
      'Streamlined code-review process, shortening review time by one day',
    ],
  },
  {
    company: 'Aeva Specialty Pharmacy',
    role: 'Computer Programmer',
    period: 'Nov 2018 – Dec 2019',
    icon: '💊',
    color: 'var(--yellow-soft)',
    bullets: [
      'Led design of patient prescription data systems, enhancing operational efficiency',
      'Engineered .NET Core apps using C#, SQL, HTML, CSS, and JavaScript (MVC framework)',
      'Used Entity Framework Code First, SQL, and MySQL for multi-platform data management',
    ],
  },
  {
    company: 'Anderson Business Advisors',
    role: 'Web Administrator',
    period: 'Oct 2017 – Nov 2018',
    icon: '📊',
    color: 'var(--pink-300)',
    bullets: [
      'Administered and optimized WordPress websites with best-practice plugin integration',
      'Drove SEO strategy for blog posts and web pages, increasing traffic and engagement',
      'Managed hosting and database systems to ensure peak site performance',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--white)', padding: '80px 0' }}>
      <div className="section">
        <span className="section-title">Experience 💼</span>
        <p className="section-subtitle">My professional journey</p>

        <div className="exp__timeline">
          {jobs.map((job, i) => (
            <div key={i} className="exp__item">
              <div className="exp__connector">
                <div
                  className="exp__dot"
                  style={{ background: job.color, boxShadow: `0 0 0 4px ${job.color}33` }}
                >
                  {job.icon}
                </div>
                {i < jobs.length - 1 && <div className="exp__line" />}
              </div>

              <div className="exp__card card">
                <div className="exp__card-header">
                  <div>
                    <h3 className="exp__role">{job.role}</h3>
                    <p className="exp__company">{job.company}</p>
                  </div>
                  <span className="exp__period kawaii-badge">{job.period}</span>
                </div>
                <ul className="exp__bullets">
                  {job.bullets.map((b, bi) => (
                    <li key={bi}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
