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
  )
}

export default Navbar