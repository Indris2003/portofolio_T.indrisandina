import { useRef, useState, useEffect } from "react";
import { TbExternalLink, TbChevronDown, TbChevronUp } from "react-icons/tb";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiGoogleappsscript,
  SiGooglesheets,
  SiGoogledrive,
  SiAndroid,
  SiKotlin,
} from "react-icons/si";

import sipidanaImage from "../assets/sipidana.png";
import diazSportImage from "../assets/diazsport.png";
import ppkstkImage from "../assets/tksk.png";
import semaroamImage from "../assets/semaroamm.png";

// Official Brand Colored Icon Components
const GoogleDriveIcon = (props) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M4.43 20.5L8 14.32h14.57L19 20.5H4.43z" fill="#FFBA00" />
    <path d="M1.5 15.5L7.84 4.5h6.33L7.83 15.5H1.5z" fill="#0066DA" />
    <path d="M7.84 4.5L14.17 15.5h8.33L16.17 4.5H7.84z" fill="#00AC47" />
  </svg>
);

const GoogleSheetsIcon = (props) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="#0F9D58" />
    <path d="M7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" fill="#FFFFFF" />
  </svg>
);

const GoogleAppsScriptIcon = (props) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="#4285F4" />
    <path d="M9.4 16.6L4.8 12l4.6-4.6L10.8 8.8 7.6 12l3.2 3.2-1.4 1.4zm5.2 0l-1.4-1.4 3.2-3.2-3.2-3.2 1.4-1.4 4.6 4.6-4.6 4.6z" fill="#FFFFFF" />
  </svg>
);

const KotlinIcon = (props) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" {...props}>
    <defs>
      <linearGradient id="ktGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7F52FF" />
        <stop offset="60%" stopColor="#C757BC" />
        <stop offset="100%" stopColor="#E1725C" />
      </linearGradient>
    </defs>
    <path d="M24 24H0V0h24L12 12z" fill="url(#ktGrad)" />
  </svg>
);

const AndroidIcon = (props) => <SiAndroid color="#3DDC84" {...props} />;
const MongoDBIcon = (props) => <SiMongodb color="#47A248" {...props} />;
const ReactIcon = (props) => <SiReact color="#0088CC" {...props} />;
const NodeIcon = (props) => <SiNodedotjs color="#5FA04E" {...props} />;
const ExpressIcon = (props) => <SiExpress color="#18181B" {...props} />;

const techIconMap = {
  "MongoDB": MongoDBIcon,
  "Express.js": ExpressIcon,
  "React.js": ReactIcon,
  "Node.js": NodeIcon,
  "Google Apps Script": GoogleAppsScriptIcon,
  "Google Spreadsheet": GoogleSheetsIcon,
  "Google Drive": GoogleDriveIcon,
  "Android": AndroidIcon,
  "Kotlin": KotlinIcon,
};

