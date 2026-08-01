import cvFile from '../assets/Resume-T Indris Andina.pdf'

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {

  // Fungsi untuk menangani klik dan membuat scroll menjadi smooth
  const handleScroll = (e, href) => {
    e.preventDefault(); // Mencegah lompatan instan bawaan HTML

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Menggulir elemen ke bagian atas layar
      });
    }
  };

  return (
    <div className="topbar">
      <a
        className="cv-badge"
        href={cvFile}
        download="Resume-T Indris Andina.pdf"
      >
        <svg
          className="cv-badge-icon"
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

      <header className="navbar">
        <nav aria-label="Primary navigation" className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)} // Tambahkan event onClick
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>
    </div>
  )
}

export default Navbar