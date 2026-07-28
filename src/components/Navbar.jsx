import profileImg from '../assets/profil.jpeg'
import cvFile from '../assets/Resume-T Indris Andina.pdf'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#home">
        <img className="brand-avatar" src={profileImg} alt="T. Indris Andina" />
        <span className="brand-name">T. Indris Andina</span>
      </a>

      <nav aria-label="Primary navigation" className="nav-links">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <a className="nav-download" href={cvFile} download="T-Indris-Andina-CV.pdf">
          Download CV
        </a>
        <a className="nav-cta" href="#contact">
          Contact Me
        </a>
      </div>
    </header>
  )
}

export default Navbar