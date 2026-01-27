const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript"],
  },
  {
    title: "Web & Application Development",
    skills: ["HTML", "CSS", "React (Basic)", "Node.js (Basic)", "Express.js (Basic)"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Cyber & Technology Risk",
    skills: [
      "Authentication & Authorization (JWT)",
      "Role-Based Access Control (RBAC)",
      "Session Management",
      "Secure SDLC",
      "Data Validation",
      "Application-Level Security Controls",
    ],
  },
  {
    title: "Risk & Compliance",
    skills: [
      "Technology Risk Awareness",
      "IT General Controls (ITGC - Basic)",
      "Compliance & Regulatory Awareness",
      "Control Evaluation (Foundational)",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "REST APIs", "VS Code"],
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