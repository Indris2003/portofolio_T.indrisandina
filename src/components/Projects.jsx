import { useRef } from "react";

import sipidanaImage from "../assets/sipidana.png";
import diazSportImage from "../assets/diazsport.png";
import ppkstkImage from "../assets/tksk.png";
import semaroamImage from "../assets/semaroamm.png";

const projects = [
  {
    title: "Diaz Sport Center",
    description:
      "Online field booking system built with MERN Stack, featuring scheduling, availability, booking, payment workflows, authentication, and MongoDB optimization.",
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

function Projects() {
  const sliderRef = useRef(null);

  const handleSlide = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "next" ? 350 : -350,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="content-section" id="projects">

      <div className="section-heading">
        <h2>Projects</h2>
      </div>


      <div className="project-slider-wrapper">

        {/* BUTTON LEFT */}
        <button
          className="project-slide-btn prev"
          onClick={() => handleSlide("prev")}
          aria-label="Previous project"
        >
          ‹
        </button>


        <div className="project-grid" ref={sliderRef}>

          {projects.map((project) => (
            <article className="project-card" key={project.title}>

              {/* IMAGE */}
              {project.image ? (
                project.demo ? (
                  <a
                    className="project-media is-link"
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    title={`View live demo for ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                    />
                  </a>
                ) : (
                  <div className="project-media">
                    <img
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                )
              ) : null}


              {/* TITLE */}
              <h3>
                {project.title}
              </h3>


              {/* DESCRIPTION */}
              <p>
                {project.description}
              </p>


              {/* TAGS */}
              {project.tags && project.tags.length > 0 && (
                <div className="project-tags-container">

                  {project.tags.map((tag) => (
                    <span
                      className="project-tech-pill"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}

                </div>
              )}

            </article>
          ))}

        </div>


        {/* BUTTON RIGHT */}
        <button
          className="project-slide-btn next"
          onClick={() => handleSlide("next")}
          aria-label="Next project"
        >
          ›
        </button>

      </div>

    </section>
  );
}

export default Projects;