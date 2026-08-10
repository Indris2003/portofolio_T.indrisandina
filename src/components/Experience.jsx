const experiences = [
  {
    role: 'Software Developer',
    company: 'Syiah Kuala University',
    period: 'Aug 2026 – Present',
    points: [],
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
]

function Experience() {
  return (
    <section className="content-section section-dark" id="experience">
      <div className="section-heading">
        <span className="section-page-badge">EXPERIENCE</span>
        <h2>Experience</h2>
      </div>

      <div className="timeline">
        {experiences.map((experience, index) => (
          <div
            className="timeline-row"
            key={`${experience.company}-${experience.role}`}
          >
            <div className="timeline-marker">
              <span className="timeline-dot" />
              {index !== experiences.length - 1 && (
                <span className="timeline-line" />
              )}
            </div>

            <article className="timeline-item">
              <div className="timeline-meta">
                <span>{experience.period}</span>
              </div>
              <div className="timeline-content">
                <h3>{experience.company}</h3>
                <p className="timeline-role">{experience.role}</p>
                {experience.points && experience.points.length > 0 && (
                  <ul>
                    {experience.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience