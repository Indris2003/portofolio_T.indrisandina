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

const skillBrandMap = {
  "JavaScript": "#F7DF1E",
  "TypeScript": "#3178C6",
  "PHP": "#777BB4",
  "Kotlin": "#7F52FF",
  "HTML": "#E34F26",
  "CSS": "#1572B6",
  "Node.js": "#5FA04E",
  "Express.js": "#18181B",
  "RESTful APIs": "#0284C7",
  "React.js": "#0088CC",
  "Laravel": "#FF2D20",
  "Bootstrap": "#7952B3",
  "Tailwind CSS": "#06B6D4",
  "MongoDB": "#47A248",
  "PostgreSQL": "#4169E1",
  "Git": "#F05032",
  "GitHub": "#18181B",
  "Postman": "#FF6C37",
};

function Skills() {
  return (
    <section className="content-section" id="skills">
      <div className="section-heading">
        <span className="section-page-badge">SKILLS</span>
        <h2>Technical Skills</h2>
      </div>

      <div className="skill-groups">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.items.map((skill) => {
                const Icon = skill.icon;
                const brandColor = skillBrandMap[skill.name] || "#09090b";

                return (
                  <span key={skill.name} className="skill-pill">
                    <Icon className="skill-pill-icon" size={19} style={{ color: brandColor }} />
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