const projects = [
  {
    title: "Diaz Sport Center",
    description:
      "Backend REST API untuk sistem pemesanan lapangan olahraga yang menggantikan proses manual berbasis WhatsApp di Diaz Sport Center. Dibangun dengan Express.js, MongoDB Atlas, dan Mongoose ODM, sistem ini menangani autentikasi multi-role, mekanisme concurrency control untuk mencegah double-booking, serta alur pembayaran end-to-end. Diuji dengan 39 endpoint API dan performance testing hingga 100 concurrent users dengan error rate hanya 0.15%.",
    image: diazSportImage,
    demo: "https://tugasakhir-chi.vercel.app/",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    title: "Si-Pidana-Q",
    description:
      "Sistem Informasi Kasus Qanun Terintegrasi yang dikembangkan untuk Satpol PP & WH Kota Banda Aceh. Aplikasi berbasis Google Apps Script dan Google Workspace Infrastructure ini memfasilitasi pencatatan digital kasus pelanggaran Qanun, pengarsipan dokumen barang bukti ke Google Drive, serta rekapitulasi data pelanggaran secara otomatis dan real-time dalam Google Spreadsheet.",
    image: sipidanaImage,
    demo: "https://script.google.com/macros/s/AKfycbxqz9bk9fK5jFXsTxcKkNlut7eIZi6I9M3LYlj-1nAVIATi3LkR9CKmggUCVIZDyB-Z/exec",
    tags: ["Google Apps Script", "Google Spreadsheet", "Google Drive"],
  },
  {
    title: "PPKS & TKSK",
    description:
      "Sistem Layanan Persyaratan Kesejahteraan Sosial untuk Dinas Sosial Provinsi Aceh. Dirancang dengan arsitektur MERN Stack (MongoDB, Express.js, React.js, Node.js), sistem ini mengelola pengajuan bantuan bagi Pemerlu Pelayanan Kesejahteraan Sosial (PPKS) dan Tenaga Kesejahteraan Sosial Kecamatan (TKSK) melalui alur persetujuan multi-level, validasi dokumen digital, serta kontrol akses berbasis peran (RBAC).",
    image: ppkstkImage,
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    title: "Semaroam",
    description:
      "Aplikasi Mobile Rekomendasi Destinasi Wisata di Kota Semarang yang dikembangkan menggunakan bahasa Kotlin dan Android SDK. Berkolaborasi dalam tim pada program Bangkit Academy, aplikasi ini mengintegrasikan model Machine Learning untuk kategorisasi rekomendasi tempat wisata secara presisi, riwayat kunjungan, serta sistem rating interaktif bagi para wisatawan.",
    image: semaroamImage,
    tags: ["Android", "Kotlin"],
  },
];

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongText = project.description.length > 100;

  return (
    <article className="project-card">
      {project.image && (
        project.demo ? (
          <a
            className="project-media is-link"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            <img src={project.image} alt={project.title} />
            <span className="project-media-badge">
              <span>Live Demo</span>
              <TbExternalLink size={14} />
            </span>
          </a>
        ) : (
          <div className="project-media">
            <img src={project.image} alt={project.title} />
          </div>
        )
      )}

      <div className="project-card-header">
        <h3>{project.title}</h3>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="project-live-link"
            title="Open Live Demo"
          >
            <TbExternalLink size={17} />
          </a>
        )}
      </div>

      <div className="project-description-wrapper">
        <p className={`project-description-text ${isExpanded ? "is-expanded" : ""}`}>
          {project.description}
        </p>
        {isLongText && (
          <button
            type="button"
            className="project-read-more-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span>{isExpanded ? "Lihat Lebih Sedikit" : "Lihat Selengkapnya"}</span>
            {isExpanded ? <TbChevronUp size={14} /> : <TbChevronDown size={14} />}
          </button>
        )}
      </div>

      <div className="project-tags-container">
        {project.tags.map((tag) => {
          const IconComponent = techIconMap[tag];
          return (
            <span className="project-tech-pill" key={tag}>
              {IconComponent ? <IconComponent className="project-tech-icon" /> : null}
              <span>{tag}</span>
            </span>
          );
        })}
      </div>
    </article>
  );
}







function Projects() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth > 768 : false
  );

  // Mouse drag-to-swipe state for desktop
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = slider.querySelectorAll(".project-card-wrapper");
    if (!cards.length) return;

    const cardWidth = cards[0].offsetWidth;
    const gap = isDesktop ? 28 : 16;
    const scrollPos = slider.scrollLeft;
    
    // Calculate active index (step of 2 on desktop, step of 1 on mobile)
    const step = isDesktop ? 2 : 1;
    const calculatedIndex = Math.round(scrollPos / ((cardWidth + gap) * step)) * step;

    if (calculatedIndex >= 0 && calculatedIndex < projects.length && calculatedIndex !== activeIndex) {
      setActiveIndex(calculatedIndex);
    }
  };

  const scrollToProject = (targetIndex) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = slider.querySelectorAll(".project-card-wrapper");
    if (!cards.length || !cards[targetIndex]) return;

    slider.scrollTo({
      left: cards[targetIndex].offsetLeft,
      behavior: "smooth",
    });
    setActiveIndex(targetIndex);
  };

  // Mouse drag-to-swipe handlers for desktop
  const handleMouseDown = (e) => {
    const slider = sliderRef.current;
    if (!slider) return;
    setIsDragging(true);
    setStartX(e.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const slider = sliderRef.current;
    if (!slider) return;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="content-section" id="projects">
      <div className="section-heading">
        <span className="section-page-badge">PROJECTS</span>
        <h2>Featured Projects</h2>
      </div>

      <div className="project-slider-wrapper">
        <div
          className={`project-grid ${isDragging ? "is-dragging" : ""}`}
          ref={sliderRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
        >
          {projects.map((project) => (
            <div className="project-card-wrapper" key={project.title}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* PAGINATION DOTS (2 ON DESKTOP, 4 ON MOBILE) */}
        <div className="project-dots-container">
          {isDesktop ? (
            <>
              <button
                type="button"
                className={`project-dot ${activeIndex < 2 ? "is-active" : ""}`}
                onClick={() => scrollToProject(0)}
                aria-label="Page 1 (Projects 1 & 2)"
              />
              <button
                type="button"
                className={`project-dot ${activeIndex >= 2 ? "is-active" : ""}`}
                onClick={() => scrollToProject(2)}
                aria-label="Page 2 (Projects 3 & 4)"
              />
            </>
          ) : (
            projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                className={`project-dot ${activeIndex === index ? "is-active" : ""}`}
                onClick={() => scrollToProject(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;