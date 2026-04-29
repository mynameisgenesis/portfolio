import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Opens the user's mail client with pre-filled fields
    const mailto = `mailto:genesisbelmonte4@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`
    window.location.href = mailto
    setSent(true)
  }

  return (
    <section id="contact" style={{ background: 'var(--white)', padding: '80px 0' }}>
      <div className="section">
        <span className="section-title">Let's Talk 💌</span>
        <p className="section-subtitle">I'd love to hear from you!</p>

        <div className="contact__grid">
          {/* Info panel */}
          <div className="contact__info">
            <div className="contact__info-box card">
              <h3 className="contact__info-heading">Get in touch 🌸</h3>
              <p className="contact__info-text">
                Open to new opportunities, collaborations, and interesting
                conversations. Drop me a message!
              </p>

              <div className="contact__links">
                <a href="mailto:genesisbelmonte4@gmail.com" className="contact__link">
                  <span className="contact__link-icon">📧</span>
                  <div>
                    <p className="contact__link-label">Email</p>
                    <p className="contact__link-value">genesisbelmonte4@gmail.com</p>
                  </div>
                </a>
                <div className="contact__link">
                  <span className="contact__link-icon">📍</span>
                  <div>
                    <p className="contact__link-label">Location</p>
                    <p className="contact__link-value">Las Vegas, NV</p>
                  </div>
                </div>
                <a href="tel:7025031751" className="contact__link">
                  <span className="contact__link-icon">📞</span>
                  <div>
                    <p className="contact__link-label">Phone</p>
                    <p className="contact__link-value">(702) 503-1751</p>
                  </div>
                </a>
                <a href="https://genesisbelmonte.com" className="contact__link" target="_blank" rel="noreferrer">
                  <span className="contact__link-icon">🌐</span>
                  <div>
                    <p className="contact__link-label">Website</p>
                    <p className="contact__link-value">genesisbelmonte.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact__form-wrap">
            {sent ? (
              <div className="contact__success card">
                <span className="contact__success-icon">🎉</span>
                <h3>Message sent!</h3>
                <p>Your mail client should be open. Talk soon! 💕</p>
                <button className="btn-primary" onClick={() => setSent(false)}>
                  Send another
                </button>
              </div>
            ) : (
              <form className="contact__form card" onSubmit={handleSubmit} noValidate>
                <h3 className="contact__form-title">Send a message 💬</h3>

                <div className="contact__field">
                  <label htmlFor="name">Your name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Sakura-chan 🌸"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="email">Your email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact__field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project... ✨"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn-primary contact__submit">
                  Send Message 💌
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
