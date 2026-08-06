import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiKotlin,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiLaravel,
  SiBootstrap,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skillGroups = [
  {
    title: "Programming Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "PHP", icon: SiPhp },
      { name: "Kotlin", icon: SiKotlin },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "RESTful APIs", icon: TbApi },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: SiReact },
      { name: "Laravel", icon: SiLaravel },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Databases & Tools",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
    ],
  },
];

function Skills() {
  return (
    <section className="content-section" id="skills">
      <div className="section-heading">
        <h2>Technical Skills</h2>
      </div>

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.items.map((skill) => {
                const Icon = skill.icon;

                return (
                  <span key={skill.name} className="skill-pill">
                    <Icon className="skill-pill-icon" size={18} />
                    <span>{skill.name}</span>
                  </span>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;