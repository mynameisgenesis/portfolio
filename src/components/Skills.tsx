import type { CSSProperties } from 'react'
import './Skills.css'

interface SkillBarProps {
  name: string
  level: number
}

const skillGroups = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 75 },
      { name: 'Vue.js', level: 60 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML / CSS', level: 95 },
      { name: 'React Native', level: 71 },
      { name: 'Angular', level: 37 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Python', level: 88 },
      { name: 'Node.js', level: 85 },
      { name: 'PHP', level: 75 },
      { name: 'C#  / .NET', level: 80 },
      { name: 'Java', level: 65 },
    ],
  },
  {
    category: 'Data & DB',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', level: 56 },
      { name: 'MySQL', level: 67 },
      { name: 'MongoDB', level: 78 },
      { name: 'SQL Server', level: 60 },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: '🚀',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 41 },
      { name: 'OpenShift', level: 38 },
      { name: 'Git / CI-CD', level: 90 },
      { name: 'Jira / Confluence', level: 88 },
    ],
  },
]

function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__pct">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ '--fill-width': `${level}%` } as CSSProperties}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section">
        <span className="section-title">Skills & Tech ✨</span>
        <p className="section-subtitle">Technologies I work with every day</p>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div key={group.category} className="skills__group card">
              <h3 className="skills__group-title">
                <span>{group.icon}</span> {group.category}
              </h3>
              <div className="skills__bars">
                {group.skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tag cloud */}
        <div className="skills__tags">
          {[
            'Flutter', 'WordPress', 'Vuex', 'Bootstrap', 'Sphinx',
            'Jest', 'TDD', 'Agile / Scrum', 'MVC', 'REST APIs',
            'JSON / XML', 'SVN', 'NiceGUI', 'Entity Framework',
          ].map((tag) => (
            <span key={tag} className="skills__tag kawaii-badge">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
