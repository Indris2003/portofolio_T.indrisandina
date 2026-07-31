import { useState, useEffect, useRef } from 'react'
import heroImg from '../assets/indris-photo.png'

function Hero() {
  const [text, setText] = useState('')
  const fullText = 'T. Indris Andina' // Teks yang akan diketik
  const heroRef = useRef(null)

  useEffect(() => {
    let timeoutId;

    // Fungsi rekursif untuk mengetik huruf satu per satu
    const typeWriter = (textToType, index = 0) => {
      if (index <= textToType.length) {
        setText(textToType.slice(0, index));
        // Kecepatan ketikan: 150ms per huruf. Bisa Anda ubah jika ingin lebih cepat/lambat.
        timeoutId = setTimeout(() => typeWriter(textToType, index + 1), 150); 
      }
    };

    // Observer untuk mengecek apakah user sedang melihat bagian Hero (Scroll ke atas)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Jika Hero masuk ke layar: bersihkan text dan mulai animasi mengetik
          setText('');
          clearTimeout(timeoutId);
          typeWriter(fullText);
        } else {
          // Jika user scroll ke bawah (melewati Hero), bersihkan animasi 
          // agar siap diulang saat user scroll ke atas lagi
          clearTimeout(timeoutId);
        }
      },
      { threshold: 0.5 } // Animasi berjalan saat 50% bagian hero terlihat
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
    // Tambahkan ref ke section ini untuk dideteksi oleh observer
    <section className="hero-section" id="home" ref={heroRef}>
      <div className="hero-visual">
        <h1 className="hero-name">
          {text}
          {/* Efek kursor berkedip seperti sedang mengetik */}
          <span className="typing-cursor">|</span>
        </h1>
        <img src={heroImg} alt="Foto T. Indris Andina" className="hero-photo" />
      </div>
    </section>
  )
}

export default Hero