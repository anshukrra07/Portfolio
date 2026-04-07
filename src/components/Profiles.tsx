import { motion } from "framer-motion";

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
    detail: "Code, experiments, and project repositories.",
    link: "https://github.com/anshukrra07",
  },
  {
    name: "LinkedIn",
    username: "Himanshu Kumar",
    detail: "Professional presence, updates, and networking.",
    link: "https://www.linkedin.com/in/himanshu-kumar-75914432a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "LeetCode",
    username: "himanshu_4566",
    detail: "Problem-solving practice and algorithm consistency.",
    link: "https://leetcode.com/u/himanshu_4566/",
  },
];

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
          Open to internships, collaborations, and product work where thoughtful UI,
          clean execution, and user experience actually matter.
        </p>

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
