import { motion } from "framer-motion";
import resume from "../assets/resume-14.pdf";

const resumeHighlights = [
  "Full-stack projects with real-world product flows",
  "Responsive UI work with attention to clarity and polish",
  "Backend fundamentals including APIs, auth, and data handling",
];

export default function Resume() {
  return (
    <section className="resume-section" id="resume">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="section-label">Resume</span>
        <h2>A concise version of the story behind the work.</h2>
        <p className="section-subtitle">
          For recruiters and collaborators who want the faster overview before
          diving deeper into my projects and profiles.
        </p>
      </motion.div>

      <motion.div
        className="resume-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.48, delay: 0.08 }}
      >
        <div className="resume-card-copy">
          <h3>What you&apos;ll find inside</h3>
          <ul className="resume-highlights">
            {resumeHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="resume-actions">
          <a href={resume} target="_blank" rel="noreferrer" className="btn primary">
            Open resume
          </a>
          <a href={resume} download className="btn secondary">
            Download PDF
          </a>
        </div>
      </motion.div>
    </section>
  );
}
