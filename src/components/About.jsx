function About() {
  return (
    <section className="content-section" id="about">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>About Me</h2>
      </div>

      <div className="about-grid">
        <p>
          I am a Computer Science graduate from Syiah Kuala University (USK)
          with a GPA of 3.45. My background is in Fullstack Web Development,
          with a primary focus on Backend Development.
        </p>
        <p>
          I build scalable, secure, and maintainable web applications, from
          RESTful API design and database management to server-side
          architecture.
        </p>
        <div className="about-card">
          <span className="about-card-label">Education</span>
          <strong>Syiah Kuala University</strong>
          <span>Computer Science • GPA 3.45</span>
        </div>
        <div className="about-card">
          <span className="about-card-label">Focus</span>
          <strong>Backend Engineering</strong>
          <span>RESTful APIs • MongoDB • Node.js • PostgreSQL • TypeScript</span>
        </div>
      </div>
    </section>
  )
}

export default About