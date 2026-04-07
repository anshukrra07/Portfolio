import { motion } from "framer-motion";

const steps = [
  {
    stage: "01",
    title: "Understand the user flow first",
    detail:
      "Before styling, I focus on what the visitor needs to notice, click, trust, and remember. Good UI starts with clarity, not decoration.",
  },
  {
    stage: "02",
    title: "Design hierarchy that guides attention",
    detail:
      "I use typography, spacing, contrast, and section rhythm to control what feels primary, secondary, and supporting across the whole page.",
  },
  {
    stage: "03",
    title: "Build responsive interfaces that hold up",
    detail:
      "I translate design decisions into React components that stay consistent across screen sizes and still feel smooth in motion.",
  },
  {
    stage: "04",
    title: "Refine for trust, speed, and polish",
    detail:
      "The last layer is the difference-maker: hover states, cleaner copy, accessible contrast, and fewer points of friction.",
  },
];

export default function Experience() {
  return (
    <section className="journey-section" id="journey">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="section-label">System log</span>
        <h2>How I approach UI and product experience.</h2>
        <p className="section-subtitle">
          The goal is not only to make a page look good. It should feel easy to move
          through, make the content believable, and leave a strong final impression.
        </p>
      </motion.div>

      <div className="timeline">
        {steps.map((step, index) => (
          <motion.article
            key={step.stage}
            className="timeline-item"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="timeline-meta">
              <span className="timeline-stage">{step.stage}</span>
              <span className="timeline-label">Design architecture</span>
            </div>
            <div className="timeline-content">
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
