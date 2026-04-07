import { motion } from "framer-motion";

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
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="section-label">Core systems</span>
        <h2>The mix of skills behind the experience.</h2>
        <p className="section-subtitle">
          Good portfolios are not only pretty. They need structure, logic, usability,
          and the engineering discipline to make the design hold up in production.
        </p>
      </motion.div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            className="skill-card"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.42, delay: index * 0.08 }}
          >
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
