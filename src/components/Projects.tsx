import { motion } from "framer-motion";

type Project = {
  title: string;
  label: string;
  description: string;
  challenge: string;
  outcome: string;
  role: string;
  proof: string;
  tech: string[];
  github: string;
  image: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "E-Commerce Recommendation Platform",
    label: "Full-stack commerce build",
    description:
      "A MERN e-commerce platform with seller reviews, role-based access, Cloudinary-powered product media, and an AI shopping assistant backed by Gemini.",
    challenge:
      "The goal was to keep a feature-heavy store usable while combining recommendations, seller workflows, reviews, image management, and AI-assisted shopping in one product.",
    outcome:
      "Built a production-style shopping experience that balances discovery, trust, and scale better than a standard CRUD store demo.",
    role: "React frontend, Node/Express backend integration, ML-enabled product flow",
    proof: "Winner - StackHack Hackathon (college level) with live deployed demo",
    tech: ["React", "Node.js", "Express", "MongoDB", "Flask ML", "Gemini"],
    github: "https://github.com/anshukrra07/e-commerce-recommendtaion-website",
    live: "https://e-commerce-recommendtaion-website.vercel.app",
    image:
      "https://raw.githubusercontent.com/anshukrra07/e-commerce-recommendtaion-website/main/home.png",
  },
  {
    title: "Optix Camera Application",
    label: "Interactive product experience",
    description:
      "A professional-style camera interface built around live preview, mode switching, and modular controls.",
    challenge:
      "Camera tools become messy quickly, so the challenge was to separate service logic from UI and keep the experience modular and clean.",
    outcome:
      "A camera UI system that feels structured and extensible instead of like a one-off interface mockup.",
    role: "Component architecture and product-focused camera UI",
    proof: "Reusable React camera system with separated service logic and controls",
    tech: ["React", "TypeScript", "Media APIs", "CSS"],
    github: "https://github.com/anshukrra07/Optix-CameraApp",
    image:
      "https://raw.githubusercontent.com/anshukrra07/Optix-CameraApp/main/src/Optix.png",
  },
  {
    title: "AI Surveillance Dashboard",
    label: "Security-first dashboard demo",
    description:
      "A guided walkthrough of a sensitive monitoring product without exposing real data or live system internals.",
    challenge:
      "The hard part was presenting a security product publicly while intentionally withholding live monitoring functionality and private system behavior.",
    outcome:
      "A safer public-facing demo that still communicates how the real system works, which is closer to how enterprise security tools are documented.",
    role: "Frontend walkthrough experience and privacy-aware product framing",
    proof: "Public demo framed safely through a guided overlay experience",
    tech: ["React", "Node.js", "Express", "JWT"],
    github: "https://github.com/anshukrra07/User-Activity-Monitoring-System",
    live: "https://user-activity-monitoring-system.vercel.app",
    image:
      "https://raw.githubusercontent.com/anshukrra07/User-Activity-Monitoring-System/main/public/main.png",
  },
  {
    title: "Travel Tales",
    label: "Visual storytelling website",
    description:
      "A travel web app with multi-section landing pages, search, account flows, and backend-connected pages.",
    challenge:
      "Travel products depend on visual rhythm, so the interface had to stay inviting while still handling navigation, search, and account flows cleanly.",
    outcome:
      "A more complete travel experience than a static showcase, with responsive layout and backend-aware page flow.",
    role: "React conversion, responsive UI, and API-aware frontend flow",
    proof: "Live deployed build with search, account pages, and API integration",
    tech: ["React", "JavaScript", "Responsive UI", "API Integration"],
    github: "https://github.com/anshukrra07/Travel-tales-react",
    live: "https://travel-tales-react.vercel.app",
    image:
      "https://raw.githubusercontent.com/anshukrra07/Travel-tales-react/main/public/images/Screenshot.png",
  },
];

export default function Projects() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <section className="projects-section" id="projects">
      <div className="section-heading">
        <span className="section-label">Selected missions</span>
        <h2>Projects that give people a reason to keep exploring.</h2>
        <p className="section-subtitle">
          The strongest work is not only visual. It solves a real product problem,
          supports the story with proof, and makes the result easy to understand fast.
        </p>
      </div>

      <motion.article
        className="case-study-shell"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="case-study-copy">
          <span className="featured-badge">Featured case study</span>
          <span className="project-index">Mission 01 / Deployed</span>
          <h3>{featuredProject.title}</h3>
          <p className="case-study-lead">{featuredProject.description}</p>

          <div className="case-study-grid">
            <article className="story-card">
              <span>Challenge</span>
              <p>{featuredProject.challenge}</p>
            </article>
            <article className="story-card">
              <span>Role</span>
              <p>{featuredProject.role}</p>
            </article>
            <article className="story-card story-card-wide">
              <span>Proof</span>
              <p>{featuredProject.proof}</p>
            </article>
            <article className="story-card story-card-wide">
              <span>Outcome</span>
              <p>{featuredProject.outcome}</p>
            </article>
          </div>

          <div className="tech-stack">
            {featuredProject.tech.map((techItem) => (
              <span key={techItem}>{techItem}</span>
            ))}
          </div>

          <div className="project-links">
            <a href={featuredProject.github} target="_blank" rel="noreferrer">
              GitHub <span className="link-arrow">↗</span>
            </a>
            {featuredProject.live ? (
              <a href={featuredProject.live} target="_blank" rel="noreferrer">
                Live Demo <span className="link-arrow">↗</span>
              </a>
            ) : (
              <span className="project-status">Source available</span>
            )}
          </div>
        </div>

        <div className="case-study-visual">
          <div className="case-study-frame">
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="project-image"
              loading="lazy"
            />
          </div>
          <div className="case-study-orbit" aria-hidden="true">
            <div className="orbit-ring orbit-ring-large" />
            <div className="orbit-ring orbit-ring-small" />
          </div>
        </div>
      </motion.article>

      <div className="projects-grid">
        {otherProjects.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="project-card-media">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                loading="lazy"
              />
            </div>

            <div className="project-content">
              <span className="project-index">Mission 0{index + 2}</span>
              <span className="project-label">{project.label}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-story">
                <div>
                  <span>Role</span>
                  <p>{project.role}</p>
                </div>
                <div>
                  <span>Proof</span>
                  <p>{project.proof}</p>
                </div>
                <div>
                  <span>Outcome</span>
                  <p>{project.outcome}</p>
                </div>
              </div>

              <div className="tech-stack">
                {project.tech.map((techItem) => (
                  <span key={techItem}>{techItem}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub <span className="link-arrow">↗</span>
                </a>
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo <span className="link-arrow">↗</span>
                  </a>
                ) : (
                  <span className="project-status">Source available</span>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
