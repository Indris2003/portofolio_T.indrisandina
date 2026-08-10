import { useState, useEffect } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = (e, href) => {
    e.preventDefault()
    setIsOpen(false)

    const targetElement = document.querySelector(href)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <div className="topbar">
      {/* Desktop Navbar */}
      <header className="navbar">
        <nav aria-label="Primary navigation" className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Mobile Topbar Brand Title */}
      <span className="mobile-brand-title">Portfolio</span>

      {/* Mobile Right-aligned Hamburger Toggle Button */}
      <button
        className="hamburger-btn"
        onClick={() => setIsOpen(true)}
        aria-label="Open Navigation Menu"
        aria-expanded={isOpen}
      >
        <FaBars />
      </button>

      {/* Mobile Slide-in Sidebar Drawer */}
      <aside className={`nav-sidebar ${isOpen ? 'is-open' : ''}`}>
        <div className="sidebar-header">
          <span className="sidebar-title">Menu</span>
          <button
            className="sidebar-close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close Navigation Menu"
          >
            <FaXmark />
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="sidebar-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Backdrop Overlay */}
      {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)} />}
    </div>
  )
}

export default Navbar