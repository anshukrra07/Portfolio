const skillGroups = [
  {
    title: "Frontend systems",
    description:
      "Interfaces that feel intentional, responsive, and easy to move through.",
    skills: ["React", "TypeScript", "JavaScript", "Responsive UI", "CSS"],
  },
  {
    title: "Backend delivery",
    description:
      "Application logic, APIs, authentication, and structured data flow.",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "MongoDB", "MySQL"],
  },
  {
    title: "Product mindset",
    description:
      "I think about layout, trust, navigation, and how real users understand a page.",
    skills: ["UX thinking", "Information hierarchy", "Reusable components", "Performance focus"],
  },
  {
    title: "Tools I rely on",
    description:
      "The workflow stack I use to design, build, test, and iterate quickly.",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Problem solving"],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-heading">
        <span className="section-label">Core systems</span>
        <h2>The mix of skills behind the experience.</h2>
        <p className="section-subtitle">
          Good portfolios are not only pretty. They need structure, logic, usability,
          and the engineering discipline to make the design hold up in production.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="skill-card">
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
