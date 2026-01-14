import "./Portfolio.css";
import Hero from "./components/hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Profiles from "./components/Profiles";
import Resume from "./components/resume";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <Hero />
      <Projects />
      <Skills />
      <Profiles />
      <Resume />

      <footer className="footer">
        <p>© 2026 Himanshu Kumar · Built with React</p>
      </footer>
    </div>
  );
}