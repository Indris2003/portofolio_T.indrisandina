import { useEffect, useRef, useState } from 'react';

function ScrollReveal({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Jika bagian ini masuk ke layar (minimal 15% terlihat)
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Hentikan pantauan agar animasi tidak berulang-ulang
          // (Animasi hanya berjalan sekali saat pertama kali di-scroll ke bawah)
          observer.unobserve(sectionRef.current);
        }
      },
      {
        threshold: 0.15, // Memicu animasi saat 15% elemen sudah masuk layar
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`reveal-section ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;