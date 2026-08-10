import { useState, useEffect } from 'react';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk mengecek posisi scroll
  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fungsi untuk menggulir kembali ke atas secara mulus (smooth)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Memasang event listener saat komponen dimuat
    window.addEventListener('scroll', toggleVisibility);
    
    // Membersihkan event listener saat komponen dilepas
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className="scroll-to-top-btn"
          aria-label="Back to top"
        >
          {/* Ikon panah ke atas (menggunakan SVG agar lebih tajam) */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2.5} 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      )}
    </>
  );
}

export default ScrollToTop;