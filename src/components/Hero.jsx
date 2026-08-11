import { useState, useEffect, useRef } from 'react'
import heroImg from '../assets/my-picture.jpeg'
import cvFile from '../assets/Resume-T Indris Andina.pdf'

function Hero() {
  const [text, setText] = useState('')
  const fullText = 'T. Indris Andina'
  const heroRef = useRef(null)

  useEffect(() => {
    let timeoutId;

    const typeWriter = (textToType, index = 0) => {
      if (index <= textToType.length) {
        setText(textToType.slice(0, index));
        timeoutId = setTimeout(() => typeWriter(textToType, index + 1), 150);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setText('');
          clearTimeout(timeoutId);
          typeWriter(fullText);
        } else {
          clearTimeout(timeoutId);
        }
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      clearTimeout(timeoutId);
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <section className="hero-section" id="about" ref={heroRef}>
      <div className="status-badge-hero-top">
        <span className="status-badge-floating">
          <span className="status-dot" />
          Available for Opportunities
        </span>
      </div>

      <div id="home" className="hero-grid">
        <div className="hero-copy">
          <h1 className="hero-name">
            {text}
            <span className="typing-cursor">|</span>
          </h1>

          <p className="hero-tagline">
            Software Developer | Specializing in Web & App Development
          </p>

          <div className="hero-about-body">
            <p>
              Informatics graduate from Universitas Syiah Kuala, focused on backend and fullstack development. I build secure, well-tested APIs and server-side architecture — from database design to concurrency-safe booking systems — backed by solid frontend skills to bring products together end to end.
            </p>
            <p>
              Currently open to backend, fullstack, and web application opportunities where I can contribute to
              real-world products, keep learning new technologies, and collaborate closely with cross-functional
              teams to ship reliable software.
            </p>
          </div>

          <div className="hero-actions">
            <a
              className="hero-btn hero-btn-primary"
              href={cvFile}
              download="Resume-T Indris Andina.pdf"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download CV</span>
            </a>

            <a
              className="hero-btn hero-btn-secondary"
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
            >
              <span>View Projects</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img src={heroImg} alt="Foto T. Indris Andina" className="hero-photo" />
        </div>
      </div>
    </section>
  )
}

export default Hero