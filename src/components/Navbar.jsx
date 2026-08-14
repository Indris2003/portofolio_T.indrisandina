import { useState, useEffect, useRef, useCallback } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(navLinks[0].href);

  const pillRef = useRef(null);
  const tabRefs = useRef({});

  const mobilePillRef = useRef(null);
  const mobileTabRefs = useRef({});

  const isClickScrolling = useRef(false);

  const updatePillsPosition = useCallback((href, snap = false) => {
    // Desktop horizontal pill
    const tabEl = tabRefs.current[href];
    const pill = pillRef.current;
    if (tabEl && pill) {
      if (snap) pill.style.transition = "none";

      pill.style.transform = `translateX(${tabEl.offsetLeft}px)`;
      pill.style.width = `${tabEl.offsetWidth}px`;
      pill.style.height = `${tabEl.offsetHeight}px`;
      pill.style.top = `${tabEl.offsetTop}px`;

      if (snap) {
        void pill.offsetHeight;
        pill.style.transition = "";
      }
    }

    // Mobile sidebar vertical pill
    const mobileTabEl = mobileTabRefs.current[href];
    const mobilePill = mobilePillRef.current;
    if (mobileTabEl && mobilePill) {
      if (snap) mobilePill.style.transition = "none";

      mobilePill.style.transform = `translateY(${mobileTabEl.offsetTop}px)`;
      mobilePill.style.height = `${mobileTabEl.offsetHeight}px`;
      mobilePill.style.width = `${mobileTabEl.offsetWidth}px`;
      mobilePill.style.left = `${mobileTabEl.offsetLeft}px`;

      if (snap) {
        void mobilePill.offsetHeight;
        mobilePill.style.transition = "";
      }
    }
  }, []);

  // Update pills position when activeTab changes
  useEffect(() => {
    updatePillsPosition(activeTab, false);
  }, [activeTab, updatePillsPosition]);

  // Initial paint snap, resize, & font load listener
  useEffect(() => {
    updatePillsPosition(activeTab, true);

    const handleResize = () => {
      updatePillsPosition(activeTab, true);
    };

    window.addEventListener("resize", handleResize);

    if (document.fonts) {
      document.fonts.ready.then(() => {
        updatePillsPosition(activeTab, true);
      });
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeTab, updatePillsPosition]);

  // Update mobile pill when sidebar opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        updatePillsPosition(activeTab, true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen, activeTab, updatePillsPosition]);

  // Scroll active section tracking with IntersectionObserver
  useEffect(() => {
    const sectionElements = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((prev, curr) =>
            curr.intersectionRatio > prev.intersectionRatio ? curr : prev
          );
          const activeHref = `#${mostVisible.target.id}`;
          setActiveTab(activeHref);
        }
      },
      {
        rootMargin: "-20% 0px -50% 0px",
        threshold: [0.1, 0.3, 0.5, 0.8],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleScroll = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveTab(href);
    updatePillsPosition(href, false);

    isClickScrolling.current = true;
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);

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
          <div className="t-tabs" role="tablist">
            <span className="t-tabs-pill" ref={pillRef} aria-hidden="true" />
            {navLinks.map((link) => {
              const isSelected = activeTab === link.href;
              return (
                <button
                  key={link.href}
                  ref={(el) => (tabRefs.current[link.href] = el)}
                  className="t-tab"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={(e) => handleScroll(e, link.href)}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
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

      {/* Mobile Floating Menu Sheet with Vertical Sliding Tabs */}
      <aside className={`nav-sidebar ${isOpen ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation" className="sidebar-links">
          <div className="t-tabs-vertical" role="tablist">
            <span
              className="t-tabs-pill mobile-pill"
              ref={mobilePillRef}
              aria-hidden="true"
            />
            {navLinks.map((link) => {
              const isSelected = activeTab === link.href;
              return (
                <button
                  key={link.href}
                  ref={(el) => (mobileTabRefs.current[link.href] = el)}
                  className="t-tab sidebar-link-item"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={(e) => handleScroll(e, link.href)}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
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