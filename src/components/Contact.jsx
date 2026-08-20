import { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaGithub, FaLinkedinIn, FaPaperPlane, FaSpinner, FaXmark } from 'react-icons/fa6'

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:indris2003@gmail.com',
    icon: FaEnvelope,
    subLabel: 'Send a message',
    color: '#EA4335',
    bgColor: 'rgba(234, 67, 53, 0.15)',
    borderColor: 'rgba(234, 67, 53, 0.35)',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/teukuindrisandina',
    icon: FaLinkedinIn,
    subLabel: 'Connect professionally',
    color: '#0A66C2',
    bgColor: 'rgba(10, 102, 194, 0.18)',
    borderColor: 'rgba(10, 102, 194, 0.35)',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Indris2003',
    icon: FaGithub,
    subLabel: 'Explore my code',
    color: '#FFFFFF',
    bgColor: 'rgba(255, 255, 255, 0.12)',
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },
]

function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('modal-open')
    } else {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('modal-open')
    }
    return () => {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('modal-open')
    }
  }, [showForm])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      setMessage('EmailJS belum dikonfigurasi. Isi file .env.local terlebih dulu.')
      return
    }

    try {
      setStatus('loading')
      setMessage('')

      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey })

      setStatus('success')
      setMessage('Pesan berhasil dikirim. Saya akan balas secepatnya.')
      formRef.current?.reset()
      
      setTimeout(() => {
        setShowForm(false)
        setStatus('idle')
        setMessage('')
      }, 3000)

    } catch {
      setStatus('error')
      setMessage('Gagal mengirim pesan. Coba lagi atau kirim via Email.')
    }
  }

  return (
    <section className="content-section section-dark contact-section" id="contact">
      <div className="section-heading">
        <span className="section-page-badge">CONTACT</span>
        <h2>Let’s Build Something Meaningful</h2>
      </div>

      <div className="contact-layout">
        <div className="contact-panel contact-panel-info">
          <p className="contact-lead">
            I’m open to backend, fullstack, and web application opportunities.
            Reach out through the channels below or send a message directly.
          </p>

          <div className="contact-list">
            {contactLinks.map((contact) => {
              const Icon = contact.icon
              return (
                <a className="contact-link" href={contact.href} key={contact.label} target="_blank" rel="noreferrer">
                  <span
                    className="contact-icon"
                    style={{
                      backgroundColor: contact.bgColor,
                      color: contact.color,
                      border: `1px solid ${contact.borderColor}`,
                    }}
                  >
                    <Icon aria-hidden="true" style={{ color: contact.color }} />
                  </span>
                  <span className="contact-link-copy">
                    <strong>{contact.label}</strong>
                    <span>{contact.subLabel}</span>
                  </span>
                </a>
              )
            })}
          </div>
        </div>

        <div className="contact-panel contact-panel-cta">
          <h3 className="contact-cta-title">Have a project in mind?</h3>
          <p className="contact-cta-desc">Send me a direct message and let's discuss it.</p>
          
          <button 
            type="button"
            className="nav-cta contact-open-modal-btn" 
            onClick={() => setShowForm(true)} 
          >
            <FaEnvelope style={{ marginRight: '8px' }} /> Contact Me
          </button>
        </div>
      </div>

      {/* 2. BUNGKUS MODAL DENGAN createPortal() */}
      {showForm && createPortal(
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Send a Message</h3>
              <button type="button" className="close-modal-btn" onClick={() => setShowForm(false)}>
                <FaXmark />
              </button>
            </div>

            <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <div className="form-row">
                <label className="field">
                  <span>Name</span>
                  <input name="name" type="text" placeholder="Your name" required />
                </label>
                <label className="field">
                  <span>Email</span>
                  <input name="email" type="email" placeholder="your@email.com" required />
                </label>
              </div>

              <label className="field">
                <span>Subject</span>
                <input name="subject" type="text" placeholder="Project inquiry" required />
              </label>

              <label className="field">
                <span>Message</span>
                <textarea name="message" rows="5" placeholder="Write your message here..." required />
              </label>

              <div className="contact-form-actions">
                <button className="button button-primary contact-submit" type="submit" disabled={status === 'loading'}>
                  {status === 'loading' ? <FaSpinner className="spin" aria-hidden="true" /> : <FaPaperPlane aria-hidden="true" />}
                  <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                </button>
                <button 
                  type="button" 
                  onClick={() => setShowForm(false)} 
                  className="contact-cancel-btn"
                >
                  Cancel
                </button>
              </div>

              {message ? (
                <p className={`contact-status contact-status-${status}`} role="status" aria-live="polite">{message}</p>
              ) : null}
            </form>
          </div>
        </div>,
        document.body // Ini menyuruh React merender form di luar urutan HTML biasa
      )}
    </section>
  )
}

export default Contact