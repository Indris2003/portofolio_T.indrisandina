import { useState, useEffect } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const navLinks = [
  // { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, href) => {
    e.preventDefault();
    setIsOpen(false);

    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
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
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Ultra-Simpel & Elegan Floating Menu Sheet */}
      <aside className={`nav-sidebar ${isOpen ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation" className="sidebar-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="sidebar-link-item"
              onClick={(e) => handleScroll(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Backdrop Overlay */}
      {isOpen && (
        <div className="nav-overlay" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
}

export default Navbar;