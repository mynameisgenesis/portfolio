import './About.css'

const highlights = [
  { icon: '🎓', label: 'Education', value: 'B.S. Information Technology' },
  { icon: '💼', label: 'Experience', value: '9+ Years Full-Stack Dev' },
  { icon: '🔐', label: 'Clearance', value: 'TS/SCI Certified' },
  { icon: '📍', label: 'Location', value: 'Las Vegas, NV' },
]

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--white)', padding: '80px 0' }}>
      <div className="section">
        <span className="section-title">About Me 🌸</span>
        <p className="section-subtitle">A little bit about who I am</p>

        <div className="about__grid">
          <div className="about__text fade-in">
            <p>
              I'm a <strong>Full-Stack Software Developer</strong> based in Las Vegas, NV, with
              over 9+ years of experience building everything from enterprise microservices to
              satellite communication apps. I thrive at the intersection of clean code and
              beautiful UI.
            </p>
            <p>
              I've shipped mission-critical software for government and commercial clients,
              led agile teams, and worn many hats — from architect to DevOps engineer. I hold
              a <strong>TS/SCI clearance</strong> and love tackling complex, high-stakes problems.
            </p>
            <p>
              When I'm not coding, I believe great software should spark joy — which is
              probably why I have a soft spot for thoughtful design and pastel palettes. 🌷
            </p>

            <div className="about__cta">
              <a
                href="mailto:genesisbelmonte4@gmail.com"
                className="btn-primary"
              >
                Let's Connect 💌
              </a>
              <a href="#experience" className="btn-outline">View Experience</a>
            </div>
          </div>

          <div className="about__highlights">
            {highlights.map((h) => (
              <div key={h.label} className="about__highlight-card card">
                <span className="about__highlight-icon">{h.icon}</span>
                <div>
                  <p className="about__highlight-label">{h.label}</p>
                  <p className="about__highlight-value">{h.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
