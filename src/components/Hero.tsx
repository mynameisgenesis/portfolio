import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Decorative blobs */}
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__text fade-in">
          <span className="kawaii-badge">✨ Available for new opportunities</span>

          <h1 className="hero__name">
            Hi, I'm <span className="hero__name-highlight">Jessica</span>
            <span className="hero__wave" aria-label="waving hand">👋</span>
          </h1>

          <h2 className="hero__title">
            Full-Stack Software Developer
            <span className="hero__title-deco"> 🌸</span>
          </h2>

          <p className="hero__bio">
            I build beautiful, scalable web applications with a passion for clean code and
            intuitive UX. From microservices to mobile apps, I love turning complex problems
            into elegant solutions.
          </p>

          <div className="hero__stack">
            {['React', 'Vue.js', 'Python', 'Node.js', 'Docker', 'Flutter'].map((tech) => (
              <span key={tech} className="hero__stack-badge">{tech}</span>
            ))}
          </div>

          <div className="hero__actions">
            <a href="#projects" className="btn-primary">
              See My Work 💻
            </a>
            <a href="#contact" className="btn-outline">
              Get in Touch 💌
            </a>
          </div>

          <div className="hero__links">
            <a
              href="mailto:genesisbelmonte4@gmail.com"
              className="hero__social-link"
              aria-label="Email"
            >
              📧 genesisbelmonte4@gmail.com
            </a>
            <span className="hero__social-sep">·</span>
            <span className="hero__social-link">📍 Las Vegas, NV</span>
          </div>
        </div>

        <div className="hero__avatar-wrap fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="hero__avatar">
            <div className="hero__avatar-inner">
              <span className="hero__avatar-emoji">👩‍💻</span>
            </div>
          </div>
          <div className="hero__floating hero__floating--1">💕</div>
          <div className="hero__floating hero__floating--2">✨</div>
          <div className="hero__floating hero__floating--3">🌸</div>
          <div className="hero__floating hero__floating--4">⭐</div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero__scroll-cue" aria-hidden="true">
        <span>scroll down</span>
        <div className="hero__scroll-arrow" />
      </div>
    </section>
  )
}
