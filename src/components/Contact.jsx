import { useRef, useState, useEffect } from 'react'
import { createPortal } from 'react-dom' // 1. IMPORT CREATE PORTAL DI SINI
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaGithub, FaLinkedinIn, FaPaperPlane, FaSpinner, FaWhatsapp, FaXmark } from 'react-icons/fa6'

const contactLinks = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/+6282163156292',
    icon: FaWhatsapp,
    subLabel: 'Chat with me',
  },
  {
    label: 'Email',
    href: 'mailto:indris2003@gmail.com',
    icon: FaEnvelope,
    subLabel: 'Send a message',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/teukuindrisandina',
    icon: FaLinkedinIn,
    subLabel: 'Connect professionally',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Indris2003',
    icon: FaGithub,
    subLabel: 'Explore my code',
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
      setMessage('Gagal mengirim pesan. Coba lagi atau hubungi lewat WhatsApp.')
    }
  }

  return (
    <section className="content-section contact-section" id="contact">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
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
                  <span className="contact-icon"><Icon aria-hidden="true" /></span>
                  <span className="contact-link-copy">
                    <strong>{contact.label}</strong>
                    <span>{contact.subLabel}</span>
                  </span>
                </a>
              )
            })}
          </div>
        </div>

        <div className="contact-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', textAlign: 'center' }}>
          <h3 style={{ margin: 0, fontSize: '1.4rem', color: 'var(--text-strong)' }}>Have a project in mind?</h3>
          <p style={{ margin: 0, color: 'var(--muted)' }}>Send me a direct message and let's discuss it.</p>
          
          <button 
            className="nav-cta" 
            onClick={() => setShowForm(true)} 
            style={{ marginTop: '16px', cursor: 'pointer', border: 'none', width: 'fit-content', padding: '14px 36px' }}
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
              <button className="close-modal-btn" onClick={() => setShowForm(false)}>
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

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '8px' }}>
                <button className="button button-primary contact-submit" type="submit" disabled={status === 'loading'}>
                  {status === 'loading' ? <FaSpinner className="spin" aria-hidden="true" /> : <FaPaperPlane aria-hidden="true" />}
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                <button 
                  type="button" 
                  onClick={() => setShowForm(false)} 
                  style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', fontWeight: '600' }}
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