import { useState, useEffect, useRef } from 'react'
import heroImg from '../assets/indris-photo.png'
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
    <section className="hero-section" id="home" ref={heroRef}>
      <div className="hero-visual">
        <h1 className="hero-name">
          {text}
          <span className="typing-cursor">|</span>
        </h1>

        <p className="hero-tagline">
          Backend Developer • Fullstack Web Development
        </p>

        <img src={heroImg} alt="Foto T. Indris Andina" className="hero-photo" />

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
            Download CV
          </a>

          <a className="hero-btn hero-btn-secondary" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero