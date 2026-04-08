import { motion } from "framer-motion";
import type { KeyboardEvent, MouseEvent } from "react";

type Project = {
  title: string;
  label: string;
  description: string;
  challenge: string;
  outcome: string;
  role: string;
  proof: string;
  snapshot: string;
  tech: string[];
  signals: string[];
  github: string;
  image: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "E-Commerce Recommendation Platform",
    label: "Full-stack commerce build",
    description:
      "A commerce platform that combines seller trust, product discovery, and an AI shopping assistant in one cleaner buying flow.",
    challenge:
      "Keeping a feature-heavy store easy to browse while recommendations, seller tools, reviews, and AI support all lived in the same interface.",
    outcome:
      "Feels closer to a real product than a CRUD demo — stronger discovery, clearer trust signals, and a more complete shopping journey.",
    role: "React frontend, Node/Express backend integration, ML-assisted product flow",
    proof: "Public repo + live deployed demo with seller reviews, AI recommendations, and shopping assistant flow",
    snapshot: "Home, recommendations, reviews, and AI assist",
    tech: ["React", "Node.js", "Express", "MongoDB", "Flask ML", "Gemini"],
    signals: ["Live demo", "Full-stack", "AI-assisted"],
    github: "https://github.com/anshukrra07/e-commerce-recommendtaion-website",
    live: "https://e-commerce-recommendtaion-website.vercel.app",
    image:
      "https://raw.githubusercontent.com/anshukrra07/e-commerce-recommendtaion-website/main/home.png",
  },
  {
    title: "CampusCare",
    label: "Social-impact student support build",
    description:
      "A student-first mental health platform built to reduce the gap between needing help and actually reaching support on campus.",
    challenge:
      "Mental health support can feel hard to access and heavily stigmatized, so the product needed to feel calm, credible, and easy to use.",
    outcome:
      "Turns a heavy topic into a clearer digital support flow with a more approachable, stigma-aware product experience.",
    role: "Product framing, UI flow, and full-stack delivery around a student wellness use case",
    proof: "Public repo + live Vercel deployment focused on accessibility and stigma-free delivery",
    snapshot: "Support paths, student-friendly UI, and calmer interaction flow",
    tech: ["JavaScript", "Responsive UI", "Student support", "Vercel"],
    signals: ["Live demo", "Social impact", "Student support"],
    github: "https://github.com/anshukrra07/CampusCare",
    live: "https://campus-care-three.vercel.app",
    image:
      "https://raw.githubusercontent.com/anshukrra07/CampusCare/main/public/Screenshot%202025-12-16%20at%207.17.15%E2%80%AFPM.png",
  },
  {
    title: "Optix Camera Application",
    label: "Interactive product experience",
    description:
      "A modular camera interface built to feel like a polished product instead of a one-screen experiment.",
    challenge:
      "Camera tools become messy fast, so the interface needed clean structure, reusable controls, and obvious interaction patterns.",
    outcome:
      "Modular and extensible, with a UI that feels considered rather than improvised.",
    role: "React component architecture, camera UI, and product-style interaction design",
    proof: "Reusable camera service structure with live preview, capture controls, mode switching, and quality adjustment",
    snapshot: "Preview, controls, filters, and product-style framing",
    tech: ["React", "TypeScript", "Media APIs", "CSS"],
    signals: ["Source available", "Product UI", "Reusable system"],
    github: "https://github.com/anshukrra07/Optix-CameraApp",
    image:
      "https://raw.githubusercontent.com/anshukrra07/Optix-CameraApp/main/src/Optix.png",
  },
  {
    title: "AI Surveillance Dashboard",
    label: "Security-first dashboard demo",
    description:
      "A public-facing dashboard walkthrough that explains a sensitive monitoring product without exposing real data.",
    challenge:
      "Showing how the product works while intentionally hiding live monitoring behavior and private system internals.",
    outcome:
      "Communicates the system clearly while staying privacy-aware — more believable as a real enterprise demo.",
    role: "Frontend walkthrough, information framing, and privacy-aware UX",
    proof: "Public repo + live demo with JWT auth, anonymous session handling, and guided tutorial framing",
    snapshot: "Monitoring UI, guided overlays, and secure presentation",
    tech: ["React", "Node.js", "Express", "JWT"],
    signals: ["Live demo", "Security demo", "Privacy-aware"],
    github: "https://github.com/anshukrra07/User-Activity-Monitoring-System",
    live: "https://user-activity-monitoring-system.vercel.app",
    image:
      "https://raw.githubusercontent.com/anshukrra07/User-Activity-Monitoring-System/main/public/main.png",
  },
  {
    title: "Travel Tales",
    label: "Visual storytelling website",
    description:
      "A responsive travel platform built around visual rhythm, intuitive browsing, and cleaner page flow.",
    challenge:
      "Travel interfaces need strong atmosphere, but still have to support search, navigation, and account flows without feeling cluttered.",
    outcome:
      "Feels more like a usable product than a static showcase, with better rhythm across landing, search, and account screens.",
    role: "Responsive frontend build, multi-page flow design, and connected travel browsing experience",
    proof: "Public repo + live deployed build with search, account pages, and multi-screen exploration flow",
    snapshot: "Editorial layout, search, and multi-page travel flow",
    tech: ["React", "JavaScript", "Responsive UI", "API Integration"],
    signals: ["Live demo", "Responsive UI", "Visual storytelling"],
    github: "https://github.com/anshukrra07/Travel-tales-react",
    live: "https://travel-tales-react.vercel.app",
    image:
      "https://raw.githubusercontent.com/anshukrra07/Travel-tales-react/main/public/images/Screenshot.png",
  },
];

