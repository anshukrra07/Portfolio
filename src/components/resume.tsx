import { useState } from "react";
import resume from "../assets/resume-14.pdf";

export default function Resume() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <p className="section-subtitle">
        A concise overview of my skills, experience, and projects.
      </p>

      <div className="resume-actions">
        <button
          className="btn primary"
          onClick={() => setShowPreview(!showPreview)}
        >
          {showPreview ? "Hide Resume" : "Preview Resume"}
        </button>

        <a href={resume} download className="btn secondary">
          Download Resume
        </a>
      </div>

      {showPreview && (
        <div className="resume-preview">
          <iframe src={resume} title="Resume Preview" />
        </div>
      )}
    </section>
  );
}