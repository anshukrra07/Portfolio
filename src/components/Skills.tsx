const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "REST APIs", "Postman"],
  },
];

export default function Skills() {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <p className="section-subtitle">
        Technologies I use to build scalable, maintainable applications.
      </p>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-card">
            <h3>{group.title}</h3>
            <div className="skill-list">
              {group.skills.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}