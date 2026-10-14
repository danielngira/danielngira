import { useEffect, useState } from "react";
import PersonalDesktop from "./App";
import ProfessionalPortfolio from "./ProfessionalPortfolio";
import "./SiteExperience.css";

type View = "chooser" | "professional" | "personal";

function readView(): View {
  const requested = new URLSearchParams(window.location.search).get("view");
  return requested === "professional" || requested === "personal"
    ? requested
    : "chooser";
}

export default function SiteExperience() {
  const [view, setView] = useState<View>(readView);

  useEffect(() => {
    const syncView = () => setView(readView());
    window.addEventListener("popstate", syncView);
    return () => window.removeEventListener("popstate", syncView);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("personal-mode", view === "personal");
    document.title = view === "personal"
      ? "Daniel Ngira — Personal Desktop"
      : view === "professional"
        ? "Daniel Ngira — Software Engineer"
        : "Daniel Ngira — Choose Your Experience";

    return () => document.body.classList.remove("personal-mode");
  }, [view]);

  const navigate = (next: View) => {
    const url = new URL(window.location.href);
    if (next === "chooser") url.searchParams.delete("view");
    else url.searchParams.set("view", next);
    window.history.pushState({}, "", `${url.pathname}${url.search}`);
    setView(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (view === "professional") {
    return <ProfessionalPortfolio onHome={() => navigate("chooser")} />;
  }
  if (view === "personal") {
    return <div className="personal-desktop"><PersonalDesktop /><button className="personal-exit" onClick={() => navigate("chooser")}>← Choose experience</button></div>;
  }

  return <ExperienceChooser onChoose={navigate} />;
}

function ExperienceChooser({ onChoose }: { onChoose: (view: View) => void }) {
  return (
    <main className="experience-chooser">
      <div className="chooser-orbit chooser-orbit-one" aria-hidden="true" />
      <div className="chooser-orbit chooser-orbit-two" aria-hidden="true" />
      <header className="chooser-header">
        <a className="chooser-wordmark" href="?" aria-label="Daniel Ngira home">
          <span className="wordmark-mark">DN</span>
          <span>Daniel Ngira</span>
        </a>
        <span className="chooser-status"><i /> Independent software engineer</span>
      </header>

      <section className="chooser-main" aria-labelledby="chooser-title">
        <p className="chooser-kicker">A LITTLE CONTEXT BEFORE YOU EXPLORE</p>
        <h1 id="chooser-title">What brings<br />you here?</h1>
        <p className="chooser-intro">
          Pick a path. One is built for the work; the other is a corner of the
          internet I get to make my own.
        </p>

        <div className="experience-cards">
          <button className="experience-card professional-choice" onClick={() => onChoose("professional")}>
            <span className="card-index">01 / WORK</span>
            <span className="choice-icon professional-icon" aria-hidden="true">↗</span>
            <span className="choice-title">Professional</span>
            <span className="choice-description">Selected work, experience, and the systems behind them.</span>
            <span className="choice-action">Explore the portfolio <span aria-hidden="true">→</span></span>
            <span className="card-glint" aria-hidden="true" />
          </button>

          <button className="experience-card personal-choice" onClick={() => onChoose("personal")}>
            <span className="card-index">02 / PERSONAL</span>
            <span className="choice-icon personal-icon" aria-hidden="true">▦</span>
            <span className="choice-title">Personal</span>
            <span className="choice-description">A playful desktop for the things I’m curious about.</span>
            <span className="choice-action">Open the desktop <span aria-hidden="true">→</span></span>
            <span className="card-glint" aria-hidden="true" />
          </button>
        </div>
      </section>

      <footer className="chooser-footer">
        <span>CHICAGO · BUILT WITH CURIOSITY</span>
        <span>© {new Date().getFullYear()} DANIEL NGIRA</span>
      </footer>
    </main>
  );
}
