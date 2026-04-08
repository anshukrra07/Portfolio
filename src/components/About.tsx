import { motion } from "framer-motion";

const stack = [
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Python",
  "FastAPI",
  "REST APIs",
  "JWT",
  "ChromaDB",
  "Sentence Transformers",
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
            I&apos;m a full-stack developer who likes building products people can
            actually use, not just admire. My GitHub work spans AI-assisted commerce,
            campus wellness, security dashboards, travel interfaces, and cleaner
            product-style UI systems.
          </p>
          <p className="about-note">
            I&apos;ve also taken part in 10+ hackathons and won 4 of them, which taught
            me to move quickly, trim the fluff, and ship the strongest version of an idea.
          </p>

          {/* Education block */}
          <div className="education-block">
            <span className="education-label">Education</span>
            <div className="education-card">
              <div className="education-row">
                <strong>B.Tech · Computer Science &amp; Engineering</strong>
                <span className="education-badge">2022 – 2026</span>
              </div>
              <p>Vignan&apos;s Foundation for Science, Technology &amp; Research · Andhra Pradesh</p>
              <div className="education-meta">
                <span>CGPA <strong>7.28</strong></span>
                <span>·</span>
                <span>AI / ML focus</span>
              </div>
            </div>
          </div>
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
                <span className="terminal-value">["Node.js", "Express", "FastAPI"]</span>,
              </div>
              <div className="terminal-line">
                <span className="terminal-key">"ai_ml"</span>:{" "}
                <span className="terminal-value">["Gemini", "ChromaDB", "FastAPI"]</span>,
              </div>
              <div className="terminal-line">
                <span className="terminal-key">"focus"</span>:{" "}
                <span className="terminal-value">"full-stack · UI systems · AI products"</span>,
              </div>
              <div className="terminal-line">
                <span className="terminal-key">"signal"</span>:{" "}
                <span className="terminal-value">"10+ hackathons · 4 wins"</span>
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