const featuredSignals = [
  { label: "State", value: "Live demo shipped" },
  { label: "Recognition", value: "10+ hackathons · 4 wins" },
  { label: "Focus", value: "Trust + discovery" },
];

const featuredMetrics = [
  { label: "Core flow", value: "Browse → trust → buy" },
  { label: "System layer", value: "Seller reviews + AI assist" },
  { label: "Why it lands", value: "Feels like a product, not a demo" },
];

const featuredSteps = [
  {
    step: "01",
    title: "Make browsing feel lighter",
    detail: "The layout had to stay simple even with recommendations, reviews, and seller context on the same product journey.",
  },
  {
    step: "02",
    title: "Layer trust into discovery",
    detail: "Seller credibility and review signals were treated as part of the buying flow, not just extra details below the fold.",
  },
  {
    step: "03",
    title: "Add AI without breaking the flow",
    detail: "The shopping assistant supports discovery instead of taking over the page, so the interface stays usable first.",
  },
];

export default function Projects() {
  const [featuredProject, ...otherProjects] = projects;
  const openProject = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  const handleTileClick =
    (url: string) => (event: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>) => {
      const target = event.target as HTMLElement;
      if (target.closest("a")) {
        return;
      }

      if ("key" in event && event.key !== "Enter" && event.key !== " ") {
        return;
      }

      event.preventDefault();
      openProject(url);
    };

  return (
    <section className="projects-section" id="projects">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="section-label">Selected missions</span>
        <h2>Projects that give people a reason to keep exploring.</h2>
        <p className="section-subtitle">
          These are the five builds with the clearest mix of product thinking, visuals,
          and real proof.
        </p>
        <div className="project-links">
          <a
            href="https://github.com/anshukrra07"
            target="_blank"
            rel="noreferrer"
            onClick={handleLinkClick}
          >
            View all projects on GitHub <span className="link-arrow">↗</span>
          </a>
        </div>
      </motion.div>

      {/* Featured case study */}
      <motion.article
        className="case-study-shell"
        role="link"
        tabIndex={0}
        aria-label={`Open ${featuredProject.title} ${featuredProject.live ? "live demo" : "GitHub repository"}`}
        onClick={handleTileClick(featuredProject.live ?? featuredProject.github)}
        onKeyDown={handleTileClick(featuredProject.live ?? featuredProject.github)}
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

          <div className="project-scan-row" aria-label="Featured project highlights">
            {featuredProject.signals.map((signal) => (
              <span key={signal} className="project-scan-pill">
                {signal}
              </span>
            ))}
          </div>

          <div className="case-study-signals" aria-label="Featured project signals">
            {featuredSignals.map((signal) => (
              <div key={signal.label} className="case-study-signal">
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
              </div>
            ))}
          </div>

          <div className="case-study-metrics" aria-label="Case study summary">
            {featuredMetrics.map((metric) => (
              <div key={metric.label} className="case-study-metric">
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>

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

          <div className="case-study-process" aria-label="How the project was shaped">
            {featuredSteps.map((item) => (
              <article key={item.step} className="case-study-step">
                <span className="case-study-step-index">{item.step}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="tech-stack">
            {featuredProject.tech.map((techItem) => (
              <span key={techItem}>{techItem}</span>
            ))}
          </div>

          <div className="project-links">
            <a
              href={featuredProject.github}
              target="_blank"
              rel="noreferrer"
              onClick={handleLinkClick}
            >
              GitHub <span className="link-arrow">↗</span>
            </a>
            {featuredProject.live ? (
              <a
                href={featuredProject.live}
                target="_blank"
                rel="noreferrer"
                onClick={handleLinkClick}
              >
                Live Demo <span className="link-arrow">↗</span>
              </a>
            ) : (
              <span className="project-status">Source available</span>
            )}
          </div>
        </div>

        <div className="case-study-visual">
          <div className="case-study-frame">
            <div className="project-media-chrome" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span className="project-media-label">{featuredProject.snapshot}</span>
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
              className="project-image"
              loading="eager"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="case-study-float-card">
            <span>Case-study note</span>
            <strong>Trust is designed into the browsing flow</strong>
            <p>The project feels stronger because reviews, seller signals, and AI support are part of one journey.</p>
          </div>
          <div className="case-study-orbit" aria-hidden="true">
            <div className="orbit-ring orbit-ring-large" />
            <div className="orbit-ring orbit-ring-small" />
          </div>
        </div>
      </motion.article>

      {/* Project grid */}
      <div className="projects-grid">
        {otherProjects.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card"
            role="link"
            tabIndex={0}
            aria-label={`Open ${project.title} ${project.live ? "live demo" : "GitHub repository"}`}
            onClick={handleTileClick(project.live ?? project.github)}
            onKeyDown={handleTileClick(project.live ?? project.github)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="project-card-media">
              <div className="project-media-chrome" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="project-media-label">{project.snapshot}</span>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="project-content">
              <span className="project-index">Mission 0{index + 2}</span>
              <span className="project-label">{project.label}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-scan-row" aria-label={`${project.title} highlights`}>
                {project.signals.map((signal) => (
                  <span key={signal} className="project-scan-pill">
                    {signal}
                  </span>
                ))}
              </div>

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
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={handleLinkClick}
                >
                  GitHub <span className="link-arrow">↗</span>
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    onClick={handleLinkClick}
                  >
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
