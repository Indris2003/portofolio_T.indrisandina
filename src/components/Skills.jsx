const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['JavaScript', 'TypeScript', 'PHP', 'Kotlin', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication', 'Mongoose ODM'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'Laravel', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'Databases & Tools',
    items: ['MongoDB', 'PostgreSQL', 'Git', 'GitHub', 'Postman', 'Canva'],
  },
]

function Skills() {
  return (
    <section className="content-section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>Technical Skills</h2>
      </div>

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-list">
              {group.items.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills