import { motion } from "framer-motion";

const stats = [
  { value: "4+", label: "featured builds" },
  { value: "3", label: "live demos" },
  { value: "1", label: "hackathon win" },
  { value: "MERN + AI", label: "full-stack range" },
];

export default function Stats() {
  return (
    <section className="stats-section" id="stats">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.article
            key={stat.label}
            className="stat-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <strong className="stat-num">{stat.value}</strong>
            <span className="stat-label">{stat.label}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
