import { motion } from "framer-motion";
import resume from "../assets/resume-14.pdf";

type Profile = {
  name: string;
  username: string;
  detail: string;
  link: string;
};

const profiles: Profile[] = [
  {
    name: "GitHub",
    username: "anshukrra07",
    detail: "9 public repos across commerce, dashboards, travel, wellness, and UI experiments.",
    link: "https://github.com/anshukrra07",
  },
  {
    name: "LinkedIn",
    username: "Himanshu Kumar",
    detail: "Professional presence, updates, and networking.",
    link: "https://www.linkedin.com/in/himanshu-kumar-75914432a",
  },
  {
    name: "LeetCode",
    username: "himanshu_4566",
    detail: "Problem-solving practice and algorithm consistency.",
    link: "https://leetcode.com/u/himanshu_4566/",
  },
];

const contactSignals = ["Open to internships", "10+ hackathons", "4 wins"];

export default function Profiles() {
  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-inner"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <span className="section-label contact-label">Get in touch</span>
        <h2>Let&apos;s build something people enjoy using.</h2>
        <p className="section-subtitle contact-subtitle">
          Open to internships, full-time roles, and product collaborations where
          frontend quality, real execution, and shipped product thinking all matter.
        </p>

        <div className="contact-signals" aria-label="Availability">
          {contactSignals.map((signal) => (
            <span key={signal} className="contact-signal">
              {signal}
            </span>
          ))}
        </div>

        <div className="contact-email-row">
          <span className="contact-email-label">Reach me directly</span>
          <a
            href="mailto:231fa4566@gmail.com"
            className="contact-email-link"
            aria-label="Send email to Himanshu"
          >
            231fa4566@gmail.com
            <span className="link-arrow" aria-hidden="true">↗</span>
          </a>
        </div>

        <p className="contact-note">
          Fastest response: email or LinkedIn. Best fit: roles that care about product feel,
          frontend polish, and full-stack ownership.
        </p>

        <div className="contact-actions">
          <a
            href="https://www.linkedin.com/in/himanshu-kumar-75914432a"
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            Connect on LinkedIn
          </a>
          <a href={resume} target="_blank" rel="noreferrer" className="btn secondary">
            Open resume
          </a>
          <a href={resume} download className="btn tertiary">
            Download PDF
          </a>
        </div>

        <div className="profiles-grid">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noreferrer"
              className="profile-card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.42, delay: index * 0.08 }}
            >
              <span className="profile-pill">{profile.name}</span>
              <h3>{profile.username}</h3>
              <p>{profile.detail}</p>
              <span className="profile-link">Open profile</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
