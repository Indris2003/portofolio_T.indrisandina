import sipidanaImage from '../assets/sipidana.png'
import diazSportImage from '../assets/diazsport.png'

const projects = [
  {
    title: 'Diaz Sport Center',
    description:
      'Online field booking system built with MERN Stack, featuring scheduling, availability, booking, payment workflows, authentication, and MongoDB optimization.',
    image: diazSportImage,
    demo: 'https://tugasakhir-chi.vercel.app/',
    // Ubah menjadi array
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'], 
  },
  {
    title: 'Si-Pidana-Q',
    description: 'Integrated Qanun case information system for Banda Aceh Satpol PP & WH.',
    image: sipidanaImage,
    demo: 'https://script.google.com/macros/s/AKfycbxqz9bk9fK5jFXsTxcKkNlut7eIZi6I9M3LYlj-1nAVIATi3LkR9CKmggUCVIZDyB-Z/exec',
    // Bisa 2 tag atau lebih
    tags: ['Google Apps Script', 'Google Spreadsheet', 'Google Drive'], 
  },
  {
    title: 'PPKS & TKSK',
    description:
      'Social welfare service requirement system for Aceh Social Services Office with role-based access, approval workflows, and data validation.',
     tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  },
  {
    title: 'Semaroam',
    description:
      'Tourism recommendation application for Semarang that integrates machine learning categorization, attraction history, and visitor ratings.',
    tags: ['Android', 'Kotlin'],
  },
]

function Projects() {
  return (
    <section className="content-section" id="projects">
      <div className="section-heading">
        <h2>Projects</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            
            {/* GAMBAR MENJADI LINK JIKA ADA DEMO */}
            {project.image ? (
              project.demo ? (
                <a 
                  className="project-media is-link" 
                  href={project.demo} 
                  target="_blank" 
                  rel="noreferrer"
                  title={`View live demo for ${project.title}`}
                >
                  <img src={project.image} alt={project.title} />
                </a>
              ) : (
                <div className="project-media">
                  <img src={project.image} alt={project.title} />
                </div>
              )
            ) : null}

            {/* Judul dan Deskripsi */}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
            {/* RENDER BANYAK TAG SEKALIGUS */}
            {project.tags && project.tags.length > 0 ? (
              <div className="project-tags-container">
                {project.tags.map((tag, index) => (
                  <span className="project-tech-pill" key={index}>
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
            
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects