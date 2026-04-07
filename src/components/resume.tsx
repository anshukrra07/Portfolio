import resume from "../assets/resume-14.pdf";

const resumeHighlights = [
  "Full-stack projects with real-world product flows",
  "Responsive UI work with attention to clarity and polish",
  "Backend fundamentals including APIs, auth, and data handling",
];

export default function Resume() {
  return (
    <section className="resume-section" id="resume">
      <div className="section-heading">
        <span className="section-label">Resume</span>
        <h2>A concise version of the story behind the work.</h2>
        <p className="section-subtitle">
          For recruiters and collaborators who want the faster overview before
          diving deeper into my projects and profiles.
        </p>
      </div>

      <div className="resume-card">
        <div className="resume-card-copy">
          <h3>What you&apos;ll find inside</h3>
          <ul className="resume-highlights">
            {resumeHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="resume-actions">
          <a href={resume} target="_blank" rel="noreferrer" className="btn primary">
            Open resume
          </a>
          <a href={resume} download className="btn secondary">
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}
