function About() {
  return (
    <section className="content-section" id="about">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>About Me</h2>
      </div>

      <div className="about-card-wrap">
        <div className="about-grid">
          <article className="about-card about-card-full">
            <p>
              Informatics graduate from Universitas Syiah Kuala, focused on backend and fullstack web development.
              I build scalable, secure web applications — from RESTful APIs and database design to server-side
              architecture — with solid frontend skills to bring it all together.
            </p>
            <p>
              Currently open to backend, fullstack, and web application opportunities where I can contribute to
              real-world products, keep learning new technologies, and collaborate closely with cross-functional
              teams to ship reliable software.
            </p>
          </article>

          <article className="about-card">
            <span className="about-card-label">Education</span>
            <strong>Syiah Kuala University</strong>
            <span>Bachelor of Computer</span>
          </article>

          <article className="about-card">
            <span className="about-card-label">Focus</span>
            <strong>Backend Developer</strong>
            <span>RESTful APIs • MongoDB • Node.js • PostgreSQL</span>
          </article>

          <article className="about-card">
            <span className="about-card-label">Experience</span>
            <strong>2 Internships</strong>
            <span>Mobile &amp; Backend Development</span>
          </article>

          <article className="about-card">
            <span className="about-card-label">Availability</span>
            <strong>Open to Work</strong>
            <span>Backend / Fullstack roles</span>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About