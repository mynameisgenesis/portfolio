import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    website: '',
  })
  const [sent, setSent] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsSending(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(result.error || 'Your message could not be sent.')
      }

      setSent(true)
      setForm({ name: '', email: '', message: '', website: '' })
    } catch (submitError) {
      setError(submitError.message)
    } finally {
      setIsSending(false)
    }
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
                <p>Thanks for reaching out. Talk soon! 💕</p>
                <button className="btn-primary" onClick={() => setSent(false)}>
                  Send another
                </button>
              </div>
            ) : (
              <form className="contact__form card" onSubmit={handleSubmit}>
                <h3 className="contact__form-title">Send a message 💬</h3>

                <div className="contact__honeypot" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex="-1"
                    autoComplete="off"
                    value={form.website}
                    onChange={handleChange}
                  />
                </div>

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
                    maxLength={100}
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
                    maxLength={254}
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
                    maxLength={5000}
                  />
                </div>

                {error && (
                  <p className="contact__error" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn-primary contact__submit"
                  disabled={isSending}
                >
                  {isSending ? 'Sending…' : 'Send Message 💌'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
