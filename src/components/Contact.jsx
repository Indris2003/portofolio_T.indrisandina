import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaGithub, FaLinkedinIn, FaPaperPlane, FaSpinner, FaWhatsapp } from 'react-icons/fa6'

const contactLinks = [
  {
    label: 'WhatsApp',
    value: '+62 821-6315-6292',
    href: 'https://wa.me/6282163156292',
    icon: FaWhatsapp,
  },
  {
    label: 'Email',
    value: 'indris2003@gmail.com',
    href: 'mailto:indris2003@gmail.com',
    icon: FaEnvelope,
  },
  {
    label: 'LinkedIn',
    value: 'T. Indris Andina',
    href: 'https://www.linkedin.com/in/teukuindrisandina',
    icon: FaLinkedinIn,
  },
  {
    label: 'GitHub',
    value: 'T. Indris Andina',
    href: 'https://github.com/Indris2003',
    icon: FaGithub,
  },
]

function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

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

      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      })

      setStatus('success')
      setMessage('Pesan berhasil dikirim. Saya akan balas secepatnya.')
      formRef.current?.reset()
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
                  <span className="contact-icon">
                    <Icon aria-hidden="true" />
                  </span>
                  <span className="contact-link-copy">
                    <strong>{contact.label}</strong>
                    <span>{contact.value}</span>
                  </span>
                </a>
              )
            })}
          </div>

          <div className="contact-note">
            <FaPaperPlane aria-hidden="true" />
            <span>Responsif di mobile, tablet, dan desktop.</span>
          </div>
        </div>

        <form className="contact-panel contact-form" ref={formRef} onSubmit={handleSubmit}>
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
            <textarea name="message" rows="6" placeholder="Write your message here..." required />
          </label>

          <button className="button button-primary contact-submit" type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? <FaSpinner className="spin" aria-hidden="true" /> : <FaPaperPlane aria-hidden="true" />}
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {message ? (
            <p className={`contact-status contact-status-${status}`} role="status" aria-live="polite">
              {message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}

export default Contact