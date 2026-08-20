import { useState, useEffect, useRef } from 'react'
import heroImg from '../assets/my-picture.jpeg'
import cvFile from '../assets/Resume-T Indris Andina.pdf'

function Hero() {
  const [text, setText] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const fullText = 'T. Indris Andina'
  const heroRef = useRef(null)

  useEffect(() => {
    let timeoutId;
    let finishTimeoutId;

    const typeWriter = (textToType, index = 0) => {
      if (index <= textToType.length) {
        setText(textToType.slice(0, index));
        if (index === textToType.length) {
          finishTimeoutId = setTimeout(() => {
            setIsTypingComplete(true);
          }, 1200);
        } else {
          timeoutId = setTimeout(() => typeWriter(textToType, index + 1), 120);
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setText('');
          setIsTypingComplete(false);
          clearTimeout(timeoutId);
          clearTimeout(finishTimeoutId);
          typeWriter(fullText);
        } else {
          clearTimeout(timeoutId);
          clearTimeout(finishTimeoutId);
        }
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(finishTimeoutId);
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <section className="hero-section" id="about" ref={heroRef}>
      <div id="home" className="hero-grid">
        <div className="hero-copy">

          <h1 className="hero-name notranslate" translate="no">
            <span>{text}</span>
            <span className={`typing-cursor ${isTypingComplete ? 'hide' : ''}`}>|</span>
          </h1>

          <div className="hero-tagline">
            <span className="hero-tagline-title">Software Developer</span>
            <span className="hero-tagline-sub">Specializing in Web & App Development</span>
          </div>

          <div className="hero-about-body">
            <p>
              Informatics graduate from Universitas Syiah Kuala, focused on backend and fullstack web development.
              I build secure, well-tested web applications — from RESTful APIs and database design to server-side
              architecture — with a strong eye for clean, maintainable code. </p>
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