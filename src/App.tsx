import "./App.css";
import folder from "./assets/images/folder.png";
import computer from "./assets/images/computer.png";
import harddrive from "./assets/images/hard-drive.png";
import storage from "./assets/images/storage.png";
import internet from "./assets/images/internet.png";
import { useState, useEffect } from "react";
import Modal from "./Components/Modal";
import { Folders } from "./utils/constants";
import MyComputer from "./Components/MyComputer";
import ContactMe from "./Components/ContactMe";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import Media from "./Components/Media";

type Folder = (typeof Folders)[keyof typeof Folders];

function getLocalTime() {
  const timeNow = new Date();

  return timeNow.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}

function App() {
  const [time, setTime] = useState("");
  const [currentlyOpenWindow, setCurrentlyOpenWindow] = useState<Folder>(
    Folders.Closed,
  );

  const openWindow = (folder: Folder) => {
    setCurrentlyOpenWindow(folder);
  };

  const closeWindow = () => {
    setCurrentlyOpenWindow(Folders.Closed);
  };

  {
    /*Return components that will be passed to Modal*/
  }
  const modalContent = () => {
    switch (currentlyOpenWindow) {
      case Folders.ContactMe:
        return <ContactMe />;
      case Folders.Media:
        return <Media />;
      case Folders.MyComputer:
        return <MyComputer />;
      case Folders.Projects:
        return <Projects />;
      case Folders.Resume:
        return <Resume />;
      default:
        return null;
    }
  };

  {
    /* Update time every minute*/
  }
  useEffect(() => {
    const updateTime = () => {
      setTime(getLocalTime());
    };

    updateTime();

    const intervalId = setInterval(updateTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* Home page components */}
      <div>
        {/* Icons */}
        <div className="container">
          {/*Projects*/}
          <button
            onClick={() => openWindow(Folders.Projects)}
            className="folderContainer"
          >
            <img src={folder} alt="Folder Icon" className="icon" />
            <p className="folderName">Projects</p>
          </button>

          {/*Biography about me*/}
          <button
            onClick={() => openWindow(Folders.MyComputer)}
            className="folderContainer"
          >
            <img src={computer} alt="Computer Icon" className="icon" />
            <p className="folderName">My Computer</p>
          </button>

          {/*Media and Hobbies*/}
          <button
            onClick={() => openWindow(Folders.Media)}
            className="folderContainer"
          >
            <img src={harddrive} alt="Hard Drive Icon" className="icon" />
            <p className="folderName">Media</p>
          </button>

          {/*Resume*/}
          <button
            onClick={() => openWindow(Folders.Resume)}
            className="folderContainer"
          >
            <img src={storage} alt="Storage Icon" className="icon" />
            <p className="folderName">Resume</p>
          </button>

          {/*Contact me*/}
          <button
            onClick={() => openWindow(Folders.ContactMe)}
            className="folderContainer"
          >
            <img src={internet} alt="Internet Explorer Icon" className="icon" />
            <p className="folderName">Contact Me</p>
          </button>

          {currentlyOpenWindow !== Folders.Closed && (
            <Modal
              currentlyOpenWindow={currentlyOpenWindow}
              closeWindow={closeWindow}
            >
              {modalContent()}
            </Modal>
          )}
        </div>

        {/*Taskbar*/}
        <div>
          <div className="taskbar">
            {/*Start Button*/}
            <div className="start">
              <p className="taskbarText">Start</p>
            </div>

            {/*Clock*/}
            <div className="clock">
              <p className="taskbarText">{time}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
