import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function Hero() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      {/* Text */}
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>
          Hi, I’m <span>Himanshu Kumar</span>
        </h1>

        <h2>FullStack Developer</h2>

        <p>
          I build modern, scalable web applications using
          <strong> React, TypeScript, and clean UI principles</strong>.
          Focused on performance, usability, and real-world impact.
        </p>

        <div className="hero-actions">
          <button className="btn primary" onClick={scrollToProjects}>
            Visit My Work
          </button>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <img src={profile} alt="Himanshu Kumar" />
      </motion.div>
    </section>
  );
}