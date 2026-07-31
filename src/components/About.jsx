function About() {
  return (
    <section className="content-section" id="about">
      <div className="section-heading">
        <h2>About Me</h2>
      </div>

      <div className="about-card-wrap">
        <div className="about-grid">
          <article className="about-card about-card-full">
            <p>
              Informatics graduate from Universitas Syiah Kuala, focused on backend and fullstack web development. Builds scalable, secure web applications — from RESTful APIs to server-side architecture — with solid frontend skills to match. Driven by solving complex problems and collaborating across teams to ship quality software.
            </p>
          </article>


          <article className="about-card">
            <span className="about-card-label">Education</span>
            <strong>Syiah Kuala University</strong>
            <span>Informatics</span>
          </article>

          <article className="about-card">
            <span className="about-card-label">Focus</span>
            <strong>Backend Developer</strong>
            <span>RESTful APIs • MongoDB • Node.js • PostgreSQL • TypeScript</span>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About