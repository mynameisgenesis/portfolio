import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <span className="footer__logo">🌸 Jessica<span className="footer__logo-accent">.dev</span></span>
          <p className="footer__tagline">Building beautiful things, one commit at a time 💕</p>
        </div>

        <nav className="footer__nav">
          {[
            ['About', '#about'],
            ['Skills', '#skills'],
            ['Experience', '#experience'],
            ['Projects', '#projects'],
            ['Contact', '#contact'],
          ].map(([label, href]) => (
            <a key={href} href={href} className="footer__nav-link">{label}</a>
          ))}
        </nav>
      </div>

      <div className="footer__bottom">
        <p>© {year} Jessica Belmonte · Las Vegas, NV</p>
        <p className="footer__made">Made with 💖 and lots of ☕</p>
      </div>
    </footer>
  )
}
