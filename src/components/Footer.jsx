const footerNavLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="footer">
      <nav aria-label="Footer navigation" className="footer-nav">
        {footerNavLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="footer-nav-link"
            onClick={(e) => handleScroll(e, link.href)}
          >
            <span>{link.label}</span>
          </a>
        ))}
      </nav>
      <p>© 2026 T. Indris Andina</p>
    </footer>
  );
}

export default Footer;