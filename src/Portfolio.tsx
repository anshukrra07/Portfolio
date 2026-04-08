import { useEffect, useState } from "react";
import "./Portfolio.css";
import Starfield from "./components/Starfield";
import Hero from "./components/hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Profiles from "./components/Profiles";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Portfolio() {
  const [activeHref, setActiveHref] = useState("");
  const [cursorEnabled, setCursorEnabled] = useState(false);

  useEffect(() => {
    const finePointerQuery = window.matchMedia("(pointer: fine)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncCursorMode = () => {
      setCursorEnabled(finePointerQuery.matches && !reducedMotionQuery.matches);
    };

    syncCursorMode();
    finePointerQuery.addEventListener("change", syncCursorMode);
    reducedMotionQuery.addEventListener("change", syncCursorMode);

    return () => {
      finePointerQuery.removeEventListener("change", syncCursorMode);
      reducedMotionQuery.removeEventListener("change", syncCursorMode);
    };
  }, []);

  useEffect(() => {
    const previousScrollRestoration =
      "scrollRestoration" in window.history ? window.history.scrollRestoration : null;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    let scrollFrame = 0;
    let visualFrame = 0;

    const syncHashScroll = () => {
      const hash = window.location.hash;

      if (hash) {
        const target = document.querySelector<HTMLElement>(hash);

        if (target) {
          target.scrollIntoView({ block: "start", behavior: "auto" });
          setActiveHref(hash);
          return;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      setActiveHref("");
    };

    const queueInitialScroll = () => {
      if (scrollFrame) {
        window.cancelAnimationFrame(scrollFrame);
      }

      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = window.requestAnimationFrame(syncHashScroll);
      });
    };

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;

    const updateVisuals = () => {
      visualFrame = 0;
      const xRatio = pointerX / window.innerWidth - 0.5;
      const yRatio = pointerY / window.innerHeight - 0.5;
      const scrollRatio =
        window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1);

      document.documentElement.style.setProperty("--pointer-x", `${pointerX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${pointerY}px`);
      document.documentElement.style.setProperty("--pointer-ratio-x", `${xRatio.toFixed(4)}`);
      document.documentElement.style.setProperty("--pointer-ratio-y", `${yRatio.toFixed(4)}`);
      document.documentElement.style.setProperty("--scroll-ratio", `${scrollRatio.toFixed(4)}`);
    };

    const requestVisualUpdate = () => {
      if (!visualFrame) {
        visualFrame = window.requestAnimationFrame(updateVisuals);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      requestVisualUpdate();
    };

    const handleScroll = () => {
      requestVisualUpdate();
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", syncHashScroll);
    updateVisuals();
    queueInitialScroll();

    return () => {
      if (scrollFrame) {
        window.cancelAnimationFrame(scrollFrame);
      }
      if (visualFrame) {
        window.cancelAnimationFrame(visualFrame);
      }
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", syncHashScroll);

      if (previousScrollRestoration && "scrollRestoration" in window.history) {
        window.history.scrollRestoration = previousScrollRestoration;
      }
    };
  }, []);

  useEffect(() => {
    const navSectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const sections = navSectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveHref(`#${visibleEntries[0].target.id}`);
        }
      },
      {
        rootMargin: "-24% 0px -56% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const magneticSelectors = [
      ".btn",
      ".topbar-cta",
      ".topbar-nav a",
      ".project-links a",
      ".profile-link",
      ".footer a",
    ];

    const tiltSelectors = [
      ".stat-card",
      ".project-card",
      ".case-study-shell",
      ".skill-card",
      ".profile-card",
      ".resume-card",
    ];

    const magneticElements = Array.from(
      document.querySelectorAll<HTMLElement>(magneticSelectors.join(",")),
    );
    const tiltElements = Array.from(
      document.querySelectorAll<HTMLElement>(tiltSelectors.join(",")),
    );

    const cleanupFns: Array<() => void> = [];
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (motionQuery.matches) {
      return;
    }

    magneticElements.forEach((element) => {
      const handleMove = (event: PointerEvent) => {
        const rect = element.getBoundingClientRect();
        const offsetX = event.clientX - rect.left - rect.width / 2;
        const offsetY = event.clientY - rect.top - rect.height / 2;

        element.style.setProperty("--magnetic-x", `${offsetX * 0.12}px`);
        element.style.setProperty("--magnetic-y", `${offsetY * 0.12}px`);
        element.style.setProperty("--hover-x", `${event.clientX - rect.left}px`);
        element.style.setProperty("--hover-y", `${event.clientY - rect.top}px`);
      };

      const reset = () => {
        element.style.setProperty("--magnetic-x", "0px");
        element.style.setProperty("--magnetic-y", "0px");
      };

      element.addEventListener("pointermove", handleMove);
      element.addEventListener("pointerleave", reset);

      cleanupFns.push(() => {
        element.removeEventListener("pointermove", handleMove);
        element.removeEventListener("pointerleave", reset);
      });
    });

    tiltElements.forEach((element) => {
      const handleMove = (event: PointerEvent) => {
        const rect = element.getBoundingClientRect();
        const ratioX = (event.clientX - rect.left) / rect.width - 0.5;
        const ratioY = (event.clientY - rect.top) / rect.height - 0.5;

        element.style.setProperty("--tilt-x", `${ratioX * 8}deg`);
        element.style.setProperty("--tilt-y", `${ratioY * -8}deg`);
        element.style.setProperty("--hover-x", `${event.clientX - rect.left}px`);
        element.style.setProperty("--hover-y", `${event.clientY - rect.top}px`);
      };

      const reset = () => {
        element.style.setProperty("--tilt-x", "0deg");
        element.style.setProperty("--tilt-y", "0deg");
      };

      element.addEventListener("pointermove", handleMove);
      element.addEventListener("pointerleave", reset);

      cleanupFns.push(() => {
        element.removeEventListener("pointermove", handleMove);
        element.removeEventListener("pointerleave", reset);
      });
    });

    return () => {
      cleanupFns.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div className={`portfolio-shell${cursorEnabled ? " cursor-enabled" : ""}`}>
      <Starfield />
      <div className="page-aura page-aura-left" aria-hidden="true" />
      <div className="page-aura page-aura-right" aria-hidden="true" />
      <div className="page-aura page-aura-center" aria-hidden="true" />
      {cursorEnabled ? (
        <>
          <div className="custom-cursor-dot" aria-hidden="true" />
          <div className="custom-cursor-ring" aria-hidden="true" />
        </>
      ) : null}

      <header className="topbar">
        <a className="brand" href="#top" aria-label="Go to top of portfolio">
          <span className="brand-mark">HK</span>
          <span className="brand-copy">
            <strong>Himanshu Kumar</strong>
            {/* FIXED: consistent identity — full-stack developer everywhere */}
            <span>Full-stack developer</span>
          </span>
        </a>

        <nav className="topbar-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeHref === link.href ? "active" : undefined}
              aria-current={activeHref === link.href ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="topbar-cta" href="#contact">
          Let&apos;s connect
        </a>
      </header>

      <main className="portfolio">
        <Hero />
        <div className="scan-divider" aria-hidden="true" />
        <Stats />
        <div className="scan-divider" aria-hidden="true" />
        <About />
        <div className="scan-divider" aria-hidden="true" />
        <Projects />
        <Skills />
        <div className="scan-divider" aria-hidden="true" />
        <Experience />
        {/* Resume section removed — folded into Profiles/Contact below */}
        <Profiles />
      </main>

      <footer className="footer">
        <span className="footer-name">HIMANSHU KUMAR © 2026</span>
        <div className="footer-status">
          <span className="footer-dot" aria-hidden="true" />
          <span>Open to opportunities</span>
        </div>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
