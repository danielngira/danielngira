import "./App.css";
import folder from "./assets/images/folder.png";
import harddrive from "./assets/images/hard-drive.png";
import file from "./assets/images/file.png";
import { useEffect, useState } from "react";
import Modal from "./Components/Modal/Modal";
import About from "./Components/About/About";
import Interests from "./Components/Interests/Interests";
import Media from "./Components/Media/Media";

type Window = "About me" | "Media" | "Interests" | null;

function getLocalTime() {
  return new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}

function App() {
  const [time, setTime] = useState("");
  const [openWindow, setOpenWindow] = useState<Window>(null);

  useEffect(() => {
    const updateTime = () => setTime(getLocalTime());
    updateTime();
    const intervalId = window.setInterval(updateTime, 60000);
    return () => window.clearInterval(intervalId);
  }, []);

  const content = () => {
    if (openWindow === "About me") return <About />;
    if (openWindow === "Media") return <Media />;
    if (openWindow === "Interests") return <Interests />;
    return null;
  };

  return (
    <main className="personal-desktop-app">
      <div className="desktop-heading" aria-hidden="true">
        <span>Daniel&apos;s desktop</span>
        <span>PERSONAL FILES · EST. ALWAYS IN PROGRESS</span>
      </div>

      <nav className="desktop-icons" aria-label="Personal desktop folders">
        <button className="desktop-icon" onClick={() => setOpenWindow("About me")}>
          <img src={file} alt="" />
          <span>About me</span>
        </button>
        <button className="desktop-icon" onClick={() => setOpenWindow("Media")}>
          <img src={harddrive} alt="" />
          <span>Media</span>
        </button>
        <button className="desktop-icon" onClick={() => setOpenWindow("Interests")}>
          <img src={folder} alt="" />
          <span>Interests</span>
        </button>
      </nav>

      <aside className="desktop-note">
        <span className="desktop-note-label">CURRENTLY INTO</span>
        <strong>Golf, good stories<br />and good records.</strong>
        <span className="desktop-note-mark" aria-hidden="true">✳</span>
      </aside>

      {openWindow && (
        <Modal currentlyOpenWindow={openWindow} closeWindow={() => setOpenWindow(null)}>
          {content()}
        </Modal>
      )}

      <footer className="taskbar">
        <button className="start" onClick={() => setOpenWindow("About me")}>
          <span aria-hidden="true">✿</span> Start
        </button>
        <span className="taskbar-current">{openWindow ?? "Daniel’s desktop"}</span>
        <time className="clock">{time}</time>
      </footer>
    </main>
  );
}

export default App;
