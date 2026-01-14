type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  image: string;
  live?: string; // optional
};

const projects: Project[] = [
  {
    title: "Optix – Camera Application",
    description:
      "A modern camera application with real-time preview, zoom controls, photo capture, and gallery management, focused on smooth UI and performance.",
    tech: ["React", "TypeScript", "CSS", "Media APIs"],
    github: "https://github.com/anshukrra07/Optix-CameraApp",
    // No live link yet — deploy to add later
    image: "https://raw.githubusercontent.com/anshukrra07/Optix-CameraApp/main/src/Optix.png"
  },
  {
    title: "E-Commerce Recommendation Platform",
    description:
      "A production-ready MERN e-commerce platform with AI-powered product recommendations and seller reviews.",
    tech: ["React", "Node.js", "Express", "MongoDB", "AI/ML"],
    github: "https://github.com/anshukrra07/e-commerce-recommendtaion-website",
    live: "https://e-commerce-recommendtaion-website.vercel.app",
    image:
      "https://raw.githubusercontent.com/anshukrra07/e-commerce-recommendtaion-website/main/home.png"
  },
  {
    title: "User Activity Monitoring System",
    description:
      "A secure dashboard for monitoring user activity with JWT-based authentication and role-based access.",
    tech: ["React", "Node.js", "Express", "JWT"],
    github: "https://github.com/anshukrra07/User-Activity-Monitoring-System",
    live: "https://user-activity-monitoring-system.vercel.app",
    image:
      "https://raw.githubusercontent.com/anshukrra07/User-Activity-Monitoring-System/main/public/main.png"
  },
  {
    title: "Travel Tales (React)",
    description:
      "A responsive travel and tour web application focused on clean UI and user experience.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/anshukrra07/Travel-tales-react",
    live: "https://travel-tales-react.vercel.app",
    image:
      "https://raw.githubusercontent.com/anshukrra07/Travel-tales-react/main/public/images/Screenshot.png"
  }
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <p className="section-subtitle">
        Selected projects that demonstrate my frontend and full-stack
        development skills through real-world applications.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
  <div className="project-image-wrapper">
    <img
      src={project.image}
      alt={project.title}
      className="project-image"
      loading="lazy"
    />
  </div>

  <h3>{project.title}</h3>
  <p>{project.description}</p>

  <div className="tech-stack">
    {project.tech.map(t => (
      <span key={t}>{t}</span>
    ))}
  </div>

  <div className="project-links">
  <a href={project.github} target="_blank" rel="noreferrer">
    GitHub
  </a>

  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noreferrer"
      className="live-btn"
    >
      Live Demo
    </a>
  )}
</div>
</div>
        ))}
      </div>
    </section>
  );
}