import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import resume from "../assets/resume-14.pdf";

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
        <span className="hero-kicker">Available for internships and impactful product work</span>
        <p className="hero-eyebrow">Full-stack developer · UI systems · product mindset</p>

        <h1 className="hero-title">
          <span className="hero-line">HIMANSHU</span>
          <span className="hero-line hero-line-accent">BUILDS EXPERIENCES</span>
          <span className="hero-line hero-line-meta">clear, polished, and built to stick</span>
        </h1>

        <p className="hero-lead">
          I build frontend-heavy products with real functionality behind them, from a
          modular camera interface to an AI-powered commerce platform and a
          security-first dashboard walkthrough.
        </p>

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

          <div className="portrait-frame">
            <div className="portrait-glow" aria-hidden="true" />
            <img src={profile} alt="Himanshu Kumar portrait" />
          </div>

          <div className="floating-note floating-note-top">
            <span>Design-minded</span>
            <strong>Clean, premium UI</strong>
          </div>

          <div className="floating-note floating-note-bottom">
            <span>Build quality</span>
            <strong>React, APIs, performance</strong>
          </div>

          <div className="floating-note floating-note-side">
            <span>Focus mode</span>
            <strong>Product clarity + motion polish</strong>
          </div>

          <div className="hero-signal-card">
            <span className="hero-signal-label">Live signal</span>
            <div className="hero-signal-bar">
              <span />
              <span />
              <span />
            </div>
            <strong>Interactive systems</strong>
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
