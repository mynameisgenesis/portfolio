import './Projects.css'

const projects = [
  {
    title: 'SatCom Flutter App',
    emoji: '🛰️',
    description:
      'A Flutter-based mobile application enabling real-time satellite video chat via automated modem configuration and TCP signal acquisition. Collaborated with RF and SatCom engineers to bridge software and hardware.',
    tags: ['Flutter', 'TCP/IP', 'React Native', 'Vue.js', 'RF Engineering'],
    color: '#d4a5e0',
    highlight: true,
  },
  {
    title: 'Mission Planning Suite',
    emoji: '🗺️',
    description:
      '18-app Vue.js + React micro-frontend monolith for mission activity planning and workflow management. Included plan constraint checking, approval workflows, and Astro UXDS design system integration.',
    tags: ['Vue.js', 'React', 'Micro-frontends', 'Astro UXDS', 'Agile'],
    color: '#ffb3d1',
    highlight: true,
  },
  {
    title: 'Android Device Manager',
    emoji: '📱',
    description:
      'ADB-driven automation pipeline with a Python/NiceGUI visual interface, enabling end-users to manage, configure, and provision connected Android devices — replacing manual setup workflows.',
    tags: ['Python', 'NiceGUI', 'ADB', 'Automation', 'DevOps'],
    color: '#b5ead7',
    highlight: false,
  },
  {
    title: 'Prescription Data Platform',
    emoji: '💊',
    description:
      'Full-cycle .NET Core MVC system for patient prescription data collection, storage, and management at a specialty pharmacy. Built with C#, Entity Framework Code First, SQL, and MySQL.',
    tags: ['C#', '.NET Core', 'MVC', 'Entity Framework', 'MySQL'],
    color: '#fff3b0',
    highlight: false,
  },
  {
    title: 'Email Provisioning Automation',
    emoji: '📧',
    description:
      'Python-based automated email account creation tool with a GUI for CSV batch upload. Deployed on two VMs, dramatically reducing manual setup time for client account provisioning.',
    tags: ['Python', 'Automation', 'GUI', 'VM Deployment', 'CSV'],
    color: '#ffd6a5',
    highlight: false,
  },
  {
    title: 'Enterprise Microservices Platform',
    emoji: '⚙️',
    description:
      'Delivered scalable COTS/GOTS integrations within an OpenShift microservices ecosystem, including CI/CD pipeline setup and comprehensive Jest test coverage for mission-critical reliability.',
    tags: ['OpenShift', 'Docker', 'Kubernetes', 'CI/CD', 'Jest'],
    color: '#a8d8ea',
    highlight: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section">
        <span className="section-title">Projects 🚀</span>
        <p className="section-subtitle">Things I've built that I'm proud of</p>

        <div className="projects__grid">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`project-card card ${p.highlight ? 'project-card--featured' : ''}`}
            >
              {p.highlight && (
                <span className="project-card__featured-badge kawaii-badge">⭐ Featured</span>
              )}
              <div
                className="project-card__icon"
                style={{ background: `${p.color}44`, border: `2px solid ${p.color}` }}
              >
                {p.emoji}
              </div>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.description}</p>
              <div className="project-card__tags">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="project-card__tag"
                    style={{ background: `${p.color}33`, borderColor: `${p.color}88` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
