import heroImg from '../assets/indris-photo.png'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Backend Developer • Fullstack Web Development</p>
        <h1>T. Indris Andina</h1>
        <p className="hero-text">
          Computer Science graduate from Syiah Kuala University (USK) with a
          GPA of 3.45 and a strong focus on Fullstack Web Development,
          especially Backend Development.
        </p>

        <p className="hero-text hero-text-secondary">
          Experienced in designing scalable web applications with RESTful APIs,
          database management, and server-side architecture.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View Projects
          </a>
          <a className="button button-secondary" href="#contact">
            Contact Me
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <strong>3.45</strong>
            <span>GPA</span>
          </div>
          <div>
            <strong>Backend</strong>
            <span>Core Focus</span>
          </div>
          <div>
            <strong>USK</strong>
            <span>Computer Science</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-card">
          <img src={heroImg} alt="Foto T. Indris Andina" />
        </div>
      </div>
    </section>
  )
}

export default Hero