import sipidanaImage from '../assets/sipidana.png'
import diazSportImage from '../assets/diazsport.png'

const projects = [
  {
    title: 'Diaz Sport Center',
    description:
      'Online field booking system built with MERN Stack, featuring scheduling, availability, booking, payment workflows, authentication, and MongoDB optimization.',
    image: diazSportImage,
    demo: 'https://tugasakhir-chi.vercel.app/',
    tag: 'MERN Stack',
  },
  {
    title: 'Si-Pidana-Q',
    description: 'Integrated Qanun case information system for Banda Aceh Satpol PP & WH, using Google Sheets, Google Drive, and Google Apps Script automation.',
    image: sipidanaImage,
    demo: 'https://script.google.com/macros/s/AKfycbxqz9bk9fK5jFXsTxcKkNlut7eIZi6I9M3LYlj-1nAVIATi3LkR9CKmggUCVIZDyB-Z/exec',
    tag: 'Automation',
  },
  {
    title: 'PPKS & TKSK',
    description:
      'Social welfare service requirement system for Aceh Social Services Office with role-based access, approval workflows, and data validation.',
    tag: 'Express.js',
  },
  {
    title: 'Semaroam',
    description:
      'Tourism recommendation application for Semarang that integrates machine learning categorization, attraction history, and visitor ratings.',
    tag: 'Android',
  },
]

function Projects() {
  return (
    <section className="content-section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Selected Projects</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            {project.image ? (
              <div className="project-media">
                <img src={project.image} alt={project.title} />
              </div>
            ) : null}
            <span className="project-tag">{project.tag}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.demo ? (
              <a className="project-demo" href={project.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects