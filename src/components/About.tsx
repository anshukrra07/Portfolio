import { motion } from "framer-motion";

const stack = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "REST APIs",
  "JWT",
  "Responsive UI",
  "GitHub",
  "Postman",
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-grid"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="about-copy">
          <span className="section-label">Initialization</span>
          <h2>I turn ideas into products that feel clear, sharp, and memorable.</h2>
          <p className="section-subtitle">
            I&apos;m a full-stack developer who cares about more than making things work.
            I care about the way people move through an interface, the confidence a
            layout creates, and the polish that makes a portfolio feel worth exploring.
          </p>
          <p className="about-note">
            I like interfaces with structure, systems with clear logic, and products
            that feel considered instead of generic.
          </p>
        </div>

        <div className="about-stack">
          <div className="terminal-card">
            <div className="terminal-bar">
              <span className="terminal-dot terminal-dot-red" />
              <span className="terminal-dot terminal-dot-amber" />
              <span className="terminal-dot terminal-dot-green" />
              <span className="terminal-title">himanshu@portfolio ~</span>
            </div>

            <div className="terminal-body">
              <div>
                <span className="terminal-prompt">$</span>{" "}
                <span className="terminal-command">cat</span>{" "}
                <span className="terminal-file">stack.json</span>
              </div>
              <div className="terminal-object">{"{"}</div>
              <div className="terminal-line">
                <span className="terminal-key">"frontend"</span>:{" "}
                <span className="terminal-value">["React", "TypeScript", "CSS"]</span>,
              </div>
              <div className="terminal-line">
                <span className="terminal-key">"backend"</span>:{" "}
                <span className="terminal-value">["Node.js", "Express", "APIs"]</span>,
              </div>
              <div className="terminal-line">
                <span className="terminal-key">"focus"</span>:{" "}
                <span className="terminal-value">"premium UI with clean execution"</span>
              </div>
              <div className="terminal-object">{"}"}</div>
              <div className="terminal-ready">
                <span className="terminal-prompt">$</span>{" "}
                <span className="terminal-command">echo</span>{" "}
                <span className="terminal-string">"ready to build"</span>
              </div>
            </div>
          </div>

          <div className="stack-cloud">
            {stack.map((item) => (
              <span key={item} className="stack-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
