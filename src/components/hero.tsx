import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import resume from "../assets/resume-14.pdf";

const heroSignals = ["10+ hackathons", "4 wins", "5 polished builds"];

const heroPreviewItems = [
  { label: "Stack", value: "MERN + AI-enabled builds" },
  { label: "Proof", value: "Live demos + shipped flows" },
  { label: "Focus", value: "UI clarity · trust · motion" },
];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-spotlight" aria-hidden="true" />

      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Availability badge */}
        <span className="hero-kicker">
          <span className="kicker-dot" aria-hidden="true" />
          Available for internships &amp; full-time roles
        </span>

        <p className="hero-eyebrow">Full-stack developer · UI-focused · hackathon-tested</p>

        <h1 className="hero-title">
          <span className="hero-line">HIMANSHU</span>
          <span className="hero-line hero-line-accent">KUMAR</span>
          <span className="hero-line hero-line-meta">
            clean interfaces · real product flows
          </span>
        </h1>

        <p className="hero-lead">
          I build full-stack products that feel sharp to use and solid underneath,
          from AI commerce and campus wellness to security dashboards and product-style UI.
        </p>

        <div className="hero-signal-row" aria-label="Primary strengths">
          {heroSignals.map((signal) => (
            <span key={signal} className="hero-signal-chip">
              {signal}
            </span>
          ))}
        </div>

        <div className="hero-actions">
          <a className="btn primary" href="#projects">
            View my work
          </a>
          <a className="btn secondary" href="#contact">
            Let&apos;s talk
          </a>
          <a className="btn tertiary" href={resume} target="_blank" rel="noreferrer">
            Open resume
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
      >
        <div className="hero-visual-shell">
          <div className="hero-orbit hero-orbit-large" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-small" aria-hidden="true" />
          <div className="hero-grid-panel" aria-hidden="true" />

          <div className="portrait-frame">
            <div className="portrait-glow" aria-hidden="true" />
            <img src={profile} alt="Himanshu Kumar portrait" />
          </div>

          <div className="floating-note floating-note-top">
            <span>Competition-built</span>
            <strong>10+ hackathons · 4 wins</strong>
          </div>

          <div className="floating-note floating-note-bottom">
            <span>GitHub footprint</span>
            <strong>9 public repos · live demos</strong>
          </div>

          <div className="hero-preview-card">
            <div className="hero-preview-top">
              <span className="hero-preview-pill">Stack signal</span>
              <span className="hero-preview-status">Live</span>
            </div>
            <div className="hero-preview-list">
              {heroPreviewItems.map((item) => (
                <div key={item.label} className="hero-preview-row">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-signal-card">
            <span className="hero-signal-label">Live signal</span>
            <div className="hero-signal-bar">
              <span />
              <span />
              <span />
            </div>
            <strong>Built to ship, not just showcase</strong>
          </div>
        </div>
      </motion.div>

      <div className="hero-scroll">
        <span className="scroll-line" aria-hidden="true" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
