import { motion } from "framer-motion";

const steps = [
  {
    stage: "01",
    title: "Hackathons trained me to ship fast and trim the fluff",
    timelineLabel: "Competition",
    detail:
      "I&apos;ve taken part in 10+ hackathons and won 4 of them. That pressure made me better at turning rough ideas into demos that feel usable, clear, and pitch-ready fast.",
  },
  {
    stage: "02",
    title: "My GitHub work now spans multiple real product spaces",
    timelineLabel: "Shipping",
    detail:
      "The public repos range from AI-assisted e-commerce and campus wellness to travel interfaces, modular camera UI, contest tracking, and privacy-aware dashboard demos.",
  },
  {
    stage: "03",
    title: "I try to deploy the work, not leave it stuck as code",
    timelineLabel: "Delivery",
    detail:
      "Several projects are live, so the work had to hold up beyond the editor with better routing, clearer product flow, and interfaces that feel finished instead of rushed.",
  },
  {
    stage: "04",
    title: "The next step is product-focused engineering work",
    timelineLabel: "Now",
    detail:
      "I&apos;m looking for internships and full-time roles where strong frontend quality, full-stack execution, and practical AI can live in the same product.",
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
        <span className="section-label">Journey</span>
        <h2>How the work has grown through shipping and hackathons.</h2>
        <p className="section-subtitle">
          The fastest way to understand me is through the builds I kept shipping and
          the competitions that kept sharpening the work.
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
              <span className="timeline-label">{step.timelineLabel}</span>
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
