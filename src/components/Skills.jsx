import { useState, useEffect, useRef } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiKotlin,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPostman,
  SiGit,
  SiGithub,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";
import { TbApi, TbRefresh } from "react-icons/tb";

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
    title: "Backend & API",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Laravel", icon: SiLaravel },
      { name: "RESTful APIs", icon: TbApi },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB Atlas", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Testing & Workflow",
    items: [
      { name: "Postman", icon: SiPostman },
      { name: "Scrum / Agile", icon: TbRefresh },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: SiReact },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
];

const categoryClassMap = {
  "Programming Languages": "skill-group-programming",
  "Backend & API": "skill-group-backend",
  "Databases": "skill-group-databases",
  "Testing & Workflow": "skill-group-testing",
  "Frontend": "skill-group-frontend",
};

const skillBrandMap = {
  "JavaScript": "#F7DF1E",
  "TypeScript": "#3178C6",
  "PHP": "#777BB4",
  "Kotlin": "#7F52FF",
  "HTML": "#E34F26",
  "CSS": "#1572B6",
  "Node.js": "#5FA04E",
  "Express.js": "#18181B",
  "Laravel": "#FF2D20",
  "RESTful APIs": "#0284C7",
  "MongoDB Atlas": "#47A248",
  "PostgreSQL": "#4169E1",
  "MySQL": "#4479A1",
  "Postman": "#FF6C37",
  "Scrum / Agile": "#6366F1",
  "Git": "#F05032",
  "GitHub": "#18181B",
  "React.js": "#0088CC",
  "Bootstrap": "#7952B3",
  "Tailwind CSS": "#06B6D4",
};

const hexToRgba = (hex, alpha = 0.14) => {
  if (!hex || !hex.startsWith('#')) return `rgba(9, 9, 11, ${alpha})`;
  let c = hex.substring(1);
  if (c.length === 3) c = c.split('').map((x) => x + x).join('');
  const num = parseInt(c, 16);
  return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${alpha})`;
};

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="content-section" id="skills">
      <div className="section-heading">
        <span className="section-page-badge">SKILLS</span>
        <h2>Technical Skills</h2>
      </div>

      <div className="skill-groups" ref={sectionRef}>
        {skillGroups.map((group, index) => {
          const categoryClass = categoryClassMap[group.title] || "";

          return (
            <article
              className={`skill-group ${categoryClass} ${isVisible ? "is-visible" : ""}`}
              key={group.title}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3><span>{group.title}</span></h3>

              <div className="skill-list">
                {group.items.map((skill) => {
                  const Icon = skill.icon;
                  const brandColor = skillBrandMap[skill.name] || "#09090b";
                  const bgCircleColor = hexToRgba(brandColor, 0.14);

                  return (
                    <span key={skill.name} className="skill-pill">
                      <span
                        className="skill-icon-circle"
                        style={{ backgroundColor: bgCircleColor }}
                      >
                        <Icon className="skill-pill-icon" size={15} style={{ color: brandColor }} />
                      </span>
                      <span>{skill.name}</span>
                    </span>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;