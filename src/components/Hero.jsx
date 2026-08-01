import { useState, useEffect, useRef } from 'react'
import heroImg from '../assets/indris-photo.png'

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
        <img src={heroImg} alt="Foto T. Indris Andina" className="hero-photo" />
      </div>
    </section>
  )
}

export default Hero