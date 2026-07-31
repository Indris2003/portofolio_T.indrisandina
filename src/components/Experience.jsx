const experiences = [
  {
    role: 'Mobile Development',
    company: 'Bangkit Academy',
    period: 'Feb 2024 – Jun 2024',
    points: [
      'Developed expertise in mobile app development using Kotlin through hands-on projects.',
      'Collaborated on the final project Semaroam, a travel recommendation app for Semarang.',
      'Improved problem-solving and app performance optimization skills while ensuring a user-friendly interface.',
    ],
  },
  {
    role: 'Backend Developer Intern',
    company: 'Aceh Provincial Social Affairs Office',
    period: 'Jul 2024 – Aug 2024',
    points: [
      'Developed backend services using Node.js and Express.js.',
      'Designed MongoDB database schemas and optimized data management workflows.',
      'Built RESTful APIs with validation and authentication mechanisms for secure and scalable processing.',
    ],
  },
]

function Experience() {
  return (
    <section className="content-section" id="experience">
      <div className="section-heading">
        <h2>Experience</h2>
      </div>

      <div className="timeline">
        {experiences.map((experience) => (
          <article className="timeline-item" key={`${experience.company}-${experience.role}`}>
            <div className="timeline-meta">
              <span>{experience.period}</span>
            </div>
            <div className="timeline-content">
              <h3>{experience.company}</h3>
              <p className="timeline-role">{experience.role}</p>
              <ul>
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Experience