import { useRef, useState } from "react";
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

const techIconMap = {
  "MongoDB": SiMongodb,
  "Express.js": SiExpress,
  "React.js": SiReact,
  "Node.js": SiNodedotjs,
  "Google Apps Script": SiGoogleappsscript,
  "Google Spreadsheet": SiGooglesheets,
  "Google Drive": SiGoogledrive,
  "Android": SiAndroid,
  "Kotlin": SiKotlin,
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
      "Integrated Qanun case information system for Banda Aceh Satpol PP & WH.",
    image: sipidanaImage,
    demo: "https://script.google.com/macros/s/AKfycbxqz9bk9fK5jFXsTxcKkNlut7eIZi6I9M3LYlj-1nAVIATi3LkR9CKmggUCVIZDyB-Z/exec",
    tags: ["Google Apps Script", "Google Spreadsheet", "Google Drive"],
  },
  {
    title: "PPKS & TKSK",
    description:
      "Social welfare service requirement system for Aceh Social Services Office with role-based access, approval workflows, and data validation.",
    image: ppkstkImage,
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    title: "Semaroam",
    description:
      "Tourism recommendation application for Semarang that integrates machine learning categorization, attraction history, and visitor ratings.",
    image: semaroamImage,
    tags: ["Android", "Kotlin"],
  },
];

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 120;
  const isLongText = project.description.length > maxLength;

  const displayedText = isExpanded || !isLongText
    ? project.description
    : `${project.description.slice(0, maxLength).trim()}...`;

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
        <p className="project-description-text">{displayedText}</p>
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
          const Icon = techIconMap[tag];
          return (
            <span className="project-tech-pill" key={tag}>
              {Icon ? <Icon className="project-tech-icon" /> : null}
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

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = slider.querySelectorAll(".project-card");
    if (!cards.length) return;

    const cardWidth = cards[0].offsetWidth;
    const gap = 16;
    const scrollLeft = slider.scrollLeft;
    const index = Math.round(scrollLeft / (cardWidth + gap));

    if (index >= 0 && index < projects.length && index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const scrollToProject = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = slider.querySelectorAll(".project-card");
    if (!cards.length) return;

    const cardWidth = cards[0].offsetWidth;
    const gap = 16;

    slider.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <section className="content-section" id="projects">
      <div className="section-heading">
        <span className="section-page-badge">PROJECTS</span>
        <h2>Featured Projects</h2>
      </div>

      <div className="project-slider-wrapper">
        <div className="project-grid" ref={sliderRef} onScroll={handleScroll}>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>

        <div className="project-dots-container">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              className={`project-dot ${activeIndex === index ? "is-active" : ""}`}
              onClick={() => scrollToProject(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;